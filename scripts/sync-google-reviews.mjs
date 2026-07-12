import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;
const outFile = path.resolve('data/google-reviews.json');

if (!apiKey || !placeId) {
  throw new Error('Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID secret.');
}

const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
const fieldMask = [
  'id',
  'displayName',
  'rating',
  'userRatingCount',
  'googleMapsUri',
  'reviews'
].join(',');

const response = await fetch(endpoint, {
  headers: {
    'X-Goog-Api-Key': apiKey,
    'X-Goog-FieldMask': fieldMask
  }
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`Google Places API failed: ${response.status} ${body}`);
}

const place = await response.json();
const reviews = Array.isArray(place.reviews) ? place.reviews : [];

const normalizeText = (value) => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value.text || value.originalText || '';
};

await mkdir(path.dirname(outFile), { recursive: true });

let oldPayload = '';
let existingReviews = [];
try {
  oldPayload = await readFile(outFile, 'utf8');
  const parsed = JSON.parse(oldPayload);
  if (Array.isArray(parsed.reviews)) {
    existingReviews = parsed.reviews;
  }
} catch {
  oldPayload = '';
}

const newReviews = reviews
  .filter((review) => normalizeText(review.text || review.originalText))
  .map((review) => ({
    author: review.authorAttribution?.displayName || 'Google reviewer',
    authorUri: review.authorAttribution?.uri || '',
    photoUri: review.authorAttribution?.photoUri || '',
    rating: Number(review.rating || 0),
    text: normalizeText(review.text || review.originalText),
    relativeTime: review.relativePublishTimeDescription || '',
    publishTime: review.publishTime || ''
  }));

const finalReviews = newReviews.length > 0 ? newReviews : existingReviews;

const payload = {
  connected: true,
  source: 'google_places_api',
  generatedAt: new Date().toISOString(),
  placeId: place.id || placeId,
  placeName: place.displayName?.text || 'PhysioByRutvi',
  rating: Number(place.rating || 0),
  userRatingCount: Number(place.userRatingCount || 0),
  googleMapsUri: place.googleMapsUri || 'https://www.google.com/search?q=PhysioByRutvi%20reviews',
  reviews: finalReviews
};

const nextPayload = `${JSON.stringify(payload, null, 2)}\n`;
if (oldPayload !== nextPayload) {
  await writeFile(outFile, nextPayload, 'utf8');
  console.log(`Updated ${outFile} with ${payload.reviews.length} Google reviews.`);
} else {
  console.log('Google reviews data already up to date.');
}
