
/* =====================================================
   SMART FARMING — COMPLETE JAVASCRIPT
   Six languages | Dashboard | Records | Demo login
   ===================================================== */

"use strict";

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

/* ---------------- SIX LANGUAGE DICTIONARIES ---------------- */

const dictionaries = {
  en: {
    tagline: "YOUR DIGITAL FARMING COMPANION",
    welcome: "Grow smarter. Farm better.",
    welcomeText: "Your farm, your crops, your progress — all in one place.",
    visualCaption: "Better farming starts here.",
    farmerLogin: "FARMER LOGIN",
    loginTitle: "Welcome back!",
    loginText: "Sign in to manage your farm with ease.",
    chooseLanguage: "Choose your language",
    usernameLabel: "Your name",
    usernamePlaceholder: "Enter your name",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter any demo password",
    signIn: "Enter my farm",
    demoNote: "Demo website: use any name and password to continue.",
    loginFooter: "Farm Manager · Made for farmers",
    loadingLabel: "PLEASE WAIT",
    loadingTitle: "Loading your farm data...",
    loadingCaption: "Preparing your farm dashboard...",
    farmManagement: "FARM MANAGEMENT",
    farmOwner: "Farm owner",
    workspace: "WORKSPACE",
    home: "Home",
    fields: "Fields",
    crops: "Crops",
    irrigation: "Irrigation",
    fertilizer: "Fertilizer",
    pests: "Pests",
    harvest: "Harvest",
    seasonTitle: "Kharif season",
    seasonText: "Demo season · India",
    logout: "Log out",
    goodDay: "GROW WITH CONFIDENCE",
    dashboard: "Farm dashboard",
    hello: "Hello",
    bannerText: "Here's what's happening on your farm today.",
    exploreFields: "Explore my fields",
    live: "LIVE",
    totalFields: "Total fields",
    activeCrops: "Active crops",
    waterToday: "Watering records",
    harvestReady: "Harvest progress",
    fieldsManaged: "Fields being managed",
    cropsGrowing: "Crops growing this season",
    irrigationTracked: "Irrigation records tracked",
    harvestProgress: "Average crop progress",
    yourFarm: "YOUR FARM",
    myFields: "My fields",
    viewAll: "View all",
    stayUpdated: "STAY UPDATED",
    recentActivity: "Recent activity",
    getStarted: "GET STARTED",
    quickActions: "Quick actions",
    addField: "Add a field",
    addCrop: "Add a crop",
    recordWater: "Record irrigation",
    updateHarvest: "Update harvest",
    farmRecords: "FARM RECORDS",
    addNew: "Add new",
    cancel: "Cancel",
    saveRecord: "Save record",
    footerText: "Growing a greener future, one field at a time.",
    fieldName: "Field name",
    cropName: "Crop name",
    field: "Field",
    crop: "Crop",
    area: "Area (acres)",
    stage: "Growth stage",
    progress: "Progress",
    date: "Date",
    amount: "Amount",
    unit: "Unit",
    notes: "Notes",
    type: "Type",
    status: "Status",
    actions: "Actions",
    selectField: "Select a field",
    selectCrop: "Select a crop",
    fertilizerType: "Fertilizer type",
    pestName: "Pest observed",
    harvestQuantity: "Harvest quantity",
    delete: "Delete",
    noRecords: "No records yet. Add your first record!",
    recordAdded: "Record added successfully!",
    recordDeleted: "Record deleted.",
    loginSuccess: "Welcome to your farm!",
    logoutSuccess: "You have logged out.",
    fillRequired: "Please complete all required fields.",
    confirmDelete: "Delete this record?",
    healthy: "Healthy",
    needsAttention: "Needs attention",
    seedling: "Seedling",
    vegetative: "Vegetative",
    flowering: "Flowering",
    maturity: "Maturity",
    rice: "Rice",
    tomato: "Tomato",
    maize: "Maize",
    wheat: "Wheat",
    vegetables: "Vegetables",
    nitrogen: "Nitrogen fertilizer",
    compost: "Organic compost",
    aphids: "Aphids",
    leafSpot: "Leaf spot",
    expected: "Expected",
    inProgress: "In progress",
    completed: "Completed",
    waterActivity: "Irrigation recorded",
    fertilizerActivity: "Fertilizer applied",
    pestActivity: "Pest observation updated",
    harvestActivity: "Harvest record updated",
    recentField: "New field added",
    today: "Today",
    yesterday: "Yesterday",
    kg: "kg",
    litres: "litres",
    name: "Name",
    dateToday: "Today",
    all: "All"
  },

  hi: {
    tagline: "आपका डिजिटल खेती सहायक",
    welcome: "समझदारी से खेती करें। बेहतर उगाएँ।",
    welcomeText: "आपका खेत, आपकी फसलें और आपकी प्रगति — सब एक जगह।",
    visualCaption: "बेहतर खेती की शुरुआत यहाँ से।",
    farmerLogin: "किसान लॉगिन",
    loginTitle: "वापस स्वागत है!",
    loginText: "अपने खेत का आसानी से प्रबंधन करें।",
    chooseLanguage: "अपनी भाषा चुनें",
    usernameLabel: "आपका नाम",
    usernamePlaceholder: "अपना नाम दर्ज करें",
    passwordLabel: "पासवर्ड",
    passwordPlaceholder: "कोई भी डेमो पासवर्ड दर्ज करें",
    signIn: "मेरे खेत में जाएँ",
    demoNote: "डेमो वेबसाइट: आगे बढ़ने के लिए कोई भी नाम और पासवर्ड डालें।",
    loginFooter: "खेत प्रबंधन · किसानों के लिए",
    loadingLabel: "कृपया प्रतीक्षा करें",
    loadingTitle: "आपके खेत का डेटा लोड हो रहा है...",
    loadingCaption: "आपका डैशबोर्ड तैयार हो रहा है...",
    farmManagement: "खेत प्रबंधन",
    farmOwner: "खेत के मालिक",
    workspace: "मुख्य मेनू",
    home: "होम",
    fields: "खेत",
    crops: "फसलें",
    irrigation: "सिंचाई",
    fertilizer: "उर्वरक",
    pests: "कीट",
    harvest: "कटाई",
    seasonTitle: "खरीफ का मौसम",
    seasonText: "डेमो मौसम · भारत",
    logout: "लॉग आउट",
    goodDay: "आत्मविश्वास से खेती करें",
    dashboard: "खेत डैशबोर्ड",
    hello: "नमस्ते",
    bannerText: "आज आपके खेत में क्या हो रहा है, यहाँ देखें।",
    exploreFields: "मेरे खेत देखें",
    live: "लाइव",
    totalFields: "कुल खेत",
    activeCrops: "सक्रिय फसलें",
    waterToday: "सिंचाई रिकॉर्ड",
    harvestReady: "कटाई की प्रगति",
    fieldsManaged: "प्रबंधित खेत",
    cropsGrowing: "इस मौसम में उगाई जा रही फसलें",
    irrigationTracked: "सिंचाई के रिकॉर्ड",
    harvestProgress: "फसलों की औसत प्रगति",
    yourFarm: "आपका खेत",
    myFields: "मेरे खेत",
    viewAll: "सभी देखें",
    stayUpdated: "नई जानकारी",
    recentActivity: "हाल की गतिविधियाँ",
    getStarted: "शुरू करें",
    quickActions: "त्वरित कार्य",
    addField: "खेत जोड़ें",
    addCrop: "फसल जोड़ें",
    recordWater: "सिंचाई दर्ज करें",
    updateHarvest: "कटाई अपडेट करें",
    farmRecords: "खेत के रिकॉर्ड",
    addNew: "नया जोड़ें",
    cancel: "रद्द करें",
    saveRecord: "रिकॉर्ड सहेजें",
    footerText: "हर खेत के साथ हरियाली बढ़ाएँ।",
    fieldName: "खेत का नाम",
    cropName: "फसल का नाम",
    field: "खेत",
    crop: "फसल",
    area: "क्षेत्रफल (एकड़)",
    stage: "विकास अवस्था",
    progress: "प्रगति",
    date: "तारीख",
    amount: "मात्रा",
    unit: "इकाई",
    notes: "विवरण",
    type: "प्रकार",
    status: "स्थिति",
    actions: "कार्य",
    selectField: "खेत चुनें",
    selectCrop: "फसल चुनें",
    fertilizerType: "उर्वरक का प्रकार",
    pestName: "देखा गया कीट",
    harvestQuantity: "कटाई की मात्रा",
    delete: "हटाएँ",
    noRecords: "अभी कोई रिकॉर्ड नहीं है। पहला रिकॉर्ड जोड़ें!",
    recordAdded: "रिकॉर्ड सफलतापूर्वक जोड़ा गया!",
    recordDeleted: "रिकॉर्ड हटा दिया गया।",
    loginSuccess: "आपके खेत में स्वागत है!",
    logoutSuccess: "आप लॉग आउट हो गए हैं।",
    fillRequired: "कृपया सभी आवश्यक जानकारी भरें।",
    confirmDelete: "क्या यह रिकॉर्ड हटाना है?",
    healthy: "स्वस्थ",
    needsAttention: "ध्यान देने की आवश्यकता",
    seedling: "अंकुर अवस्था",
    vegetative: "विकास अवस्था",
    flowering: "फूल आने की अवस्था",
    maturity: "पकने की अवस्था",
    rice: "धान",
    tomato: "टमाटर",
    maize: "मक्का",
    wheat: "गेहूँ",
    vegetables: "सब्जियाँ",
    nitrogen: "नाइट्रोजन उर्वरक",
    compost: "जैविक खाद",
    aphids: "माहू कीट",
    leafSpot: "पत्ती धब्बा रोग",
    expected: "अनुमानित",
    inProgress: "जारी है",
    completed: "पूरा हुआ",
    waterActivity: "सिंचाई दर्ज की गई",
    fertilizerActivity: "उर्वरक डाला गया",
    pestActivity: "कीट की जानकारी अपडेट हुई",
    harvestActivity: "कटाई का रिकॉर्ड अपडेट हुआ",
    recentField: "नया खेत जोड़ा गया",
    today: "आज",
    yesterday: "कल",
    kg: "किलोग्राम",
    litres: "लीटर",
    name: "नाम",
    dateToday: "आज",
    all: "सभी"
  },

  pa: {
    tagline: "ਤੁਹਾਡਾ ਡਿਜੀਟਲ ਖੇਤੀ ਸਹਾਇਕ",
    welcome: "ਸਮਝਦਾਰੀ ਨਾਲ ਖੇਤੀ ਕਰੋ। ਬਿਹਤਰ ਉਗਾਓ।",
    welcomeText: "ਤੁਹਾਡਾ ਖੇਤ, ਤੁਹਾਡੀਆਂ ਫ਼ਸਲਾਂ ਅਤੇ ਤਰੱਕੀ — ਸਭ ਇੱਕ ਥਾਂ।",
    visualCaption: "ਬਿਹਤਰ ਖੇਤੀ ਦੀ ਸ਼ੁਰੂਆਤ ਇੱਥੋਂ।",
    farmerLogin: "ਕਿਸਾਨ ਲੌਗਇਨ",
    loginTitle: "ਜੀ ਆਇਆਂ ਨੂੰ!",
    loginText: "ਆਪਣੇ ਖੇਤ ਦਾ ਆਸਾਨੀ ਨਾਲ ਪ੍ਰਬੰਧਨ ਕਰੋ।",
    chooseLanguage: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
    usernameLabel: "ਤੁਹਾਡਾ ਨਾਮ",
    usernamePlaceholder: "ਆਪਣਾ ਨਾਮ ਲਿਖੋ",
    passwordLabel: "ਪਾਸਵਰਡ",
    passwordPlaceholder: "ਕੋਈ ਵੀ ਡੈਮੋ ਪਾਸਵਰਡ ਲਿਖੋ",
    signIn: "ਮੇਰੇ ਖੇਤ ਵਿੱਚ ਜਾਓ",
    demoNote: "ਡੈਮੋ ਵੈੱਬਸਾਈਟ: ਅੱਗੇ ਵਧਣ ਲਈ ਕੋਈ ਵੀ ਨਾਮ ਅਤੇ ਪਾਸਵਰਡ ਵਰਤੋ।",
    loginFooter: "ਖੇਤੀ ਪ੍ਰਬੰਧਨ · ਕਿਸਾਨਾਂ ਲਈ",
    loadingLabel: "ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ",
    loadingTitle: "ਤੁਹਾਡੇ ਖੇਤ ਦਾ ਡਾਟਾ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    loadingCaption: "ਤੁਹਾਡਾ ਡੈਸ਼ਬੋਰਡ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ...",
    farmManagement: "ਖੇਤੀ ਪ੍ਰਬੰਧਨ",
    farmOwner: "ਖੇਤ ਦਾ ਮਾਲਕ",
    workspace: "ਮੁੱਖ ਮੀਨੂ",
    home: "ਮੁੱਖ ਪੰਨਾ",
    fields: "ਖੇਤ",
    crops: "ਫ਼ਸਲਾਂ",
    irrigation: "ਸਿੰਚਾਈ",
    fertilizer: "ਖਾਦ",
    pests: "ਕੀੜੇ",
    harvest: "ਵਾਢੀ",
    seasonTitle: "ਸਾਉਣੀ ਦਾ ਮੌਸਮ",
    seasonText: "ਡੈਮੋ ਮੌਸਮ · ਭਾਰਤ",
    logout: "ਲੌਗ ਆਉਟ",
    goodDay: "ਭਰੋਸੇ ਨਾਲ ਖੇਤੀ ਕਰੋ",
    dashboard: "ਖੇਤੀ ਡੈਸ਼ਬੋਰਡ",
    hello: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    bannerText: "ਅੱਜ ਤੁਹਾਡੇ ਖੇਤ ਵਿੱਚ ਕੀ ਹੋ ਰਿਹਾ ਹੈ, ਇੱਥੇ ਦੇਖੋ।",
    exploreFields: "ਮੇਰੇ ਖੇਤ ਵੇਖੋ",
    live: "ਲਾਈਵ",
    totalFields: "ਕੁੱਲ ਖੇਤ",
    activeCrops: "ਚੱਲ ਰਹੀਆਂ ਫ਼ਸਲਾਂ",
    waterToday: "ਸਿੰਚਾਈ ਦੇ ਰਿਕਾਰਡ",
    harvestReady: "ਵਾਢੀ ਦੀ ਤਰੱਕੀ",
    fieldsManaged: "ਪ੍ਰਬੰਧਨ ਹੇਠ ਖੇਤ",
    cropsGrowing: "ਇਸ ਮੌਸਮ ਦੀਆਂ ਫ਼ਸਲਾਂ",
    irrigationTracked: "ਸਿੰਚਾਈ ਦੇ ਰਿਕਾਰਡ",
    harvestProgress: "ਫ਼ਸਲਾਂ ਦੀ ਔਸਤ ਤਰੱਕੀ",
    yourFarm: "ਤੁਹਾਡਾ ਖੇਤ",
    myFields: "ਮੇਰੇ ਖੇਤ",
    viewAll: "ਸਾਰੇ ਵੇਖੋ",
    stayUpdated: "ਨਵੀਂ ਜਾਣਕਾਰੀ",
    recentActivity: "ਹਾਲੀਆ ਗਤੀਵਿਧੀਆਂ",
    getStarted: "ਸ਼ੁਰੂ ਕਰੋ",
    quickActions: "ਤੇਜ਼ ਕੰਮ",
    addField: "ਖੇਤ ਜੋੜੋ",
    addCrop: "ਫ਼ਸਲ ਜੋੜੋ",
    recordWater: "ਸਿੰਚਾਈ ਦਰਜ ਕਰੋ",
    updateHarvest: "ਵਾਢੀ ਅੱਪਡੇਟ ਕਰੋ",
    farmRecords: "ਖੇਤੀ ਰਿਕਾਰਡ",
    addNew: "ਨਵਾਂ ਜੋੜੋ",
    cancel: "ਰੱਦ ਕਰੋ",
    saveRecord: "ਰਿਕਾਰਡ ਸੰਭਾਲੋ",
    footerText: "ਹਰ ਖੇਤ ਨਾਲ ਹਰਿਆਲੀ ਵਧਾਓ।",
    fieldName: "ਖੇਤ ਦਾ ਨਾਮ",
    cropName: "ਫ਼ਸਲ ਦਾ ਨਾਮ",
    field: "ਖੇਤ",
    crop: "ਫ਼ਸਲ",
    area: "ਰਕਬਾ (ਏਕੜ)",
    stage: "ਵਾਧੇ ਦੀ ਅਵਸਥਾ",
    progress: "ਤਰੱਕੀ",
    date: "ਤਾਰੀਖ",
    amount: "ਮਾਤਰਾ",
    unit: "ਇਕਾਈ",
    notes: "ਵੇਰਵਾ",
    type: "ਕਿਸਮ",
    status: "ਸਥਿਤੀ",
    actions: "ਕੰਮ",
    selectField: "ਖੇਤ ਚੁਣੋ",
    selectCrop: "ਫ਼ਸਲ ਚੁਣੋ",
    fertilizerType: "ਖਾਦ ਦੀ ਕਿਸਮ",
    pestName: "ਦੇਖਿਆ ਗਿਆ ਕੀੜਾ",
    harvestQuantity: "ਵਾਢੀ ਦੀ ਮਾਤਰਾ",
    delete: "ਮਿਟਾਓ",
    noRecords: "ਹਾਲੇ ਕੋਈ ਰਿਕਾਰਡ ਨਹੀਂ। ਪਹਿਲਾ ਰਿਕਾਰਡ ਜੋੜੋ!",
    recordAdded: "ਰਿਕਾਰਡ ਸਫਲਤਾਪੂਰਵਕ ਜੋੜਿਆ ਗਿਆ!",
    recordDeleted: "ਰਿਕਾਰਡ ਮਿਟਾ ਦਿੱਤਾ ਗਿਆ।",
    loginSuccess: "ਤੁਹਾਡੇ ਖੇਤ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ!",
    logoutSuccess: "ਤੁਸੀਂ ਲੌਗ ਆਉਟ ਹੋ ਗਏ ਹੋ।",
    fillRequired: "ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੀ ਲੋੜੀਂਦੀ ਜਾਣਕਾਰੀ ਭਰੋ।",
    confirmDelete: "ਕੀ ਇਹ ਰਿਕਾਰਡ ਮਿਟਾਉਣਾ ਹੈ?",
    healthy: "ਸਿਹਤਮੰਦ",
    needsAttention: "ਧਿਆਨ ਦੀ ਲੋੜ",
    seedling: "ਬੂਟੇ ਦੀ ਅਵਸਥਾ",
    vegetative: "ਵਾਧੇ ਦੀ ਅਵਸਥਾ",
    flowering: "ਫੁੱਲਾਂ ਦੀ ਅਵਸਥਾ",
    maturity: "ਪੱਕਣ ਦੀ ਅਵਸਥਾ",
    rice: "ਝੋਨਾ",
    tomato: "ਟਮਾਟਰ",
    maize: "ਮੱਕੀ",
    wheat: "ਕਣਕ",
    vegetables: "ਸਬਜ਼ੀਆਂ",
    nitrogen: "ਨਾਈਟ੍ਰੋਜਨ ਖਾਦ",
    compost: "ਜੈਵਿਕ ਖਾਦ",
    aphids: "ਮਾਹੂ ਕੀੜੇ",
    leafSpot: "ਪੱਤਿਆਂ ਦੇ ਧੱਬੇ",
    expected: "ਅਨੁਮਾਨਿਤ",
    inProgress: "ਜਾਰੀ ਹੈ",
    completed: "ਪੂਰਾ ਹੋਇਆ",
    waterActivity: "ਸਿੰਚਾਈ ਦਰਜ ਕੀਤੀ",
    fertilizerActivity: "ਖਾਦ ਪਾਈ ਗਈ",
    pestActivity: "ਕੀੜਿਆਂ ਦੀ ਜਾਣਕਾਰੀ ਅੱਪਡੇਟ ਹੋਈ",
    harvestActivity: "ਵਾਢੀ ਦਾ ਰਿਕਾਰਡ ਅੱਪਡੇਟ ਹੋਇਆ",
    recentField: "ਨਵਾਂ ਖੇਤ ਜੋੜਿਆ ਗਿਆ",
    today: "ਅੱਜ",
    yesterday: "ਕੱਲ੍ਹ",
    kg: "ਕਿਲੋਗ੍ਰਾਮ",
    litres: "ਲੀਟਰ",
    name: "ਨਾਮ",
    dateToday: "ਅੱਜ",
    all: "ਸਾਰੇ"
  },

  te: {
    tagline: "మీ డిజిటల్ వ్యవసాయ సహాయకుడు",
    welcome: "తెలివిగా సాగు చేయండి. మెరుగ్గా పండించండి.",
    welcomeText: "మీ పొలం, మీ పంటలు, మీ పురోగతి — అన్నీ ఒకే చోట.",
    visualCaption: "మెరుగైన వ్యవసాయం ఇక్కడ ప్రారంభమవుతుంది.",
    farmerLogin: "రైతు లాగిన్",
    loginTitle: "మళ్లీ స్వాగతం!",
    loginText: "మీ పొలాన్ని సులభంగా నిర్వహించండి.",
    chooseLanguage: "మీ భాషను ఎంచుకోండి",
    usernameLabel: "మీ పేరు",
    usernamePlaceholder: "మీ పేరు నమోదు చేయండి",
    passwordLabel: "పాస్‌వర్డ్",
    passwordPlaceholder: "ఏదైనా డెమో పాస్‌వర్డ్ నమోదు చేయండి",
    signIn: "నా పొలంలోకి వెళ్లండి",
    demoNote: "డెమో వెబ్‌సైట్: కొనసాగడానికి ఏ పేరైనా, పాస్‌వర్డ్ అయినా ఉపయోగించండి.",
    loginFooter: "వ్యవసాయ నిర్వహణ · రైతుల కోసం",
    loadingLabel: "దయచేసి వేచి ఉండండి",
    loadingTitle: "మీ పొలం డేటా లోడ్ అవుతోంది...",
    loadingCaption: "మీ డాష్‌బోర్డ్ సిద్ధమవుతోంది...",
    farmManagement: "వ్యవసాయ నిర్వహణ",
    farmOwner: "పొలం యజమాని",
    workspace: "ప్రధాన మెనూ",
    home: "హోమ్",
    fields: "పొలాలు",
    crops: "పంటలు",
    irrigation: "నీటిపారుదల",
    fertilizer: "ఎరువులు",
    pests: "తెగుళ్లు",
    harvest: "పంట కోత",
    seasonTitle: "ఖరీఫ్ సీజన్",
    seasonText: "డెమో సీజన్ · భారతదేశం",
    logout: "లాగ్ అవుట్",
    goodDay: "నమ్మకంతో సాగు చేయండి",
    dashboard: "వ్యవసాయ డాష్‌బోర్డ్",
    hello: "నమస్కారం",
    bannerText: "ఈరోజు మీ పొలంలో జరుగుతున్న విషయాలు ఇక్కడ చూడండి.",
    exploreFields: "నా పొలాలను చూడండి",
    live: "ప్రత్యక్షం",
    totalFields: "మొత్తం పొలాలు",
    activeCrops: "ప్రస్తుతం ఉన్న పంటలు",
    waterToday: "నీటిపారుదల రికార్డులు",
    harvestReady: "కోత పురోగతి",
    fieldsManaged: "నిర్వహిస్తున్న పొలాలు",
    cropsGrowing: "ఈ సీజన్‌లో పెరుగుతున్న పంటలు",
    irrigationTracked: "నీటిపారుదల రికార్డులు",
    harvestProgress: "పంటల సగటు పురోగతి",
    yourFarm: "మీ పొలం",
    myFields: "నా పొలాలు",
    viewAll: "అన్నీ చూడండి",
    stayUpdated: "తాజా సమాచారం",
    recentActivity: "ఇటీవలి కార్యకలాపాలు",
    getStarted: "ప్రారంభించండి",
    quickActions: "త్వరిత చర్యలు",
    addField: "పొలం జోడించండి",
    addCrop: "పంట జోడించండి",
    recordWater: "నీటిపారుదల నమోదు",
    updateHarvest: "కోత వివరాలు నవీకరించండి",
    farmRecords: "వ్యవసాయ రికార్డులు",
    addNew: "కొత్తది జోడించండి",
    cancel: "రద్దు",
    saveRecord: "రికార్డు సేవ్ చేయండి",
    footerText: "ప్రతి పొలంతో పచ్చదనాన్ని పెంచుదాం.",
    fieldName: "పొలం పేరు",
    cropName: "పంట పేరు",
    field: "పొలం",
    crop: "పంట",
    area: "విస్తీర్ణం (ఎకరాలు)",
    stage: "పెరుగుదల దశ",
    progress: "పురోగతి",
    date: "తేదీ",
    amount: "పరిమాణం",
    unit: "యూనిట్",
    notes: "వివరాలు",
    type: "రకం",
    status: "స్థితి",
    actions: "చర్యలు",
    selectField: "పొలం ఎంచుకోండి",
    selectCrop: "పంట ఎంచుకోండి",
    fertilizerType: "ఎరువు రకం",
    pestName: "గమనించిన తెగులు",
    harvestQuantity: "పంట కోత పరిమాణం",
    delete: "తొలగించు",
    noRecords: "రికార్డులు లేవు. మొదటి రికార్డును జోడించండి!",
    recordAdded: "రికార్డు విజయవంతంగా జోడించబడింది!",
    recordDeleted: "రికార్డు తొలగించబడింది.",
    loginSuccess: "మీ పొలానికి స్వాగతం!",
    logoutSuccess: "మీరు లాగ్ అవుట్ అయ్యారు.",
    fillRequired: "దయచేసి అవసరమైన వివరాలన్నీ నమోదు చేయండి.",
    confirmDelete: "ఈ రికార్డును తొలగించాలా?",
    healthy: "ఆరోగ్యంగా ఉంది",
    needsAttention: "శ్రద్ధ అవసరం",
    seedling: "మొలక దశ",
    vegetative: "పెరుగుదల దశ",
    flowering: "పుష్పించే దశ",
    maturity: "పక్వ దశ",
    rice: "వరి",
    tomato: "టమాటా",
    maize: "మొక్కజొన్న",
    wheat: "గోధుమ",
    vegetables: "కూరగాయలు",
    nitrogen: "నైట్రోజన్ ఎరువు",
    compost: "సేంద్రీయ కంపోస్ట్",
    aphids: "ఆఫిడ్స్",
    leafSpot: "ఆకు మచ్చ తెగులు",
    expected: "అంచనా",
    inProgress: "కొనసాగుతోంది",
    completed: "పూర్తయింది",
    waterActivity: "నీటిపారుదల నమోదు చేయబడింది",
    fertilizerActivity: "ఎరువు వేశారు",
    pestActivity: "తెగులు వివరాలు నవీకరించబడ్డాయి",
    harvestActivity: "కోత రికార్డు నవీకరించబడింది",
    recentField: "కొత్త పొలం జోడించబడింది",
    today: "ఈరోజు",
    yesterday: "నిన్న",
    kg: "కిలోలు",
    litres: "లీటర్లు",
    name: "పేరు",
    dateToday: "ఈరోజు",
    all: "అన్నీ"
  },

  ml: {
    tagline: "നിങ്ങളുടെ ഡിജിറ്റൽ കൃഷി സഹായി",
    welcome: "ബുദ്ധിപൂർവം കൃഷി ചെയ്യൂ. മികച്ച വിളവ് നേടൂ.",
    welcomeText: "നിങ്ങളുടെ കൃഷിയിടവും വിളകളും പുരോഗതിയും ഒരിടത്ത്.",
    visualCaption: "മികച്ച കൃഷി ഇവിടെ ആരംഭിക്കുന്നു.",
    farmerLogin: "കർഷക ലോഗിൻ",
    loginTitle: "വീണ്ടും സ്വാഗതം!",
    loginText: "നിങ്ങളുടെ കൃഷിയിടം എളുപ്പത്തിൽ നിയന്ത്രിക്കൂ.",
    chooseLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
    usernameLabel: "നിങ്ങളുടെ പേര്",
    usernamePlaceholder: "പേര് നൽകുക",
    passwordLabel: "പാസ്‌വേഡ്",
    passwordPlaceholder: "ഏതെങ്കിലും ഡെമോ പാസ്‌വേഡ് നൽകുക",
    signIn: "എന്റെ കൃഷിയിടത്തിലേക്ക്",
    demoNote: "ഡെമോ വെബ്‌സൈറ്റ്: തുടരാൻ ഏതെങ്കിലും പേരും പാസ്‌വേഡും ഉപയോഗിക്കുക.",
    loginFooter: "കൃഷി നിയന്ത്രണം · കർഷകർക്കായി",
    loadingLabel: "ദയവായി കാത്തിരിക്കുക",
    loadingTitle: "നിങ്ങളുടെ കൃഷിയിട വിവരങ്ങൾ ലോഡ് ചെയ്യുന്നു...",
    loadingCaption: "നിങ്ങളുടെ ഡാഷ്‌ബോർഡ് തയ്യാറാക്കുന്നു...",
    farmManagement: "കൃഷിയിട നിയന്ത്രണം",
    farmOwner: "കൃഷിയിട ഉടമ",
    workspace: "പ്രധാന മെനു",
    home: "ഹോം",
    fields: "കൃഷിയിടങ്ങൾ",
    crops: "വിളകൾ",
    irrigation: "ജലസേചനം",
    fertilizer: "വളം",
    pests: "കീടങ്ങൾ",
    harvest: "വിളവെടുപ്പ്",
    seasonTitle: "ഖാരിഫ് സീസൺ",
    seasonText: "ഡെമോ സീസൺ · ഇന്ത്യ",
    logout: "ലോഗ് ഔട്ട്",
    goodDay: "ആത്മവിശ്വാസത്തോടെ കൃഷി ചെയ്യൂ",
    dashboard: "കൃഷി ഡാഷ്‌ബോർഡ്",
    hello: "നമസ്കാരം",
    bannerText: "ഇന്ന് നിങ്ങളുടെ കൃഷിയിടത്തിൽ നടക്കുന്ന കാര്യങ്ങൾ കാണൂ.",
    exploreFields: "എന്റെ കൃഷിയിടങ്ങൾ കാണുക",
    live: "തത്സമയം",
    totalFields: "ആകെ കൃഷിയിടങ്ങൾ",
    activeCrops: "സജീവ വിളകൾ",
    waterToday: "ജലസേചന രേഖകൾ",
    harvestReady: "വിളവെടുപ്പ് പുരോഗതി",
    fieldsManaged: "നിയന്ത്രിക്കുന്ന കൃഷിയിടങ്ങൾ",
    cropsGrowing: "ഈ സീസണിലെ വിളകൾ",
    irrigationTracked: "ജലസേചന രേഖകൾ",
    harvestProgress: "വിളകളുടെ ശരാശരി പുരോഗതി",
    yourFarm: "നിങ്ങളുടെ കൃഷിയിടം",
    myFields: "എന്റെ കൃഷിയിടങ്ങൾ",
    viewAll: "എല്ലാം കാണുക",
    stayUpdated: "പുതിയ വിവരങ്ങൾ",
    recentActivity: "സമീപകാല പ്രവർത്തനങ്ങൾ",
    getStarted: "തുടങ്ങാം",
    quickActions: "ദ്രുത പ്രവർത്തനങ്ങൾ",
    addField: "കൃഷിയിടം ചേർക്കുക",
    addCrop: "വിള ചേർക്കുക",
    recordWater: "ജലസേചനം രേഖപ്പെടുത്തുക",
    updateHarvest: "വിളവെടുപ്പ് പുതുക്കുക",
    farmRecords: "കൃഷി രേഖകൾ",
    addNew: "പുതിയത് ചേർക്കുക",
    cancel: "റദ്ദാക്കുക",
    saveRecord: "രേഖ സംരക്ഷിക്കുക",
    footerText: "ഓരോ കൃഷിയിടത്തിലൂടെയും ഹരിതഭാവി വളർത്താം.",
    fieldName: "കൃഷിയിടത്തിന്റെ പേര്",
    cropName: "വിളയുടെ പേര്",
    field: "കൃഷിയിടം",
    crop: "വിള",
    area: "വിസ്തീർണം (ഏക്കർ)",
    stage: "വളർച്ചാ ഘട്ടം",
    progress: "പുരോഗതി",
    date: "തീയതി",
    amount: "അളവ്",
    unit: "യൂണിറ്റ്",
    notes: "വിവരങ്ങൾ",
    type: "തരം",
    status: "നില",
    actions: "നടപടികൾ",
    selectField: "കൃഷിയിടം തിരഞ്ഞെടുക്കുക",
    selectCrop: "വിള തിരഞ്ഞെടുക്കുക",
    fertilizerType: "വളത്തിന്റെ തരം",
    pestName: "കണ്ടെത്തിയ കീടം",
    harvestQuantity: "വിളവെടുപ്പ് അളവ്",
    delete: "നീക്കം ചെയ്യുക",
    noRecords: "രേഖകളില്ല. ആദ്യ രേഖ ചേർക്കുക!",
    recordAdded: "രേഖ വിജയകരമായി ചേർത്തു!",
    recordDeleted: "രേഖ നീക്കം ചെയ്തു.",
    loginSuccess: "നിങ്ങളുടെ കൃഷിയിടത്തിലേക്ക് സ്വാഗതം!",
    logoutSuccess: "നിങ്ങൾ ലോഗ് ഔട്ട് ചെയ്തു.",
    fillRequired: "ആവശ്യമായ വിവരങ്ങൾ പൂരിപ്പിക്കുക.",
    confirmDelete: "ഈ രേഖ നീക്കം ചെയ്യണോ?",
    healthy: "ആരോഗ്യമുള്ളത്",
    needsAttention: "ശ്രദ്ധ ആവശ്യമാണ്",
    seedling: "തൈ ഘട്ടം",
    vegetative: "വളർച്ചാ ഘട്ടം",
    flowering: "പൂവിടുന്ന ഘട്ടം",
    maturity: "വിളവെത്തുന്ന ഘട്ടം",
    rice: "നെല്ല്",
    tomato: "തക്കാളി",
    maize: "ചോളം",
    wheat: "ഗോതമ്പ്",
    vegetables: "പച്ചക്കറികൾ",
    nitrogen: "നൈട്രജൻ വളം",
    compost: "ജൈവ കമ്പോസ്റ്റ്",
    aphids: "മുഞ്ഞ",
    leafSpot: "ഇല പുള്ളി രോഗം",
    expected: "പ്രതീക്ഷിക്കുന്നത്",
    inProgress: "പുരോഗമിക്കുന്നു",
    completed: "പൂർത്തിയായി",
    waterActivity: "ജലസേചനം രേഖപ്പെടുത്തി",
    fertilizerActivity: "വളം പ്രയോഗിച്ചു",
    pestActivity: "കീട വിവരങ്ങൾ പുതുക്കി",
    harvestActivity: "വിളവെടുപ്പ് രേഖ പുതുക്കി",
    recentField: "പുതിയ കൃഷിയിടം ചേർത്തു",
    today: "ഇന്ന്",
    yesterday: "ഇന്നലെ",
    kg: "കിലോഗ്രാം",
    litres: "ലിറ്റർ",
    name: "പേര്",
    dateToday: "ഇന്ന്",
    all: "എല്ലാം"
  },

  ta: {
    tagline: "உங்கள் டிஜிட்டல் விவசாய உதவியாளர்",
    welcome: "புத்திசாலித்தனமாக விவசாயம் செய்யுங்கள்.",
    welcomeText: "உங்கள் நிலம், பயிர்கள், முன்னேற்றம் — அனைத்தும் ஒரே இடத்தில்.",
    visualCaption: "சிறந்த விவசாயம் இங்கே தொடங்குகிறது.",
    farmerLogin: "விவசாயி உள்நுழைவு",
    loginTitle: "மீண்டும் வரவேற்கிறோம்!",
    loginText: "உங்கள் பண்ணையை எளிதாக நிர்வகிக்கவும்.",
    chooseLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
    usernameLabel: "உங்கள் பெயர்",
    usernamePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
    passwordLabel: "கடவுச்சொல்",
    passwordPlaceholder: "ஏதேனும் டெமோ கடவுச்சொல்லை உள்ளிடவும்",
    signIn: "என் பண்ணைக்குச் செல்லவும்",
    demoNote: "டெமோ இணையதளம்: தொடர ஏதேனும் பெயர் மற்றும் கடவுச்சொல்லைப் பயன்படுத்தவும்.",
    loginFooter: "பண்ணை மேலாண்மை · விவசாயிகளுக்காக",
    loadingLabel: "தயவுசெய்து காத்திருக்கவும்",
    loadingTitle: "உங்கள் பண்ணைத் தரவு ஏற்றப்படுகிறது...",
    loadingCaption: "உங்கள் டாஷ்போர்டு தயாராகிறது...",
    farmManagement: "பண்ணை மேலாண்மை",
    farmOwner: "பண்ணை உரிமையாளர்",
    workspace: "முக்கிய மெனு",
    home: "முகப்பு",
    fields: "வயல்கள்",
    crops: "பயிர்கள்",
    irrigation: "நீர்ப்பாசனம்",
    fertilizer: "உரம்",
    pests: "பூச்சிகள்",
    harvest: "அறுவடை",
    seasonTitle: "காரிப் பருவம்",
    seasonText: "டெமோ பருவம் · இந்தியா",
    logout: "வெளியேறு",
    goodDay: "நம்பிக்கையுடன் விவசாயம் செய்யுங்கள்",
    dashboard: "பண்ணை டாஷ்போர்டு",
    hello: "வணக்கம்",
    bannerText: "இன்று உங்கள் பண்ணையில் நடப்பவற்றைப் பாருங்கள்.",
    exploreFields: "என் வயல்களைப் பார்க்கவும்",
    live: "நேரலை",
    totalFields: "மொத்த வயல்கள்",
    activeCrops: "செயலில் உள்ள பயிர்கள்",
    waterToday: "நீர்ப்பாசன பதிவுகள்",
    harvestReady: "அறுவடை முன்னேற்றம்",
    fieldsManaged: "நிர்வகிக்கப்படும் வயல்கள்",
    cropsGrowing: "இந்தப் பருவத்தில் வளரும் பயிர்கள்",
    irrigationTracked: "நீர்ப்பாசன பதிவுகள்",
    harvestProgress: "பயிர்களின் சராசரி முன்னேற்றம்",
    yourFarm: "உங்கள் பண்ணை",
    myFields: "என் வயல்கள்",
    viewAll: "அனைத்தையும் காண்க",
    stayUpdated: "புதிய தகவல்கள்",
    recentActivity: "சமீபத்திய செயல்பாடுகள்",
    getStarted: "தொடங்குங்கள்",
    quickActions: "விரைவான செயல்கள்",
    addField: "வயலைச் சேர்க்கவும்",
    addCrop: "பயிரைச் சேர்க்கவும்",
    recordWater: "நீர்ப்பாசனத்தைப் பதிவு செய்யவும்",
    updateHarvest: "அறுவடையைப் புதுப்பிக்கவும்",
    farmRecords: "பண்ணைப் பதிவுகள்",
    addNew: "புதியதைச் சேர்க்கவும்",
    cancel: "ரத்து செய்",
    saveRecord: "பதிவைச் சேமிக்கவும்",
    footerText: "ஒவ்வொரு வயலிலும் பசுமையான எதிர்காலத்தை வளர்ப்போம்.",
    fieldName: "வயலின் பெயர்",
    cropName: "பயிரின் பெயர்",
    field: "வயல்",
    crop: "பயிர்",
    area: "பரப்பளவு (ஏக்கர்)",
    stage: "வளர்ச்சி நிலை",
    progress: "முன்னேற்றம்",
    date: "தேதி",
    amount: "அளவு",
    unit: "அலகு",
    notes: "குறிப்புகள்",
    type: "வகை",
    status: "நிலை",
    actions: "செயல்கள்",
    selectField: "வயலைத் தேர்ந்தெடுக்கவும்",
    selectCrop: "பயிரைத் தேர்ந்தெடுக்கவும்",
    fertilizerType: "உர வகை",
    pestName: "கண்டறியப்பட்ட பூச்சி",
    harvestQuantity: "அறுவடை அளவு",
    delete: "நீக்கு",
    noRecords: "பதிவுகள் இல்லை. முதல் பதிவைச் சேர்க்கவும்!",
    recordAdded: "பதிவு வெற்றிகரமாகச் சேர்க்கப்பட்டது!",
    recordDeleted: "பதிவு நீக்கப்பட்டது.",
    loginSuccess: "உங்கள் பண்ணைக்கு வரவேற்கிறோம்!",
    logoutSuccess: "நீங்கள் வெளியேறிவிட்டீர்கள்.",
    fillRequired: "தேவையான அனைத்து விவரங்களையும் நிரப்பவும்.",
    confirmDelete: "இந்தப் பதிவை நீக்க வேண்டுமா?",
    healthy: "ஆரோக்கியமானது",
    needsAttention: "கவனம் தேவை",
    seedling: "நாற்று நிலை",
    vegetative: "வளர்ச்சி நிலை",
    flowering: "பூக்கும் நிலை",
    maturity: "முதிர்ச்சி நிலை",
    rice: "நெல்",
    tomato: "தக்காளி",
    maize: "மக்காச்சோளம்",
    wheat: "கோதுமை",
    vegetables: "காய்கறிகள்",
    nitrogen: "நைட்ரஜன் உரம்",
    compost: "இயற்கை உரம்",
    aphids: "அசுவினி பூச்சிகள்",
    leafSpot: "இலைப்புள்ளி நோய்",
    expected: "எதிர்பார்க்கப்படும்",
    inProgress: "நடைபெறுகிறது",
    completed: "முடிந்தது",
    waterActivity: "நீர்ப்பாசனம் பதிவு செய்யப்பட்டது",
    fertilizerActivity: "உரம் இடப்பட்டது",
    pestActivity: "பூச்சி விவரங்கள் புதுப்பிக்கப்பட்டன",
    harvestActivity: "அறுவடை பதிவு புதுப்பிக்கப்பட்டது",
    recentField: "புதிய வயல் சேர்க்கப்பட்டது",
    today: "இன்று",
    yesterday: "நேற்று",
    kg: "கிலோகிராம்",
    litres: "லிட்டர்",
    name: "பெயர்",
    dateToday: "இன்று",
    all: "அனைத்தும்"
  }
};

