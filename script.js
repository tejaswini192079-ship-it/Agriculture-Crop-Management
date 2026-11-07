/* ============ TRANSLATIONS ============ */
const LANGS = {
  en:{label:'English',code:'en-IN',
    tag:'Smart Farming. Simple Living.',heroTitle:'Grow better. Harvest smarter.',heroSub:'Look after your fields, crops, water, fertilizer and harvest — all in one easy place.',
    f1:'Know your fields',f2:'Water & care',f3:'Track harvest',signin:'Sign in',signSub:'Your farm is one step away.',name:'Your name',pass:'Password',login:'Open my farm',demo:'Demo: type any name and password.',
    dash:'Home',fields:'My Fields',acts:'Daily Care',harvest:'Harvest',logout:'Log out',welcome:'Welcome',snap:'Your farm today',
    sFields:'Fields',sWater:'Watering',sPest:'Pest alerts',sHarv:'Harvest ready',yourFields:'My fields',addField:'Add field',fname:'Field name',crop:'Crop',area:'Area (acres)',stage:'Stage',save:'Save',
    sow:'Sowing',grow:'Growing',flower:'Flowering',ready:'Ready to harvest',done:'Harvested',
    irrig:'Irrigation',irrigD:'Write when you gave water',fert:'Fertilizer',fertD:'Write which fertilizer you used',pest:'Pests',pestD:'Write if you see insects or disease',
    choose:'Choose field',note:'Short note',add:'Add record',history:'Recent records',noRec:'No records yet',harvestTitle:'Harvest status',harvestSub:'See which crop is ready',acres:'acres',listen:'Listen',saved:'Saved ✓',
    bannerTitle:'Every little step helps your farm grow.',bannerSub:'Keep your fields happy and your farm work organised.',bannerBtn:'Explore my fields',galTitle:'Crops you can track',howTitle:'How it works',how1:'Add your field',how2:'Write daily care',how3:'Watch it grow & harvest',whyTitle:'Why farmers love Harvestly',why1:'6 local languages',why2:'Voice help',why3:'Big easy pictures',why4:'Works on any phone',tipsTitle:'Today\'s farm tips',tip1:'Water early in the morning to save water.',tip2:'Check under the leaves for tiny insects.',tip3:'Add fertilizer only when the soil is moist.',footTag:'Growing a greener tomorrow, together.',
    c_maize:'Maize',c_sugarcane:'Sugarcane',c_chilli:'Chilli',c_banana:'Banana',all:'All',fieldsSub:'Every field and every crop, in one place.',careSub:'Water, fertilizer and pests — write it down in seconds.',score:'Farm care score',scoreSub:'Fields with water and fertilizer records',
    c_rice:'Rice',c_wheat:'Wheat',c_tomato:'Tomato',c_cotton:'Cotton'},
  hi:{label:'हिन्दी',code:'hi-IN',
    tag:'स्मार्ट खेती. आसान जीवन।',heroTitle:'बेहतर उगाएं. बेहतर काटें।',heroSub:'अपने खेत, फसल, पानी, खाद और कटाई — सब एक जगह।',
    f1:'अपने खेत जानें',f2:'पानी और देखभाल',f3:'कटाई देखें',signin:'लॉग इन',signSub:'आपका खेत बस एक कदम दूर है।',name:'आपका नाम',pass:'पासवर्ड',login:'मेरा खेत खोलें',demo:'डेमो: कोई भी नाम और पासवर्ड लिखें।',
    dash:'होम',fields:'मेरे खेत',acts:'रोज़ की देखभाल',harvest:'कटाई',logout:'बाहर निकलें',welcome:'स्वागत है',snap:'आज आपका खेत',
    sFields:'खेत',sWater:'सिंचाई',sPest:'कीट चेतावनी',sHarv:'कटाई के लिए तैयार',yourFields:'मेरे खेत',addField:'खेत जोड़ें',fname:'खेत का नाम',crop:'फसल',area:'क्षेत्र (एकड़)',stage:'अवस्था',save:'सहेजें',
    sow:'बुवाई',grow:'बढ़ रही है',flower:'फूल आना',ready:'कटाई के लिए तैयार',done:'कट चुकी',
    irrig:'सिंचाई',irrigD:'पानी कब दिया, लिखें',fert:'खाद',fertD:'कौन सी खाद डाली, लिखें',pest:'कीट',pestD:'कीड़े या बीमारी दिखे तो लिखें',
    choose:'खेत चुनें',note:'छोटा नोट',add:'रिकॉर्ड जोड़ें',history:'हाल के रिकॉर्ड',noRec:'अभी कोई रिकॉर्ड नहीं',harvestTitle:'कटाई की स्थिति',harvestSub:'देखें कौन सी फसल तैयार है',acres:'एकड़',listen:'सुनें',saved:'सहेजा गया ✓',
    bannerTitle:'हर छोटा कदम आपके खेत को बढ़ाता है।',bannerSub:'अपने खेत खुशहाल रखें और खेती का काम व्यवस्थित रखें।',bannerBtn:'मेरे खेत देखें',galTitle:'फसलें जिन्हें आप ट्रैक कर सकते हैं',howTitle:'यह कैसे काम करता है',how1:'अपना खेत जोड़ें',how2:'रोज़ की देखभाल लिखें',how3:'बढ़ते देखें और कटाई करें',whyTitle:'किसान हार्वेस्टली को क्यों पसंद करते हैं',why1:'6 स्थानीय भाषाएं',why2:'आवाज़ से मदद',why3:'बड़ी आसान तस्वीरें',why4:'हर फोन पर चलता है',tipsTitle:'आज के खेती सुझाव',tip1:'पानी बचाने के लिए सुबह जल्दी सिंचाई करें।',tip2:'पत्तियों के नीचे छोटे कीड़े जांचें।',tip3:'मिट्टी में नमी हो तभी खाद डालें।',footTag:'मिलकर एक हरा-भरा कल उगा रहे हैं।',
    c_maize:'मक्का',c_sugarcane:'गन्ना',c_chilli:'मिर्च',c_banana:'केला',all:'सभी',fieldsSub:'हर खेत और हर फसल, एक ही जगह।',careSub:'पानी, खाद और कीट — कुछ ही सेकंड में लिखें।',score:'खेत देखभाल स्कोर',scoreSub:'जिन खेतों में पानी और खाद का रिकॉर्ड है',
    c_rice:'चावल',c_wheat:'गेहूं',c_tomato:'टमाटर',c_cotton:'कपास'},
  te:{label:'తెలుగు',code:'te-IN',
    tag:'స్మార్ట్ వ్యవసాయం. సులభ జీవనం.',heroTitle:'బాగా పండించండి. బాగా కోయండి.',heroSub:'మీ పొలాలు, పంటలు, నీరు, ఎరువు, కోత — అన్నీ ఒకే చోట.',
    f1:'మీ పొలాలు తెలుసుకోండి',f2:'నీరు & సంరక్షణ',f3:'కోత చూడండి',signin:'లాగిన్',signSub:'మీ పొలం ఒక్క అడుగు దూరంలో ఉంది.',name:'మీ పేరు',pass:'పాస్‌వర్డ్',login:'నా పొలం తెరవండి',demo:'డెమో: ఏ పేరు, పాస్‌వర్డ్ అయినా రాయండి.',
    dash:'హోమ్',fields:'నా పొలాలు',acts:'రోజువారీ సంరక్షణ',harvest:'కోత',logout:'బయటకు',welcome:'స్వాగతం',snap:'ఈ రోజు మీ పొలం',
    sFields:'పొలాలు',sWater:'నీటిపారుదల',sPest:'చీడల హెచ్చరిక',sHarv:'కోతకు సిద్ధం',yourFields:'నా పొలాలు',addField:'పొలం చేర్చండి',fname:'పొలం పేరు',crop:'పంట',area:'విస్తీర్ణం (ఎకరాలు)',stage:'దశ',save:'సేవ్',
    sow:'విత్తనం',grow:'పెరుగుతోంది',flower:'పూత',ready:'కోతకు సిద్ధం',done:'కోత పూర్తి',
    irrig:'నీటిపారుదల',irrigD:'ఎప్పుడు నీరు పెట్టారో రాయండి',fert:'ఎరువు',fertD:'ఏ ఎరువు వేశారో రాయండి',pest:'చీడపీడలు',pestD:'పురుగులు లేదా తెగులు కనిపిస్తే రాయండి',
    choose:'పొలం ఎంచుకోండి',note:'చిన్న నోట్',add:'రికార్డ్ చేర్చండి',history:'ఇటీవలి రికార్డులు',noRec:'ఇంకా రికార్డులు లేవు',harvestTitle:'కోత స్థితి',harvestSub:'ఏ పంట సిద్ధంగా ఉందో చూడండి',acres:'ఎకరాలు',listen:'వినండి',saved:'సేవ్ అయింది ✓',
    bannerTitle:'ప్రతి చిన్న అడుగు మీ పొలాన్ని పెంచుతుంది.',bannerSub:'మీ పొలాలను సంతోషంగా, పనులను క్రమబద్ధంగా ఉంచండి.',bannerBtn:'నా పొలాలు చూడండి',galTitle:'మీరు ట్రాక్ చేయగల పంటలు',howTitle:'ఇది ఎలా పనిచేస్తుంది',how1:'మీ పొలం చేర్చండి',how2:'రోజువారీ సంరక్షణ రాయండి',how3:'పెరుగుదల చూసి కోత కోయండి',whyTitle:'రైతులు హార్వెస్ట్లీని ఎందుకు ఇష్టపడతారు',why1:'6 స్థానిక భాషలు',why2:'వాయిస్ సహాయం',why3:'పెద్ద సులభ చిత్రాలు',why4:'ఏ ఫోన్‌లోనైనా పనిచేస్తుంది',tipsTitle:'నేటి వ్యవసాయ చిట్కాలు',tip1:'నీరు ఆదా చేయడానికి ఉదయాన్నే నీరు పెట్టండి.',tip2:'ఆకుల కింద చిన్న పురుగులు ఉన్నాయేమో చూడండి.',tip3:'నేల తడిగా ఉన్నప్పుడే ఎరువు వేయండి.',footTag:'కలిసి పచ్చని రేపటిని పెంచుతున్నాం.',
    c_maize:'మొక్కజొన్న',c_sugarcane:'చెరకు',c_chilli:'మిరప',c_banana:'అరటి',all:'అన్నీ',fieldsSub:'ప్రతి పొలం, ప్రతి పంట — ఒకే చోట.',careSub:'నీరు, ఎరువు, చీడపీడలు — సెకన్లలో రాయండి.',score:'పొలం సంరక్షణ స్కోర్',scoreSub:'నీరు, ఎరువు రికార్డులు ఉన్న పొలాలు',
    c_rice:'వరి',c_wheat:'గోధుమ',c_tomato:'టమాటా',c_cotton:'పత్తి'},
  ta:{label:'தமிழ்',code:'ta-IN',
    tag:'ஸ்மார்ட் விவசாயம். எளிய வாழ்க்கை.',heroTitle:'நன்றாக விளைவியுங்கள். நன்றாக அறுவடை செய்யுங்கள்.',heroSub:'உங்கள் வயல், பயிர், நீர், உரம், அறுவடை — எல்லாம் ஒரே இடத்தில்.',
    f1:'உங்கள் வயல்களை அறியுங்கள்',f2:'நீர் & பராமரிப்பு',f3:'அறுவடை பாருங்கள்',signin:'உள்நுழைக',signSub:'உங்கள் பண்ணை ஒரு அடி தூரத்தில்.',name:'உங்கள் பெயர்',pass:'கடவுச்சொல்',login:'என் பண்ணையைத் திற',demo:'டெமோ: எந்த பெயர், கடவுச்சொல்லும் எழுதலாம்.',
    dash:'முகப்பு',fields:'என் வயல்கள்',acts:'தினசரி பராமரிப்பு',harvest:'அறுவடை',logout:'வெளியேறு',welcome:'வரவேற்கிறோம்',snap:'இன்று உங்கள் பண்ணை',
    sFields:'வயல்கள்',sWater:'நீர்ப்பாசனம்',sPest:'பூச்சி எச்சரிக்கை',sHarv:'அறுவடைக்கு தயார்',yourFields:'என் வயல்கள்',addField:'வயல் சேர்',fname:'வயல் பெயர்',crop:'பயிர்',area:'பரப்பு (ஏக்கர்)',stage:'நிலை',save:'சேமி',
    sow:'விதைப்பு',grow:'வளர்கிறது',flower:'பூக்கும் நிலை',ready:'அறுவடைக்கு தயார்',done:'அறுவடை முடிந்தது',
    irrig:'நீர்ப்பாசனம்',irrigD:'எப்போது நீர் விட்டீர்கள் என எழுதுங்கள்',fert:'உரம்',fertD:'எந்த உரம் போட்டீர்கள் என எழுதுங்கள்',pest:'பூச்சிகள்',pestD:'பூச்சி அல்லது நோய் தெரிந்தால் எழுதுங்கள்',
    choose:'வயலைத் தேர்ந்தெடுங்கள்',note:'சிறு குறிப்பு',add:'பதிவு சேர்',history:'சமீபத்திய பதிவுகள்',noRec:'இன்னும் பதிவுகள் இல்லை',harvestTitle:'அறுவடை நிலை',harvestSub:'எந்த பயிர் தயார் என பாருங்கள்',acres:'ஏக்கர்',listen:'கேளுங்கள்',saved:'சேமிக்கப்பட்டது ✓',
    bannerTitle:'ஒவ்வொரு சிறு அடியும் உங்கள் பண்ணையை வளர்க்கும்.',bannerSub:'உங்கள் வயல்களை மகிழ்ச்சியாகவும் வேலைகளை ஒழுங்காகவும் வைத்திருங்கள்.',bannerBtn:'என் வயல்களைப் பாருங்கள்',galTitle:'நீங்கள் கண்காணிக்கக்கூடிய பயிர்கள்',howTitle:'இது எப்படி வேலை செய்கிறது',how1:'உங்கள் வயலைச் சேர்க்கவும்',how2:'தினசரி பராமரிப்பை எழுதுங்கள்',how3:'வளர்வதைப் பார்த்து அறுவடை செய்யுங்கள்',whyTitle:'விவசாயிகள் ஹார்வெஸ்ட்லியை ஏன் விரும்புகிறார்கள்',why1:'6 உள்ளூர் மொழிகள்',why2:'குரல் உதவி',why3:'பெரிய எளிய படங்கள்',why4:'எந்த போனிலும் வேலை செய்யும்',tipsTitle:'இன்றைய விவசாய குறிப்புகள்',tip1:'தண்ணீரை சேமிக்க அதிகாலையில் நீர் பாய்ச்சுங்கள்.',tip2:'இலைகளின் அடியில் சிறு பூச்சிகள் உள்ளதா என பாருங்கள்.',tip3:'மண் ஈரமாக இருக்கும்போது மட்டுமே உரம் இடுங்கள்.',footTag:'ஒன்றாக பசுமையான நாளையை வளர்க்கிறோம்.',
    c_maize:'மக்காச்சோளம்',c_sugarcane:'கரும்பு',c_chilli:'மிளகாய்',c_banana:'வாழை',all:'அனைத்தும்',fieldsSub:'ஒவ்வொரு வயலும் ஒவ்வொரு பயிரும் — ஒரே இடத்தில்.',careSub:'நீர், உரம், பூச்சிகள் — சில நொடிகளில் எழுதுங்கள்.',score:'பண்ணை பராமரிப்பு மதிப்பெண்',scoreSub:'நீர், உரம் பதிவுகள் உள்ள வயல்கள்',
    c_rice:'நெல்',c_wheat:'கோதுமை',c_tomato:'தக்காளி',c_cotton:'பருத்தி'},
  pa:{label:'ਪੰਜਾਬੀ',code:'pa-IN',
    tag:'ਸਮਾਰਟ ਖੇਤੀ. ਸੌਖੀ ਜ਼ਿੰਦਗੀ।',heroTitle:'ਚੰਗਾ ਉਗਾਓ. ਚੰਗੀ ਵਾਢੀ ਕਰੋ।',heroSub:'ਆਪਣੇ ਖੇਤ, ਫ਼ਸਲ, ਪਾਣੀ, ਖਾਦ ਤੇ ਵਾਢੀ — ਸਭ ਇੱਕੋ ਥਾਂ।',
    f1:'ਆਪਣੇ ਖੇਤ ਜਾਣੋ',f2:'ਪਾਣੀ ਤੇ ਸੰਭਾਲ',f3:'ਵਾਢੀ ਵੇਖੋ',signin:'ਲੌਗ ਇਨ',signSub:'ਤੁਹਾਡਾ ਖੇਤ ਬੱਸ ਇੱਕ ਕਦਮ ਦੂਰ ਹੈ।',name:'ਤੁਹਾਡਾ ਨਾਂ',pass:'ਪਾਸਵਰਡ',login:'ਮੇਰਾ ਖੇਤ ਖੋਲ੍ਹੋ',demo:'ਡੈਮੋ: ਕੋਈ ਵੀ ਨਾਂ ਤੇ ਪਾਸਵਰਡ ਲਿਖੋ।',
    dash:'ਹੋਮ',fields:'ਮੇਰੇ ਖੇਤ',acts:'ਰੋਜ਼ ਦੀ ਸੰਭਾਲ',harvest:'ਵਾਢੀ',logout:'ਬਾਹਰ ਜਾਓ',welcome:'ਜੀ ਆਇਆਂ ਨੂੰ',snap:'ਅੱਜ ਤੁਹਾਡਾ ਖੇਤ',
    sFields:'ਖੇਤ',sWater:'ਸਿੰਚਾਈ',sPest:'ਕੀੜਿਆਂ ਦੀ ਚੇਤਾਵਨੀ',sHarv:'ਵਾਢੀ ਲਈ ਤਿਆਰ',yourFields:'ਮੇਰੇ ਖੇਤ',addField:'ਖੇਤ ਜੋੜੋ',fname:'ਖੇਤ ਦਾ ਨਾਂ',crop:'ਫ਼ਸਲ',area:'ਰਕਬਾ (ਏਕੜ)',stage:'ਪੜਾਅ',save:'ਸੇਵ ਕਰੋ',
    sow:'ਬਿਜਾਈ',grow:'ਵਧ ਰਹੀ ਹੈ',flower:'ਫੁੱਲ ਆਉਣਾ',ready:'ਵਾਢੀ ਲਈ ਤਿਆਰ',done:'ਵਾਢੀ ਹੋ ਗਈ',
    irrig:'ਸਿੰਚਾਈ',irrigD:'ਪਾਣੀ ਕਦੋਂ ਲਾਇਆ, ਲਿਖੋ',fert:'ਖਾਦ',fertD:'ਕਿਹੜੀ ਖਾਦ ਪਾਈ, ਲਿਖੋ',pest:'ਕੀੜੇ',pestD:'ਕੀੜੇ ਜਾਂ ਬਿਮਾਰੀ ਦਿਸੇ ਤਾਂ ਲਿਖੋ',
    choose:'ਖੇਤ ਚੁਣੋ',note:'ਛੋਟਾ ਨੋਟ',add:'ਰਿਕਾਰਡ ਜੋੜੋ',history:'ਹਾਲੀਆ ਰਿਕਾਰਡ',noRec:'ਹਾਲੇ ਕੋਈ ਰਿਕਾਰਡ ਨਹੀਂ',harvestTitle:'ਵਾਢੀ ਦੀ ਸਥਿਤੀ',harvestSub:'ਵੇਖੋ ਕਿਹੜੀ ਫ਼ਸਲ ਤਿਆਰ ਹੈ',acres:'ਏਕੜ',listen:'ਸੁਣੋ',saved:'ਸੇਵ ਹੋ ਗਿਆ ✓',
    bannerTitle:'ਹਰ ਛੋਟਾ ਕਦਮ ਤੁਹਾਡੇ ਖੇਤ ਨੂੰ ਵਧਾਉਂਦਾ ਹੈ।',bannerSub:'ਆਪਣੇ ਖੇਤ ਖੁਸ਼ਹਾਲ ਤੇ ਕੰਮ ਸੁਚੱਜੇ ਰੱਖੋ।',bannerBtn:'ਮੇਰੇ ਖੇਤ ਵੇਖੋ',galTitle:'ਫ਼ਸਲਾਂ ਜੋ ਤੁਸੀਂ ਟਰੈਕ ਕਰ ਸਕਦੇ ਹੋ',howTitle:'ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',how1:'ਆਪਣਾ ਖੇਤ ਜੋੜੋ',how2:'ਰੋਜ਼ ਦੀ ਸੰਭਾਲ ਲਿਖੋ',how3:'ਵਧਦੀ ਫ਼ਸਲ ਵੇਖੋ ਤੇ ਵਾਢੀ ਕਰੋ',whyTitle:'ਕਿਸਾਨ ਹਾਰਵੈਸਟਲੀ ਨੂੰ ਕਿਉਂ ਪਸੰਦ ਕਰਦੇ ਹਨ',why1:'6 ਸਥਾਨਕ ਭਾਸ਼ਾਵਾਂ',why2:'ਆਵਾਜ਼ ਨਾਲ ਮਦਦ',why3:'ਵੱਡੀਆਂ ਆਸਾਨ ਤਸਵੀਰਾਂ',why4:'ਹਰ ਫ਼ੋਨ ਤੇ ਚੱਲਦਾ ਹੈ',tipsTitle:'ਅੱਜ ਦੇ ਖੇਤੀ ਸੁਝਾਅ',tip1:'ਪਾਣੀ ਬਚਾਉਣ ਲਈ ਸਵੇਰੇ ਜਲਦੀ ਪਾਣੀ ਲਾਓ।',tip2:'ਪੱਤਿਆਂ ਦੇ ਹੇਠਾਂ ਛੋਟੇ ਕੀੜੇ ਵੇਖੋ।',tip3:'ਜ਼ਮੀਨ ਵਿੱਚ ਨਮੀ ਹੋਵੇ ਤਾਂ ਹੀ ਖਾਦ ਪਾਓ।',footTag:'ਮਿਲ ਕੇ ਹਰਿਆ-ਭਰਿਆ ਕੱਲ੍ਹ ਉਗਾ ਰਹੇ ਹਾਂ।',
    c_maize:'ਮੱਕੀ',c_sugarcane:'ਗੰਨਾ',c_chilli:'ਮਿਰਚ',c_banana:'ਕੇਲਾ',all:'ਸਾਰੇ',fieldsSub:'ਹਰ ਖੇਤ ਤੇ ਹਰ ਫ਼ਸਲ, ਇੱਕੋ ਥਾਂ।',careSub:'ਪਾਣੀ, ਖਾਦ ਤੇ ਕੀੜੇ — ਕੁਝ ਸਕਿੰਟਾਂ ਵਿੱਚ ਲਿਖੋ।',score:'ਖੇਤ ਸੰਭਾਲ ਸਕੋਰ',scoreSub:'ਜਿਨ੍ਹਾਂ ਖੇਤਾਂ ਵਿੱਚ ਪਾਣੀ ਤੇ ਖਾਦ ਦਾ ਰਿਕਾਰਡ ਹੈ',
    c_rice:'ਝੋਨਾ',c_wheat:'ਕਣਕ',c_tomato:'ਟਮਾਟਰ',c_cotton:'ਕਪਾਹ'},
  ml:{label:'മലയാളം',code:'ml-IN',
    tag:'സ്മാർട്ട് കൃഷി. എളുപ്പ ജീവിതം.',heroTitle:'നന്നായി വളർത്തൂ. നന്നായി വിളവെടുക്കൂ.',heroSub:'നിങ്ങളുടെ വയൽ, വിള, വെള്ളം, വളം, വിളവെടുപ്പ് — എല്ലാം ഒരിടത്ത്.',
    f1:'നിങ്ങളുടെ വയലുകൾ അറിയൂ',f2:'വെള്ളവും പരിപാലനവും',f3:'വിളവെടുപ്പ് കാണൂ',signin:'ലോഗിൻ',signSub:'നിങ്ങളുടെ കൃഷിയിടം ഒരു ചുവട് അകലെ.',name:'നിങ്ങളുടെ പേര്',pass:'പാസ്‌വേഡ്',login:'എന്റെ കൃഷിയിടം തുറക്കൂ',demo:'ഡെമോ: ഏതെങ്കിലും പേരും പാസ്‌വേഡും എഴുതൂ.',
    dash:'ഹോം',fields:'എന്റെ വയലുകൾ',acts:'ദിവസേനയുള്ള പരിപാലനം',harvest:'വിളവെടുപ്പ്',logout:'പുറത്തുകടക്കുക',welcome:'സ്വാഗതം',snap:'ഇന്ന് നിങ്ങളുടെ കൃഷിയിടം',
    sFields:'വയലുകൾ',sWater:'നനയ്ക്കൽ',sPest:'കീട മുന്നറിയിപ്പ്',sHarv:'വിളവെടുപ്പിന് തയ്യാർ',yourFields:'എന്റെ വയലുകൾ',addField:'വയൽ ചേർക്കുക',fname:'വയലിന്റെ പേര്',crop:'വിള',area:'വിസ്തീർണ്ണം (ഏക്കർ)',stage:'ഘട്ടം',save:'സേവ് ചെയ്യുക',
    sow:'വിതയ്ക്കൽ',grow:'വളരുന്നു',flower:'പൂവിടൽ',ready:'വിളവെടുപ്പിന് തയ്യാർ',done:'വിളവെടുത്തു',
    irrig:'നനയ്ക്കൽ',irrigD:'എപ്പോൾ വെള്ളം നൽകി എന്ന് എഴുതൂ',fert:'വളം',fertD:'ഏത് വളം ഇട്ടു എന്ന് എഴുതൂ',pest:'കീടങ്ങൾ',pestD:'കീടമോ രോഗമോ കണ്ടാൽ എഴുതൂ',
    choose:'വയൽ തിരഞ്ഞെടുക്കൂ',note:'ചെറിയ കുറിപ്പ്',add:'രേഖ ചേർക്കുക',history:'സമീപകാല രേഖകൾ',noRec:'ഇതുവരെ രേഖകളില്ല',harvestTitle:'വിളവെടുപ്പ് നില',harvestSub:'ഏത് വിള തയ്യാർ എന്ന് നോക്കൂ',acres:'ഏക്കർ',listen:'കേൾക്കൂ',saved:'സേവ് ചെയ്തു ✓',
    bannerTitle:'ഓരോ ചെറിയ ചുവടും നിങ്ങളുടെ കൃഷിയിടത്തെ വളർത്തുന്നു.',bannerSub:'നിങ്ങളുടെ വയലുകൾ സന്തോഷമായും ജോലികൾ ക്രമമായും സൂക്ഷിക്കൂ.',bannerBtn:'എന്റെ വയലുകൾ കാണൂ',galTitle:'നിങ്ങൾക്ക് ട്രാക്ക് ചെയ്യാവുന്ന വിളകൾ',howTitle:'ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു',how1:'നിങ്ങളുടെ വയൽ ചേർക്കൂ',how2:'ദിവസേനയുള്ള പരിപാലനം എഴുതൂ',how3:'വളരുന്നത് കണ്ട് വിളവെടുക്കൂ',whyTitle:'കർഷകർ ഹാർവെസ്റ്റ്ലിയെ എന്തുകൊണ്ട് ഇഷ്ടപ്പെടുന്നു',why1:'6 പ്രാദേശിക ഭാഷകൾ',why2:'ശബ്ദ സഹായം',why3:'വലിയ എളുപ്പ ചിത്രങ്ങൾ',why4:'ഏത് ഫോണിലും പ്രവർത്തിക്കും',tipsTitle:'ഇന്നത്തെ കൃഷി നുറുങ്ങുകൾ',tip1:'വെള്ളം ലാഭിക്കാൻ രാവിലെ നേരത്തെ നനയ്ക്കൂ.',tip2:'ഇലകളുടെ അടിയിൽ ചെറിയ കീടങ്ങൾ ഉണ്ടോ എന്ന് നോക്കൂ.',tip3:'മണ്ണ് നനഞ്ഞിരിക്കുമ്പോൾ മാത്രം വളം ഇടൂ.',footTag:'ഒരുമിച്ച് പച്ചപ്പുള്ള നാളെ വളർത്തുന്നു.',
    c_maize:'ചോളം',c_sugarcane:'കരിമ്പ്',c_chilli:'മുളക്',c_banana:'വാഴ',all:'എല്ലാം',fieldsSub:'ഓരോ വയലും ഓരോ വിളയും, ഒരിടത്ത്.',careSub:'വെള്ളം, വളം, കീടങ്ങൾ — നിമിഷങ്ങൾക്കുള്ളിൽ എഴുതൂ.',score:'കൃഷിയിട പരിപാലന സ്കോർ',scoreSub:'വെള്ളം, വളം രേഖകളുള്ള വയലുകൾ',
    c_rice:'നെല്ല്',c_wheat:'ഗോതമ്പ്',c_tomato:'തക്കാളി',c_cotton:'പരുത്തി'}
};

