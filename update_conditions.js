const fs = require('fs');
let content = fs.readFileSync('Conditions.dc.html', 'utf8');

// Wrap with <main>
content = content.replace('<dc-import name="Header" hint-size="100%,66px"></dc-import>', '<dc-import name="Header" hint-size="100%,66px"></dc-import>\n<main id="main-content">');
content = content.replace('<dc-import name="Footer"></dc-import>', '</main>\n<dc-import name="Footer"></dc-import>');

// Replace links
content = content.replace(/href="\/condition\/#back-neck"/g, 'href="/conditions/back-and-neck-pain/"');
content = content.replace(/href="\/condition\/#sports-injury"/g, 'href="/conditions/sports-injuries/"');
content = content.replace(/href="\/condition\/#post-surgery"/g, 'href="/conditions/post-surgery-rehabilitation/"');
content = content.replace(/href="\/condition\/#knee-joint"/g, 'href="/conditions/knee-and-joint-pain/"');
content = content.replace(/href="\/condition\/#sciatica"/g, 'href="/conditions/sciatica/"'); // Wait, the folder name is 'sciatica' according to dir command
content = content.replace(/href="\/condition\/#posture"/g, 'href="/conditions/posture-and-work-related-discomfort/"');
content = content.replace(/href="\/condition\/#frozen-shoulder"/g, 'href="/conditions/frozen-shoulder/"');
content = content.replace(/href="\/condition\/#geriatric"/g, 'href="/conditions/senior-mobility/"');
content = content.replace(/href="\/condition\/#strength-conditioning"/g, 'href="/conditions/strength-and-return-to-activity/"');

// Update old schema links just in case
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#back-neck/g, 'https://physiobyrutvi.in/conditions/back-and-neck-pain/');
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#sports-injury/g, 'https://physiobyrutvi.in/conditions/sports-injuries/');
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#post-surgery/g, 'https://physiobyrutvi.in/conditions/post-surgery-rehabilitation/');
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#knee-joint/g, 'https://physiobyrutvi.in/conditions/knee-and-joint-pain/');
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#sciatica/g, 'https://physiobyrutvi.in/conditions/sciatica/');
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#posture/g, 'https://physiobyrutvi.in/conditions/posture-and-work-related-discomfort/');
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#frozen-shoulder/g, 'https://physiobyrutvi.in/conditions/frozen-shoulder/');
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#geriatric/g, 'https://physiobyrutvi.in/conditions/senior-mobility/');
content = content.replace(/https:\/\/physiobyrutvi\.in\/condition\/#strength-conditioning/g, 'https://physiobyrutvi.in/conditions/strength-and-return-to-activity/');

fs.writeFileSync('Conditions.dc.html', content);
console.log('Updated Conditions.dc.html');

// We also need to fix `about/index.html` and other new pages to have `<main>` tag if they don't, 
// wait, the dir command showed `how-care-works/index.html` already HAS `<main>` tag! 
// Let's verify `conditions/index.html`
