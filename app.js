"use strict";

const translations = {
  en: {
    languageLabel: "Choose language",
    eyebrow: "YOUR FARM, SIMPLIFIED",
    welcomeTitle: "Welcome, Farmer!",
    welcomeText: "Manage your fields, crops, irrigation and harvest in one simple place. Listen to instructions or use voice assistance.",
    accessTitle: "Easy access",
    readButton: "🔊 Read this page aloud",
    voiceButton: "🎤 Start voice assistance",
    stopButton: "⏹ Stop voice",
    ready: "Voice assistance is ready.",
    loginTitle: "Farmer Login",
    loginDescription: "Enter your registered mobile number and password.",
    phoneLabel: "Mobile number",
    phonePlaceholder: "Enter mobile number",
    phoneHelp: "Type your number or use voice assistance.",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter password",
    passwordHelp: "Keep your password private. Enter it using the keyboard.",
    showPassword: "Show",
    hidePassword: "Hide",
    loginButton: "Login",
    choose: "Choose your language to begin.",
    demoNotice: "Demo only. Real login requires secure authentication.",
    footerText: "Harvestly · Simple farming tools for everyone",
    instructions: "Welcome to Harvestly. Choose your language. Enter your mobile number and password. You can listen to this page or use voice assistance. Keep your password private.",
    listening: "Listening. Please speak now.",
    unsupported: "Voice recognition is not supported in this browser. Try the Read Aloud button or type your details.",
    permission: "Microphone access was blocked. Allow microphone permission in your browser settings.",
    noSpeech: "No clear speech detected. Please try again.",
    heard: "I heard: ",
    numberPrompt: "Please say your mobile number, one digit at a time.",
    numberSaved: "Mobile number entered. Enter your password using the keyboard.",
    invalidPhone: "Enter a valid mobile number using 10 to 15 digits.",
    missingPassword: "Please enter your password.",
    loginDemo: "This is a demonstration only. No account was logged in. A secure authentication service is needed for real login.",
    help: "Try saying: read page, mobile number, or login. Enter your password privately using the keyboard.",
    voiceError: "Voice assistance could not start. Please try again.",
    loginCommand: "This demo cannot log you into an account. Secure authentication must be connected first."
  },
  hi: {
    languageLabel: "भाषा चुनें",
    eyebrow: "आपके खेत का आसान प्रबंधन",
    welcomeTitle: "नमस्ते किसान!",
    welcomeText: "अपने खेत, फसल, सिंचाई और कटाई का काम एक ही जगह संभालें। निर्देश सुनें या आवाज़ से सहायता लें।",
    accessTitle: "आसान सहायता",
    readButton: "🔊 पेज सुनें",
    voiceButton: "🎤 आवाज़ से सहायता लें",
    stopButton: "⏹ आवाज़ रोकें",
    ready: "आवाज़ से सहायता तैयार है।",
    loginTitle: "किसान लॉगिन",
    loginDescription: "अपना पंजीकृत मोबाइल नंबर और पासवर्ड दर्ज करें।",
    phoneLabel: "मोबाइल नंबर",
    phonePlaceholder: "मोबाइल नंबर दर्ज करें",
    phoneHelp: "नंबर लिखें या आवाज़ से सहायता लें।",
    passwordLabel: "पासवर्ड",
    passwordPlaceholder: "पासवर्ड दर्ज करें",
    passwordHelp: "पासवर्ड गोपनीय रखें और कीबोर्ड से दर्ज करें।",
    showPassword: "दिखाएं",
    hidePassword: "छिपाएं",
    loginButton: "लॉगिन करें",
    choose: "शुरू करने के लिए अपनी भाषा चुनें।",
    demoNotice: "यह डेमो है। असली लॉगिन के लिए सुरक्षित प्रमाणीकरण चाहिए।",
    footerText: "Harvestly · सभी के लिए आसान खेती के साधन",
    instructions: "हार्वेस्टली में आपका स्वागत है। अपनी भाषा चुनें। मोबाइल नंबर और पासवर्ड दर्ज करें। आप पेज सुन सकते हैं या आवाज़ से सहायता ले सकते हैं। पासवर्ड गोपनीय रखें।",
    listening: "सुन रहा है। कृपया बोलें।",
    unsupported: "इस ब्राउज़र में आवाज़ पहचान उपलब्ध नहीं है। पेज सुनें या जानकारी लिखें।",
    permission: "माइक्रोफ़ोन की अनुमति नहीं मिली। ब्राउज़र सेटिंग में अनुमति दें।",
    noSpeech: "आवाज़ स्पष्ट नहीं मिली। फिर कोशिश करें।",
    heard: "आपने कहा: ",
    numberPrompt: "कृपया अपना मोबाइल नंबर एक-एक अंक करके बोलें।",
    numberSaved: "मोबाइल नंबर दर्ज हो गया। पासवर्ड कीबोर्ड से दर्ज करें।",
    invalidPhone: "10 से 15 अंकों का सही मोबाइल नंबर दर्ज करें।",
    missingPassword: "कृपया पासवर्ड दर्ज करें।",
    loginDemo: "यह केवल डेमो है। किसी खाते में लॉगिन नहीं हुआ। असली लॉगिन के लिए सुरक्षित प्रमाणीकरण चाहिए।",
    help: "आप कह सकते हैं: पेज पढ़ें, मोबाइल नंबर, या लॉगिन। पासवर्ड कीबोर्ड से गोपनीय तरीके से दर्ज करें।",
    voiceError: "आवाज़ सहायता शुरू नहीं हो सकी। फिर कोशिश करें।",
    loginCommand: "यह डेमो किसी खाते में लॉगिन नहीं कर सकता। पहले सुरक्षित प्रमाणीकरण जोड़ना होगा।"
  },
  pa: {
    languageLabel: "ਭਾਸ਼ਾ ਚੁਣੋ",
    eyebrow: "ਤੁਹਾਡੇ ਖੇਤ ਦਾ ਆਸਾਨ ਪ੍ਰਬੰਧ",
    welcomeTitle: "ਜੀ ਆਇਆਂ ਨੂੰ, ਕਿਸਾਨ ਜੀ!",
    welcomeText: "ਆਪਣੇ ਖੇਤਾਂ, ਫ਼ਸਲਾਂ, ਸਿੰਚਾਈ ਅਤੇ ਵਾਢੀ ਦਾ ਕੰਮ ਇੱਕੋ ਥਾਂ ਸੰਭਾਲੋ। ਹਦਾਇਤਾਂ ਸੁਣੋ ਜਾਂ ਆਵਾਜ਼ ਰਾਹੀਂ ਮਦਦ ਲਵੋ।",
    accessTitle: "ਸੌਖੀ ਮਦਦ",
    readButton: "🔊 ਪੰਨਾ ਸੁਣੋ",
    voiceButton: "🎤 ਆਵਾਜ਼ ਰਾਹੀਂ ਮਦਦ ਲਵੋ",
    stopButton: "⏹ ਆਵਾਜ਼ ਰੋਕੋ",
    ready: "ਆਵਾਜ਼ ਰਾਹੀਂ ਮਦਦ ਤਿਆਰ ਹੈ।",
    loginTitle: "ਕਿਸਾਨ ਲੌਗਇਨ",
    loginDescription: "ਆਪਣਾ ਰਜਿਸਟਰ ਕੀਤਾ ਮੋਬਾਈਲ ਨੰਬਰ ਅਤੇ ਪਾਸਵਰਡ ਭਰੋ।",
    phoneLabel: "ਮੋਬਾਈਲ ਨੰਬਰ",
    phonePlaceholder: "ਮੋਬਾਈਲ ਨੰਬਰ ਭਰੋ",
    phoneHelp: "ਨੰਬਰ ਲਿਖੋ ਜਾਂ ਆਵਾਜ਼ ਰਾਹੀਂ ਮਦਦ ਲਵੋ।",
    passwordLabel: "ਪਾਸਵਰਡ",
    passwordPlaceholder: "ਪਾਸਵਰਡ ਭਰੋ",
    passwordHelp: "ਪਾਸਵਰਡ ਗੁਪਤ ਰੱਖੋ ਅਤੇ ਕੀਬੋਰਡ ਰਾਹੀਂ ਭਰੋ।",
    showPassword: "ਵਿਖਾਓ",
    hidePassword: "ਲੁਕਾਓ",
    loginButton: "ਲੌਗਇਨ ਕਰੋ",
    choose: "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ।",
    demoNotice: "ਇਹ ਡੈਮੋ ਹੈ। ਅਸਲੀ ਲੌਗਇਨ ਲਈ ਸੁਰੱਖਿਅਤ ਪ੍ਰਮਾਣਿਕਤਾ ਚਾਹੀਦੀ ਹੈ।",
    footerText: "Harvestly · ਹਰ ਕਿਸੇ ਲਈ ਸੌਖੇ ਖੇਤੀ ਸਾਧਨ",
    instructions: "ਹਾਰਵੈਸਟਲੀ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ। ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ। ਮੋਬਾਈਲ ਨੰਬਰ ਅਤੇ ਪਾਸਵਰਡ ਭਰੋ। ਪੰਨਾ ਸੁਣੋ ਜਾਂ ਆਵਾਜ਼ ਰਾਹੀਂ ਮਦਦ ਲਵੋ। ਪਾਸਵਰਡ ਗੁਪਤ ਰੱਖੋ।",
    listening: "ਸੁਣ ਰਿਹਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਬੋਲੋ।",
    unsupported: "ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਆਵਾਜ਼ ਪਛਾਣ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਪੰਨਾ ਸੁਣੋ ਜਾਂ ਜਾਣਕਾਰੀ ਲਿਖੋ।",
    permission: "ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਮਿਲੀ। ਬ੍ਰਾਊਜ਼ਰ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਇਜਾਜ਼ਤ ਦਿਓ।",
    noSpeech: "ਆਵਾਜ਼ ਸਪਸ਼ਟ ਨਹੀਂ ਮਿਲੀ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    heard: "ਤੁਸੀਂ ਕਿਹਾ: ",
    numberPrompt: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਇੱਕ-ਇੱਕ ਅੰਕ ਕਰਕੇ ਬੋਲੋ।",
    numberSaved: "ਮੋਬਾਈਲ ਨੰਬਰ ਭਰ ਦਿੱਤਾ ਗਿਆ ਹੈ। ਪਾਸਵਰਡ ਕੀਬੋਰਡ ਰਾਹੀਂ ਭਰੋ।",
    invalidPhone: "10 ਤੋਂ 15 ਅੰਕਾਂ ਵਾਲਾ ਸਹੀ ਮੋਬਾਈਲ ਨੰਬਰ ਭਰੋ।",
    missingPassword: "ਕਿਰਪਾ ਕਰਕੇ ਪਾਸਵਰਡ ਭਰੋ।",
    loginDemo: "ਇਹ ਸਿਰਫ਼ ਡੈਮੋ ਹੈ। ਕਿਸੇ ਖਾਤੇ ਵਿੱਚ ਲੌਗਇਨ ਨਹੀਂ ਹੋਇਆ। ਅਸਲੀ ਲੌਗਇਨ ਲਈ ਸੁਰੱਖਿਅਤ ਪ੍ਰਮਾਣਿਕਤਾ ਚਾਹੀਦੀ ਹੈ।",
    help: "ਤੁਸੀਂ ਕਹਿ ਸਕਦੇ ਹੋ: ਪੰਨਾ ਪੜ੍ਹੋ, ਮੋਬਾਈਲ ਨੰਬਰ ਜਾਂ ਲੌਗਇਨ। ਪਾਸਵਰਡ ਕੀਬੋਰਡ ਰਾਹੀਂ ਗੁਪਤ ਰੱਖ ਕੇ ਭਰੋ।",
    voiceError: "ਆਵਾਜ਼ ਸਹਾਇਤਾ ਸ਼ੁਰੂ ਨਹੀਂ ਹੋ ਸਕੀ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    loginCommand: "ਇਹ ਡੈਮੋ ਕਿਸੇ ਖਾਤੇ ਵਿੱਚ ਲੌਗਇਨ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਪਹਿਲਾਂ ਸੁਰੱਖਿਅਤ ਪ੍ਰਮਾਣਿਕਤਾ ਜੋੜੋ।"
  },
  te: {
    languageLabel: "భాషను ఎంచుకోండి",
    eyebrow: "మీ వ్యవసాయం మరింత సులభం",
    welcomeTitle: "స్వాగతం రైతన్న!",
    welcomeText: "మీ పొలాలు, పంటలు, నీటిపారుదల, కోత పనులను ఒకే చోట నిర్వహించండి. సూచనలను వినండి లేదా వాయిస్ సహాయం పొందండి.",
    accessTitle: "సులభమైన సహాయం",
    readButton: "🔊 పేజీని వినండి",
    voiceButton: "🎤 వాయిస్ సహాయం ప్రారంభించండి",
    stopButton: "⏹ వాయిస్ ఆపండి",
    ready: "వాయిస్ సహాయం సిద్ధంగా ఉంది.",
    loginTitle: "రైతు లాగిన్",
    loginDescription: "మీ నమోదిత మొబైల్ నంబర్ మరియు పాస్‌వర్డ్ నమోదు చేయండి.",
    phoneLabel: "మొబైల్ నంబర్",
    phonePlaceholder: "మొబైల్ నంబర్ నమోదు చేయండి",
    phoneHelp: "నంబర్ టైప్ చేయండి లేదా వాయిస్ సహాయం పొందండి.",
    passwordLabel: "పాస్‌వర్డ్",
    passwordPlaceholder: "పాస్‌వర్డ్ నమోదు చేయండి",
    passwordHelp: "పాస్‌వర్డ్‌ను రహస్యంగా ఉంచి కీబోర్డ్‌తో నమోదు చేయండి.",
    showPassword: "చూపించు",
    hidePassword: "దాచు",
    loginButton: "లాగిన్",
    choose: "ప్రారంభించడానికి మీ భాషను ఎంచుకోండి.",
    demoNotice: "ఇది డెమో. నిజమైన లాగిన్‌కు సురక్షిత ధృవీకరణ అవసరం.",
    footerText: "Harvestly · అందరికీ సులభమైన వ్యవసాయ సాధనాలు",
    instructions: "హార్వెస్ట్లీకి స్వాగతం. మీ భాషను ఎంచుకోండి. మొబైల్ నంబర్ మరియు పాస్‌వర్డ్ నమోదు చేయండి. పేజీని వినండి లేదా వాయిస్ సహాయం పొందండి. పాస్‌వర్డ్‌ను రహస్యంగా ఉంచండి.",
    listening: "వింటున్నాను. దయచేసి మాట్లాడండి.",
    unsupported: "ఈ బ్రౌజర్‌లో వాయిస్ గుర్తింపు అందుబాటులో లేదు. పేజీని వినండి లేదా వివరాలను టైప్ చేయండి.",
    permission: "మైక్రోఫోన్ అనుమతి లేదు. బ్రౌజర్ సెట్టింగ్‌లలో అనుమతించండి.",
    noSpeech: "స్పష్టమైన మాటలు గుర్తించలేదు. మళ్లీ ప్రయత్నించండి.",
    heard: "మీరు చెప్పింది: ",
    numberPrompt: "దయచేసి మీ మొబైల్ నంబర్‌ను ఒక్కో అంకెగా చెప్పండి.",
    numberSaved: "మొబైల్ నంబర్ నమోదు అయింది. పాస్‌వర్డ్‌ను కీబోర్డ్‌తో నమోదు చేయండి.",
    invalidPhone: "10 నుంచి 15 అంకెల సరైన మొబైల్ నంబర్ నమోదు చేయండి.",
    missingPassword: "దయచేసి పాస్‌వర్డ్ నమోదు చేయండి.",
    loginDemo: "ఇది డెమో మాత్రమే. ఏ ఖాతాలోనూ లాగిన్ కాలేదు. నిజమైన లాగిన్‌కు సురక్షిత ధృవీకరణ అవసరం.",
    help: "పేజీ చదవండి, మొబైల్ నంబర్ లేదా లాగిన్ అని చెప్పవచ్చు. పాస్‌వర్డ్‌ను కీబోర్డ్‌తో రహస్యంగా నమోదు చేయండి.",
    voiceError: "వాయిస్ సహాయం ప్రారంభం కాలేదు. మళ్లీ ప్రయత్నించండి.",
    loginCommand: "ఈ డెమో ఖాతాలోకి లాగిన్ చేయదు. ముందుగా సురక్షిత ధృవీకరణను జోడించండి."
  },
  ta: {
    languageLabel: "மொழியைத் தேர்ந்தெடுக்கவும்",
    eyebrow: "உங்கள் விவசாயம் எளிமையாக",
    welcomeTitle: "விவசாயி, வரவேற்கிறோம்!",
    welcomeText: "உங்கள் வயல்கள், பயிர்கள், நீர்ப்பாசனம் மற்றும் அறுவடைப் பணிகளை ஒரே இடத்தில் நிர்வகிக்கவும். வழிமுறைகளைக் கேளுங்கள் அல்லது குரல் உதவியைப் பயன்படுத்துங்கள்.",
    accessTitle: "எளிய உதவி",
    readButton: "🔊 இந்தப் பக்கத்தைக் கேளுங்கள்",
    voiceButton: "🎤 குரல் உதவியைத் தொடங்கவும்",
    stopButton: "⏹ குரலை நிறுத்தவும்",
    ready: "குரல் உதவி தயாராக உள்ளது.",
    loginTitle: "விவசாயி உள்நுழைவு",
    loginDescription: "பதிவு செய்த கைப்பேசி எண் மற்றும் கடவுச்சொல்லை உள்ளிடவும்.",
    phoneLabel: "கைப்பேசி எண்",
    phonePlaceholder: "கைப்பேசி எண்ணை உள்ளிடவும்",
    phoneHelp: "எண்ணைத் தட்டச்சு செய்யவும் அல்லது குரல் உதவியைப் பயன்படுத்தவும்.",
    passwordLabel: "கடவுச்சொல்",
    passwordPlaceholder: "கடவுச்சொல்லை உள்ளிடவும்",
    passwordHelp: "கடவுச்சொல்லை ரகசியமாக வைத்து விசைப்பலகையில் உள்ளிடவும்.",
    showPassword: "காட்டு",
    hidePassword: "மறை",
    loginButton: "உள்நுழைக",
    choose: "தொடங்க உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்.",
    demoNotice: "இது ஒரு மாதிரிப் பக்கம். உண்மையான உள்நுழைவுக்குப் பாதுகாப்பான அங்கீகாரம் தேவை.",
    footerText: "Harvestly · அனைவருக்கும் எளிய விவசாயக் கருவிகள்",
    instructions: "ஹார்வெஸ்ட்லிக்கு வரவேற்கிறோம். உங்கள் மொழியைத் தேர்ந்தெடுக்கவும். கைப்பேசி எண்ணையும் கடவுச்சொல்லையும் உள்ளிடவும். பக்கத்தைக் கேளுங்கள் அல்லது குரல் உதவியைப் பயன்படுத்துங்கள். கடவுச்சொல்லை ரகசியமாக வைத்திருக்கவும்.",
    listening: "கேட்கிறது. தயவுசெய்து பேசவும்.",
    unsupported: "இந்த உலாவியில் குரல் அடையாளம் காணுதல் கிடைக்கவில்லை. பக்கத்தைக் கேளுங்கள் அல்லது விவரங்களைத் தட்டச்சு செய்யுங்கள்.",
    permission: "ஒலிவாங்கி அனுமதி இல்லை. உலாவி அமைப்புகளில் அனுமதிக்கவும்.",
    noSpeech: "தெளிவான பேச்சு கண்டறியப்படவில்லை. மீண்டும் முயற்சிக்கவும்.",
    heard: "நீங்கள் கூறியது: ",
    numberPrompt: "உங்கள் கைப்பேசி எண்ணை ஒவ்வொரு இலக்கமாகக் கூறவும்.",
    numberSaved: "கைப்பேசி எண் உள்ளிடப்பட்டது. கடவுச்சொல்லை விசைப்பலகையில் உள்ளிடவும்.",
    invalidPhone: "10 முதல் 15 இலக்கங்களைக் கொண்ட சரியான கைப்பேசி எண்ணை உள்ளிடவும்.",
    missingPassword: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்.",
    loginDemo: "இது ஒரு மாதிரி மட்டுமே. எந்தக் கணக்கிலும் உள்நுழையவில்லை. உண்மையான உள்நுழைவுக்குப் பாதுகாப்பான அங்கீகாரம் தேவை.",
    help: "பக்கத்தைப் படி, கைப்பேசி எண் அல்லது உள்நுழை என்று கூறலாம். கடவுச்சொல்லை நீங்களே ரகசியமாக உள்ளிடவும்.",
    voiceError: "குரல் உதவி தொடங்கவில்லை. மீண்டும் முயற்சிக்கவும்.",
    loginCommand: "இந்த மாதிரிப் பக்கம் கணக்கில் உள்நுழையாது. முதலில் பாதுகாப்பான அங்கீகாரத்தை இணைக்கவும்."
  }
};