/* ---------------- LANGUAGE AND HELPERS ---------------- */

let language = "en";
let farmerName = "Farmer";
let currentPage = "home";
let activeRecordType = "fields";
let toastTimeout;
let loadingTimers = [];

const localeMap = {
  en: "en-IN",
  hi: "hi-IN",
  pa: "pa-IN",
  te: "te-IN",
  ml: "ml-IN",
  ta: "ta-IN"
};

function tr(key) {
  return dictionaries[language]?.[key]
    ?? dictionaries.en[key]
    ?? key;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function translatedValue(value) {
  const keys = {
    Rice: "rice",
    Tomato: "tomato",
    Maize: "maize",
    Wheat: "wheat",
    Vegetables: "vegetables",
    "Nitrogen fertilizer": "nitrogen",
    "Organic compost": "compost",
    Aphids: "aphids",
    "Leaf spot": "leafSpot",
    Expected: "expected",
    "In progress": "inProgress",
    Completed: "completed",
    Healthy: "healthy",
    Warning: "needsAttention",
    seedling: "seedling",
    vegetative: "vegetative",
    flowering: "flowering",
    maturity: "maturity",
    kg: "kg",
    litres: "litres"
  };

  return keys[value] ? tr(keys[value]) : value;
}

function formatDate(value) {
  if (!value) return "—";

  const date = new Date(value + "T12:00:00");
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(localeMap[language], {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function localDateString() {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function translateDOM() {
  document.documentElement.lang = language;

  $$("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = tr(key);
  });

  $$("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = tr(element.dataset.i18nPlaceholder);
  });

  $("#loginLanguage").value = language;
  $("#dashboardLanguage").value = language;

  updateDate();
  updateLoadingCounts();
  renderDashboard();
  updatePageHeading();

  if (currentPage !== "home" && !$("#appScreen").classList.contains("hidden")) {
    renderManagementPage();
  }

  if (!$("#recordModal").classList.contains("hidden")) {
    renderRecordForm(activeRecordType);
  }
}

function setLanguage(value) {
  if (!dictionaries[value]) return;
  language = value;
  translateDOM();
}

$("#loginLanguage").addEventListener("change", event => {
  setLanguage(event.target.value);
});

$("#dashboardLanguage").addEventListener("change", event => {
  setLanguage(event.target.value);
});

/* ---------------- FARM DATA ---------------- */

const today = localDateString();

const data = {
  fields: [
    { id: 1, name: "Green Valley", crop: "Rice", area: 2.5, stage: "vegetative", progress: 58 },
    { id: 2, name: "Sunrise Farm", crop: "Tomato", area: 1.5, stage: "flowering", progress: 72 },
    { id: 3, name: "Harvest Hope", crop: "Maize", area: 3, stage: "maturity", progress: 86 },
    { id: 4, name: "Golden Acres", crop: "Wheat", area: 2, stage: "vegetative", progress: 45 },
    { id: 5, name: "Green Garden", crop: "Vegetables", area: 1, stage: "seedling", progress: 25 }
  ],

  crops: [
    { id: 1, name: "Rice", field: "Green Valley", stage: "vegetative", status: "Healthy" },
    { id: 2, name: "Tomato", field: "Sunrise Farm", stage: "flowering", status: "Healthy" },
    { id: 3, name: "Maize", field: "Harvest Hope", stage: "maturity", status: "Healthy" },
    { id: 4, name: "Wheat", field: "Golden Acres", stage: "vegetative", status: "Healthy" },
    { id: 5, name: "Vegetables", field: "Green Garden", stage: "seedling", status: "Healthy" }
  ],

  irrigation: [
    { id: 1, field: "Green Valley", date: today, amount: 500, unit: "litres", notes: "Morning watering" },
    { id: 2, field: "Sunrise Farm", date: today, amount: 300, unit: "litres", notes: "Routine watering" },
    { id: 3, field: "Harvest Hope", date: today, amount: 450, unit: "litres", notes: "Crop watering" },
    { id: 4, field: "Golden Acres", date: today, amount: 350, unit: "litres", notes: "Morning watering" },
    { id: 5, field: "Green Garden", date: today, amount: 200, unit: "litres", notes: "Seedling care" },
    { id: 6, field: "Green Valley", date: today, amount: 250, unit: "litres", notes: "Afternoon watering" },
    { id: 7, field: "Sunrise Farm", date: today, amount: 180, unit: "litres", notes: "Drip irrigation" },
    { id: 8, field: "Harvest Hope", date: today, amount: 400, unit: "litres", notes: "Scheduled watering" }
  ],

  fertilizer: [
    { id: 1, field: "Green Valley", type: "Nitrogen fertilizer", date: today, amount: 10, unit: "kg", notes: "Scheduled application" },
    { id: 2, field: "Sunrise Farm", type: "Organic compost", date: today, amount: 8, unit: "kg", notes: "Soil enrichment" },
    { id: 3, field: "Harvest Hope", type: "Nitrogen fertilizer", date: today, amount: 12, unit: "kg", notes: "Crop nutrition" },
    { id: 4, field: "Golden Acres", type: "Organic compost", date: today, amount: 7, unit: "kg", notes: "Soil improvement" },
    { id: 5, field: "Green Garden", type: "Organic compost", date: today, amount: 5, unit: "kg", notes: "Seedling support" },
    { id: 6, field: "Green Valley", type: "Organic compost", date: today, amount: 6, unit: "kg", notes: "Organic application" }
  ],

  pests: [
    { id: 1, field: "Green Valley", type: "Aphids", date: today, status: "Healthy", notes: "Routine inspection" },
    { id: 2, field: "Sunrise Farm", type: "Leaf spot", date: today, status: "Warning", notes: "Monitor affected leaves" },
    { id: 3, field: "Harvest Hope", type: "Aphids", date: today, status: "Healthy", notes: "No major damage" },
    { id: 4, field: "Golden Acres", type: "Leaf spot", date: today, status: "Healthy", notes: "Inspection completed" },
    { id: 5, field: "Green Garden", type: "Aphids", date: today, status: "Healthy", notes: "Routine monitoring" }
  ],

  harvest: [
    { id: 1, field: "Green Valley", crop: "Rice", date: today, amount: 0, unit: "kg", status: "In progress", notes: "Growing" },
    { id: 2, field: "Sunrise Farm", crop: "Tomato", date: today, amount: 0, unit: "kg", status: "In progress", notes: "Flowering stage" },
    { id: 3, field: "Harvest Hope", crop: "Maize", date: today, amount: 0, unit: "kg", status: "Expected", notes: "Approaching maturity" },
    { id: 4, field: "Golden Acres", crop: "Wheat", date: today, amount: 0, unit: "kg", status: "Expected", notes: "Growing" },
    { id: 5, field: "Green Garden", crop: "Vegetables", date: today, amount: 0, unit: "kg", status: "In progress", notes: "Early growth" }
  ]
};

let activities = [
  { id: 1, type: "water", key: "waterActivity", detail: "Green Valley", time: "09:30" },
  { id: 2, type: "fertilizer", key: "fertilizerActivity", detail: "Sunrise Farm", time: "08:45" },
  { id: 3, type: "pest", key: "pestActivity", detail: "Harvest Hope", time: "10:15" },
  { id: 4, type: "harvest", key: "harvestActivity", detail: "Golden Acres", time: "11:00" }
];

function nextId(type) {
  return data[type].reduce((max, record) => Math.max(max, record.id), 0) + 1;
}

function updateLoadingCounts() {
  Object.keys(data).forEach(type => {
    const element = $("#load" + type.charAt(0).toUpperCase() + type.slice(1));
    if (element) element.textContent = data[type].length;
  });

  const navFields = $("#navFields");
  if (navFields) navFields.textContent = data.fields.length;
}

function updateDate() {
  const dateElement = $("#todayDate");
  if (!dateElement) return;

  dateElement.textContent = new Intl.DateTimeFormat(localeMap[language], {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date());
}

/* ---------------- LOGIN AND LOADING ---------------- */

$("#loginForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#username").value.trim();
  const password = $("#password").value;

  if (!name || !password) {
    showToast(tr("fillRequired"));
    return;
  }

  farmerName = name;
  $("#farmerName").textContent = farmerName;
  $("#welcomeName").textContent = farmerName;
  $("#userAvatar").textContent = [...farmerName][0].toLocaleUpperCase();

  $("#loginScreen").classList.add("hidden");
  $("#appScreen").classList.add("hidden");
  $("#loadingScreen").classList.remove("hidden");

  startLoading();
});

function startLoading() {
  loadingTimers.forEach(clearTimeout);
  loadingTimers = [];

  const tasks = $$(".loading-task");
  const progress = $("#loadingProgress");

  tasks.forEach(task => task.classList.remove("done", "pending"));
  progress.style.width = "0%";

  let step = 0;

  function advance() {
    if (step > 0) {
      tasks[step - 1]?.classList.remove("pending");
      tasks[step - 1]?.classList.add("done");
    }

    if (step < tasks.length) {
      tasks[step].classList.add("pending");
      progress.style.width = `${Math.round(step / tasks.length * 100)}%`;
      step++;

      loadingTimers.push(window.setTimeout(advance, 240));
      return;
    }

    progress.style.width = "100%";

    loadingTimers.push(window.setTimeout(() => {
      $("#loadingScreen").classList.add("hidden");
      $("#appScreen").classList.remove("hidden");

      currentPage = "home";
      navigateTo("home", false);
      updateDate();

      window.scrollTo(0, 0);
      showToast(tr("loginSuccess"));
    }, 350));
  }

  advance();
}

$("#logoutButton").addEventListener("click", () => {
  loadingTimers.forEach(clearTimeout);
  loadingTimers = [];

  $("#appScreen").classList.add("hidden");
  $("#loadingScreen").classList.add("hidden");
  $("#loginScreen").classList.remove("hidden");
  $("#password").value = "";

  closeSidebar();
  showToast(tr("logoutSuccess"));
  window.scrollTo(0, 0);
});

/* ---------------- NAVIGATION ---------------- */

function updatePageHeading() {
  const headings = {
    home: "dashboard",
    fields: "fields",
    crops: "crops",
    irrigation: "irrigation",
    fertilizer: "fertilizer",
    pests: "pests",
    harvest: "harvest"
  };

  $(".topbar h2").textContent = tr(headings[currentPage] || "dashboard");
}

function updateNavigation() {
  $$(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.page === currentPage);
  });
}

