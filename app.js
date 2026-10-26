/* =========================================
   FARM MANAGER — JAVASCRIPT
   Six languages | No external libraries
   ========================================= */

"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* ---------- TRANSLATIONS ---------- */

const translations = {
  en: {
    welcome: "Grow smarter. Farm better.",
    welcomeText: "Your farm, your crops, your progress — all in one place.",
    tagline: "Your digital farming companion",
    chooseLanguage: "Choose your language",
    farmerLogin: "FARMER LOGIN",
    loginTitle: "Welcome back!",
    loginText: "Sign in to manage your farm with ease.",
    usernameLabel: "Your name",
    usernamePlaceholder: "Enter your name",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter any demo password",
    signIn: "Enter my farm",
    demoNote: "Demo website: use any name and password to continue.",
    loadingLabel: "PLEASE WAIT",
    loadingTitle: "Loading your farm data...",
    loadingCaption: "Preparing your farm dashboard...",
    fields: "Fields",
    crops: "Crops",
    irrigation: "Irrigation",
    fertilizer: "Fertilizer",
    pests: "Pests",
    harvest: "Harvest",
    farmManagement: "FARM MANAGEMENT",
    farmOwner: "Farm owner",
    workspace: "WORKSPACE",
    home: "Home",
    seasonTitle: "Kharif season",
    seasonText: "Demo season · India",
    logout: "Log out",
    dashboard: "Farm dashboard",
    goodDay: "GROW WITH CONFIDENCE",
    hello: "Hello",
    bannerText: "Here's what's happening on your farm today.",
    exploreFields: "Explore my fields",
    totalFields: "Total fields",
    activeCrops: "Active crops",
    waterToday: "Watering records",
    harvestReady: "Harvest progress",
    fieldsManaged: "Fields being managed",
    cropsGrowing: "Crops growing this season",
    irrigationTracked: "Irrigation records tracked",
    harvestProgress: "Demo readiness indicator",
    yourFarm: "YOUR FARM",
    myFields: "My fields",
    viewAll: "View all",
    stayUpdated: "STAY UPDATED",
    recentActivity: "Recent activity",
    live: "LIVE",
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
    loadingFields: "Loading fields...",
    loadingCrops: "Loading crops...",
    loadingIrrigation: "Loading irrigation...",
    loadingFertilizer: "Loading fertilizer...",
    loadingPests: "Loading pest records...",
    loadingHarvest: "Loading harvest records...",
    vegetative: "Vegetative",
    flowering: "Flowering",
    maturity: "Maturity",
    seedling: "Seedling",
    healthy: "Healthy",
    needsAttention: "Needs attention",
    field: "Field",
    crop: "Crop",
    stage: "Stage",
    progress: "Progress",
    area: "Area (acres)",
    name: "Name",
    cropName: "Crop name",
    fieldName: "Field name",
    selectField: "Select field",
    selectCrop: "Select crop",
    date: "Date",
    amount: "Amount",
    unit: "Unit",
    notes: "Notes",
    type: "Type",
    status: "Status",
    activity: "Activity",
    action: "Action",
    actions: "Actions",
    fertilizerType: "Fertilizer type",
    pestName: "Pest observed",
    harvestQuantity: "Harvest quantity",
    delete: "Delete",
    edit: "Edit",
    noRecords: "No records yet. Add your first record!",
    recordAdded: "Record added successfully!",
    recordDeleted: "Record deleted.",
    loginSuccess: "Welcome to your farm!",
    logoutSuccess: "You have logged out.",
    fillRequired: "Please complete all required fields.",
    confirmDelete: "Delete this record?",
    all: "All",
    rice: "Rice",
    tomato: "Tomato",
    maize: "Maize",
    wheat: "Wheat",
    vegetables: "Vegetables",
    waterActivity: "Irrigation recorded",
    fertilizerActivity: "Fertilizer applied",
    pestActivity: "Pest observation updated",
    harvestActivity: "Harvest progress updated",
    recentField: "Field added",
    today: "Today",
    yesterday: "Yesterday",
    daysAgo: "days ago",
    kg: "kg",
    litres: "litres",
    nitrogen: "Nitrogen fertilizer",
    compost: "Organic compost",
    aphids: "Aphids",
    leafSpot: "Leaf spot",
    expected: "Expected",
    completed: "Completed",
    inProgress: "In progress",
    dateLabel: "Today's date",
    homeGreeting: "Farm dashboard"
  },

  hi: {
    welcome: "समझदारी से खेती करें। बेहतर उगाएँ।",
    welcomeText: "आपका खेत, आपकी फसल और आपकी प्रगति — सब एक जगह।",
    tagline: "आपका डिजिटल खेती सहायक",
    chooseLanguage: "अपनी भाषा चुनें",
    farmerLogin: "किसान लॉगिन",
    loginTitle: "वापस स्वागत है!",
    loginText: "अपने खेत को आसानी से प्रबंधित करें।",
    usernameLabel: "आपका नाम",
    usernamePlaceholder: "अपना नाम दर्ज करें",
    passwordLabel: "पासवर्ड",
    passwordPlaceholder: "कोई भी डेमो पासवर्ड दर्ज करें",
    signIn: "मेरे खेत में जाएँ",
    demoNote: "डेमो वेबसाइट: आगे बढ़ने के लिए कोई भी नाम और पासवर्ड डालें।",
    loadingLabel: "कृपया प्रतीक्षा करें",
    loadingTitle: "आपके खेत का डेटा लोड हो रहा है...",
    loadingCaption: "आपका डैशबोर्ड तैयार हो रहा है...",
    fields: "खेत",
    crops: "फसलें",
    irrigation: "सिंचाई",
    fertilizer: "उर्वरक",
    pests: "कीट",
    harvest: "कटाई",
    farmManagement: "खेत प्रबंधन",
    farmOwner: "खेत के मालिक",
    workspace: "मुख्य मेनू",
    home: "होम",
    seasonTitle: "खरीफ का मौसम",
    seasonText: "डेमो मौसम · भारत",
    logout: "लॉग आउट",
    dashboard: "खेत डैशबोर्ड",
    goodDay: "आत्मविश्वास से खेती करें",
    hello: "नमस्ते",
    bannerText: "आज आपके खेत में क्या हो रहा है, यहाँ देखें।",
    exploreFields: "मेरे खेत देखें",
    totalFields: "कुल खेत",
    activeCrops: "सक्रिय फसलें",
    waterToday: "सिंचाई रिकॉर्ड",
    harvestReady: "कटाई की प्रगति",
    fieldsManaged: "प्रबंधित किए जा रहे खेत",
    cropsGrowing: "इस मौसम में उगाई जा रही फसलें",
    irrigationTracked: "सिंचाई के रिकॉर्ड",
    harvestProgress: "डेमो कटाई स्थिति",
    yourFarm: "आपका खेत",
    myFields: "मेरे खेत",
    viewAll: "सभी देखें",
    stayUpdated: "नई जानकारी",
    recentActivity: "हाल की गतिविधियाँ",
    live: "लाइव",
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
    vegetative: "विकास अवस्था",
    flowering: "फूल आने की अवस्था",
    maturity: "पकने की अवस्था",
    seedling: "अंकुर अवस्था",
    healthy: "स्वस्थ",
    needsAttention: "ध्यान देने की आवश्यकता",
    field: "खेत",
    crop: "फसल",
    stage: "अवस्था",
    progress: "प्रगति",
    area: "क्षेत्रफल (एकड़)",
    name: "नाम",
    cropName: "फसल का नाम",
    fieldName: "खेत का नाम",
    selectField: "खेत चुनें",
    selectCrop: "फसल चुनें",
    date: "तारीख",
    amount: "मात्रा",
    unit: "इकाई",
    notes: "विवरण",
    type: "प्रकार",
    status: "स्थिति",
    activity: "गतिविधि",
    action: "कार्य",
    actions: "कार्य",
    fertilizerType: "उर्वरक का प्रकार",
    pestName: "देखा गया कीट",
    harvestQuantity: "कटाई की मात्रा",
    delete: "हटाएँ",
    edit: "बदलें",
    noRecords: "अभी कोई रिकॉर्ड नहीं है। पहला रिकॉर्ड जोड़ें!",
    recordAdded: "रिकॉर्ड सफलतापूर्वक जोड़ा गया!",
    recordDeleted: "रिकॉर्ड हटा दिया गया।",
    loginSuccess: "आपके खेत में स्वागत है!",
    logoutSuccess: "आप लॉग आउट हो गए हैं।",
    fillRequired: "कृपया सभी आवश्यक जानकारी भरें।",
    confirmDelete: "क्या यह रिकॉर्ड हटाना है?",
    all: "सभी",
    rice: "धान",
    tomato: "टमाटर",
    maize: "मक्का",
    wheat: "गेहूँ",
    vegetables: "सब्जियाँ",
    waterActivity: "सिंचाई दर्ज की गई",
    fertilizerActivity: "उर्वरक डाला गया",
    pestActivity: "कीट की जानकारी अपडेट हुई",
    harvestActivity: "कटाई की प्रगति अपडेट हुई",
    recentField: "खेत जोड़ा गया",
    today: "आज",
    yesterday: "कल",
    daysAgo: "दिन पहले",
    kg: "किलोग्राम",
    litres: "लीटर",
    nitrogen: "नाइट्रोजन उर्वरक",
    compost: "जैविक खाद",
    aphids: "माहू कीट",
    leafSpot: "पत्ती धब्बा रोग",
    expected: "अनुमानित",
    completed: "पूरा हुआ",
    inProgress: "जारी है",
    dateLabel: "आज की तारीख",
    homeGreeting: "खेत डैशबोर्ड"
  },

  pa: {
    welcome: "ਸਮਝਦਾਰੀ ਨਾਲ ਖੇਤੀ ਕਰੋ। ਬਿਹਤਰ ਉਗਾਓ।",
    welcomeText: "ਤੁਹਾਡਾ ਖੇਤ, ਤੁਹਾਡੀਆਂ ਫ਼ਸਲਾਂ ਅਤੇ ਤਰੱਕੀ — ਸਭ ਇੱਕ ਥਾਂ।",
    tagline: "ਤੁਹਾਡਾ ਡਿਜੀਟਲ ਖੇਤੀ ਸਹਾਇਕ",
    chooseLanguage: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
    farmerLogin: "ਕਿਸਾਨ ਲੌਗਇਨ",
    loginTitle: "ਜੀ ਆਇਆਂ ਨੂੰ!",
    loginText: "ਆਪਣੇ ਖੇਤ ਦਾ ਆਸਾਨੀ ਨਾਲ ਪ੍ਰਬੰਧਨ ਕਰੋ।",
    usernameLabel: "ਤੁਹਾਡਾ ਨਾਮ",
    usernamePlaceholder: "ਆਪਣਾ ਨਾਮ ਲਿਖੋ",
    passwordLabel: "ਪਾਸਵਰਡ",
    passwordPlaceholder: "ਕੋਈ ਵੀ ਡੈਮੋ ਪਾਸਵਰਡ ਲਿਖੋ",
    signIn: "ਮੇਰੇ ਖੇਤ ਵਿੱਚ ਜਾਓ",
    demoNote: "ਡੈਮੋ ਵੈੱਬਸਾਈਟ: ਅੱਗੇ ਵਧਣ ਲਈ ਕੋਈ ਵੀ ਨਾਮ ਅਤੇ ਪਾਸਵਰਡ ਵਰਤੋ।",
    loadingLabel: "ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ",
    loadingTitle: "ਤੁਹਾਡੇ ਖੇਤ ਦਾ ਡਾਟਾ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    loadingCaption: "ਤੁਹਾਡਾ ਡੈਸ਼ਬੋਰਡ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ...",
    fields: "ਖੇਤ",
    crops: "ਫ਼ਸਲਾਂ",
    irrigation: "ਸਿੰਚਾਈ",
    fertilizer: "ਖਾਦ",
    pests: "ਕੀੜੇ",
    harvest: "ਵਾਢੀ",
    farmManagement: "ਖੇਤੀ ਪ੍ਰਬੰਧਨ",
    farmOwner: "ਖੇਤ ਦਾ ਮਾਲਕ",
    workspace: "ਮੁੱਖ ਮੀਨੂ",
    home: "ਮੁੱਖ ਪੰਨਾ",
    seasonTitle: "ਸਾਉਣੀ ਦਾ ਮੌਸਮ",
    seasonText: "ਡੈਮੋ ਮੌਸਮ · ਭਾਰਤ",
    logout: "ਲੌਗ ਆਉਟ",
    dashboard: "ਖੇਤੀ ਡੈਸ਼ਬੋਰਡ",
    goodDay: "ਭਰੋਸੇ ਨਾਲ ਖੇਤੀ ਕਰੋ",
    hello: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    bannerText: "ਅੱਜ ਤੁਹਾਡੇ ਖੇਤ ਵਿੱਚ ਕੀ ਹੋ ਰਿਹਾ ਹੈ, ਇੱਥੇ ਦੇਖੋ।",
    exploreFields: "ਮੇਰੇ ਖੇਤ ਵੇਖੋ",
    totalFields: "ਕੁੱਲ ਖੇਤ",
    activeCrops: "ਚੱਲ ਰਹੀਆਂ ਫ਼ਸਲਾਂ",
    waterToday: "ਸਿੰਚਾਈ ਦੇ ਰਿਕਾਰਡ",
    harvestReady: "ਵਾਢੀ ਦੀ ਤਰੱਕੀ",
    fieldsManaged: "ਪ੍ਰਬੰਧਨ ਹੇਠ ਖੇਤ",
    cropsGrowing: "ਇਸ ਮੌਸਮ ਦੀਆਂ ਫ਼ਸਲਾਂ",
    irrigationTracked: "ਸਿੰਚਾਈ ਦੇ ਰਿਕਾਰਡ",
    harvestProgress: "ਵਾਢੀ ਦੀ ਡੈਮੋ ਸਥਿਤੀ",
    yourFarm: "ਤੁਹਾਡਾ ਖੇਤ",
    myFields: "ਮੇਰੇ ਖੇਤ",
    viewAll: "ਸਾਰੇ ਵੇਖੋ",
    stayUpdated: "ਨਵੀਂ ਜਾਣਕਾਰੀ",
    recentActivity: "ਹਾਲੀਆ ਗਤੀਵਿਧੀਆਂ",
    live: "ਲਾਈਵ",
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
    vegetative: "ਵਾਧੇ ਦੀ ਅਵਸਥਾ",
    flowering: "ਫੁੱਲਾਂ ਦੀ ਅਵਸਥਾ",
    maturity: "ਪੱਕਣ ਦੀ ਅਵਸਥਾ",
    seedling: "ਬੂਟੇ ਦੀ ਅਵਸਥਾ",
    healthy: "ਸਿਹਤਮੰਦ",
    needsAttention: "ਧਿਆਨ ਦੀ ਲੋੜ",
    field: "ਖੇਤ",
    crop: "ਫ਼ਸਲ",
    stage: "ਅਵਸਥਾ",
    progress: "ਤਰੱਕੀ",
    area: "ਰਕਬਾ (ਏਕੜ)",
    name: "ਨਾਮ",
    cropName: "ਫ਼ਸਲ ਦਾ ਨਾਮ",
    fieldName: "ਖੇਤ ਦਾ ਨਾਮ",
    selectField: "ਖੇਤ ਚੁਣੋ",
    selectCrop: "ਫ਼ਸਲ ਚੁਣੋ",
    date: "ਤਾਰੀਖ",
    amount: "ਮਾਤਰਾ",
    unit: "ਇਕਾਈ",
    notes: "ਵੇਰਵਾ",
    type: "ਕਿਸਮ",
    status: "ਸਥਿਤੀ",
    activity: "ਗਤੀਵਿਧੀ",
    action: "ਕੰਮ",
    actions: "ਕੰਮ",
    fertilizerType: "ਖਾਦ ਦੀ ਕਿਸਮ",
    pestName: "ਦੇਖਿਆ ਗਿਆ ਕੀੜਾ",
    harvestQuantity: "ਵਾਢੀ ਦੀ ਮਾਤਰਾ",
    delete: "ਮਿਟਾਓ",
    edit: "ਬਦਲੋ",
    noRecords: "ਹਾਲੇ ਕੋਈ ਰਿਕਾਰਡ ਨਹੀਂ। ਪਹਿਲਾ ਰਿਕਾਰਡ ਜੋੜੋ!",
    recordAdded: "ਰਿਕਾਰਡ ਸਫਲਤਾਪੂਰਵਕ ਜੋੜਿਆ ਗਿਆ!",
    recordDeleted: "ਰਿਕਾਰਡ ਮਿਟਾ ਦਿੱਤਾ ਗਿਆ।",
    loginSuccess: "ਤੁਹਾਡੇ ਖੇਤ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ!",
    logoutSuccess: "ਤੁਸੀਂ ਲੌਗ ਆਉਟ ਹੋ ਗਏ ਹੋ।",
    fillRequired: "ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੀ ਲੋੜੀਂਦੀ ਜਾਣਕਾਰੀ ਭਰੋ।",
    confirmDelete: "ਕੀ ਇਹ ਰਿਕਾਰਡ ਮਿਟਾਉਣਾ ਹੈ?",
    all: "ਸਾਰੇ",
    rice: "ਝੋਨਾ",
    tomato: "ਟਮਾਟਰ",
    maize: "ਮੱਕੀ",
    wheat: "ਕਣਕ",
    vegetables: "ਸਬਜ਼ੀਆਂ",
    waterActivity: "ਸਿੰਚਾਈ ਦਰਜ ਕੀਤੀ",
    fertilizerActivity: "ਖਾਦ ਪਾਈ ਗਈ",
    pestActivity: "ਕੀੜਿਆਂ ਦੀ ਜਾਣਕਾਰੀ ਅੱਪਡੇਟ ਹੋਈ",
    harvestActivity: "ਵਾਢੀ ਦੀ ਤਰੱਕੀ ਅੱਪਡੇਟ ਹੋਈ",
    recentField: "ਖੇਤ ਜੋੜਿਆ ਗਿਆ",
    today: "ਅੱਜ",
    yesterday: "ਕੱਲ੍ਹ",
    daysAgo: "ਦਿਨ ਪਹਿਲਾਂ",
    kg: "ਕਿਲੋਗ੍ਰਾਮ",
    litres: "ਲੀਟਰ",
    nitrogen: "ਨਾਈਟ੍ਰੋਜਨ ਖਾਦ",
    compost: "ਜੈਵਿਕ ਖਾਦ",
    aphids: "ਮਾਹੂ ਕੀੜੇ",
    leafSpot: "ਪੱਤਿਆਂ ਦੇ ਧੱਬੇ",
    expected: "ਅਨੁਮਾਨਿਤ",
    completed: "ਪੂਰਾ ਹੋਇਆ",
    inProgress: "ਜਾਰੀ ਹੈ",
    dateLabel: "ਅੱਜ ਦੀ ਤਾਰੀਖ",
    homeGreeting: "ਖੇਤੀ ਡੈਸ਼ਬੋਰਡ"
  },

  te: {
    welcome: "తెలివిగా సాగు చేయండి. మెరుగ్గా పండించండి.",
    welcomeText: "మీ పొలం, మీ పంటలు, మీ పురోగతి — అన్నీ ఒకే చోట.",
    tagline: "మీ డిజిటల్ వ్యవసాయ సహాయకుడు",
    chooseLanguage: "మీ భాషను ఎంచుకోండి",
    farmerLogin: "రైతు లాగిన్",
    loginTitle: "మళ్లీ స్వాగతం!",
    loginText: "మీ పొలాన్ని సులభంగా నిర్వహించండి.",
    usernameLabel: "మీ పేరు",
    usernamePlaceholder: "మీ పేరు నమోదు చేయండి",
    passwordLabel: "పాస్‌వర్డ్",
    passwordPlaceholder: "ఏదైనా డెమో పాస్‌వర్డ్ నమోదు చేయండి",
    signIn: "నా పొలంలోకి వెళ్లండి",
    demoNote: "డెమో వెబ్‌సైట్: కొనసాగడానికి ఏ పేరైనా, పాస్‌వర్డ్ అయినా ఉపయోగించండి.",
    loadingLabel: "దయచేసి వేచి ఉండండి",
    loadingTitle: "మీ పొలం డేటా లోడ్ అవుతోంది...",
    loadingCaption: "మీ డాష్‌బోర్డ్ సిద్ధమవుతోంది...",
    fields: "పొలాలు",
    crops: "పంటలు",
    irrigation: "నీటిపారుదల",
    fertilizer: "ఎరువులు",
    pests: "తెగుళ్లు",
    harvest: "పంట కోత",
    farmManagement: "వ్యవసాయ నిర్వహణ",
    farmOwner: "పొలం యజమాని",
    workspace: "ప్రధాన మెనూ",
    home: "హోమ్",
    seasonTitle: "ఖరీఫ్ సీజన్",
    seasonText: "డెమో సీజన్ · భారతదేశం",
    logout: "లాగ్ అవుట్",
    dashboard: "వ్యవసాయ డాష్‌బోర్డ్",
    goodDay: "నమ్మకంతో సాగు చేయండి",
    hello: "నమస్కారం",
    bannerText: "ఈరోజు మీ పొలంలో జరుగుతున్న విషయాలు ఇక్కడ చూడండి.",
    exploreFields: "నా పొలాలను చూడండి",
    totalFields: "మొత్తం పొలాలు",
    activeCrops: "ప్రస్తుతం ఉన్న పంటలు",
    waterToday: "నీటిపారుదల రికార్డులు",
    harvestReady: "కోత పురోగతి",
    fieldsManaged: "నిర్వహిస్తున్న పొలాలు",
    cropsGrowing: "ఈ సీజన్‌లో పెరుగుతున్న పంటలు",
    irrigationTracked: "నీటిపారుదల రికార్డులు",
    harvestProgress: "డెమో కోత స్థితి",
    yourFarm: "మీ పొలం",
    myFields: "నా పొలాలు",
    viewAll: "అన్నీ చూడండి",
    stayUpdated: "తాజా సమాచారం",
    recentActivity: "ఇటీవలి కార్యకలాపాలు",
    live: "ప్రత్యక్షం",
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
    vegetative: "పెరుగుదల దశ",
    flowering: "పుష్పించే దశ",
    maturity: "పక్వ దశ",
    seedling: "మొలక దశ",
    healthy: "ఆరోగ్యంగా ఉంది",
    needsAttention: "శ్రద్ధ అవసరం",
    field: "పొలం",
    crop: "పంట",
    stage: "దశ",
    progress: "పురోగతి",
    area: "విస్తీర్ణం (ఎకరాలు)",
    name: "పేరు",
    cropName: "పంట పేరు",
    fieldName: "పొలం పేరు",
    selectField: "పొలం ఎంచుకోండి",
    selectCrop: "పంట ఎంచుకోండి",
    date: "తేదీ",
    amount: "పరిమాణం",
    unit: "యూనిట్",
    notes: "వివరాలు",
    type: "రకం",
    status: "స్థితి",
    activity: "కార్యకలాపం",
    action: "చర్య",
    actions: "చర్యలు",
    fertilizerType: "ఎరువు రకం",
    pestName: "గమనించిన తెగులు",
    harvestQuantity: "పంట కోత పరిమాణం",
    delete: "తొలగించు",
    edit: "మార్చు",
    noRecords: "రికార్డులు లేవు. మొదటి రికార్డును జోడించండి!",
    recordAdded: "రికార్డు విజయవంతంగా జోడించబడింది!",
    recordDeleted: "రికార్డు తొలగించబడింది.",
    loginSuccess: "మీ పొలానికి స్వాగతం!",
    logoutSuccess: "మీరు లాగ్ అవుట్ అయ్యారు.",
    fillRequired: "దయచేసి అవసరమైన వివరాలన్నీ నమోదు చేయండి.",
    confirmDelete: "ఈ రికార్డును తొలగించాలా?",
    all: "అన్నీ",
    rice: "వరి",
    tomato: "టమాటా",
    maize: "మొక్కజొన్న",
    wheat: "గోధుమ",
    vegetables: "కూరగాయలు",
    waterActivity: "నీటిపారుదల నమోదు చేయబడింది",
    fertilizerActivity: "ఎరువు వేశారు",
    pestActivity: "తెగులు వివరాలు నవీకరించబడ్డాయి",
    harvestActivity: "కోత పురోగతి నవీకరించబడింది",
    recentField: "పొలం జోడించబడింది",
    today: "ఈరోజు",
    yesterday: "నిన్న",
    daysAgo: "రోజుల క్రితం",
    kg: "కిలోలు",
    litres: "లీటర్లు",
    nitrogen: "నైట్రోజన్ ఎరువు",
    compost: "సేంద్రీయ కంపోస్ట్",
    aphids: "ఆఫిడ్స్",
    leafSpot: "ఆకు మచ్చ తెగులు",
    expected: "అంచనా",
    completed: "పూర్తయింది",
    inProgress: "కొనసాగుతోంది",
    dateLabel: "ఈరోజు తేదీ",
    homeGreeting: "వ్యవసాయ డాష్‌బోర్డ్"
  },

  ml: {
    welcome: "ബുദ്ധിപൂർവം കൃഷി ചെയ്യൂ. മികച്ച വിളവ് നേടൂ.",
    welcomeText: "നിങ്ങളുടെ കൃഷിയിടവും വിളകളും പുരോഗതിയും ഒരിടത്ത്.",
    tagline: "നിങ്ങളുടെ ഡിജിറ്റൽ കൃഷി സഹായി",
    chooseLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
    farmerLogin: "കർഷക ലോഗിൻ",
    loginTitle: "വീണ്ടും സ്വാഗതം!",
    loginText: "നിങ്ങളുടെ കൃഷിയിടം എളുപ്പത്തിൽ നിയന്ത്രിക്കൂ.",
    usernameLabel: "നിങ്ങളുടെ പേര്",
    usernamePlaceholder: "പേര് നൽകുക",
    passwordLabel: "പാസ്‌വേഡ്",
    passwordPlaceholder: "ഏതെങ്കിലും ഡെമോ പാസ്‌വേഡ് നൽകുക",
    signIn: "എന്റെ കൃഷിയിടത്തിലേക്ക്",
    demoNote: "ഡെമോ വെബ്‌സൈറ്റ്: തുടരാൻ ഏതെങ്കിലും പേരും പാസ്‌വേഡും ഉപയോഗിക്കുക.",
    loadingLabel: "ദയവായി കാത്തിരിക്കുക",
    loadingTitle: "നിങ്ങളുടെ കൃഷിയിട വിവരങ്ങൾ ലോഡ് ചെയ്യുന്നു...",
    loadingCaption: "നിങ്ങളുടെ ഡാഷ്‌ബോർഡ് തയ്യാറാക്കുന്നു...",
    fields: "കൃഷിയിടങ്ങൾ",
    crops: "വിളകൾ",
    irrigation: "ജലസേചനം",
    fertilizer: "വളം",
    pests: "കീടങ്ങൾ",
    harvest: "വിളവെടുപ്പ്",
    farmManagement: "കൃഷിയിട നിയന്ത്രണം",
    farmOwner: "കൃഷിയിട ഉടമ",
    workspace: "പ്രധാന മെനു",
    home: "ഹോം",
    seasonTitle: "ഖാരിഫ് സീസൺ",
    seasonText: "ഡെമോ സീസൺ · ഇന്ത്യ",
    logout: "ലോഗ് ഔട്ട്",
    dashboard: "കൃഷി ഡാഷ്‌ബോർഡ്",
    goodDay: "ആത്മവിശ്വാസത്തോടെ കൃഷി ചെയ്യൂ",
    hello: "നമസ്കാരം",
    bannerText: "ഇന്ന് നിങ്ങളുടെ കൃഷിയിടത്തിൽ നടക്കുന്ന കാര്യങ്ങൾ കാണൂ.",
    exploreFields: "എന്റെ കൃഷിയിടങ്ങൾ കാണുക",
    totalFields: "ആകെ കൃഷിയിടങ്ങൾ",
    activeCrops: "സജീവ വിളകൾ",
    waterToday: "ജലസേചന രേഖകൾ",
    harvestReady: "വിളവെടുപ്പ് പുരോഗതി",
    fieldsManaged: "നിയന്ത്രിക്കുന്ന കൃഷിയിടങ്ങൾ",
    cropsGrowing: "ഈ സീസണിലെ വിളകൾ",
    irrigationTracked: "ജലസേചന രേഖകൾ",
    harvestProgress: "ഡെമോ വിളവെടുപ്പ് നില",
    yourFarm: "നിങ്ങളുടെ കൃഷിയിടം",
    myFields: "എന്റെ കൃഷിയിടങ്ങൾ",
    viewAll: "എല്ലാം കാണുക",
    stayUpdated: "പുതിയ വിവരങ്ങൾ",
    recentActivity: "സമീപകാല പ്രവർത്തനങ്ങൾ",
    live: "തത്സമയം",
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
    vegetative: "വളർച്ചാ ഘട്ടം",
    flowering: "പൂവിടുന്ന ഘട്ടം",
    maturity: "വിളവെത്തുന്ന ഘട്ടം",
    seedling: "തൈ ഘട്ടം",
    healthy: "ആരോഗ്യമുള്ളത്",
    needsAttention: "ശ്രദ്ധ ആവശ്യമാണ്",
    field: "കൃഷിയിടം",
    crop: "വിള",
    stage: "ഘട്ടം",
    progress: "പുരോഗതി",
    area: "വിസ്തീർണം (ഏക്കർ)",
    name: "പേര്",
    cropName: "വിളയുടെ പേര്",
    fieldName: "കൃഷിയിടത്തിന്റെ പേര്",
    selectField: "കൃഷിയിടം തിരഞ്ഞെടുക്കുക",
    selectCrop: "വിള തിരഞ്ഞെടുക്കുക",
    date: "തീയതി",
    amount: "അളവ്",
    unit: "യൂണിറ്റ്",
    notes: "വിവരങ്ങൾ",
    type: "തരം",
    status: "നില",
    activity: "പ്രവർത്തനം",
    action: "നടപടി",
    actions: "നടപടികൾ",
    fertilizerType: "വളത്തിന്റെ തരം",
    pestName: "കണ്ടെത്തിയ കീടം",
    harvestQuantity: "വിളവെടുപ്പ് അളവ്",
    delete: "നീക്കം ചെയ്യുക",
    edit: "തിരുത്തുക",
    noRecords: "രേഖകളില്ല. ആദ്യ രേഖ ചേർക്കുക!",
    recordAdded: "രേഖ വിജയകരമായി ചേർത്തു!",
    recordDeleted: "രേഖ നീക്കം ചെയ്തു.",
    loginSuccess: "നിങ്ങളുടെ കൃഷിയിടത്തിലേക്ക് സ്വാഗതം!",
    logoutSuccess: "നിങ്ങൾ ലോഗ് ഔട്ട് ചെയ്തു.",
    fillRequired: "ആവശ്യമായ വിവരങ്ങൾ പൂരിപ്പിക്കുക.",
    confirmDelete: "ഈ രേഖ നീക്കം ചെയ്യണോ?",
    all: "എല്ലാം",
    rice: "നെല്ല്",
    tomato: "തക്കാളി",
    maize: "ചോളം",
    wheat: "ഗോതമ്പ്",
    vegetables: "പച്ചക്കറികൾ",
    waterActivity: "ജലസേചനം രേഖപ്പെടുത്തി",
    fertilizerActivity: "വളം പ്രയോഗിച്ചു",
    pestActivity: "കീട വിവരങ്ങൾ പുതുക്കി",
    harvestActivity: "വിളവെടുപ്പ് പുരോഗതി പുതുക്കി",
    recentField: "കൃഷിയിടം ചേർത്തു",
    today: "ഇന്ന്",
    yesterday: "ഇന്നലെ",
    daysAgo: "ദിവസം മുമ്പ്",
    kg: "കിലോഗ്രാം",
    litres: "ലിറ്റർ",
    nitrogen: "നൈട്രജൻ വളം",
    compost: "ജൈവ കമ്പോസ്റ്റ്",
    aphids: "മുഞ്ഞ",
    leafSpot: "ഇല പുള്ളി രോഗം",
    expected: "പ്രതീക്ഷിക്കുന്നത്",
    completed: "പൂർത്തിയായി",
    inProgress: "പുരോഗമിക്കുന്നു",
    dateLabel: "ഇന്നത്തെ തീയതി",
    homeGreeting: "കൃഷി ഡാഷ്‌ബോർഡ്"
  },

  ta: {
    welcome: "புத்திசாலித்தனமாக விவசாயம் செய்யுங்கள்.",
    welcomeText: "உங்கள் நிலம், பயிர்கள், முன்னேற்றம் — அனைத்தும் ஒரே இடத்தில்.",
    tagline: "உங்கள் டிஜிட்டல் விவசாய உதவியாளர்",
    chooseLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
    farmerLogin: "விவசாயி உள்நுழைவு",
    loginTitle: "மீண்டும் வரவேற்கிறோம்!",
    loginText: "உங்கள் பண்ணையை எளிதாக நிர்வகிக்கவும்.",
    usernameLabel: "உங்கள் பெயர்",
    usernamePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
    passwordLabel: "கடவுச்சொல்",
    passwordPlaceholder: "ஏதேனும் டெமோ கடவுச்சொல்லை உள்ளிடவும்",
    signIn: "என் பண்ணைக்குச் செல்லவும்",
    demoNote: "டெமோ இணையதளம்: தொடர ஏதேனும் பெயர் மற்றும் கடவுச்சொல்லைப் பயன்படுத்தவும்.",
    loadingLabel: "தயவுசெய்து காத்திருக்கவும்",
    loadingTitle: "உங்கள் பண்ணைத் தரவு ஏற்றப்படுகிறது...",
    loadingCaption: "உங்கள் டாஷ்போர்டு தயாராகிறது...",
    fields: "வயல்கள்",
    crops: "பயிர்கள்",
    irrigation: "நீர்ப்பாசனம்",
    fertilizer: "உரம்",
    pests: "பூச்சிகள்",
    harvest: "அறுவடை",
    farmManagement: "பண்ணை மேலாண்மை",
    farmOwner: "பண்ணை உரிமையாளர்",
    workspace: "முக்கிய மெனு",
    home: "முகப்பு",
    seasonTitle: "காரிப் பருவம்",
    seasonText: "டெமோ பருவம் · இந்தியா",
    logout: "வெளியேறு",
    dashboard: "பண்ணை டாஷ்போர்டு",
    goodDay: "நம்பிக்கையுடன் விவசாயம் செய்யுங்கள்",
    hello: "வணக்கம்",
    bannerText: "இன்று உங்கள் பண்ணையில் நடப்பவற்றைப் பாருங்கள்.",
    exploreFields: "என் வயல்களைப் பார்க்கவும்",
    totalFields: "மொத்த வயல்கள்",
    activeCrops: "செயலில் உள்ள பயிர்கள்",
    waterToday: "நீர்ப்பாசன பதிவுகள்",
    harvestReady: "அறுவடை முன்னேற்றம்",
    fieldsManaged: "நிர்வகிக்கப்படும் வயல்கள்",
    cropsGrowing: "இந்தப் பருவத்தில் வளரும் பயிர்கள்",
    irrigationTracked: "நீர்ப்பாசன பதிவுகள்",
    harvestProgress: "டெமோ அறுவடை நிலை",
    yourFarm: "உங்கள் பண்ணை",
    myFields: "என் வயல்கள்",
    viewAll: "அனைத்தையும் காண்க",
    stayUpdated: "புதிய தகவல்கள்",
    recentActivity: "சமீபத்திய செயல்பாடுகள்",
    live: "நேரலை",
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
    vegetative: "வளர்ச்சி நிலை",
    flowering: "பூக்கும் நிலை",
    maturity: "முதிர்ச்சி நிலை",
    seedling: "நாற்று நிலை",
    healthy: "ஆரோக்கியமானது",
    needsAttention: "கவனம் தேவை",
    field: "வயல்",
    crop: "பயிர்",
    stage: "நிலை",
    progress: "முன்னேற்றம்",
    area: "பரப்பளவு (ஏக்கர்)",
    name: "பெயர்",
    cropName: "பயிரின் பெயர்",
    fieldName: "வயலின் பெயர்",
    selectField: "வயலைத் தேர்ந்தெடுக்கவும்",
    selectCrop: "பயிரைத் தேர்ந்தெடுக்கவும்",
    date: "தேதி",
    amount: "அளவு",
    unit: "அலகு",
    notes: "குறிப்புகள்",
    type: "வகை",
    status: "நிலை",
    activity: "செயல்பாடு",
    action: "செயல்",
    actions: "செயல்கள்",
    fertilizerType: "உர வகை",
    pestName: "கண்டறியப்பட்ட பூச்சி",
    harvestQuantity: "அறுவடை அளவு",
    delete: "நீக்கு",
    edit: "திருத்து",
    noRecords: "பதிவுகள் இல்லை. முதல் பதிவைச் சேர்க்கவும்!",
    recordAdded: "பதிவு வெற்றிகரமாகச் சேர்க்கப்பட்டது!",
    recordDeleted: "பதிவு நீக்கப்பட்டது.",
    loginSuccess: "உங்கள் பண்ணைக்கு வரவேற்கிறோம்!",
    logoutSuccess: "நீங்கள் வெளியேறிவிட்டீர்கள்.",
    fillRequired: "தேவையான அனைத்து விவரங்களையும் நிரப்பவும்.",
    confirmDelete: "இந்தப் பதிவை நீக்க வேண்டுமா?",
    all: "அனைத்தும்",
    rice: "நெல்",
    tomato: "தக்காளி",
    maize: "மக்காச்சோளம்",
    wheat: "கோதுமை",
    vegetables: "காய்கறிகள்",
    waterActivity: "நீர்ப்பாசனம் பதிவு செய்யப்பட்டது",
    fertilizerActivity: "உரம் இடப்பட்டது",
    pestActivity: "பூச்சி விவரங்கள் புதுப்பிக்கப்பட்டன",
    harvestActivity: "அறுவடை முன்னேற்றம் புதுப்பிக்கப்பட்டது",
    recentField: "வயல் சேர்க்கப்பட்டது",
    today: "இன்று",
    yesterday: "நேற்று",
    daysAgo: "நாட்களுக்கு முன்பு",
    kg: "கிலோகிராம்",
    litres: "லிட்டர்",
    nitrogen: "நைட்ரஜன் உரம்",
    compost: "இயற்கை உரம்",
    aphids: "அசுவினி பூச்சிகள்",
    leafSpot: "இலைப்புள்ளி நோய்",
    expected: "எதிர்பார்க்கப்படும்",
    completed: "முடிந்தது",
    inProgress: "நடைபெறுகிறது",
    dateLabel: "இன்றைய தேதி",
    homeGreeting: "பண்ணை டாஷ்போர்டு"
  }
};

