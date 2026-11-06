// ========================================
// HARVESTLY - MULTILINGUAL FARMING WEBSITE
// ========================================

// 1. LANGUAGE TRANSLATIONS

const translations = {

    en: {
        tag: "🌱 YOUR FARM, OUR CARE",
        heading: "Grow Better. Harvest Smarter.",
        description: "Manage your farms, crops and daily activities easily — all in one place.",
        welcome: "Welcome Back!",
        subtitle: "Sign in to manage your farm",
        userLabel: "Username",
        passLabel: "Password",
        userPlaceholder: "Enter your username",
        passPlaceholder: "Enter your password",
        login: "Login to Harvestly →",
        newUser: "New to Harvestly?",
        signup: "Create Account",
        show: "Show",
        hide: "Hide",
        empty: "Please enter your username and password.",
        success: "Welcome",
        successEnd: "! Your demo login is successful. Dashboard is our next step.",
        signupMessage: "Account registration will be added soon.",
        footer: "© 2026 Harvestly | Smart Farming for Everyone"
    },

    te: {
        tag: "🌱 మీ పొలం – మా బాధ్యత",
        heading: "మంచి పంటలు. మెరుగైన వ్యవసాయం.",
        description: "మీ పొలాలు, పంటలు మరియు రోజువారీ పనులను ఒకే చోట నిర్వహించండి.",
        welcome: "స్వాగతం!",
        subtitle: "మీ పొలాన్ని నిర్వహించడానికి లాగిన్ అవ్వండి",
        userLabel: "వినియోగదారు పేరు",
        passLabel: "పాస్‌వర్డ్",
        userPlaceholder: "మీ పేరు నమోదు చేయండి",
        passPlaceholder: "పాస్‌వర్డ్ నమోదు చేయండి",
        login: "లాగిన్ అవ్వండి →",
        newUser: "కొత్త వినియోగదారులా?",
        signup: "ఖాతా సృష్టించండి",
        show: "చూపించు",
        hide: "దాచు",
        empty: "దయచేసి మీ పేరు మరియు పాస్‌వర్డ్ నమోదు చేయండి.",
        success: "స్వాగతం",
        successEnd: "! మీ డెమో లాగిన్ విజయవంతమైంది.",
        signupMessage: "ఖాతా నమోదు త్వరలో జోడించబడుతుంది.",
        footer: "© 2026 Harvestly | అందరికీ స్మార్ట్ వ్యవసాయం"
    },

    hi: {
        tag: "🌱 आपका खेत – हमारी देखभाल",
        heading: "बेहतर खेती। बेहतर फसल।",
        description: "अपने खेतों, फसलों और रोज़ के कामों को एक ही जगह संभालें।",
        welcome: "आपका स्वागत है!",
        subtitle: "अपने खेत को संभालने के लिए लॉगिन करें",
        userLabel: "उपयोगकर्ता नाम",
        passLabel: "पासवर्ड",
        userPlaceholder: "अपना नाम लिखें",
        passPlaceholder: "अपना पासवर्ड लिखें",
        login: "लॉगिन करें →",
        newUser: "नए उपयोगकर्ता हैं?",
        signup: "खाता बनाएं",
        show: "दिखाएं",
        hide: "छिपाएं",
        empty: "कृपया अपना नाम और पासवर्ड दर्ज करें।",
        success: "स्वागत है",
        successEnd: "! आपका डेमो लॉगिन सफल रहा।",
        signupMessage: "खाता पंजीकरण जल्द जोड़ा जाएगा।",
        footer: "© 2026 Harvestly | सभी के लिए स्मार्ट खेती"
    },

    pa: {
        tag: "🌱 ਤੁਹਾਡਾ ਖੇਤ – ਸਾਡੀ ਦੇਖਭਾਲ",
        heading: "ਚੰਗੀ ਖੇਤੀ। ਵਧੀਆ ਫ਼ਸਲ।",
        description: "ਆਪਣੇ ਖੇਤਾਂ, ਫ਼ਸਲਾਂ ਅਤੇ ਰੋਜ਼ਾਨਾ ਦੇ ਕੰਮ ਇੱਕ ਥਾਂ ਸੰਭਾਲੋ।",
        welcome: "ਜੀ ਆਇਆਂ ਨੂੰ!",
        subtitle: "ਆਪਣੇ ਖੇਤ ਲਈ ਲੌਗਇਨ ਕਰੋ",
        userLabel: "ਯੂਜ਼ਰਨੇਮ",
        passLabel: "ਪਾਸਵਰਡ",
        userPlaceholder: "ਆਪਣਾ ਨਾਮ ਲਿਖੋ",
        passPlaceholder: "ਆਪਣਾ ਪਾਸਵਰਡ ਲਿਖੋ",
        login: "ਲੌਗਇਨ ਕਰੋ →",
        newUser: "ਨਵੇਂ ਯੂਜ਼ਰ ਹੋ?",
        signup: "ਖਾਤਾ ਬਣਾਓ",
        show: "ਦਿਖਾਓ",
        hide: "ਲੁਕਾਓ",
        empty: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਅਤੇ ਪਾਸਵਰਡ ਭਰੋ।",
        success: "ਜੀ ਆਇਆਂ ਨੂੰ",
        successEnd: "! ਤੁਹਾਡਾ ਡੈਮੋ ਲੌਗਇਨ ਸਫਲ ਹੋ ਗਿਆ ਹੈ।",
        signupMessage: "ਖਾਤਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਜਲਦੀ ਸ਼ਾਮਲ ਕੀਤੀ ਜਾਵੇਗੀ।",
        footer: "© 2026 Harvestly | ਸਭ ਲਈ ਸਮਾਰਟ ਖੇਤੀ"
    },

    ml: {
        tag: "🌱 നിങ്ങളുടെ കൃഷി – ഞങ്ങളുടെ കരുതൽ",
        heading: "നല്ല കൃഷി. മികച്ച വിളവ്.",
        description: "നിങ്ങളുടെ കൃഷിയിടങ്ങളും വിളകളും ദൈനംദിന ജോലികളും ഒരിടത്ത് നിയന്ത്രിക്കൂ.",
        welcome: "സ്വാഗതം!",
        subtitle: "നിങ്ങളുടെ കൃഷിയിടം നിയന്ത്രിക്കാൻ ലോഗിൻ ചെയ്യുക",
        userLabel: "ഉപയോക്തൃനാമം",
        passLabel: "പാസ്‌വേഡ്",
        userPlaceholder: "നിങ്ങളുടെ പേര് നൽകുക",
        passPlaceholder: "പാസ്‌വേഡ് നൽകുക",
        login: "ലോഗിൻ ചെയ്യുക →",
        newUser: "പുതിയ ഉപയോക്താവാണോ?",
        signup: "അക്കൗണ്ട് സൃഷ്ടിക്കുക",
        show: "കാണിക്കുക",
        hide: "മറയ്ക്കുക",
        empty: "ദയവായി നിങ്ങളുടെ പേരും പാസ്‌വേഡും നൽകുക.",
        success: "സ്വാഗതം",
        successEnd: "! നിങ്ങളുടെ ഡെമോ ലോഗിൻ വിജയകരമാണ്.",
        signupMessage: "അക്കൗണ്ട് രജിസ്ട്രേഷൻ ഉടൻ ചേർക്കും.",
        footer: "© 2026 Harvestly | എല്ലാവർക്കും സ്മാർട്ട് കൃഷി"
    },

    ta: {
        tag: "🌱 உங்கள் பண்ணை – எங்கள் பராமரிப்பு",
        heading: "சிறந்த விவசாயம். சிறந்த விளைச்சல்.",
        description: "உங்கள் நிலங்கள், பயிர்கள் மற்றும் தினசரி பணிகளை ஒரே இடத்தில் நிர்வகிக்கவும்.",
        welcome: "வரவேற்கிறோம்!",
        subtitle: "உங்கள் பண்ணையை நிர்வகிக்க உள்நுழையுங்கள்",
        userLabel: "பயனர் பெயர்",
        passLabel: "கடவுச்சொல்",
        userPlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
        passPlaceholder: "கடவுச்சொல்லை உள்ளிடவும்",
        login: "உள்நுழையுங்கள் →",
        newUser: "புதிய பயனரா?",
        signup: "கணக்கை உருவாக்கவும்",
        show: "காட்டு",
        hide: "மறை",
        empty: "உங்கள் பெயர் மற்றும் கடவுச்சொல்லை உள்ளிடவும்.",
        success: "வரவேற்கிறோம்",
        successEnd: "! உங்கள் டெமோ உள்நுழைவு வெற்றிகரமாக முடிந்தது.",
        signupMessage: "கணக்கு பதிவு விரைவில் சேர்க்கப்படும்.",
        footer: "© 2026 Harvestly | அனைவருக்கும் ஸ்மார்ட் விவசாயம்"
    }

};