function openSidebar() {
  $("#sidebar").classList.add("open");
  $("#sidebarOverlay").classList.add("visible");
}

function closeSidebar() {
  $("#sidebar").classList.remove("open");
  $("#sidebarOverlay").classList.remove("visible");
}

$("#menuButton").addEventListener("click", openSidebar);
$("#closeSidebar").addEventListener("click", closeSidebar);
$("#sidebarOverlay").addEventListener("click", closeSidebar);

$("#sideNav").addEventListener("click", event => {
  const button = event.target.closest("[data-page]");
  if (button) navigateTo(button.dataset.page);
});

$$("[data-go]").forEach(button => {
  button.addEventListener("click", () => navigateTo(button.dataset.go));
});

function navigateTo(page, scroll = true) {
  if (page !== "home" && !data[page]) return;

  currentPage = page;
  updateNavigation();
  updatePageHeading();

  $("#homePage").classList.toggle("hidden", page !== "home");
  $("#managementPage").classList.toggle("hidden", page === "home");

  if (page !== "home") renderManagementPage();

  closeSidebar();

  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------- DASHBOARD RENDERING ---------------- */

const cropEmojis = {
  Rice: "🌾",
  Tomato: "🍅",
  Maize: "🌽",
  Wheat: "🌾",
  Vegetables: "🥬"
};

function cropClass(crop) {
  const classes = {
    Rice: "rice",
    Tomato: "tomato",
    Maize: "maize",
    Wheat: "wheat",
    Vegetables: "vegetable"
  };
  return classes[crop] || "";
}

function renderDashboard() {
  if (!$("#featuredFields")) return;

  $("#statFields").textContent = data.fields.length;
  $("#statCrops").textContent = data.crops.length;
  $("#statWater").textContent = data.irrigation.length;

  const average = data.fields.length
    ? Math.round(data.fields.reduce((sum, field) => sum + Number(field.progress || 0), 0) / data.fields.length)
    : 0;

  $("#statHarvest").textContent = `${average}%`;

  $("#featuredFields").innerHTML = data.fields.slice(0, 3).map(field => `
    <article class="field-item">
      <div class="field-picture ${cropClass(field.crop)}">
        ${cropEmojis[field.crop] || "🌱"}
      </div>
      <div class="field-info">
        <h3>${escapeHTML(field.name)}</h3>
        <p>${escapeHTML(translatedValue(field.crop))} ·
          ${escapeHTML(field.area)} ${escapeHTML(tr("area"))}</p>
        <div class="field-progress-row">
          <div class="mini-track">
            <span style="width:${Math.max(0, Math.min(100, Number(field.progress)))}%"></span>
          </div>
          <strong>${escapeHTML(field.progress)}%</strong>
        </div>
      </div>
    </article>
  `).join("");

  const icons = {
    water: "💧",
    fertilizer: "🌿",
    pest: "🐛",
    harvest: "🌾",
    field: "🌱",
    crop: "🌱"
  };

  $("#recentActivity").innerHTML = activities.slice(0, 5).map(item => `
    <article class="activity-item">
      <div class="activity-icon ${escapeHTML(item.type)}">
        ${icons[item.type] || "🌱"}
      </div>
      <div class="activity-copy">
        <h3>${escapeHTML(tr(item.key))}</h3>
        <p>${escapeHTML(item.detail)}</p>
      </div>
      <span class="activity-time">${escapeHTML(item.time)}</span>
    </article>
  `).join("");

  updateLoadingCounts();
}

/* ---------------- TABLE DEFINITIONS ---------------- */

const schemas = {
  fields: {
    columns: ["name", "crop", "area", "stage", "progress"],
    form: [
      { key: "name", type: "text", required: true },
      { key: "crop", type: "select", options: ["Rice", "Tomato", "Maize", "Wheat", "Vegetables"], required: true },
      { key: "area", type: "number", min: 0.1, step: "0.1", required: true },
      { key: "stage", type: "select", options: ["seedling", "vegetative", "flowering", "maturity"], required: true },
      { key: "progress", type: "number", min: 0, max: 100, required: true }
    ]
  },

  crops: {
    columns: ["name", "field", "stage", "status"],
    form: [
      { key: "name", type: "select", options: ["Rice", "Tomato", "Maize", "Wheat", "Vegetables"], required: true },
      { key: "field", type: "select", source: "fields", required: true },
      { key: "stage", type: "select", options: ["seedling", "vegetative", "flowering", "maturity"], required: true },
      { key: "status", type: "select", options: ["Healthy", "Warning"], required: true }
    ]
  },

  irrigation: {
    columns: ["field", "date", "amount", "unit", "notes"],
    form: [
      { key: "field", type: "select", source: "fields", required: true },
      { key: "date", type: "date", required: true },
      { key: "amount", type: "number", min: 0, required: true },
      { key: "unit", type: "select", options: ["litres", "kg"], required: true },
      { key: "notes", type: "text" }
    ]
  },

  fertilizer: {
    columns: ["field", "type", "date", "amount", "unit"],
    form: [
      { key: "field", type: "select", source: "fields", required: true },
      { key: "type", type: "select", options: ["Nitrogen fertilizer", "Organic compost"], required: true },
      { key: "date", type: "date", required: true },
      { key: "amount", type: "number", min: 0, required: true },
      { key: "unit", type: "select", options: ["kg", "litres"], required: true }
    ]
  },

  pests: {
    columns: ["field", "type", "date", "status", "notes"],
    form: [
      { key: "field", type: "select", source: "fields", required: true },
      { key: "type", type: "select", options: ["Aphids", "Leaf spot"], required: true },
      { key: "date", type: "date", required: true },
      { key: "status", type: "select", options: ["Healthy", "Warning"], required: true },
      { key: "notes", type: "text" }
    ]
  },

  harvest: {
    columns: ["field", "crop", "date", "amount", "unit", "status"],
    form: [
      { key: "field", type: "select", source: "fields", required: true },
      { key: "crop", type: "select", options: ["Rice", "Tomato", "Maize", "Wheat", "Vegetables"], required: true },
      { key: "date", type: "date", required: true },
      { key: "amount", type: "number", min: 0, required: true },
      { key: "unit", type: "select", options: ["kg"], required: true },
      { key: "status", type: "select", options: ["Expected", "In progress", "Completed"], required: true }
    ]
  }
};

function columnLabel(key) {
  const labels = {
    name: "name",
    crop: "crop",
    field: "field",
    area: "area",
    stage: "stage",
    progress: "progress",
    date: "date",
    amount: "amount",
    unit: "unit",
    notes: "notes",
    type: "type",
    status: "status"
  };

  return tr(labels[key] || key);
}

function formatCell(key, value) {
  if (value === undefined || value === null || value === "") return "—";

  if (key === "date") return escapeHTML(formatDate(String(value)));
  if (key === "stage") return escapeHTML(tr(value));
  if (key === "progress") return `${escapeHTML(value)}%`;

  if (key === "area") {
    return `${escapeHTML(value)} ${escapeHTML(tr("area"))}`;
  }

  if (key === "status") {
    const warning = value === "Warning" || value === "Expected";
    const translated = value === "Warning"
      ? tr("needsAttention")
      : translatedValue(value);

    return `<span class="status-pill ${warning ? "warning" : ""}">${escapeHTML(translated)}</span>`;
  }

  if (["crop", "type", "unit"].includes(key)) {
    return escapeHTML(translatedValue(value));
  }

  return escapeHTML(value);
}

function renderManagementPage() {
  const schema = schemas[currentPage];
  if (!schema) return;

  $("#managementTitle").textContent = tr(currentPage);

  const rows = data[currentPage];

  if (!rows.length) {
    $("#managementContent").innerHTML =
      `<div class="empty-state">${escapeHTML(tr("noRecords"))}</div>`;
    return;
  }

  $("#managementContent").innerHTML = `
    <table class="records-table">
      <thead>
        <tr>
          ${schema.columns.map(key => `<th>${escapeHTML(columnLabel(key))}</th>`).join("")}
          <th>${escapeHTML(tr("actions"))}</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(record => `
          <tr>
            ${schema.columns.map(key => `<td>${formatCell(key, record[key])}</td>`).join("")}
            <td>
              <div class="table-actions">
                <button class="small-action delete"
                  type="button"
                  data-delete="${record.id}">
                  ${escapeHTML(tr("delete"))}
                </button>
              </div>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

/* ---------------- ADD RECORD FORMS ---------------- */

function renderRecordForm(type) {
  const schema = schemas[type];
  if (!schema) return;

  $("#modalTitle").textContent = `${tr("addNew")} — ${tr(type)}`;

  $("#recordFormFields").innerHTML = schema.form.map(field => {
    const id = `record-${field.key}`;
    const labelKey = field.key === "name" ? "fieldName" :
      field.key === "type" && type === "pests" ? "pestName" :
      field.key === "type" && type === "fertilizer" ? "fertilizerType" :
      field.key === "amount" && type === "harvest" ? "harvestQuantity" :
      field.key;

    const label = tr(labelKey);
    let control;

    if (field.type === "select") {
      const options = field.source === "fields"
        ? data.fields.map(item => item.name)
        : field.options;

      const placeholder = field.source === "fields"
        ? tr("selectField")
        : field.key === "crop"
          ? tr("selectCrop")
          : label;

      control = `
        <select id="${id}" name="${field.key}" ${field.required ? "required" : ""}>
          <option value="">${escapeHTML(placeholder)}</option>
          ${options.map(option => `
            <option value="${escapeHTML(option)}">${escapeHTML(translatedValue(option))}</option>
          `).join("")}
        </select>
      `;
    } else {
      const value = field.type === "date" ? `value="${today}"` :
        field.key === "progress" ? 'value="0"' : "";

      control = `
        <input id="${id}" name="${field.key}" type="${field.type}"
          ${field.min !== undefined ? `min="${field.min}"` : ""}
          ${field.max !== undefined ? `max="${field.max}"` : ""}
          ${field.step ? `step="${field.step}"` : ""}
          ${value}
          ${field.required ? "required" : ""}
          placeholder="${escapeHTML(label)}">
      `;
    }

    return `<div class="form-field">
      <label for="${id}">${escapeHTML(label)}</label>
      ${control}
    </div>`;
  }).join("");
}

function openRecordModal(type) {
  if (!schemas[type]) return;

  activeRecordType = type;
  renderRecordForm(type);
  $("#recordModal").classList.remove("hidden");
}

function closeRecordModal() {
  $("#recordModal").classList.add("hidden");
  $("#recordForm").reset();
}

$$("[data-add]").forEach(button => {
  button.addEventListener("click", () => openRecordModal(button.dataset.add));
});

$("#addRecordButton").addEventListener("click", () => {
  openRecordModal(currentPage);
});

$("#closeModal").addEventListener("click", closeRecordModal);
$("#cancelModal").addEventListener("click", closeRecordModal);

$("#recordModal").addEventListener("click", event => {
  if (event.target === $("#recordModal")) closeRecordModal();
});

$("#recordForm").addEventListener("submit", event => {
  event.preventDefault();

  const schema = schemas[activeRecordType];
  const formData = new FormData(event.currentTarget);
  const record = { id: nextId(activeRecordType) };

  for (const field of schema.form) {
    const rawValue = formData.get(field.key);

    if (field.required && (rawValue === null || String(rawValue).trim() === "")) {
      showToast(tr("fillRequired"));
      return;
    }

    record[field.key] = field.type === "number" ? Number(rawValue) : rawValue;
  }

  if (activeRecordType === "fields") {
    record.progress = Math.max(0, Math.min(100, record.progress));
  }

  data[activeRecordType].push(record);

  const activityMap = {
    fields: ["field", "recentField"],
    crops: ["crop", "recentField"],
    irrigation: ["water", "waterActivity"],
    fertilizer: ["fertilizer", "fertilizerActivity"],
    pests: ["pest", "pestActivity"],
    harvest: ["harvest", "harvestActivity"]
  };

  const [activityType, activityKey] = activityMap[activeRecordType];

  activities.unshift({
    id: Date.now(),
    type: activityType,
    key: activityKey,
    detail: record.field || record.name || tr(activeRecordType),
    time: new Intl.DateTimeFormat(localeMap[language], {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date())
  });

  activities = activities.slice(0, 10);

  closeRecordModal();
  renderDashboard();
  updateLoadingCounts();

  if (currentPage !== "home") renderManagementPage();

  showToast(tr("recordAdded"));
});

/* ---------------- DELETE RECORDS ---------------- */

$("#managementContent").addEventListener("click", event => {
  const button = event.target.closest("[data-delete]");
  if (!button || !data[currentPage]) return;

  if (!window.confirm(tr("confirmDelete"))) return;

  const id = Number(button.dataset.delete);

  data[currentPage] = data[currentPage].filter(record => record.id !== id);

  renderManagementPage();
  renderDashboard();
  showToast(tr("recordDeleted"));
});

/* ---------------- NOTIFICATIONS ---------------- */

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(toastTimeout);

  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* ---------------- INITIALIZE ---------------- */

translateDOM();
renderDashboard();
updateLoadingCounts();
updateDate();