/* ---------- APPLICATION STATE ---------- */

let currentLanguage = "en";
let currentPage = "home";
let currentRecordType = "fields";
let farmer = "Farmer";
let toastTimer;

const today = new Date().toISOString().slice(0, 10);

const records = {
  fields: [
    { id: 1, name: "Green Valley", crop: "Rice", area: 2.5, stage: "vegetative", progress: 58 },
    { id: 2, name: "Sunrise Farm", crop: "Tomato", area: 1.5, stage: "flowering", progress: 72 },
    { id: 3, name: "Harvest Hope", crop: "Maize", area: 3, stage: "maturity", progress: 86 },
    { id: 4, name: "Golden Acres", crop: "Wheat", area: 2, stage: "vegetative", progress: 45 },
    { id: 5, name: "Green Garden", crop: "Vegetables", area: 1, stage: "seedling", progress: 25 }
  ],

  crops: [
    { id: 1, name: "Rice", field: "Green Valley", stage: "vegetative", status: "healthy" },
    { id: 2, name: "Tomato", field: "Sunrise Farm", stage: "flowering", status: "healthy" },
    { id: 3, name: "Maize", field: "Harvest Hope", stage: "maturity", status: "healthy" },
    { id: 4, name: "Wheat", field: "Golden Acres", stage: "vegetative", status: "healthy" },
    { id: 5, name: "Vegetables", field: "Green Garden", stage: "seedling", status: "healthy" }
  ],

  irrigation: [
    { id: 1, field: "Green Valley", date: today, amount: 500, unit: "litres", notes: "Morning irrigation" },
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
    { id: 1, field: "Green Valley", type: "Aphids", date: today, status: "healthy", notes: "Routine inspection" },
    { id: 2, field: "Sunrise Farm", type: "Leaf spot", date: today, status: "warning", notes: "Monitor affected leaves" },
    { id: 3, field: "Harvest Hope", type: "Aphids", date: today, status: "healthy", notes: "No major damage" },
    { id: 4, field: "Golden Acres", type: "Leaf spot", date: today, status: "healthy", notes: "Inspection completed" },
    { id: 5, field: "Green Garden", type: "Aphids", date: today, status: "healthy", notes: "Routine monitoring" }
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
  { type: "water", text: "waterActivity", detail: "Green Valley", time: "09:30" },
  { type: "fertilizer", text: "fertilizerActivity", detail: "Sunrise Farm", time: "08:45" },
  { type: "pest", text: "pestActivity", detail: "Harvest Hope", time: "Yesterday" },
  { type: "harvest", text: "harvestActivity", detail: "Golden Acres", time: "Yesterday" }
];

/* ---------- TRANSLATION HELPERS ---------- */

function t(key) {
  return translations[currentLanguage]?.[key]
    || translations.en[key]
    || key;
}

function translateValue(value) {
  const map = {
    Rice: "rice",
    Tomato: "tomato",
    Maize: "maize",
    Wheat: "wheat",
    Vegetables: "vegetables",
    "Green Valley": "Green Valley",
    "Sunrise Farm": "Sunrise Farm",
    "Harvest Hope": "Harvest Hope",
    "Golden Acres": "Golden Acres",
    "Green Garden": "Green Garden",
    "Nitrogen fertilizer": "nitrogen",
    "Organic compost": "compost",
    Aphids: "aphids",
    "Leaf spot": "leafSpot",
    "In progress": "inProgress",
    Expected: "expected",
    Completed: "completed"
  };

  return map[value] ? t(map[value]) : value;
}

function translateDate(date) {
  if (!date) return "";
  const parsed = new Date(date + "T12:00:00");
  if (Number.isNaN(parsed.getTime())) return date;

  const locale = {
    en: "en-IN",
    hi: "hi-IN",
    pa: "pa-IN",
    te: "te-IN",
    ml: "ml-IN",
    ta: "ta-IN"
  }[currentLanguage] || "en-IN";

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(parsed);
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  $$("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });

  $$("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  $("#loginLanguage").value = currentLanguage;
  $("#dashboardLanguage").value = currentLanguage;

  renderDashboard();
  updatePageHeading();

  if (!$("#managementPage").classList.contains("hidden")) {
    renderManagementPage();
  }
}

function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  applyTranslations();
}

/* ---------- LOGIN AND LOADING ---------- */

$("#loginForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#username").value.trim();
  const password = $("#password").value;

  if (!name || !password) {
    showToast(t("fillRequired"));
    return;
  }

  farmer = name;
  $("#farmerName").textContent = farmer;
  $("#welcomeName").textContent = farmer;
  $("#userAvatar").textContent = farmer.charAt(0).toUpperCase();

  $("#loginScreen").classList.add("hidden");
  $("#loadingScreen").classList.remove("hidden");

  const tasks = $$(".loading-task");
  const progress = $("#loadingProgress");

  tasks.forEach(task => task.classList.remove("done", "pending"));
  progress.style.width = "0%";

  let completed = 0;

  function loadNextTask() {
    if (completed > 0) {
      tasks[completed - 1]?.classList.add("done");
    }

    if (completed < tasks.length) {
      tasks[completed].classList.add("pending");
      progress.style.width =
        `${Math.round((completed / tasks.length) * 100)}%`;
      completed++;
      window.setTimeout(loadNextTask, 260);
      return;
    }

    progress.style.width = "100%";
    tasks.forEach(task => {
      task.classList.remove("pending");
      task.classList.add("done");
    });

    window.setTimeout(() => {
      $("#loadingScreen").classList.add("hidden");
      $("#appScreen").classList.remove("hidden");
      $("#todayDate").textContent = new Intl.DateTimeFormat(
        currentLanguage === "en" ? "en-IN" : currentLanguage + "-IN",
        { weekday: "short", day: "numeric", month: "short", year: "numeric" }
      ).format(new Date());

      currentPage = "home";
      updateNavigation();
      showToast(t("loginSuccess"));
      window.scrollTo(0, 0);
    }, 350);
  }

  loadNextTask();
});