const CROPS = {rice:'🌾',wheat:'🌿',tomato:'🍅',cotton:'☁️',maize:'🌽',sugarcane:'🎋',chilli:'🌶️',banana:'🍌'};
const STAGES = ['sow','grow','flower','ready','done'];
const STAGE_ICON = ['🌱','🌿','🌸','🧺','✅'];
const BG = [
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=70',
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=70',
  'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1800&q=70'
];

/* ============ STATE ============ */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const store = {
  get(k,d){try{return JSON.parse(localStorage.getItem(k)) ?? d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
let lang = store.get('hv_lang','en');
let user = store.get('hv_user',null);
const SEED_FIELDS=[
  {id:1,name:'Green Valley',crop:'rice',area:2.5,stage:1},
  {id:2,name:'Sunrise Farm',crop:'tomato',area:1.2,stage:2},
  {id:3,name:'Harvest Hope',crop:'wheat',area:3,stage:3},
  {id:4,name:'Golden Maize',crop:'maize',area:2,stage:1},
  {id:5,name:'Sweet Cane',crop:'sugarcane',area:4,stage:2},
  {id:6,name:'Chilli Garden',crop:'chilli',area:0.8,stage:3},
  {id:7,name:'Banana Grove',crop:'banana',area:1.5,stage:1},
  {id:8,name:'Cotton Fields',crop:'cotton',area:2.2,stage:0}
];
function seedRecords(){
  const d=n=>new Date(Date.now()-n*864e5).toLocaleDateString(LANGS[lang].code);
  return [
    {type:'irrig',field:1,note:'Watered in the morning',date:d(6)},
    {type:'irrig',field:2,note:'Drip irrigation 30 min',date:d(5)},
    {type:'irrig',field:3,note:'Light watering',date:d(5)},
    {type:'irrig',field:4,note:'Canal water given',date:d(4)},
    {type:'irrig',field:5,note:'Full watering',date:d(3)},
    {type:'irrig',field:7,note:'Evening watering',date:d(2)},
    {type:'fert',field:1,note:'Urea - 1 bag',date:d(4)},
    {type:'fert',field:3,note:'DAP given',date:d(3)},
    {type:'fert',field:4,note:'Compost added',date:d(2)},
    {type:'fert',field:6,note:'Organic manure',date:d(1)},
    {type:'pest',field:2,note:'Small insects under leaves',date:d(2)},
    {type:'pest',field:6,note:'Few leaf spots seen',date:d(1)}
  ];
}
let fields = store.get('hv_fields_v2',SEED_FIELDS);
let records = store.get('hv_records_v2',seedRecords());
let careType = 'irrig';
const t = k => (LANGS[lang] && LANGS[lang][k]) || LANGS.en[k] || k;

/* ============ LANGUAGE ============ */
function buildLangBars(){
  ['#langBarLogin','#langBarApp'].forEach(sel=>{
    const bar = $(sel); bar.innerHTML='';
    Object.entries(LANGS).forEach(([k,v])=>{
      const b = document.createElement('button');
      b.textContent = v.label; b.className = k===lang?'on':'';
      b.onclick = ()=>{lang=k;store.set('hv_lang',k);applyLang()};
      bar.appendChild(b);
    });
  });
}
function applyLang(){
  document.documentElement.lang = lang;
  $$('[data-i]').forEach(el=>el.textContent = t(el.dataset.i));
  $$('[data-ph]').forEach(el=>el.placeholder = t(el.dataset.ph));
  buildLangBars();
  fillSelects();
  if(user) renderAll();
  setDate();
  if(window.botLang) window.botLang();
}
function setDate(){
  try{ $('#today').textContent = new Date().toLocaleDateString(LANGS[lang].code,{weekday:'long',day:'numeric',month:'long',year:'numeric'}); }catch(e){}
}

/* ============ LISTEN (voice for people who cannot read) ============ */
function speak(text){
  if(!('speechSynthesis' in window)) return toast('🔇');
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = LANGS[lang].code; u.rate = .9;
  speechSynthesis.speak(u);
}
$('[data-listen]').onclick = ()=>speak(`${t('heroTitle')}. ${t('signin')}`);

/* ============ LOGIN ============ */
let bgI = 0;
function rotateBg(){
  $('#loginBg').style.backgroundImage = `url(${BG[bgI%BG.length]})`;
  bgI++;
}
rotateBg(); setInterval(()=>{ if(!user) rotateBg(); },7000);

$('#loginForm').onsubmit = e=>{
  e.preventDefault();
  user = $('#uName').value.trim();
  store.set('hv_user',user);
  showApp();
};
$('#logout').onclick = ()=>{
  user=null; store.set('hv_user',null);
  $('#app').classList.add('hidden'); $('#loginPage').classList.remove('hidden');
};
function showApp(){
  $('#loginPage').classList.add('hidden'); $('#app').classList.remove('hidden');
  $('#who').textContent = user;
  go('home'); renderAll();
}

/* ============ NAVIGATION ============ */
function go(v){
  $$('.view').forEach(x=>x.classList.add('hidden'));
  $('#v-'+v).classList.remove('hidden');
  $$('.side nav a').forEach(a=>a.classList.toggle('active',a.dataset.go===v));
  $('#side').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
}
$$('.side nav a').forEach(a=>a.onclick=()=>go(a.dataset.go));
$('#burger').onclick = ()=>$('#side').classList.toggle('open');

/* ============ RENDER ============ */
function stageClass(i){return ['g0','g1c','g2c','g3c','g4c'][i]}
function fieldCard(f, withSelect){
  const pct = (f.stage+1)/STAGES.length*100;
  const steps = STAGE_ICON.map((ic,i)=>`<span class="${i<=f.stage?'on':''}">${ic}</span>`).join('');
  const sel = withSelect ? `<select onchange="setStage(${f.id},this.value)">${STAGES.map((s,i)=>`<option value="${i}" ${i===f.stage?'selected':''}>${STAGE_ICON[i]} ${t(s)}</option>`).join('')}</select>` : '';
  return `<div class="field">
    <div class="cover ph-${f.crop}"><span>${CROPS[f.crop]||'🌱'}</span></div>
    <div class="head ${stageClass(f.stage)}"><div class="em">${CROPS[f.crop]||'🌱'}</div>
      <div><h4>${esc(f.name)}</h4><small>${t('c_'+f.crop)} · ${f.area} ${t('acres')}</small></div></div>
    <div class="body"><span class="badge ${stageClass(f.stage)}">${STAGE_ICON[f.stage]} ${t(STAGES[f.stage])}</span>
      <div class="bar"><i style="width:${pct}%"></i></div><div class="steps">${steps}</div>${chipsFor(f)}${sel}</div></div>`;
}
function chipsFor(f){
  const c=x=>records.filter(r=>r.field===f.id&&r.type===x).length;
  const w=c('irrig'),fe=c('fert'),p=c('pest');
  return `<div class="chips"><span class="chip w ${w?'':'z'}">💧 ${w}</span><span class="chip f ${fe?'':'z'}">🌿 ${fe}</span><span class="chip p ${p?'':'z'}">🐛 ${p}</span></div>`;
}
let filter='all';
function renderFieldList(){
  const bar=$('#filters');
  const opts=['all',...STAGES.map((x,i)=>i)];
  bar.innerHTML=opts.map(o=>{const lab=o==='all'?t('all'):STAGE_ICON[o]+' '+t(STAGES[o]);return `<button class="fpill ${String(o)===String(filter)?'on':''}" data-f="${o}">${lab}</button>`}).join('');
  bar.querySelectorAll('button').forEach(b=>b.onclick=()=>{filter=b.dataset.f;renderFieldList()});
  const list=fields.filter(f=>filter==='all'||f.stage===+filter);
  $('#fieldList').innerHTML=list.map(f=>fieldCard(f,true)).join('')||`<p class="muted">${t('noRec')}</p>`;
}
function renderScore(){
  const ids=new Set(fields.map(f=>f.id));
  const cnt=ty=>new Set(records.filter(r=>r.type===ty&&ids.has(r.field)).map(r=>r.field)).size;
  const w=cnt('irrig'),fe=cnt('fert'),n=fields.length;
  const p=n?Math.round((w+fe)/(2*n)*100):0;
  $('#score').innerHTML=`<div class="ring" style="--p:${p}"><b>${p}%</b></div><div><h4>${t('score')}</h4><p class="muted">${t('scoreSub')}</p><div class="chips"><span class="chip w">💧 ${w}/${n}</span><span class="chip f">🌿 ${fe}/${n}</span></div></div>`;
}
function renderAll(){
  const water = records.filter(r=>r.type==='irrig').length;
  const pests = records.filter(r=>r.type==='pest').length;
  const ready = fields.filter(f=>f.stage===3).length;
  $('#stats').innerHTML = [
    ['s1','🗺️',fields.length,'sFields'],['s2','💧',water,'sWater'],['s3','🐛',pests,'sPest'],['s4','🧺',ready,'sHarv']
  ].map(([c,ic,n,k])=>`<div class="stat ${c}"><div class="ic">${ic}</div><b>${n}</b><span>${t(k)}</span></div>`).join('');
  $('#homeFields').innerHTML = fields.slice(0,4).map(f=>fieldCard(f,false)).join('');
  renderFieldList(); renderScore();
  $('#harvestList').innerHTML = fields.map(f=>fieldCard(f,true)).join('');
  const icons = {irrig:'💧',fert:'🌿',pest:'🐛'};
  $('#history').innerHTML = records.length ? records.slice().reverse().slice(0,15).map(r=>{
    const f = fields.find(x=>x.id===r.field);
    return `<div class="rec"><div class="ri">${icons[r.type]}</div><div><b>${t(r.type)}</b> — ${f?esc(f.name):''}<br><small>${esc(r.note)} · ${r.date}</small></div></div>`;
  }).join('') : `<p class="muted">${t('noRec')}</p>`;
}
function fillSelects(){
  $('#fCrop').innerHTML = Object.keys(CROPS).map(c=>`<option value="${c}">${CROPS[c]} ${t('c_'+c)}</option>`).join('');
  $('#fStage').innerHTML = STAGES.map((s,i)=>`<option value="${i}">${STAGE_ICON[i]} ${t(s)}</option>`).join('');
  $('#cField').innerHTML = fields.map(f=>`<option value="${f.id}">${esc(f.name)}</option>`).join('');
}
window.setStage = (id,v)=>{
  const f = fields.find(x=>x.id===id); f.stage = +v;
  store.set('hv_fields_v2',fields); renderAll(); toast(t('saved'));
};
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

/* ============ MODALS ============ */
$('#openAdd').onclick = ()=>$('#mField').classList.remove('hidden');
$$('[data-close]').forEach(b=>b.onclick=()=>b.closest('.modal').classList.add('hidden'));
$$('.modal').forEach(m=>m.onclick=e=>{if(e.target===m)m.classList.add('hidden')});

$('#fieldForm').onsubmit = e=>{
  e.preventDefault();
  fields.push({id:Date.now(),name:$('#fName').value.trim(),crop:$('#fCrop').value,area:+$('#fArea').value,stage:+$('#fStage').value});
  store.set('hv_fields_v2',fields); e.target.reset();
  $('#mField').classList.add('hidden'); fillSelects(); renderAll(); toast(t('saved'));
};
$$('.care').forEach(c=>c.onclick=()=>{
  careType = c.dataset.type; $('#careTitle').textContent = t(careType);
  fillSelects(); $('#mCare').classList.remove('hidden');
});
$('#careForm').onsubmit = e=>{
  e.preventDefault();
  records.push({type:careType,field:+$('#cField').value,note:$('#cNote').value.trim(),date:new Date().toLocaleDateString(LANGS[lang].code)});
  store.set('hv_records_v2',records); e.target.reset();
  $('#mCare').classList.add('hidden'); renderAll(); toast(t('saved'));
};

/* ============ TOAST ============ */
function toast(m){
  const el = $('#toast'); el.textContent = m; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1800);
}

/* ============ EXTRAS: animation ============ */
document.documentElement.classList.add('js');
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12}) : null;
function watchReveal(){ $$('.reveal:not(.show)').forEach(el=>io?io.observe(el):el.classList.add('show')); }
function countUp(){
  $$('.stat b').forEach(b=>{
    const end=+b.textContent||0; let n=0; if(!end) return;
    const step=Math.max(1,Math.ceil(end/20));
    const id=setInterval(()=>{n=Math.min(end,n+step);b.textContent=n;if(n>=end)clearInterval(id)},35);
  });
}
$('#bannerBtn').onclick = ()=>go('fields');
$('#viewAll').onclick = ()=>go('fields');
const _go = go;
go = function(v){ _go(v); setTimeout(watchReveal,50); };
const _render = renderAll;
renderAll = function(){ _render(); countUp(); };

/* ============ START ============ */
applyLang();
if(user) showApp();