// 2. GET HTML ELEMENTS

const languageSelect = document.getElementById("language");

const usernameInput = document.getElementById("username");

const passwordInput = document.getElementById("password");

const toggleButton = document.getElementById("togglePassword");

const loginForm = document.getElementById("loginForm");


// 3. UPDATE PASSWORD BUTTON

function updatePasswordButton() {

    const language = languageSelect.value;

    const t = translations[language] || translations.en;

    toggleButton.textContent =
        passwordInput.type === "password" ? t.show : t.hide;

}


// 4. LANGUAGE SWITCHING FUNCTION

function changeLanguage(language) {

    const t = translations[language] || translations.en;

    // Update browser language
    document.documentElement.lang = language;

    // Update website content
    document.getElementById("tag").textContent = t.tag;

    document.getElementById("heading").textContent = t.heading;

    document.getElementById("description").textContent = t.description;

    document.getElementById("welcome").textContent = t.welcome;

    document.getElementById("subtitle").textContent = t.subtitle;

    document.getElementById("userLabel").textContent = t.userLabel;

    document.getElementById("passLabel").textContent = t.passLabel;

    usernameInput.placeholder = t.userPlaceholder;

    passwordInput.placeholder = t.passPlaceholder;

    document.getElementById("loginButton").textContent = t.login;

    document.getElementById("newUser").textContent = t.newUser;

    document.getElementById("signup").textContent = t.signup;

    document.querySelector("footer").textContent = t.footer;

    // Update password visibility text
    updatePasswordButton();

    // Save selected language
    try {
        localStorage.setItem("harvestlyLanguage", language);
    } catch (error) {
        console.warn("Language preference could not be saved.");
    }

}