$("#loginLanguage").addEventListener("change", event => {
  setLanguage(event.target.value);
});

$("#dashboardLanguage").addEventListener("change", event => {
  setLanguage(event.target.value);
});

$("#logoutButton").addEventListener("click", () => {
  $("#appScreen").classList.add("hidden");
  $("#loadingScreen").classList.add("hidden");
  $("#loginScreen").classList.remove("hidden");
  $("#password").value = "";
  closeSidebar();
  showToast(t("logoutSuccess"));
  window.scrollTo(0, 0);
});

/* ---------- SIDEBAR ---------- */

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

function updateNavigation() {
  $$(".nav-link").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === currentPage
    );
  });
}

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

  const heading = headings[currentPage] || "dashboard";
  $(".topbar h2").textContent = t(heading);
}

function navigateTo(page) {
  if (!records[page] && page !== "home") return;

  currentPage = page;
  updateNavigation();
  updatePageHeading();
  closeSidebar();

  if (page === "home") {
    $("#managementPage").classList.add("hidden");
    $(".content-grid").classList.remove("hidden");
    $(".quick-panel").classList.remove("hidden");
    renderDashboard();
  } else {
    $(".content-grid").classList.add("hidden");
    $(".quick-panel").classList.add("hidden");
    $("#managementPage").classList.remove("hidden");
    renderManagementPage();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#sideNav").addEventListener("click", event => {
  const button = event.target.closest("[data-page]");
  if (button) navigateTo(button.dataset.page);
});