const speechLocales = {
  en: "en-IN",
  hi: "hi-IN",
  pa: "pa-IN",
  te: "te-IN",
  ta: "ta-IN"
};

const $ = id => document.getElementById(id);

const languageSelect = $("language");
const phoneInput = $("phone");
const passwordInput = $("password");
const statusBox = $("status");
const voiceStatus = $("voiceStatus");
const voiceButton = $("voiceButton");

let currentLanguage = "en";
let recognition = null;
let listeningForPhone = false;

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function setText(id, key) {
  const element = $(id);
  if (element) element.textContent = t(key);
}

function speak(message) {
  if (!("speechSynthesis" in window)) {
    voiceStatus.textContent = t("unsupported");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = speechLocales[currentLanguage];
  utterance.rate = 0.88;

  utterance.onerror = () => {
    voiceStatus.textContent = t("voiceError");
  };

  window.speechSynthesis.speak(utterance);
}

function readPage() {
  speak([
    t("welcomeTitle"),
    t("welcomeText"),
    t("loginTitle"),
    t("loginDescription"),
    t("phoneLabel"),
    t("passwordLabel"),
    t("help")
  ].join(". "));
}

function applyLanguage() {
  currentLanguage = languageSelect.value;
  document.documentElement.lang = speechLocales[currentLanguage];

  [
    "languageLabel", "eyebrow", "welcomeTitle", "welcomeText",
    "accessTitle", "readButton", "voiceButton", "stopButton",
    "loginTitle", "loginDescription", "phoneLabel", "phoneHelp",
    "passwordLabel", "passwordHelp", "loginButton", "demoNotice",
    "footerText"
  ].forEach(id => setText(id, id));

  phoneInput.placeholder = t("phonePlaceholder");
  passwordInput.placeholder = t("passwordPlaceholder");

  $("showPassword").textContent =
    passwordInput.type === "password" ? t("showPassword") : t("hidePassword");

  voiceStatus.textContent = t("ready");
  statusBox.textContent = t("choose");

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  setupRecognition();
}

function setupRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  recognition = null;

  if (!SpeechRecognition) return;

  recognition = new SpeechRecognition();
  recognition.lang = speechLocales[currentLanguage];
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    voiceButton.disabled = true;
    voiceStatus.textContent = listeningForPhone
      ? t("numberPrompt")
      : t("listening");
  };

  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript.trim();
    const command = transcript.toLowerCase();

    voiceStatus.textContent = t("heard") + transcript;

    if (listeningForPhone) {
      const digits = transcript.replace(/\D/g, "");
      listeningForPhone = false;

      if (digits.length >= 10 && digits.length <= 15) {
        phoneInput.value = digits;
        statusBox.textContent = t("numberSaved");
        speak(t("numberSaved"));
      } else {
        statusBox.textContent = t("invalidPhone");
        speak(t("invalidPhone"));
      }
      return;
    }

    if (
      command.includes("read page") ||
      command.includes("पेज पढ़") ||
      command.includes("पन्ना पढ़") ||
      command.includes("ਪੰਨਾ ਪੜ੍ਹ") ||
      command.includes("పేజీ చద") ||
      command.includes("பக்கத்தைப் படி")
    ) {
      readPage();
      return;
    }

    if (
      command.includes("mobile") ||
      command.includes("number") ||
      command.includes("नंबर") ||
      command.includes("ਮੋਬਾਈਲ") ||
      command.includes("నంబర్") ||
      command.includes("எண்")
    ) {
      askForPhone();
      return;
    }

    if (
      command.includes("login") ||
      command.includes("लॉगिन") ||
      command.includes("ਲੌਗਇਨ") ||
      command.includes("లాగిన్") ||
      command.includes("உள்நுழை")
    ) {
      statusBox.textContent = t("loginCommand");
      speak(t("loginCommand"));
      return;
    }

    statusBox.textContent = t("help");
    speak(t("help"));
  };

  recognition.onerror = event => {
    if (event.error === "not-allowed" ||
        event.error === "service-not-allowed") {
      voiceStatus.textContent = t("permission");
    } else if (event.error === "no-speech") {
      voiceStatus.textContent = t("noSpeech");
    } else {
      voiceStatus.textContent = t("voiceError");
    }
  };

  recognition.onend = () => {
    voiceButton.disabled = false;
  };
}

