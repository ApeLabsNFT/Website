module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    provider: 'sarvam',
    configured: Boolean(process.env.SARVAM_API_KEY),
    languages: ['en-IN', 'hi-IN', 'mr-IN', 'gu-IN'],
    note: 'Keep Sarvam calls server-side. Do not expose API keys in frontend JavaScript.'
  });
};
