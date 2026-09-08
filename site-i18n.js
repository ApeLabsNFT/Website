(function () {
  var BASE = 'https://physiobyrutvi.in';
  var PHONE = '918879475065';
  var LANG_PREFIX = /^\/(mr|gu)(?=\/|$)/;
  var ASSET_PATH = /^\/(assets|uploads|vendor|api)\//;

  var META = {
    en: {
      htmlLang: 'en-IN',
      locale: 'en_IN',
      home: {
        title: 'Home Physiotherapy in Mumbai | Dr Rutvi Gandhi | PhysioByRutvi',
        description: 'Doctor-led home physiotherapy by Dr Rutvi Gandhi, PT, MPT, for back pain, sports injury, post-surgery rehab and senior mobility across Bhayander to Andheri.',
        keywords: 'home physiotherapy Mumbai, physiotherapist home visit Mumbai, Dr Rutvi Gandhi, MPT physiotherapist Mumbai, sports physiotherapy, musculoskeletal physiotherapy, back pain physiotherapy, post surgery rehab, Bhayander, Mira Road, Borivali, Andheri'
      },
      conditions: {
        title: 'Conditions Treated at Home | Physiotherapy Mumbai | PhysioByRutvi',
        description: 'Back pain, neck pain, sports injuries, post-surgery rehab, sciatica, frozen shoulder, knee pain and geriatric mobility treated at home across western Mumbai.',
        keywords: 'back pain physiotherapy Mumbai, sciatica physiotherapy, frozen shoulder physiotherapy, sports injury rehab Mumbai, post surgery physiotherapy, knee pain physiotherapy, geriatric physiotherapy Mumbai'
      },
      condition: {
        title: 'Condition-Specific Home Physiotherapy | Mumbai | PhysioByRutvi',
        description: 'Condition-specific home physiotherapy by Dr Rutvi Gandhi for back pain, sciatica, sports injury, post-surgery rehab, frozen shoulder, posture and mobility concerns.',
        keywords: 'home physiotherapy condition treatment Mumbai, back neck pain physiotherapy, sciatica treatment Mumbai, sports injury rehab home visit'
      },
      about: {
        title: 'Dr Rutvi Gandhi, PT, MPT | Home Physiotherapist Mumbai',
        description: 'Meet Dr Rutvi Gandhi, PT, MPT, and explore her home-visit physiotherapy services, certifications, sports rehab, post-op care and nutrition guidance in Mumbai.',
        keywords: 'Dr Rutvi Gandhi physiotherapist, MPT physiotherapist Mumbai, BPT physiotherapist, K-Taping, IASTM, cupping therapy, sports rehab, post operative rehabilitation, geriatric physiotherapy, womens health physiotherapy, nutrition guidance Mumbai'
      }
    },
    mr: {
      htmlLang: 'mr-IN',
      locale: 'mr_IN',
      home: {
        title: 'मुंबईत घरपोच फिजिओथेरपी | डॉ. रुत्वी गांधी | PhysioByRutvi',
        description: 'डॉ. रुत्वी गांधी, PT, MPT यांच्याकडून भायंदर ते अंधेरी घरपोच फिजिओथेरपी. पाठदुखी, स्पोर्ट्स इजा, शस्त्रक्रियेनंतरची रिकव्हरी आणि ज्येष्ठांची मोबिलिटी.',
        keywords: 'मुंबई घरपोच फिजिओथेरपी, फिजिओथेरपिस्ट होम विजिट मुंबई, डॉ रुत्वी गांधी, पाठदुखी फिजिओथेरपी, स्पोर्ट्स फिजिओथेरपी, भायंदर, बोरिवली, अंधेरी'
      },
      conditions: {
        title: 'आजार आणि दुखणी | घरपोच फिजिओथेरपी मुंबई | PhysioByRutvi',
        description: 'पाठदुखी, मानदुखी, स्पोर्ट्स इजा, शस्त्रक्रियेनंतरची रिकव्हरी, सायटिका, फ्रोजन शोल्डर आणि गुडघेदुखीसाठी घरपोच फिजिओथेरपी.',
        keywords: 'पाठदुखी फिजिओथेरपी मुंबई, सायटिका उपचार मुंबई, फ्रोजन शोल्डर फिजिओथेरपी, घरपोच फिजिओथेरपी'
      },
      condition: {
        title: 'विशिष्ट दुखण्यासाठी घरपोच फिजिओथेरपी | मुंबई | PhysioByRutvi',
        description: 'डॉ. रुत्वी गांधी यांच्याकडून पाठदुखी, सायटिका, स्पोर्ट्स इजा, पोस्ट-सर्जरी रिकव्हरी, फ्रोजन शोल्डर आणि मोबिलिटीसाठी उपचार.',
        keywords: 'घरपोच फिजिओथेरपी मुंबई, पाठ मानदुखी, सायटिका, स्पोर्ट्स इजा, पोस्ट सर्जरी रिकव्हरी'
      },
      about: {
        title: 'डॉ. रुत्वी गांधी, PT, MPT | घरपोच फिजिओथेरपिस्ट मुंबई',
        description: 'डॉ. रुत्वी गांधी या PT, MPT फिजिओथेरपिस्ट असून भायंदर ते अंधेरी घरपोच मस्क्युलोस्केलेटल आणि स्पोर्ट्स फिजिओथेरपी देतात.',
        keywords: 'डॉ रुत्वी गांधी फिजिओथेरपिस्ट, MPT फिजिओथेरपिस्ट मुंबई, घरपोच फिजिओथेरपिस्ट'
      }
    },
    gu: {
      htmlLang: 'gu-IN',
      locale: 'gu_IN',
      home: {
        title: 'મુંબઈમાં ઘરઆંગણે ફિઝિયોથેરાપી | ડૉ. રુત્વી ગાંધી | PhysioByRutvi',
        description: 'ડૉ. રુત્વી ગાંધી, PT, MPT તરફથી ભાઈંદરથી અંધેરી સુધી ઘરઆંગણે ફિઝિયોથેરાપી. પીઠનો દુખાવો, સ્પોર્ટ્સ ઇજા, સર્જરી પછીની રિકવરી અને વૃદ્ધોની ગતિશીલતા.',
        keywords: 'મુંબઈ ઘરઆંગણે ફિઝિયોથેરાપી, ફિઝિયોથેરાપિસ્ટ હોમ વિઝિટ મુંબઈ, ડૉ રુત્વી ગાંધી, પીઠનો દુખાવો ફિઝિયોથેરાપી, ભાઈંદર, બોરીવલી, અંધેરી'
      },
      conditions: {
        title: 'રોગ અને તકલીફો | ઘરઆંગણે ફિઝિયોથેરાપી મુંબઈ | PhysioByRutvi',
        description: 'પીઠ-ગરદનનો દુખાવો, સ્પોર્ટ્સ ઇજા, સર્જરી પછીની રિકવરી, સાયટિકા, ફ્રોઝન શોલ્ડર અને ઘૂંટણના દુખાવા માટે ઘરઆંગણે સારવાર.',
        keywords: 'પીઠનો દુખાવો ફિઝિયોથેરાપી મુંબઈ, સાયટિકા સારવાર, ફ્રોઝન શોલ્ડર ફિઝિયોથેરાપી, ઘરઆંગણે ફિઝિયોથેરાપી'
      },
      condition: {
        title: 'ચોક્કસ તકલીફ માટે ઘરઆંગણે ફિઝિયોથેરાપી | મુંબઈ | PhysioByRutvi',
        description: 'ડૉ. રુત્વી ગાંધી તરફથી પીઠનો દુખાવો, સાયટિકા, સ્પોર્ટ્સ ઇજા, સર્જરી પછીની રિકવરી, ફ્રોઝન શોલ્ડર અને મોબિલિટી માટે સારવાર.',
        keywords: 'ઘરઆંગણે ફિઝિયોથેરાપી મુંબઈ, પીઠ ગરદનનો દુખાવો, સાયટિકા, સ્પોર્ટ્સ ઇજા, સર્જરી પછીની રિકવરી'
      },
      about: {
        title: 'ડૉ. રુત્વી ગાંધી, PT, MPT | ઘરઆંગણે ફિઝિયોથેરાપિસ્ટ મુંબઈ',
        description: 'ડૉ. રુત્વી ગાંધી PT, MPT ફિઝિયોથેરાપિસ્ટ છે અને ભાઈંદરથી અંધેરી સુધી ઘરઆંગણે મસ્ક્યુલોસ્કેલેટલ અને સ્પોર્ટ્સ ફિઝિયોથેરાપી આપે છે.',
        keywords: 'ડૉ રુત્વી ગાંધી ફિઝિયોથેરાપિસ્ટ, MPT ફિઝિયોથેરાપિસ્ટ મુંબઈ, ઘરઆંગણે ફિઝિયોથેરાપિસ્ટ'
      }
    }
  };

  var HERO = {
    mr: [
      {
        eyebrow: 'डॉक्टरांकडून घरपोच फिजिओथेरपी',
        title: ['फिजिओथेरपी', 'आता येईल', 'तुमच्या घरी.'],
        sub: 'वेदना थांबत नाहीत, मग तुम्ही का थांबावं? डॉ. रुत्वी तज्ज्ञ फिजिओथेरपी थेट तुमच्या घरी आणतात - भायंदर ते अंधेरी.',
        trust: '★★★★★ Google वर 5.0 · MPT, स्पोर्ट्स आणि मस्क्युलोस्केलेटल'
      },
      {
        eyebrow: 'रुग्ण त्यांच्याकडेच का येतात',
        title: ['दर वेळी', 'नवीन नाही -', 'तीच तज्ज्ञ.'],
        sub: 'इतर सेवा जो मोकळा असेल त्याला पाठवतात. इथे प्रत्येक भेटीला डॉ. रुत्वीच येतात - तुमचं दुखणं कुठवर आलंय हे त्यांना नेमकं आठवतं.',
        trust: 'एकच तज्ज्ञ · संपूर्ण उपचारभर'
      },
      {
        eyebrow: 'इथे बरं होणं असं वाटतं',
        title: ['पुन्हा त्या', 'गोष्टींकडे', 'ज्या हव्यात.'],
        sub: 'मुलाला उचलणं. रात्री शांत झोप. सकाळचा फेरफटका. हेच खरं ध्येय - आणि त्यासाठी तुमच्या शरीरानुसार खास योजना.',
        trust: 'प्रत्यक्ष उपचार · फक्त तुमच्यासाठीची योजना'
      }
    ],
    gu: [
      {
        eyebrow: 'ડૉક્ટર દ્વારા ઘરઆંગણે ફિઝિયોથેરાપી',
        title: ['ફિઝિયોથેરાપી', 'હવે આવશે', 'તમારા ઘરે.'],
        sub: 'દુખાવો રાહ નથી જોતો, તો તમે શા માટે રાહ જુઓ? ડૉ. રુત્વી ભાઈંદરથી અંધેરી સુધી નિષ્ણાત ફિઝિયોથેરાપી તમારા ઘરે લાવે છે.',
        trust: '★★★★★ Google પર 5.0 · MPT, સ્પોર્ટ્સ અને મસ્ક્યુલોસ્કેલેટલ'
      },
      {
        eyebrow: 'દર્દીઓ ફરીથી એમને કેમ પસંદ કરે છે',
        title: ['દર વખત', 'નવો નહીં -', 'એ જ નિષ્ણાત.'],
        sub: 'બીજી સેવાઓ જે ખાલી હોય તેને મોકલે છે. અહીં દરેક મુલાકાતે ડૉ. રુત્વી જ આવે છે - તમારી પ્રગતિ ક્યાં સુધી પહોંચી તે એમને યાદ રહે છે.',
        trust: 'એક જ નિષ્ણાત · સંપૂર્ણ રિકવરી માટે'
      },
      {
        eyebrow: 'અહીં રિકવરી કેવી લાગે છે',
        title: ['ફરીથી', 'તમને ગમતી', 'વસ્તુઓ તરફ.'],
        sub: 'બાળકને ઊંચકવું. રાત્રે શાંતિથી ઊંઘવું. સવારની વૉક. આ જ સાચું લક્ષ્ય છે - અને યોજના તમારા શરીર મુજબ બને છે.',
        trust: 'હાથથી સારવાર · તમારા માટેની યોજના'
      }
    ]
  };

  var PAGE_HEADINGS = {
    mr: {
      about: ['एकच तज्ज्ञ.', 'पूर्णपणे तुमच्यासोबत.'],
      condition: ['पाठ आणि मानदुखी', 'फिजिओथेरपी - घरीच']
    },
    gu: {
      about: ['એક જ નિષ્ણાત.', 'સંપૂર્ણ તમારી સાથે.'],
      condition: ['પીઠ અને ગરદનના દુખાવાની', 'ફિઝિયોથેરાપી - ઘરે જ']
    }
  };

  var COPY = {
    mr: {
      common: {
        'Conditions': 'आजार',
        'How It Works': 'कसं चालतं',
        'How it works': 'कसं चालतं',
        '5.0 on Google · MPT, Sports & Musculoskeletal · The same expert, every visit': 'Google वर 5.0 · MPT, Sports आणि Musculoskeletal · दर वेळी तीच तज्ज्ञ',
        '5.0 on Google · MPT, Sports & Musculoskeletal': 'Google वर 5.0 · MPT, Sports आणि Musculoskeletal',
        'About Dr Rutvi': 'डॉ. रुत्वींबद्दल',
        'Reviews': 'अभिप्राय',
        'WhatsApp me': 'WhatsApp वर बोला',
        'Book a home visit': 'घरभेट बुक करा',
        'Call +91 88794 75065': 'कॉल +91 88794 75065',
        'Movement, restored personally.': 'हालचाल, पुन्हा - आपुलकीने.',
        'Same expert, every visit': 'दर वेळी तीच तज्ज्ञ',
        'Home visits only · by appointment': 'घरभेट सेवा · अपॉइंटमेंटने',
        'Serving': 'सेवा क्षेत्र',
        'Explore': 'पहा',
        'Get in touch': 'संपर्क',
        'WhatsApp': 'WhatsApp',
        'Physiotherapy': 'फिजिओथेरपी',
        'Home': 'मुख्यपृष्ठ'
      },
      home: {
        'THE SAME EXPERT. EVERY VISIT.': 'दर भेटीत तीच तज्ज्ञ.',
        'No rotating aggregator therapists. One specialist who knows your history and your goals.': 'दर वेळी वेगळा थेरपिस्ट नाही. तुमचा इतिहास आणि ध्येय जाणणारी एकच तज्ज्ञ.',
        'See how it works': 'कसं चालतं ते पहा',
        'Meet Dr Rutvi': 'डॉ. रुत्वींना भेटा',
        'The PhysioByRutvi difference': 'PhysioByRutvi चा फरक',
        'Most physiotherapy makes you travel while you are in pain. She does the opposite.': 'बहुतेक फिजिओथेरपीत दुखत असतानाही प्रवास करावा लागतो. डॉ. रुत्वी अगदी उलट करतात.',
        'No clinic. No queue. Just three texts away.': 'दवाखाना नाही. रांग नाही. फक्त तीन मेसेज दूर.',
        'Straight answers.': 'थेट उत्तरे.',
        'Your recovery starts with one message.': 'तुमची रिकव्हरी एका मेसेजपासून सुरू होते.',
        'Tell Dr Rutvi what is hurting. She will take it from there.': 'काय दुखतंय ते डॉ. रुत्वींना सांगा. पुढचं त्या बघतील.'
      },
      conditions: {
        'What we treat': 'काय उपचार करतो',
        'Expert care for the things that slow you down.': 'जे तुम्हाला अडवतंय, त्यासाठी तज्ज्ञ उपचार.',
        'From a pulled hamstring to post-surgery rehab, Dr Rutvi treats a full range of musculoskeletal and sports conditions - at home, across Bhayander to Andheri.': 'अचानक झालेली दुखापत असो वा शस्त्रक्रियेनंतरची रिकव्हरी - डॉ. रुत्वी भायंदर ते अंधेरी घरपोच मस्क्युलोस्केलेटल आणि स्पोर्ट्स फिजिओथेरपी देतात.',
        'Not sure which applies?': 'कुठे बसतंय ते कळत नाही?',
        'Describe it to Dr Rutvi.': 'ते डॉ. रुत्वींना सांगा.',
        'Message Dr Rutvi - she\'ll help you understand what\'s going on and whether home physiotherapy is right for you.': 'डॉ. रुत्वींना मेसेज करा - फिजिओथेरपी मदत करेल का ते त्या प्रामाणिकपणे सांगतील.',
        'View details': 'तपशील पहा'
      },
      about: {
        'ONE SPECIALIST. IN YOUR CORNER.': 'एकच तज्ज्ञ. पूर्णपणे तुमच्यासोबत.',
        'One specialist. In your corner.': 'एकच तज्ज्ञ. पूर्णपणे तुमच्यासोबत.',
        'About Dr Rutvi': 'डॉ. रुत्वींबद्दल',
        'MPT - Sports & Musculoskeletal Physiotherapy': 'MPT - स्पोर्ट्स आणि मस्क्युलोस्केलेटल फिजिओथेरपी',
        'Talk to Dr Rutvi': 'डॉ. रुत्वींशी बोला',
        'Her philosophy': 'त्यांची उपचारपद्धती',
        'How she works': 'त्या कशा काम करतात',
        'What every patient can expect.': 'प्रत्येक रुग्ण काय अपेक्षा करू शकतो.',
        'Why home visits matter.': 'घरभेट का महत्त्वाची आहे.',
        'Let\'s talk about your recovery.': 'तुमच्या रिकव्हरीबद्दल बोलूया.'
      },
      condition: {
        'BACK & NECK PAIN PHYSIOTHERAPY - AT HOME': 'पाठ आणि मानदुखी फिजिओथेरपी - घरीच',
        'Back & Neck Pain - treated at home': 'पाठ आणि मानदुखी - घरीच उपचार',
        'Whether it\'s a dull ache from long desk hours or sharp, radiating pain, back and neck trouble wears you down. Dr Rutvi finds the root cause and treats it by hand, in your home.': 'डेस्कवर तासनतास बसल्याने होणारी मंद वेदना असो वा तीव्र, पसरणारी वेदना - पाठ आणि मानेचा त्रास थकवून टाकतो. डॉ. रुत्वी मूळ कारण शोधून घरीच हातांनी उपचार करतात.',
        'Chat about this': 'याबद्दल बोला',
        'WhatsApp me about this': 'याबद्दल WhatsApp वर बोला'
      },
      whatsapp: 'नमस्कार PhysioByRutvi, मला घरपोच फिजिओथेरपीबद्दल विचारायचे आहे. कृपया पुढील उपलब्ध सल्लामसलतीची वेळ कळवा.'
    },
    gu: {
      common: {
        'Conditions': 'રોગ',
        'How It Works': 'કેવી રીતે',
        'How it works': 'કેવી રીતે',
        '5.0 on Google · MPT, Sports & Musculoskeletal · The same expert, every visit': 'Google પર 5.0 · MPT, Sports અને Musculoskeletal · દર વખત એ જ નિષ્ણાત',
        '5.0 on Google · MPT, Sports & Musculoskeletal': 'Google પર 5.0 · MPT, Sports અને Musculoskeletal',
        'About Dr Rutvi': 'ડૉ. રુત્વી વિશે',
        'Reviews': 'સમીક્ષાઓ',
        'WhatsApp me': 'WhatsApp પર વાત કરો',
        'Book a home visit': 'ઘરની મુલાકાત બુક કરો',
        'Call +91 88794 75065': 'કૉલ +91 88794 75065',
        'Movement, restored personally.': 'હલનચલન, ફરી - પોતાપણાથી.',
        'Same expert, every visit': 'દર વખત એ જ નિષ્ણાત',
        'Home visits only · by appointment': 'ઘરઆંગણે મુલાકાત · એપોઇન્ટમેન્ટથી',
        'Serving': 'સેવા વિસ્તાર',
        'Explore': 'જોવો',
        'Get in touch': 'સંપર્ક',
        'WhatsApp': 'WhatsApp',
        'Physiotherapy': 'ફિઝિયોથેરાપી',
        'Home': 'હોમ'
      },
      home: {
        'THE SAME EXPERT. EVERY VISIT.': 'દર મુલાકાતે એ જ નિષ્ણાત.',
        'No rotating aggregator therapists. One specialist who knows your history and your goals.': 'દર વખતે અલગ થેરાપિસ્ટ નહીં. તમારો ઇતિહાસ અને લક્ષ્ય જાણતી એક જ નિષ્ણાત.',
        'See how it works': 'કેવી રીતે કામ કરે છે',
        'Meet Dr Rutvi': 'ડૉ. રુત્વીને મળો',
        'The PhysioByRutvi difference': 'PhysioByRutvi નો ફરક',
        'Most physiotherapy makes you travel while you are in pain. She does the opposite.': 'ઘણી ફિઝિયોથેરાપીમાં દુખાવા વચ્ચે પણ મુસાફરી કરવી પડે છે. ડૉ. રુત્વી તેનો ઉલટો કરે છે.',
        'No clinic. No queue. Just three texts away.': 'ક્લિનિક નહીં. કતાર નહીં. ફક્ત ત્રણ મેસેજ દૂર.',
        'Straight answers.': 'સીધા જવાબ.',
        'Your recovery starts with one message.': 'તમારી રિકવરી એક મેસેજથી શરૂ થાય છે.',
        'Tell Dr Rutvi what is hurting. She will take it from there.': 'શું દુખે છે તે ડૉ. રુત્વીને કહો. બાકી એ સંભાળી લેશે.'
      },
      conditions: {
        'What we treat': 'શું સારવાર કરીએ છીએ',
        'Expert care for the things that slow you down.': 'જે તમને રોકે છે, તેના માટે નિષ્ણાત સારવાર.',
        'From a pulled hamstring to post-surgery rehab, Dr Rutvi treats a full range of musculoskeletal and sports conditions - at home, across Bhayander to Andheri.': 'અચાનક ઇજા હોય કે સર્જરી પછીની રિકવરી - ડૉ. રુત્વી ભાઈંદરથી અંધેરી સુધી ઘરઆંગણે મસ્ક્યુલોસ્કેલેટલ અને સ્પોર્ટ્સ ફિઝિયોથેરાપી આપે છે.',
        'Not sure which applies?': 'કઈ તકલીફ છે તે સ્પષ્ટ નથી?',
        'Describe it to Dr Rutvi.': 'ડૉ. રુત્વીને જણાવો.',
        'Message Dr Rutvi - she\'ll help you understand what\'s going on and whether home physiotherapy is right for you.': 'ડૉ. રુત્વીને મેસેજ કરો - ઘરઆંગણે ફિઝિયોથેરાપી મદદ કરશે કે નહીં તે એ પ્રામાણિકપણે કહેશે.',
        'View details': 'વિગતો જુઓ'
      },
      about: {
        'ONE SPECIALIST. IN YOUR CORNER.': 'એક જ નિષ્ણાત. સંપૂર્ણ તમારી સાથે.',
        'One specialist. In your corner.': 'એક જ નિષ્ણાત. સંપૂર્ણ તમારી સાથે.',
        'About Dr Rutvi': 'ડૉ. રુત્વી વિશે',
        'MPT - Sports & Musculoskeletal Physiotherapy': 'MPT - સ્પોર્ટ્સ અને મસ્ક્યુલોસ્કેલેટલ ફિઝિયોથેરાપી',
        'Talk to Dr Rutvi': 'ડૉ. રુત્વી સાથે વાત કરો',
        'Her philosophy': 'એમની સારવાર પદ્ધતિ',
        'How she works': 'એ કેવી રીતે કામ કરે છે',
        'What every patient can expect.': 'દરેક દર્દી શું અપેક્ષા રાખી શકે.',
        'Why home visits matter.': 'ઘરઆંગણે મુલાકાત કેમ મહત્વની છે.',
        'Let\'s talk about your recovery.': 'તમારી રિકવરી વિશે વાત કરીએ.'
      },
      condition: {
        'BACK & NECK PAIN PHYSIOTHERAPY - AT HOME': 'પીઠ અને ગરદનના દુખાવાની ફિઝિયોથેરાપી - ઘરે જ',
        'Back & Neck Pain - treated at home': 'પીઠ અને ગરદનનો દુખાવો - ઘરે જ સારવાર',
        'Whether it\'s a dull ache from long desk hours or sharp, radiating pain, back and neck trouble wears you down. Dr Rutvi finds the root cause and treats it by hand, in your home.': 'ડેસ્ક પર લાંબા સમય બેસવાથી થતો હળવો દુખાવો હોય કે તીવ્ર, ફેલાતો દુખાવો - પીઠ અને ગરદનની તકલીફ થકવી નાખે છે. ડૉ. રુત્વી મૂળ કારણ શોધીને ઘરે જ હાથથી સારવાર કરે છે.',
        'Chat about this': 'આ વિશે વાત કરો',
        'WhatsApp me about this': 'આ વિશે WhatsApp પર વાત કરો'
      },
      whatsapp: 'નમસ્તે PhysioByRutvi, મને ઘરઆંગણે ફિઝિયોથેરાપી વિશે પૂછવું છે. કૃપા કરીને આગામી ઉપલબ્ધ પરામર્શનો સમય જણાવો.'
    }
  };

  Object.keys(COPY).forEach(function (lang) {
    var common = COPY[lang].common;
    common['Message Dr Rutvi'] = (COPY[lang].about && COPY[lang].about['Talk to Dr Rutvi']) || common['WhatsApp me'];
    common['Message about this'] = (COPY[lang].condition && COPY[lang].condition['Chat about this']) || common['Message Dr Rutvi'];
    common['Share what feels difficult, your suburb, and a preferred time.'] = (COPY[lang].home && COPY[lang].home['Tell Dr Rutvi what is hurting. She will take it from there.']) || common['Book a home visit'];
    common['Home visits by appointment'] = common['Home visits only · by appointment'];
    common['Appointment-based home visits'] = common['Home visits only · by appointment'];
    common['5.0 · MPT · Home visits by appointment'] = '5.0 · MPT · ' + (common['Home visits only · by appointment'] || 'Home visits by appointment');
    common['5.0 · Home visits · Appointment-based'] = '5.0 · ' + (common['Home visits only · by appointment'] || 'Home visits by appointment');
    common['5.0 rated · Home visits by appointment'] = '5.0 · ' + (common['Home visits only · by appointment'] || 'Home visits by appointment');
  });

  function currentLang() {
    var p = decodeURIComponent(location.pathname || '/').toLowerCase();
    if (p === '/mr' || p.indexOf('/mr/') === 0) return 'mr';
    if (p === '/gu' || p.indexOf('/gu/') === 0) return 'gu';
    return 'en';
  }

  function cleanPath(pathname) {
    var clean = decodeURIComponent(pathname || '/').replace(LANG_PREFIX, '');
    if (!clean) clean = '/';
    if (clean === '/home/' || clean === '/home') clean = '/';
    return clean;
  }

  function pageKey() {
    var p = cleanPath(location.pathname).replace(/\/+$/, '/');
    if (p.indexOf('/conditions/') === 0 || p === '/conditions/') return 'conditions';
    if (p.indexOf('/condition/') === 0 || p === '/condition/') return 'condition';
    if (p.indexOf('/about/') === 0 || p === '/about/') return 'about';
    return 'home';
  }

  function localizedPath(lang, clean, hash) {
    var suffix = clean === '/' ? '/' : clean;
    return (lang === 'en' ? suffix : '/' + lang + suffix) + (hash || '');
  }

  function canonicalPath() {
    return localizedPath(currentLang(), cleanPath(location.pathname), '');
  }

  function ensureMeta(name, content, attrName) {
    attrName = attrName || 'name';
    var el = document.querySelector('meta[' + attrName + '="' + name + '"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function ensureLink(rel, attrs) {
    var selector = 'link[rel="' + rel + '"]';
    if (attrs.hreflang) selector += '[hreflang="' + attrs.hreflang + '"]';
    var el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
  }

  function applyMeta(lang, page) {
    var meta = (META[lang] && META[lang][page]) || META.en[page] || META.en.home;
    document.documentElement.setAttribute('lang', META[lang].htmlLang);
    document.title = meta.title;
    ensureMeta('description', meta.description);
    ensureMeta('keywords', meta.keywords);
    ensureMeta('robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
    ensureMeta('googlebot', 'index,follow,max-image-preview:large');
    ensureMeta('geo.region', 'IN-MH');
    ensureMeta('geo.placename', 'Mumbai');
    ensureMeta('geo.position', '19.0760;72.8777');
    ensureMeta('ICBM', '19.0760, 72.8777');
    ensureMeta('og:locale', META[lang].locale, 'property');
    ensureMeta('og:title', meta.title, 'property');
    ensureMeta('og:description', meta.description, 'property');
    ensureMeta('og:url', BASE + canonicalPath(), 'property');
    ensureMeta('og:image', BASE + '/assets/social-share.png', 'property');
    ensureMeta('og:image:width', '1200', 'property');
    ensureMeta('og:image:height', '630', 'property');
    ensureMeta('og:image:type', 'image/png', 'property');
    ensureMeta('og:image:alt', 'PhysioByRutvi - doctor-led home physiotherapy in Mumbai', 'property');
    ensureMeta('twitter:title', meta.title);
    ensureMeta('twitter:description', meta.description);
    ensureMeta('twitter:card', 'summary_large_image');
    ensureMeta('twitter:image', BASE + '/assets/social-share.png');
    ensureMeta('twitter:image:alt', 'PhysioByRutvi - doctor-led home physiotherapy in Mumbai');
    ensureLink('canonical', { href: BASE + canonicalPath() });

    var clean = cleanPath(location.pathname);
    ensureLink('alternate', { hreflang: 'en-IN', href: BASE + localizedPath('en', clean, '') });
    ensureLink('alternate', { hreflang: 'mr-IN', href: BASE + localizedPath('mr', clean, '') });
    ensureLink('alternate', { hreflang: 'gu-IN', href: BASE + localizedPath('gu', clean, '') });
    ensureLink('alternate', { hreflang: 'x-default', href: BASE + localizedPath('en', clean, '') });
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }

  function setText(el, value) {
    if (el && value && el.textContent.trim() !== value) el.textContent = value;
  }

  function setHTML(el, lines) {
    if (!el || !lines) return;
    var html = lines.map(escapeHTML).join('<br>');
    if (el.innerHTML !== html) el.innerHTML = html;
  }

  function setFirstText(root, oldValues, value) {
    if (!root || !value) return;
    var values = Array.isArray(oldValues) ? oldValues : [oldValues];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var current = node.nodeValue.trim();
      if (values.indexOf(current) !== -1) {
        node.nodeValue = node.nodeValue.replace(current, value);
        return;
      }
    }
  }

  function replaceExact(map) {
    if (!map || !document.body) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|SVG|PATH|NOSCRIPT)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function (n) {
      var key = n.nodeValue.trim();
      if (Object.prototype.hasOwnProperty.call(map, key)) n.nodeValue = n.nodeValue.replace(key, map[key]);
    });
  }

  function applyHero(lang) {
    var slides = document.querySelectorAll('#heroTrack > div');
    var copy = HERO[lang];
    if (!slides.length || !copy) return;
    copy.forEach(function (slideCopy, idx) {
      var slide = slides[idx];
      if (!slide) return;
      setHTML(slide.querySelector('h1'), slideCopy.title);
      setText(slide.querySelector('p'), slideCopy.sub);
      setFirstText(slide, [
        'DOCTOR-LED HOME PHYSIOTHERAPY',
        'Doctor-led home physiotherapy',
        'Specialist-led home physiotherapy',
        'Care that fits real life',
        'Clear, consistent plan',
        'Continuity of care',
        'Guided recovery',
        'WHY PATIENTS SWITCH TO HER',
        'CONTINUITY OF CARE',
        'WHAT RECOVERY FEELS LIKE HERE'
      ], slideCopy.eyebrow);
      setFirstText(slide, [
        '★★★★★ 5.0 · 500+ home patients',
        '★★★★★ 5.0 on Google · MPT, Sports & Musculoskeletal',
        '5.0 on Google · MPT, Sports & Musculoskeletal · The same expert, every visit',
        '5.0 Google rated · PT, MPT · Sports and musculoskeletal focus · Home visits by appointment',
        'Your stairs · Your desk · Your routine',
        'Assessment · Follow-up exercises · Progress checks',
        '5.0 on Google · MPT, Sports & Musculoskeletal',
        'One specialist · Your whole recovery',
        'Hands-on care · A plan that is yours alone'
      ], slideCopy.trust);
    });
  }

  function applyText(lang, page) {
    if (lang === 'en') return;
    var copy = COPY[lang];
    replaceExact(copy.common);
    replaceExact(copy[page]);
    applyHero(lang);
    if (PAGE_HEADINGS[lang] && PAGE_HEADINGS[lang][page]) {
      setHTML(document.querySelector('h1'), PAGE_HEADINGS[lang][page]);
    }
  }

  function updateWhatsApp(lang, page) {
    var copy = COPY[lang];
    var msg = lang === 'en'
      ? 'Hello PhysioByRutvi, I would like to enquire about a home physiotherapy visit. Please share the next available consultation time.'
      : copy.whatsapp;
    if (page === 'conditions') {
      msg = lang === 'en'
        ? 'Hello PhysioByRutvi, I am exploring your physiotherapy services and would like to know whether home care may be suitable for my concern. Please share the next available consultation time.'
        : msg;
    }
    if (page === 'about') {
      msg = lang === 'en'
        ? 'Hello PhysioByRutvi, I would like to speak with your care team about home physiotherapy. Please share the next available consultation time.'
        : msg;
    }
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
      a.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
    });
  }

  function updateLinks(lang) {
    var clean = cleanPath(location.pathname);
    document.querySelectorAll('a[href]').forEach(function (a) {
      if (a.hasAttribute('data-pbr-lang-option')) return;
      var href = a.getAttribute('href');
      if (!href || href.indexOf('#') === 0 || href.indexOf('tel:') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('javascript:') === 0) return;
      if (href.indexOf('wa.me') !== -1) return;
      var url;
      try { url = new URL(href, location.origin); } catch (e) { return; }
      if (url.origin !== location.origin) return;
      if (ASSET_PATH.test(url.pathname)) return;
      var targetClean = cleanPath(url.pathname);
      a.setAttribute('href', localizedPath(lang, targetClean, url.hash));
    });
    document.querySelectorAll('[data-pbr-lang-option]').forEach(function (a) {
      var target = a.getAttribute('data-pbr-lang-option');
      a.href = localizedPath(target, clean, location.hash || '');
      var active = target === lang;
      a.setAttribute('aria-current', active ? 'page' : 'false');
      a.style.background = active ? '#EE7B5B' : 'transparent';
      a.style.color = active ? '#1B2021' : (a.closest('#pbrLangSwitchMenu') ? '#FDF8F5' : '#0E4F52');
    });
  }

  function injectSchema(page) {
    var id = 'pbr-llm-local-seo-schema';
    var clean = cleanPath(location.pathname);
    var lang = currentLang();
    var meta = (META[lang] && META[lang][page]) || META.en[page] || META.en.home;
    var graph = [
      {
        '@type': ['MedicalBusiness', 'LocalBusiness'],
        '@id': BASE + '/#business',
        name: 'PhysioByRutvi',
        alternateName: ['Dr Rutvi Gandhi Physiotherapy', 'Physio By Rutvi'],
        url: BASE + '/',
        telephone: '+918879475065',
        email: 'support@physiobyrutvi.in',
        image: BASE + '/assets/social-share.png',
        logo: BASE + '/assets/pbr-logo-mark.png',
        slogan: 'Movement, restored personally.',
        description: 'Doctor-led home physiotherapy by Dr Rutvi Gandhi, PT, MPT Musculoskeletal and Sports Physiotherapy, across the Bhayander to Andheri corridor in Mumbai.',
        priceRange: 'By appointment',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN'
        },
        knowsLanguage: ['English', 'Hindi', 'Marathi', 'Gujarati'],
        medicalSpecialty: ['Physiotherapy', 'Sports Medicine', 'Musculoskeletal'],
        areaServed: ['Bhayander', 'Mira Road', 'Dahisar', 'Borivali', 'Kandivali', 'Malad', 'Goregaon', 'Jogeshwari', 'Andheri', 'Mumbai'].map(function (name) { return { '@type': 'Place', name: name }; }),
        serviceArea: ['Bhayander', 'Mira Road', 'Dahisar', 'Borivali', 'Kandivali', 'Malad', 'Goregaon', 'Jogeshwari', 'Andheri', 'Mumbai'].map(function (name) { return { '@type': 'Place', name: name }; }),
        availableService: [
          'Home physiotherapy',
          'Back and neck pain physiotherapy',
          'Sports injury rehabilitation',
          'Post-surgery rehabilitation',
          'Knee and joint pain physiotherapy',
          'Sciatica physiotherapy',
          'Frozen shoulder physiotherapy',
          'Geriatric mobility and fall-prevention',
          'Posture correction'
        ].map(function (name) { return { '@type': 'MedicalTherapy', name: name, areaServed: 'Mumbai western suburbs' }; }),
        contactPoint: [{
          '@type': 'ContactPoint',
          telephone: '+918879475065',
          contactType: 'booking',
          areaServed: 'Mumbai',
          availableLanguage: ['English', 'Hindi', 'Marathi', 'Gujarati']
        }],
        founder: {
          '@type': 'Person',
          '@id': BASE + '/about/#dr-rutvi-gandhi',
          name: 'Dr Rutvi Gandhi',
          honorificPrefix: 'Dr',
          jobTitle: 'Physiotherapist',
          description: 'PT, MPT - Musculoskeletal and Sports Physiotherapy. BPT, clinical nutritionist, sports and fitness nutritionist, with certifications in K-Taping, IASTM, cupping therapy and MFR.'
        },
        sameAs: ['https://www.instagram.com/physiobyrutvi/']
      },
      {
        '@type': 'WebSite',
        '@id': BASE + '/#website',
        url: BASE + '/',
        name: 'PhysioByRutvi',
        inLanguage: ['en-IN', 'mr-IN', 'gu-IN'],
        publisher: { '@id': BASE + '/#business' }
      },
      {
        '@type': 'WebPage',
        '@id': BASE + clean + '#webpage',
        url: BASE + canonicalPath(),
        name: meta.title,
        description: meta.description,
        inLanguage: META[lang].htmlLang,
        isPartOf: { '@id': BASE + '/#website' },
        about: { '@id': BASE + '/#business' },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: BASE + '/assets/social-share.png',
          width: 1200,
          height: 630
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': BASE + clean + '#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE + '/' },
          { '@type': 'ListItem', position: 2, name: page === 'home' ? 'Home physiotherapy' : page.charAt(0).toUpperCase() + page.slice(1), item: BASE + clean }
        ]
      }
    ];
    var payload = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    var old = document.getElementById(id);
    if (old) {
      if (old.textContent !== payload) old.textContent = payload;
      return;
    }
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = payload;
    document.head.appendChild(script);
  }

  var scheduled = false;
  function applyAll() {
    scheduled = false;
    var lang = currentLang();
    var page = pageKey();
    applyMeta(lang, page);
    applyText(lang, page);
    updateWhatsApp(lang, page);
    updateLinks(lang);
    injectSchema(page);
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    setTimeout(applyAll, 40);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule);
  else schedule();
  window.addEventListener('hashchange', schedule);
  window.addEventListener('load', schedule);
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
})();