$$("[data-go]").forEach(button => {
  button.addEventListener("click", () => navigateTo(button.dataset.go));
});

$$("[data-add]").forEach(button => {
  button.addEventListener("click", () => openRecordModal(button.dataset.add));
});

/* ---------- DASHBOARD ---------- */

function cropEmoji(crop) {
  const icons = {
    Rice: "🌾",
    Tomato: "🍅",
    Maize: "🌽",
    Wheat: "🌾",
    Vegetables: "🥬"
  };
  return icons[crop] || "🌱";
}

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

  $("#statFields").textContent = records.fields.length;
  $("#statCrops").textContent = records.crops.length;
  $("#statWater").textContent = records.irrigation.length;

  $("#featuredFields").innerHTML = records.fields.slice(0, 3).map(field => `
    <article class="field-item">
      <div class="field-picture ${cropClass(field.crop)}">
        ${cropEmoji(field.crop)}
      </div>
      <div class="field-info">
        <h3>${escapeHTML(field.name)}</h3>
        <p>${escapeHTML(translateValue(field.crop))} ·
          ${Number(field.area)} ${t("area").replace(" (acres)", "").replace(" (एकड़)", "").replace(" (ਏਕੜ)", "")}
        </p>
        <div class="field-progress-row">
          <div class="mini-track">
            <span style="width:${Math.max(0, Math.min(100, Number(field.progress)))}%"></span>
          </div>
          <strong>${field.progress}%</strong>
        </div>
      </div>
    </article>
  `).join("");

  const activityIcons = {
    water: "💧",
    fertilizer: "🌿",
    pest: "🐛",
    harvest: "🌾",
    field: "🌱"
  };

  $("#recentActivity").innerHTML = activities.slice(0, 5).map(item => `
    <article class="activity-item">
      <div class="activity-icon ${item.type}">
        ${activityIcons[item.type] || "🌱"}
      </div>
      <div class="activity-copy">
        <h3>${escapeHTML(t(item.text))}</h3>
        <p>${escapeHTML(item.detail)}</p>
      </div>
      <span class="activity-time">${escapeHTML(
        item.time === "Today" ? t("today") :
        item.time === "Yesterday" ? t("yesterday") :
        item.time
      )}</span>
    </article>
  `).join("");
}