function startListeningForPhone() {
  if (!recognition) {
    voiceStatus.textContent = t("unsupported");
    return;
  }

  listeningForPhone = true;

  try {
    recognition.start();
  } catch (error) {
    listeningForPhone = false;
    voiceStatus.textContent = t("voiceError");
  }
}

function askForPhone() {
  if (!recognition) {
    voiceStatus.textContent = t("unsupported");
    return;
  }

  speak(t("numberPrompt"));

  // Wait for the spoken prompt to finish before starting the microphone.
  window.setTimeout(startListeningForPhone, 1800);
}

languageSelect.addEventListener("change", applyLanguage);

$("readButton").addEventListener("click", readPage);

voiceButton.addEventListener("click", () => {
  if (!recognition) {
    voiceStatus.textContent = t("unsupported");
    speak(t("unsupported"));
    return;
  }

  listeningForPhone = false;

  try {
    recognition.start();
  } catch (error) {
    voiceStatus.textContent = t("voiceError");
  }
});

$("stopButton").addEventListener("click", () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  listeningForPhone = false;

  if (recognition) {
    try {
      recognition.stop();
    } catch (error) {
      // The microphone may already be stopped.
    }
  }

  voiceStatus.textContent = t("ready");
});

$("showPassword").addEventListener("click", () => {
  const showing = passwordInput.type === "password";
  passwordInput.type = showing ? "text" : "password";
  $("showPassword").textContent =
    showing ? t("hidePassword") : t("showPassword");
});

$("loginForm").addEventListener("submit", event => {
  event.preventDefault();

  const phone = phoneInput.value.trim();
  const password = passwordInput.value;

  if (!/^\d{10,15}$/.test(phone)) {
    statusBox.textContent = t("invalidPhone");
    speak(t("invalidPhone"));
    phoneInput.focus();
    return;
  }

  if (!password.trim()) {
    statusBox.textContent = t("missingPassword");
    speak(t("missingPassword"));
    passwordInput.focus();
    return;
  }

  // Demo only: do not store or transmit passwords.
  statusBox.textContent = t("loginDemo");
  speak(t("loginDemo"));
});

applyLanguage();