// 5. LANGUAGE SELECT EVENT

languageSelect.addEventListener("change", function () {

    changeLanguage(this.value);

});


// 6. SHOW AND HIDE PASSWORD

toggleButton.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

    } else {

        passwordInput.type = "password";

    }

    updatePasswordButton();

});


// 7. LOGIN FORM VALIDATION

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = usernameInput.value.trim();

    const password = passwordInput.value;

    const language = languageSelect.value;

    const t = translations[language] || translations.en;

    if (username === "" || password.trim() === "") {

        alert(t.empty);

        return;

    }

    // Demo login message
    alert(t.success + " " + username + t.successEnd);

});


// 8. CREATE ACCOUNT BUTTON

document.getElementById("signup").addEventListener("click", function (event) {

    event.preventDefault();

    const language = languageSelect.value;

    const t = translations[language] || translations.en;

    alert(t.signupMessage);

});


// 9. LOAD SAVED LANGUAGE WHEN WEBSITE OPENS

let savedLanguage = "en";

try {

    savedLanguage = localStorage.getItem("harvestlyLanguage") || "en";

} catch (error) {

    savedLanguage = "en";

}
// HARVESTLY LOGIN FUNCTION
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "" || password.trim() === "") {
        alert("Please enter your username and password.");
        return;
    }

    alert("Demo login successful! Welcome to Harvestly.");
});

// Check whether saved language is valid
if (!translations[savedLanguage]) {

    savedLanguage = "en";

}

// Set language dropdown
languageSelect.value = savedLanguage;

// Apply selected language
changeLanguage(savedLanguage);


// ========================================
// HARVESTLY JAVASCRIPT INITIALIZATION DONE
// ========================================