/* ---------- RECORD TABLES ---------- */

const schemas = {
  fields: {
    title: "fields",
    columns: ["name", "crop", "area", "stage", "progress"],
    form: [
      { key: "name", type: "text", required: true },
      { key: "crop", type: "select", options: ["Rice", "Tomato", "Maize", "Wheat", "Vegetables"], required: true },
      { key: "area", type: "number", required: true, min: 0.1, step: "0.1" },
      { key: "stage", type: "select", options: ["seedling", "vegetative", "flowering", "maturity"], required: true },
      { key: "progress", type: "number", required: true, min: 0, max: 100 }
    ]
  },

  crops: {
    title: "crops",
    columns: ["name", "field", "stage", "status"],
    form: [
      { key: "name", type: "select", options: ["Rice", "Tomato", "Maize", "Wheat", "Vegetables"], required: true },
      { key: "field", type: "select", source: "fields", required: true },
      { key: "stage", type: "select", options: ["seedling", "vegetative", "flowering", "maturity"], required: true },
      { key: "status", type: "select", options: ["healthy", "warning"], required: true }
    ]
  },

  irrigation: {
    title: "irrigation",
    columns: ["field", "date", "amount", "unit", "notes"],
    form: [
      { key: "field", type: "select", source: "fields", required: true },
      { key: "date", type: "date", required: true },
      { key: "amount", type: "number", required: true, min: 0 },
      { key: "unit", type: "select", options: ["litres", "kg"], required: true },
      { key: "notes", type: "text", required: false }
    ]
  },

  fertilizer: {
    title: "fertilizer",
    columns: ["field", "type", "date", "amount", "unit"],
    form: [
      { key: "field", type: "select", source: "fields", required: true },
      { key: "type", type: "select", options: ["Nitrogen fertilizer", "Organic compost"], required: true },
      { key: "date", type: "date", required: true },
      { key: "amount", type: "number", required: true, min: 0 },
      { key: "unit", type: "select", options: ["kg", "litres"], required: true }
    ]
  },

  pests: {
    title: "pests",
    columns: ["field", "type", "date", "status", "notes"],
    form: [
      { key: "field", type: "select", source: "fields", required: true },
      { key: "type", type: "select", options: ["Aphids", "Leaf spot"], required: true },
      { key: "date", type: "date", required: true },
      { key: "status", type: "select", options: ["healthy", "warning"], required: true },
      { key: "notes", type: "text", required: false }
    ]
  },

  harvest: {
    title: "harvest",
    columns: ["field", "crop", "date", "amount", "unit", "status"],
    form: [
      { key: "field", type: "select", source: "fields", required: true },
      { key: "crop", type: "select", options: ["Rice", "Tomato", "Maize", "Wheat", "Vegetables"], required: true },
      { key: "date", type: "date", required: true },
      { key: "amount", type: "number", required: true, min: 0 },
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

  return t(labels[key] || key);
}

function formatCell(key, value) {
  if (value === undefined || value === null || value === "") return "—";

  if (key === "date") return escapeHTML(translateDate(String(value)));

  if (key === "area") return `${escapeHTML(String(value))} acres`;

  if (key === "progress") return `${escapeHTML(String(value))}%`;

  if (key === "stage") return escapeHTML(t(value));

  if (key === "status") {
    const warning = value === "warning" || value === "Expected";
    const statusText = value === "warning" ? t("needsAttention") :
      value === "healthy" ? t("healthy") : translateValue(value);

    return `<span class="status-pill ${warning ? "warning" : ""}">${escapeHTML(statusText)}</span>`;
  }

  if (key === "crop" || key === "type" || key === "unit") {
    return escapeHTML(translateValue(value));
  }

  return escapeHTML(String(value));
}

function renderManagementPage() {
  const schema = schemas[currentPage];
  if (!schema) return;

  $("#managementTitle").textContent = t(schema.title);

  const data = records[currentPage];

  if (!data.length) {
    $("#managementContent").innerHTML = `
      <div class="empty-state">${escapeHTML(t("noRecords"))}</div>
    `;
    return;
  }

  const columns = schema.columns;

  $("#managementContent").innerHTML = `
    <table class="records-table">
      <thead>
        <tr>
          ${columns.map(key => `<th>${escapeHTML(columnLabel(key))}</th>`).join("")}
          <th>${escapeHTML(t("actions"))}</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(record => `
          <tr>
            ${columns.map(key => `<td>${formatCell(key, record[key])}</td>`).join("")}
            <td>
              <div class="table-actions">
                <button class="small-action delete"
                  data-delete="${record.id}"
                  aria-label="${escapeHTML(t("delete"))}">
                  ${escapeHTML(t("delete"))}
                </button>
              </div>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

$("#managementContent").addEventListener("click", event => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;

  if (!window.confirm(t("confirmDelete"))) return;

  const id = Number(button.dataset.delete);
  records[currentPage] = records[currentPage].filter(
    record => record.id !== id
  );

  renderManagementPage();
  renderDashboard();
  showToast(t("recordDeleted"));
});

$("#addRecordButton").addEventListener("click", () => {
  openRecordModal(currentPage);
});

/* ---------- ADD RECORD MODAL ---------- */

function openRecordModal(type) {
  if (!schemas[type]) return;

  currentRecordType = type;
  const schema = schemas[type];

  $("#modalTitle").textContent = `${t("addNew")} — ${t(schema.title)}`;

  $("#recordFormFields").innerHTML = schema.form.map(field => {
    const label = columnLabel(field.key);
    const id = `record-${field.key}`;

    let control = "";

    if (field.type === "select") {
      let options = field.options || [];

      if (field.source === "fields") {
        options = records.fields.map(item => item.name);
      }

      control = `
        <select id="${id}" name="${field.key}"
          ${field.required ? "required" : ""}>
          <option value="">${escapeHTML(
            field.source === "fields" ? t("selectField") :
            field.key === "crop" ? t("selectCrop") : label
          )}</option>
          ${options.map(option => `
            <option value="${escapeHTML(option)}">${escapeHTML(translateValue(option))}</option>
          `).join("")}
        </select>
      `;
    } else {
      control = `
        <input id="${id}" name="${field.key}"
          type="${field.type}"
          ${field.min !== undefined ? `min="${field.min}"` : ""}
          ${field.max !== undefined ? `max="${field.max}"` : ""}
          ${field.step ? `step="${field.step}"` : ""}
          ${field.required ? "required" : ""}
          ${field.type === "date" ? `value="${today}"` : ""}
          ${field.key === "progress" ? 'value="0"' : ""}
          placeholder="${escapeHTML(label)}">
      `;
    }

    return `
      <label for="${id}">${escapeHTML(label)}</label>
      ${control}
    `;
  }).join("");

  $("#recordModal").classList.remove("hidden");
}

function closeRecordModal() {
  $("#recordModal").classList.add("hidden");
  $("#recordForm").reset();
}

$("#closeModal").addEventListener("click", closeRecordModal);
$("#cancelModal").addEventListener("click", closeRecordModal);

$("#recordModal").addEventListener("click", event => {
  if (event.target === $("#recordModal")) closeRecordModal();
});

$("#recordForm").addEventListener("submit", event => {
  event.preventDefault();

  const schema = schemas[currentRecordType];
  const formData = new FormData(event.currentTarget);
  const record = {
    id: Date.now()
  };

  schema.form.forEach(field => {
    let value = formData.get(field.key);

    if (field.type === "number") {
      value = Number(value);
    }

    record[field.key] = value;
  });

  if (currentRecordType === "fields") {
    record.progress = Math.max(0, Math.min(100, record.progress));
  }

  records[currentRecordType].push(record);

  const activityTypes = {
    fields: { type: "field", text: "recentField" },
    crops: { type: "field", text: "recentField" },
    irrigation: { type: "water", text: "waterActivity" },
    fertilizer: { type: "fertilizer", text: "fertilizerActivity" },
    pests: { type: "pest", text: "pestActivity" },
    harvest: { type: "harvest", text: "harvestActivity" }
  };

  const activity = activityTypes[currentRecordType];

  activities.unshift({
    type: activity.type,
    text: activity.text,
    detail: record.field || record.name || "Farm",
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })
  });

  activities = activities.slice(0, 10);

  closeRecordModal();
  renderDashboard();

  if (currentPage !== "home") {
    renderManagementPage();
  }

  showToast(t("recordAdded"));
});

/* ---------- SECURITY AND NOTIFICATIONS ---------- */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(toastTimer);

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* ---------- INITIAL SETUP ---------- */

applyTranslations();
