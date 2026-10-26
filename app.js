/* =========================================
   CLASSBRIDGE — INTERACTION & LANGUAGES
   HTML + CSS + JavaScript only
========================================= */

"use strict";

const $ = (selector) => document.querySelector(selector);

const translations = {
  en: {
    workspace: "WORKSPACE",
    navHome: "Home",
    navNotes: "My notes",
    navQuestions: "My questions",
    navHelp: "Study assistant",
    tipTitle: "Every question matters.",
    tipText: "Learning is better when you feel comfortable asking for help.",
    tipLink: "Ask a question →",
    localPrivate: "Your personal learning space",
    breadcrumb: "Your workspace",
    eyebrow: "YOUR LEARNING JOURNEY",
    welcomeTitle: 'Understand it today.<br><span>Remember it tomorrow.</span>',
    welcomeText: "Class moves fast. Your understanding doesn't have to. Keep your notes, ask questions, and learn in your language.",
    startNotes: "Create a note",
    listen: "Listen to introduction",
    heroCard1: "Your pace",
    heroCard1Sub: "Your way of learning",
    heroCard2: "Keep growing",
    heroCard2Sub: "One question at a time",
    statNotes: "Saved notes",
    statNotesSub: "Ideas worth keeping",
    statQuestions: "My questions",
    statQuestionsSub: "Doubts you've written",
    statLanguages: "Languages",
    statLanguagesSub: "Ways to feel understood",
    sectionTools: "LEARNING TOOLS",
    assistantTitle: "Your study assistant",
    assistantText: "Need to hear something again or prefer speaking instead of typing? These tools can help.",
    readAloud: "Read my latest note",
    readAloudSub: "Listen to saved study content",
    voiceInput: "Speak a question",
    voiceInputSub: "Use your microphone if supported",
    gentleReminder: "A GENTLE REMINDER",
    promptTitle: "It's okay to ask<br>again.",
    promptText: "A question is not a weakness. It's the beginning of understanding.",
    promptLink: "Write down a doubt",
    personalWorkspace: "YOUR PERSONAL SPACE",
    notesTitle: "Capture the important bits",
    notesDescription: "Write what you understood, what you want to remember, or what you want to revisit.",
    noteTitleLabel: "Note title",
    noteTitlePlaceholder: "e.g. Introduction to Python",
    noteContentLabel: "Your notes",
    noteContentPlaceholder: "Write down the key points from class...",
    privateHint: "Saved in this browser",
    saveNote: "Save note",
    speakUp: "SPEAK UP, STUDENT",
    questionsTitle: "Questions deserve answers",
    questionsDescription: "Record a doubt here so you don't forget it after class.",
    subjectLabel: "Subject or topic",
    subjectPlaceholder: "e.g. Mathematics",
    questionLabel: "What would you like help with?",
    questionPlaceholder: "Write your question in your preferred language...",
    questionHint: "Your doubt, in your words",
    saveQuestion: "Save question",
    bannerTitle: "Your voice belongs in the classroom.",
    bannerText: "Learn at your pace. Ask without fear. Keep moving forward.",
    bannerLink: "Share a doubt →",
    footerText: "Made for clearer communication and more confident learning.",
    clearData: "Clear my local data",
    emptyNotes: "Your notes will appear here after you save one.",
    emptyQuestions: "Your saved questions will appear here.",
    delete: "Delete",
    saved: "Saved",
    noteSaved: "Your note has been saved.",
    questionSaved: "Your question has been saved.",
    noteDeleted: "Note deleted.",
    questionDeleted: "Question deleted.",
    titleRequired: "Please enter a title and your note.",
    questionRequired: "Please write your question.",
    noNotes: "You haven't saved a note yet.",
    noSpeech: "Speech recognition is not supported in this browser. Try a supported browser or type your question.",
    listening: "Listening... Please speak now.",
    recognitionError: "Couldn't recognise your speech. Please try again or type your question.",
    speechEnded: "Voice input ended.",
    reading: "Reading aloud...",
    speechUnavailable: "Speech playback is not available in this browser.",
    speechStopped: "Speech stopped.",
    dataCleared: "Your saved notes and questions have been cleared.",
    confirmClear: "Delete all locally saved notes and questions? This cannot be undone.",
    storageWarning: "Browser storage is unavailable. Your information may not be saved.",
    emptyTitle: "Untitled",
    savedQuestion: "Saved question",
    readIntroduction: "Welcome to ClassBridge. Keep your notes, write down your questions, and learn in your preferred language. Every question matters.",
    deleteFailed: "Couldn't delete this item."
  },

  hi: {
    workspace: "कार्यस्थल",
    navHome: "होम",
    navNotes: "मेरे नोट्स",
    navQuestions: "मेरे सवाल",
    navHelp: "अध्ययन सहायक",
    tipTitle: "हर सवाल ज़रूरी है।",
    tipText: "जब आप बेझिझक मदद माँगते हैं, तो सीखना आसान हो जाता है।",
    tipLink: "सवाल पूछें →",
    localPrivate: "आपका निजी अध्ययन स्थान",
    breadcrumb: "आपका कार्यस्थल",
    eyebrow: "आपकी सीखने की यात्रा",
    welcomeTitle: 'आज समझें।<br><span>कल याद रखें।</span>',
    welcomeText: "कक्षा तेज़ी से आगे बढ़ती है, लेकिन आपको जल्दबाज़ी करने की ज़रूरत नहीं। नोट्स बनाएँ, सवाल पूछें और अपनी भाषा में सीखें।",
    startNotes: "नोट बनाएँ",
    listen: "परिचय सुनें",
    heroCard1: "आपकी गति",
    heroCard1Sub: "आपका सीखने का तरीका",
    heroCard2: "आगे बढ़ते रहें",
    heroCard2Sub: "एक बार में एक सवाल",
    statNotes: "सहेजे गए नोट्स",
    statNotesSub: "ज़रूरी विचार",
    statQuestions: "मेरे सवाल",
    statQuestionsSub: "लिखे गए सवाल",
    statLanguages: "भाषाएँ",
    statLanguagesSub: "समझने के छह तरीके",
    sectionTools: "सीखने के साधन",
    assistantTitle: "आपका अध्ययन सहायक",
    assistantText: "कुछ दोबारा सुनना है या लिखने के बजाय बोलना चाहते हैं? ये साधन मदद कर सकते हैं।",
    readAloud: "मेरा नवीनतम नोट सुनें",
    readAloudSub: "सहेजी गई पढ़ाई सुनें",
    voiceInput: "बोलकर सवाल पूछें",
    voiceInputSub: "समर्थित ब्राउज़र में माइक्रोफ़ोन इस्तेमाल करें",
    gentleReminder: "एक छोटी याद दिलाने वाली बात",
    promptTitle: "दोबारा पूछना<br>बिल्कुल ठीक है।",
    promptText: "सवाल पूछना कमज़ोरी नहीं है। यह समझने की शुरुआत है।",
    promptLink: "अपना सवाल लिखें",
    personalWorkspace: "आपकी निजी जगह",
    notesTitle: "ज़रूरी बातें लिखें",
    notesDescription: "जो समझ आया, जो याद रखना है या जिसे दोबारा पढ़ना है, उसे यहाँ लिखें।",
    noteTitleLabel: "नोट का शीर्षक",
    noteTitlePlaceholder: "जैसे: पाइथन का परिचय",
    noteContentLabel: "आपके नोट्स",
    noteContentPlaceholder: "कक्षा की ज़रूरी बातें यहाँ लिखें...",
    privateHint: "इसी ब्राउज़र में सहेजा जाएगा",
    saveNote: "नोट सहेजें",
    speakUp: "अपना सवाल पूछें",
    questionsTitle: "हर सवाल का जवाब ज़रूरी है",
    questionsDescription: "कक्षा के बाद भूलने से पहले अपना सवाल यहाँ लिखें।",
    subjectLabel: "विषय या टॉपिक",
    subjectPlaceholder: "जैसे: गणित",
    questionLabel: "आपको किस बात में मदद चाहिए?",
    questionPlaceholder: "अपनी पसंदीदा भाषा में सवाल लिखें...",
    questionHint: "आपका सवाल, आपके शब्दों में",
    saveQuestion: "सवाल सहेजें",
    bannerTitle: "कक्षा में आपकी आवाज़ भी ज़रूरी है।",
    bannerText: "अपनी गति से सीखें। बिना डर सवाल पूछें। आगे बढ़ें।",
    bannerLink: "अपना सवाल लिखें →",
    footerText: "बेहतर संवाद और आत्मविश्वास के साथ सीखने के लिए।",
    clearData: "मेरा सहेजा डेटा मिटाएँ",
    emptyNotes: "नोट सहेजने के बाद यहाँ दिखाई देंगे।",
    emptyQuestions: "आपके सहेजे गए सवाल यहाँ दिखाई देंगे।",
    delete: "हटाएँ",
    saved: "सहेजा गया",
    noteSaved: "आपका नोट सहेज दिया गया है।",
    questionSaved: "आपका सवाल सहेज दिया गया है।",
    noteDeleted: "नोट हटा दिया गया।",
    questionDeleted: "सवाल हटा दिया गया।",
    titleRequired: "कृपया शीर्षक और नोट लिखें।",
    questionRequired: "कृपया अपना सवाल लिखें।",
    noNotes: "आपने अभी कोई नोट नहीं सहेजा है।",
    noSpeech: "इस ब्राउज़र में आवाज़ पहचानने की सुविधा उपलब्ध नहीं है। किसी समर्थित ब्राउज़र का उपयोग करें या सवाल लिखें।",
    listening: "सुन रहा है... अब बोलें।",
    recognitionError: "आपकी आवाज़ समझ नहीं आई। फिर से कोशिश करें या सवाल लिखें।",
    speechEnded: "आवाज़ से लिखने की प्रक्रिया समाप्त हुई।",
    reading: "आवाज़ में पढ़ा जा रहा है...",
    speechUnavailable: "इस ब्राउज़र में आवाज़ में पढ़ने की सुविधा उपलब्ध नहीं है।",
    speechStopped: "आवाज़ बंद कर दी गई।",
    dataCleared: "आपके सहेजे गए नोट्स और सवाल हटा दिए गए हैं।",
    confirmClear: "क्या सभी सहेजे गए नोट्स और सवाल हटाने हैं? इसे वापस नहीं किया जा सकता।",
    storageWarning: "ब्राउज़र स्टोरेज उपलब्ध नहीं है। आपका डेटा सहेजा नहीं जा सकता।",
    emptyTitle: "बिना शीर्षक",
    savedQuestion: "सहेजा गया सवाल",
    readIntroduction: "क्लासब्रिज में आपका स्वागत है। अपने नोट्स सहेजें, सवाल लिखें और अपनी पसंदीदा भाषा में सीखें। हर सवाल ज़रूरी है।",
    deleteFailed: "यह जानकारी हटाई नहीं जा सकी।"
  },

  pa: {
    workspace: "ਕੰਮ ਕਰਨ ਦੀ ਥਾਂ",
    navHome: "ਮੁੱਖ ਪੰਨਾ",
    navNotes: "ਮੇਰੇ ਨੋਟਸ",
    navQuestions: "ਮੇਰੇ ਸਵਾਲ",
    navHelp: "ਪੜ੍ਹਾਈ ਸਹਾਇਕ",
    tipTitle: "ਹਰ ਸਵਾਲ ਮਹੱਤਵਪੂਰਨ ਹੈ।",
    tipText: "ਬਿਨਾਂ ਝਿਜਕ ਮਦਦ ਮੰਗਣ ਨਾਲ ਸਿੱਖਣਾ ਆਸਾਨ ਹੁੰਦਾ ਹੈ।",
    tipLink: "ਸਵਾਲ ਪੁੱਛੋ →",
    localPrivate: "ਤੁਹਾਡੀ ਨਿੱਜੀ ਪੜ੍ਹਾਈ ਦੀ ਥਾਂ",
    breadcrumb: "ਤੁਹਾਡੀ ਥਾਂ",
    eyebrow: "ਤੁਹਾਡੀ ਸਿੱਖਣ ਦੀ ਯਾਤਰਾ",
    welcomeTitle: 'ਅੱਜ ਸਮਝੋ।<br><span>ਕੱਲ੍ਹ ਯਾਦ ਰੱਖੋ।</span>',
    welcomeText: "ਕਲਾਸ ਤੇਜ਼ੀ ਨਾਲ ਅੱਗੇ ਵਧਦੀ ਹੈ, ਪਰ ਤੁਹਾਨੂੰ ਜਲਦੀ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ। ਨੋਟਸ ਬਣਾਓ, ਸਵਾਲ ਪੁੱਛੋ ਅਤੇ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਿੱਖੋ।",
    startNotes: "ਨੋਟ ਬਣਾਓ",
    listen: "ਜਾਣ-ਪਛਾਣ ਸੁਣੋ",
    heroCard1: "ਤੁਹਾਡੀ ਰਫ਼ਤਾਰ",
    heroCard1Sub: "ਤੁਹਾਡਾ ਸਿੱਖਣ ਦਾ ਤਰੀਕਾ",
    heroCard2: "ਅੱਗੇ ਵਧਦੇ ਰਹੋ",
    heroCard2Sub: "ਇੱਕ ਵਾਰ ਵਿੱਚ ਇੱਕ ਸਵਾਲ",
    statNotes: "ਸੰਭਾਲੇ ਨੋਟਸ",
    statNotesSub: "ਯਾਦ ਰੱਖਣ ਵਾਲੇ ਵਿਚਾਰ",
    statQuestions: "ਮੇਰੇ ਸਵਾਲ",
    statQuestionsSub: "ਲਿਖੇ ਹੋਏ ਸਵਾਲ",
    statLanguages: "ਭਾਸ਼ਾਵਾਂ",
    statLanguagesSub: "ਸਮਝਣ ਦੇ ਛੇ ਤਰੀਕੇ",
    sectionTools: "ਸਿੱਖਣ ਦੇ ਸਾਧਨ",
    assistantTitle: "ਤੁਹਾਡਾ ਪੜ੍ਹਾਈ ਸਹਾਇਕ",
    assistantText: "ਕੁਝ ਦੁਬਾਰਾ ਸੁਣਨਾ ਹੈ ਜਾਂ ਲਿਖਣ ਦੀ ਬਜਾਏ ਬੋਲਣਾ ਚਾਹੁੰਦੇ ਹੋ? ਇਹ ਸਾਧਨ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ।",
    readAloud: "ਮੇਰਾ ਨਵਾਂ ਨੋਟ ਸੁਣੋ",
    readAloudSub: "ਸੰਭਾਲੀ ਪੜ੍ਹਾਈ ਸੁਣੋ",
    voiceInput: "ਬੋਲ ਕੇ ਸਵਾਲ ਪੁੱਛੋ",
    voiceInputSub: "ਸਹਾਇਕ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਵਰਤੋ",
    gentleReminder: "ਇੱਕ ਛੋਟੀ ਜਿਹੀ ਯਾਦ",
    promptTitle: "ਦੁਬਾਰਾ ਪੁੱਛਣਾ<br>ਬਿਲਕੁਲ ਠੀਕ ਹੈ।",
    promptText: "ਸਵਾਲ ਪੁੱਛਣਾ ਕਮਜ਼ੋਰੀ ਨਹੀਂ ਹੈ। ਇਹ ਸਮਝਣ ਦੀ ਸ਼ੁਰੂਆਤ ਹੈ।",
    promptLink: "ਆਪਣਾ ਸਵਾਲ ਲਿਖੋ",
    personalWorkspace: "ਤੁਹਾਡੀ ਨਿੱਜੀ ਥਾਂ",
    notesTitle: "ਜ਼ਰੂਰੀ ਗੱਲਾਂ ਲਿਖੋ",
    notesDescription: "ਜੋ ਸਮਝ ਆਇਆ, ਜੋ ਯਾਦ ਰੱਖਣਾ ਹੈ ਜਾਂ ਜਿਸ ਨੂੰ ਦੁਬਾਰਾ ਪੜ੍ਹਨਾ ਹੈ, ਉਹ ਇੱਥੇ ਲਿਖੋ।",
    noteTitleLabel: "ਨੋਟ ਦਾ ਸਿਰਲੇਖ",
    noteTitlePlaceholder: "ਜਿਵੇਂ: ਪਾਇਥਨ ਦੀ ਜਾਣ-ਪਛਾਣ",
    noteContentLabel: "ਤੁਹਾਡੇ ਨੋਟਸ",
    noteContentPlaceholder: "ਕਲਾਸ ਦੀਆਂ ਜ਼ਰੂਰੀ ਗੱਲਾਂ ਇੱਥੇ ਲਿਖੋ...",
    privateHint: "ਇਸੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੰਭਾਲਿਆ ਜਾਵੇਗਾ",
    saveNote: "ਨੋਟ ਸੰਭਾਲੋ",
    speakUp: "ਆਪਣਾ ਸਵਾਲ ਪੁੱਛੋ",
    questionsTitle: "ਹਰ ਸਵਾਲ ਦਾ ਜਵਾਬ ਜ਼ਰੂਰੀ ਹੈ",
    questionsDescription: "ਕਲਾਸ ਤੋਂ ਬਾਅਦ ਭੁੱਲਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣਾ ਸਵਾਲ ਇੱਥੇ ਲਿਖੋ।",
    subjectLabel: "ਵਿਸ਼ਾ ਜਾਂ ਟੌਪਿਕ",
    subjectPlaceholder: "ਜਿਵੇਂ: ਗਣਿਤ",
    questionLabel: "ਤੁਹਾਨੂੰ ਕਿਸ ਗੱਲ ਵਿੱਚ ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
    questionPlaceholder: "ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਵਿੱਚ ਸਵਾਲ ਲਿਖੋ...",
    questionHint: "ਤੁਹਾਡਾ ਸਵਾਲ, ਤੁਹਾਡੇ ਸ਼ਬਦਾਂ ਵਿੱਚ",
    saveQuestion: "ਸਵਾਲ ਸੰਭਾਲੋ",
    bannerTitle: "ਕਲਾਸ ਵਿੱਚ ਤੁਹਾਡੀ ਆਵਾਜ਼ ਵੀ ਜ਼ਰੂਰੀ ਹੈ।",
    bannerText: "ਆਪਣੀ ਰਫ਼ਤਾਰ ਨਾਲ ਸਿੱਖੋ। ਬਿਨਾਂ ਡਰ ਸਵਾਲ ਪੁੱਛੋ। ਅੱਗੇ ਵਧੋ।",
    bannerLink: "ਸਵਾਲ ਸਾਂਝਾ ਕਰੋ →",
    footerText: "ਬਿਹਤਰ ਗੱਲਬਾਤ ਅਤੇ ਭਰੋਸੇ ਨਾਲ ਸਿੱਖਣ ਲਈ।",
    clearData: "ਮੇਰਾ ਸੰਭਾਲਿਆ ਡਾਟਾ ਮਿਟਾਓ",
    emptyNotes: "ਨੋਟ ਸੰਭਾਲਣ ਤੋਂ ਬਾਅਦ ਇੱਥੇ ਦਿਖਾਈ ਦੇਣਗੇ।",
    emptyQuestions: "ਤੁਹਾਡੇ ਸੰਭਾਲੇ ਸਵਾਲ ਇੱਥੇ ਦਿਖਾਈ ਦੇਣਗੇ।",
    delete: "ਮਿਟਾਓ",
    saved: "ਸੰਭਾਲਿਆ ਗਿਆ",
    noteSaved: "ਤੁਹਾਡਾ ਨੋਟ ਸੰਭਾਲਿਆ ਗਿਆ ਹੈ।",
    questionSaved: "ਤੁਹਾਡਾ ਸਵਾਲ ਸੰਭਾਲਿਆ ਗਿਆ ਹੈ।",
    noteDeleted: "ਨੋਟ ਮਿਟਾ ਦਿੱਤਾ ਗਿਆ।",
    questionDeleted: "ਸਵਾਲ ਮਿਟਾ ਦਿੱਤਾ ਗਿਆ।",
    titleRequired: "ਕਿਰਪਾ ਕਰਕੇ ਸਿਰਲੇਖ ਅਤੇ ਨੋਟ ਲਿਖੋ।",
    questionRequired: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਸਵਾਲ ਲਿਖੋ।",
    noNotes: "ਤੁਸੀਂ ਅਜੇ ਕੋਈ ਨੋਟ ਨਹੀਂ ਸੰਭਾਲਿਆ।",
    noSpeech: "ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਆਵਾਜ਼ ਪਛਾਣਨ ਦੀ ਸਹੂਲਤ ਨਹੀਂ ਹੈ। ਕਿਸੇ ਸਹਾਇਕ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਵਰਤੋਂ ਕਰੋ ਜਾਂ ਸਵਾਲ ਲਿਖੋ।",
    listening: "ਸੁਣ ਰਿਹਾ ਹੈ... ਹੁਣ ਬੋਲੋ।",
    recognitionError: "ਤੁਹਾਡੀ ਆਵਾਜ਼ ਸਮਝ ਨਹੀਂ ਆਈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜਾਂ ਸਵਾਲ ਲਿਖੋ।",
    speechEnded: "ਆਵਾਜ਼ ਰਾਹੀਂ ਲਿਖਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਖਤਮ ਹੋਈ।",
    reading: "ਆਵਾਜ਼ ਵਿੱਚ ਪੜ੍ਹਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
    speechUnavailable: "ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਆਵਾਜ਼ ਵਿੱਚ ਪੜ੍ਹਨ ਦੀ ਸਹੂਲਤ ਨਹੀਂ ਹੈ।",
    speechStopped: "ਆਵਾਜ਼ ਬੰਦ ਕਰ ਦਿੱਤੀ ਗਈ।",
    dataCleared: "ਤੁਹਾਡੇ ਸੰਭਾਲੇ ਨੋਟਸ ਅਤੇ ਸਵਾਲ ਮਿਟਾ ਦਿੱਤੇ ਗਏ ਹਨ।",
    confirmClear: "ਕੀ ਸਾਰੇ ਸੰਭਾਲੇ ਨੋਟਸ ਅਤੇ ਸਵਾਲ ਮਿਟਾਉਣੇ ਹਨ? ਇਹ ਵਾਪਸ ਨਹੀਂ ਹੋ ਸਕਦਾ।",
    storageWarning: "ਬ੍ਰਾਊਜ਼ਰ ਸਟੋਰੇਜ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਤੁਹਾਡਾ ਡਾਟਾ ਸੰਭਾਲਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ।",
    emptyTitle: "ਬਿਨਾਂ ਸਿਰਲੇਖ",
    savedQuestion: "ਸੰਭਾਲਿਆ ਸਵਾਲ",
    readIntroduction: "ਕਲਾਸਬ੍ਰਿਜ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ। ਆਪਣੇ ਨੋਟਸ ਸੰਭਾਲੋ, ਸਵਾਲ ਲਿਖੋ ਅਤੇ ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਵਿੱਚ ਸਿੱਖੋ। ਹਰ ਸਵਾਲ ਮਹੱਤਵਪੂਰਨ ਹੈ।",
    deleteFailed: "ਇਹ ਜਾਣਕਾਰੀ ਮਿਟਾਈ ਨਹੀਂ ਜਾ ਸਕੀ।"
  },

  te: {
    workspace: "వర్క్‌స్పేస్",
    navHome: "హోమ్",
    navNotes: "నా నోట్స్",
    navQuestions: "నా ప్రశ్నలు",
    navHelp: "అధ్యయన సహాయకుడు",
    tipTitle: "ప్రతి ప్రశ్న ముఖ్యం.",
    tipText: "సంకోచం లేకుండా సహాయం అడిగినప్పుడు నేర్చుకోవడం సులభమవుతుంది.",
    tipLink: "ప్రశ్న అడగండి →",
    localPrivate: "మీ వ్యక్తిగత అభ్యాస స్థలం",
    breadcrumb: "మీ వర్క్‌స్పేస్",
    eyebrow: "మీ అభ్యాస ప్రయాణం",
    welcomeTitle: 'ఈరోజు అర్థం చేసుకోండి.<br><span>రేపు గుర్తుంచుకోండి.</span>',
    welcomeText: "తరగతి వేగంగా సాగుతుంది. కానీ మీరు తొందరపడాల్సిన అవసరం లేదు. నోట్స్ రాయండి, ప్రశ్నలు అడగండి, మీ భాషలో నేర్చుకోండి.",
    startNotes: "నోట్ సృష్టించండి",
    listen: "పరిచయాన్ని వినండి",
    heroCard1: "మీ వేగం",
    heroCard1Sub: "మీ అభ్యాస విధానం",
    heroCard2: "ముందుకు సాగండి",
    heroCard2Sub: "ఒక్కోసారి ఒక్క ప్రశ్న",
    statNotes: "సేవ్ చేసిన నోట్స్",
    statNotesSub: "గుర్తుంచుకోవాల్సిన విషయాలు",
    statQuestions: "నా ప్రశ్నలు",
    statQuestionsSub: "మీరు రాసిన సందేహాలు",
    statLanguages: "భాషలు",
    statLanguagesSub: "అర్థం చేసుకునే ఆరు మార్గాలు",
    sectionTools: "అభ్యాస సాధనాలు",
    assistantTitle: "మీ అధ్యయన సహాయకుడు",
    assistantText: "ఏదైనా మళ్లీ వినాలా? టైప్ చేయడానికి బదులుగా మాట్లాడాలనుకుంటున్నారా? ఈ సాధనాలు సహాయపడతాయి.",
    readAloud: "నా తాజా నోట్ వినండి",
    readAloudSub: "సేవ్ చేసిన విషయాలను వినండి",
    voiceInput: "మాట్లాడి ప్రశ్న అడగండి",
    voiceInputSub: "మద్దతు ఉన్న బ్రౌజర్‌లో మైక్రోఫోన్ ఉపయోగించండి",
    gentleReminder: "ఒక చిన్న గుర్తు",
    promptTitle: "మళ్లీ అడగడం<br>పూర్తిగా సరైనదే.",
    promptText: "ప్రశ్న అడగడం బలహీనత కాదు. అది అర్థం చేసుకోవడానికి మొదటి అడుగు.",
    promptLink: "మీ సందేహాన్ని రాయండి",
    personalWorkspace: "మీ వ్యక్తిగత స్థలం",
    notesTitle: "ముఖ్యమైన విషయాలను రాయండి",
    notesDescription: "మీకు అర్థమైనది, గుర్తుంచుకోవాల్సినది లేదా మళ్లీ చూడాల్సినది ఇక్కడ రాయండి.",
    noteTitleLabel: "నోట్ శీర్షిక",
    noteTitlePlaceholder: "ఉదా: పైథాన్ పరిచయం",
    noteContentLabel: "మీ నోట్స్",
    noteContentPlaceholder: "తరగతిలోని ముఖ్యమైన విషయాలను రాయండి...",
    privateHint: "ఈ బ్రౌజర్‌లో సేవ్ అవుతుంది",
    saveNote: "నోట్ సేవ్ చేయండి",
    speakUp: "మీ ప్రశ్న అడగండి",
    questionsTitle: "ప్రశ్నలకు సమాధానాలు అవసరం",
    questionsDescription: "తరగతి తర్వాత మర్చిపోకుండా మీ సందేహాన్ని ఇక్కడ రాయండి.",
    subjectLabel: "విషయం లేదా టాపిక్",
    subjectPlaceholder: "ఉదా: గణితం",
    questionLabel: "మీకు ఏ విషయంలో సహాయం కావాలి?",
    questionPlaceholder: "మీకు ఇష్టమైన భాషలో ప్రశ్న రాయండి...",
    questionHint: "మీ మాటల్లో మీ సందేహం",
    saveQuestion: "ప్రశ్నను సేవ్ చేయండి",
    bannerTitle: "తరగతిలో మీ గొంతుకకు కూడా చోటుంది.",
    bannerText: "మీ వేగంతో నేర్చుకోండి. భయం లేకుండా అడగండి. ముందుకు సాగండి.",
    bannerLink: "సందేహాన్ని రాయండి →",
    footerText: "మెరుగైన సంభాషణ, ఆత్మవిశ్వాసంతో నేర్చుకోవడం కోసం.",
    clearData: "నా స్థానిక డేటాను తొలగించండి",
    emptyNotes: "మీరు నోట్ సేవ్ చేసిన తర్వాత అది ఇక్కడ కనిపిస్తుంది.",
    emptyQuestions: "మీరు సేవ్ చేసిన ప్రశ్నలు ఇక్కడ కనిపిస్తాయి.",
    delete: "తొలగించండి",
    saved: "సేవ్ అయింది",
    noteSaved: "మీ నోట్ సేవ్ అయింది.",
    questionSaved: "మీ ప్రశ్న సేవ్ అయింది.",
    noteDeleted: "నోట్ తొలగించబడింది.",
    questionDeleted: "ప్రశ్న తొలగించబడింది.",
    titleRequired: "దయచేసి శీర్షిక మరియు నోట్ రాయండి.",
    questionRequired: "దయచేసి మీ ప్రశ్న రాయండి.",
    noNotes: "మీరు ఇంకా నోట్ సేవ్ చేయలేదు.",
    noSpeech: "ఈ బ్రౌజర్‌లో మాటలను గుర్తించే సౌకర్యం లేదు. మద్దతు ఉన్న బ్రౌజర్‌ను ఉపయోగించండి లేదా టైప్ చేయండి.",
    listening: "వింటోంది... ఇప్పుడు మాట్లాడండి.",
    recognitionError: "మీ మాటలు గుర్తించలేకపోయాం. మళ్లీ ప్రయత్నించండి లేదా టైప్ చేయండి.",
    speechEnded: "వాయిస్ ఇన్‌పుట్ ముగిసింది.",
    reading: "చదివి వినిపిస్తోంది...",
    speechUnavailable: "ఈ బ్రౌజర్‌లో చదివి వినిపించే సౌకర్యం లేదు.",
    speechStopped: "వాయిస్ ఆపబడింది.",
    dataCleared: "మీ సేవ్ చేసిన నోట్స్, ప్రశ్నలు తొలగించబడ్డాయి.",
    confirmClear: "సేవ్ చేసిన అన్ని నోట్స్ మరియు ప్రశ్నలను తొలగించాలా? ఇది తిరిగి పొందలేరు.",
    storageWarning: "బ్రౌజర్ స్టోరేజ్ అందుబాటులో లేదు. మీ డేటా సేవ్ కాకపోవచ్చు.",
    emptyTitle: "శీర్షిక లేదు",
    savedQuestion: "సేవ్ చేసిన ప్రశ్న",
    readIntroduction: "క్లాస్‌బ్రిడ్జ్‌కు స్వాగతం. మీ నోట్స్ సేవ్ చేయండి, ప్రశ్నలు రాయండి, మీకు ఇష్టమైన భాషలో నేర్చుకోండి. ప్రతి ప్రశ్న ముఖ్యం.",
    deleteFailed: "ఈ అంశాన్ని తొలగించలేకపోయాం."
  },

  ml: {
    workspace: "പ്രവർത്തന ഇടം",
    navHome: "ഹോം",
    navNotes: "എന്റെ കുറിപ്പുകൾ",
    navQuestions: "എന്റെ ചോദ്യങ്ങൾ",
    navHelp: "പഠന സഹായി",
    tipTitle: "ഓരോ ചോദ്യവും പ്രധാനമാണ്.",
    tipText: "മടിക്കാതെ സഹായം ചോദിക്കുമ്പോൾ പഠനം എളുപ്പമാകും.",
    tipLink: "ചോദ്യം ചോദിക്കൂ →",
    localPrivate: "നിങ്ങളുടെ സ്വകാര്യ പഠന ഇടം",
    breadcrumb: "നിങ്ങളുടെ പ്രവർത്തന ഇടം",
    eyebrow: "നിങ്ങളുടെ പഠന യാത്ര",
    welcomeTitle: 'ഇന്ന് മനസ്സിലാക്കൂ.<br><span>നാളെ ഓർത്തിരിക്കൂ.</span>',
    welcomeText: "ക്ലാസ് വേഗത്തിൽ മുന്നോട്ടുപോകും. പക്ഷേ നിങ്ങൾ തിരക്കുകൂട്ടേണ്ടതില്ല. കുറിപ്പുകൾ എഴുതൂ, ചോദ്യങ്ങൾ ചോദിക്കൂ, നിങ്ങളുടെ ഭാഷയിൽ പഠിക്കൂ.",
    startNotes: "കുറിപ്പ് സൃഷ്ടിക്കുക",
    listen: "ആമുഖം കേൾക്കുക",
    heroCard1: "നിങ്ങളുടെ വേഗം",
    heroCard1Sub: "നിങ്ങളുടെ പഠന രീതി",
    heroCard2: "മുന്നോട്ട് പോകൂ",
    heroCard2Sub: "ഒരു സമയം ഒരു ചോദ്യം",
    statNotes: "സേവ് ചെയ്ത കുറിപ്പുകൾ",
    statNotesSub: "ഓർത്തിരിക്കേണ്ട ആശയങ്ങൾ",
    statQuestions: "എന്റെ ചോദ്യങ്ങൾ",
    statQuestionsSub: "നിങ്ങൾ എഴുതിയ സംശയങ്ങൾ",
    statLanguages: "ഭാഷകൾ",
    statLanguagesSub: "മനസ്സിലാക്കാനുള്ള ആറു വഴികൾ",
    sectionTools: "പഠന ഉപകരണങ്ങൾ",
    assistantTitle: "നിങ്ങളുടെ പഠന സഹായി",
    assistantText: "എന്തെങ്കിലും വീണ്ടും കേൾക്കണോ? ടൈപ്പ് ചെയ്യുന്നതിനു പകരം സംസാരിക്കണോ? ഈ ഉപകരണങ്ങൾ സഹായിക്കും.",
    readAloud: "എന്റെ ഏറ്റവും പുതിയ കുറിപ്പ് കേൾക്കുക",
    readAloudSub: "സേവ് ചെയ്ത പഠന ഉള്ളടക്കം കേൾക്കുക",
    voiceInput: "സംസാരിച്ച് ചോദിക്കുക",
    voiceInputSub: "പിന്തുണയുള്ള ബ്രൗസറിൽ മൈക്രോഫോൺ ഉപയോഗിക്കുക",
    gentleReminder: "ഒരു ചെറിയ ഓർമ്മപ്പെടുത്തൽ",
    promptTitle: "വീണ്ടും ചോദിക്കുന്നത്<br>തികച്ചും ശരിയാണ്.",
    promptText: "ചോദ്യം ചോദിക്കുന്നത് ബലഹീനതയല്ല. അത് മനസ്സിലാക്കാനുള്ള തുടക്കമാണ്.",
    promptLink: "നിങ്ങളുടെ സംശയം എഴുതുക",
    personalWorkspace: "നിങ്ങളുടെ സ്വകാര്യ ഇടം",
    notesTitle: "പ്രധാന കാര്യങ്ങൾ കുറിച്ചുവയ്ക്കൂ",
    notesDescription: "നിങ്ങൾ മനസ്സിലാക്കിയതും ഓർത്തിരിക്കേണ്ടതും വീണ്ടും പരിശോധിക്കേണ്ടതും ഇവിടെ എഴുതൂ.",
    noteTitleLabel: "കുറിപ്പിന്റെ തലക്കെട്ട്",
    noteTitlePlaceholder: "ഉദാ: പൈത്തൺ ആമുഖം",
    noteContentLabel: "നിങ്ങളുടെ കുറിപ്പുകൾ",
    noteContentPlaceholder: "ക്ലാസിലെ പ്രധാന കാര്യങ്ങൾ ഇവിടെ എഴുതൂ...",
    privateHint: "ഈ ബ്രൗസറിൽ സേവ് ചെയ്യും",
    saveNote: "കുറിപ്പ് സേവ് ചെയ്യുക",
    speakUp: "നിങ്ങളുടെ ചോദ്യം ചോദിക്കൂ",
    questionsTitle: "ചോദ്യങ്ങൾക്ക് ഉത്തരങ്ങൾ വേണം",
    questionsDescription: "ക്ലാസിനു ശേഷം മറക്കുന്നതിനു മുമ്പ് നിങ്ങളുടെ സംശയം ഇവിടെ എഴുതൂ.",
    subjectLabel: "വിഷയം അല്ലെങ്കിൽ പാഠഭാഗം",
    subjectPlaceholder: "ഉദാ: ഗണിതം",
    questionLabel: "ഏത് കാര്യത്തിലാണ് സഹായം വേണ്ടത്?",
    questionPlaceholder: "നിങ്ങൾക്ക് ഇഷ്ടമുള്ള ഭാഷയിൽ ചോദ്യം എഴുതൂ...",
    questionHint: "നിങ്ങളുടെ വാക്കുകളിൽ നിങ്ങളുടെ സംശയം",
    saveQuestion: "ചോദ്യം സേവ് ചെയ്യുക",
    bannerTitle: "ക്ലാസ് മുറിയിൽ നിങ്ങളുടെ ശബ്ദത്തിനും സ്ഥാനമുണ്ട്.",
    bannerText: "നിങ്ങളുടെ വേഗത്തിൽ പഠിക്കൂ. ഭയമില്ലാതെ ചോദിക്കൂ. മുന്നോട്ട് പോകൂ.",
    bannerLink: "സംശയം പങ്കുവയ്ക്കൂ →",
    footerText: "മികച്ച ആശയവിനിമയത്തിനും ആത്മവിശ്വാസത്തോടെ പഠിക്കാനും.",
    clearData: "എന്റെ പ്രാദേശിക ഡാറ്റ മായ്ക്കുക",
    emptyNotes: "കുറിപ്പുകൾ സേവ് ചെയ്യുമ്പോൾ ഇവിടെ കാണാം.",
    emptyQuestions: "നിങ്ങളുടെ സേവ് ചെയ്ത ചോദ്യങ്ങൾ ഇവിടെ കാണാം.",
    delete: "മായ്ക്കുക",
    saved: "സേവ് ചെയ്തു",
    noteSaved: "നിങ്ങളുടെ കുറിപ്പ് സേവ് ചെയ്തു.",
    questionSaved: "നിങ്ങളുടെ ചോദ്യം സേവ് ചെയ്തു.",
    noteDeleted: "കുറിപ്പ് മായ്ച്ചു.",
    questionDeleted: "ചോദ്യം മായ്ച്ചു.",
    titleRequired: "ദയവായി തലക്കെട്ടും കുറിപ്പും എഴുതുക.",
    questionRequired: "ദയവായി നിങ്ങളുടെ ചോദ്യം എഴുതുക.",
    noNotes: "നിങ്ങൾ ഇതുവരെ കുറിപ്പുകളൊന്നും സേവ് ചെയ്തിട്ടില്ല.",
    noSpeech: "ഈ ബ്രൗസറിൽ ശബ്ദം തിരിച്ചറിയാനുള്ള സൗകര്യമില്ല. പിന്തുണയുള്ള ബ്രൗസർ ഉപയോഗിക്കുകയോ ടൈപ്പ് ചെയ്യുകയോ ചെയ്യുക.",
    listening: "കേൾക്കുന്നു... ഇപ്പോൾ സംസാരിക്കൂ.",
    recognitionError: "നിങ്ങളുടെ ശബ്ദം തിരിച്ചറിയാനായില്ല. വീണ്ടും ശ്രമിക്കൂ അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യൂ.",
    speechEnded: "ശബ്ദ ഇൻപുട്ട് അവസാനിച്ചു.",
    reading: "ശബ്ദമായി വായിക്കുന്നു...",
    speechUnavailable: "ഈ ബ്രൗസറിൽ ശബ്ദമായി വായിക്കാനുള്ള സൗകര്യമില്ല.",
    speechStopped: "ശബ്ദം നിർത്തി.",
    dataCleared: "നിങ്ങളുടെ സേവ് ചെയ്ത കുറിപ്പുകളും ചോദ്യങ്ങളും മായ്ച്ചു.",
    confirmClear: "സേവ് ചെയ്ത എല്ലാ കുറിപ്പുകളും ചോദ്യങ്ങളും മായ്ക്കണോ? ഇത് തിരിച്ചെടുക്കാനാകില്ല.",
    storageWarning: "ബ്രൗസർ സ്റ്റോറേജ് ലഭ്യമല്ല. നിങ്ങളുടെ ഡാറ്റ സേവ് ചെയ്തേക്കില്ല.",
    emptyTitle: "തലക്കെട്ടില്ല",
    savedQuestion: "സേവ് ചെയ്ത ചോദ്യം",
    readIntroduction: "ക്ലാസ്‌ബ്രിഡ്ജിലേക്ക് സ്വാഗതം. കുറിപ്പുകൾ സേവ് ചെയ്യൂ, ചോദ്യങ്ങൾ എഴുതൂ, നിങ്ങൾക്ക് ഇഷ്ടമുള്ള ഭാഷയിൽ പഠിക്കൂ. ഓരോ ചോദ്യവും പ്രധാനമാണ്.",
    deleteFailed: "ഈ ഇനം മായ്ക്കാൻ കഴിഞ്ഞില്ല."
  },

  ta: {
    workspace: "பணியிடம்",
    navHome: "முகப்பு",
    navNotes: "என் குறிப்புகள்",
    navQuestions: "என் கேள்விகள்",
    navHelp: "படிப்பு உதவியாளர்",
    tipTitle: "ஒவ்வொரு கேள்வியும் முக்கியம்.",
    tipText: "தயக்கமின்றி உதவி கேட்கும்போது கற்றல் எளிதாகிறது.",
    tipLink: "கேள்வி கேளுங்கள் →",
    localPrivate: "உங்களுக்கான தனிப்பட்ட கற்றல் இடம்",
    breadcrumb: "உங்கள் பணியிடம்",
    eyebrow: "உங்கள் கற்றல் பயணம்",
    welcomeTitle: 'இன்று புரிந்துகொள்ளுங்கள்.<br><span>நாளை நினைவில் கொள்ளுங்கள்.</span>',
    welcomeText: "வகுப்பு வேகமாகச் செல்லலாம். ஆனால் நீங்கள் அவசரப்பட வேண்டியதில்லை. குறிப்புகளைச் சேமியுங்கள், கேள்விகள் கேளுங்கள், உங்கள் மொழியில் கற்றுக்கொள்ளுங்கள்.",
    startNotes: "குறிப்பை உருவாக்கு",
    listen: "அறிமுகத்தைக் கேளுங்கள்",
    heroCard1: "உங்கள் வேகம்",
    heroCard1Sub: "உங்கள் கற்றல் முறை",
    heroCard2: "தொடர்ந்து முன்னேறுங்கள்",
    heroCard2Sub: "ஒரு நேரத்தில் ஒரு கேள்வி",
    statNotes: "சேமித்த குறிப்புகள்",
    statNotesSub: "நினைவில் வைக்க வேண்டியவை",
    statQuestions: "என் கேள்விகள்",
    statQuestionsSub: "நீங்கள் எழுதிய சந்தேகங்கள்",
    statLanguages: "மொழிகள்",
    statLanguagesSub: "புரிந்துகொள்ள ஆறு வழிகள்",
    sectionTools: "கற்றல் கருவிகள்",
    assistantTitle: "உங்கள் படிப்பு உதவியாளர்",
    assistantText: "எதையாவது மீண்டும் கேட்க வேண்டுமா? தட்டச்சு செய்வதற்குப் பதிலாகப் பேச விரும்புகிறீர்களா? இந்தக் கருவிகள் உதவும்.",
    readAloud: "எனது சமீபத்திய குறிப்பைக் கேளுங்கள்",
    readAloudSub: "சேமித்த படிப்புத் தகவலைக் கேளுங்கள்",
    voiceInput: "பேசிக் கேள்வி கேளுங்கள்",
    voiceInputSub: "ஆதரிக்கும் உலாவியில் மைக்ரோஃபோனைப் பயன்படுத்துங்கள்",
    gentleReminder: "ஒரு சிறிய நினைவூட்டல்",
    promptTitle: "மீண்டும் கேட்பது<br>முற்றிலும் சரியே.",
    promptText: "கேள்வி கேட்பது பலவீனம் அல்ல. அது புரிந்துகொள்ளும் தொடக்கம்.",
    promptLink: "உங்கள் சந்தேகத்தை எழுதுங்கள்",
    personalWorkspace: "உங்களுக்கான தனிப்பட்ட இடம்",
    notesTitle: "முக்கியமானவற்றைக் குறித்துக்கொள்ளுங்கள்",
    notesDescription: "நீங்கள் புரிந்துகொண்டவை, நினைவில் வைக்க வேண்டியவை அல்லது மீண்டும் படிக்க வேண்டியவற்றை இங்கே எழுதுங்கள்.",
    noteTitleLabel: "குறிப்பின் தலைப்பு",
    noteTitlePlaceholder: "எ.கா.: பைத்தான் அறிமுகம்",
    noteContentLabel: "உங்கள் குறிப்புகள்",
    noteContentPlaceholder: "வகுப்பின் முக்கியமான கருத்துகளை இங்கே எழுதுங்கள்...",
    privateHint: "இந்த உலாவியில் சேமிக்கப்படும்",
    saveNote: "குறிப்பைச் சேமி",
    speakUp: "உங்கள் கேள்வியைக் கேளுங்கள்",
    questionsTitle: "கேள்விகளுக்குப் பதில்கள் தேவை",
    questionsDescription: "வகுப்பு முடிந்ததும் மறப்பதற்கு முன் உங்கள் சந்தேகத்தை இங்கே எழுதுங்கள்.",
    subjectLabel: "பாடம் அல்லது தலைப்பு",
    subjectPlaceholder: "எ.கா.: கணிதம்",
    questionLabel: "எந்த விஷயத்தில் உதவி வேண்டும்?",
    questionPlaceholder: "உங்களுக்குப் பிடித்த மொழியில் கேள்வியை எழுதுங்கள்...",
    questionHint: "உங்கள் சொற்களில் உங்கள் சந்தேகம்",
    saveQuestion: "கேள்வியைச் சேமி",
    bannerTitle: "வகுப்பறையில் உங்கள் குரலுக்கும் இடமுண்டு.",
    bannerText: "உங்கள் வேகத்தில் கற்றுக்கொள்ளுங்கள். பயமின்றிக் கேளுங்கள். முன்னேறுங்கள்.",
    bannerLink: "சந்தேகத்தைப் பகிருங்கள் →",
    footerText: "சிறந்த தொடர்புக்கும் நம்பிக்கையுடன் கற்றலுக்கும்.",
    clearData: "எனது உள்ளூர் தரவை அழி",
    emptyNotes: "நீங்கள் குறிப்புகளைச் சேமித்ததும் அவை இங்கே தோன்றும்.",
    emptyQuestions: "நீங்கள் சேமித்த கேள்விகள் இங்கே தோன்றும்.",
    delete: "நீக்கு",
    saved: "சேமிக்கப்பட்டது",
    noteSaved: "உங்கள் குறிப்பு சேமிக்கப்பட்டது.",
    questionSaved: "உங்கள் கேள்வி சேமிக்கப்பட்டது.",
    noteDeleted: "குறிப்பு நீக்கப்பட்டது.",
    questionDeleted: "கேள்வி நீக்கப்பட்டது.",
    titleRequired: "தயவுசெய்து தலைப்பையும் குறிப்பையும் எழுதுங்கள்.",
    questionRequired: "தயவுசெய்து உங்கள் கேள்வியை எழுதுங்கள்.",
    noNotes: "நீங்கள் இன்னும் எந்தக் குறிப்பையும் சேமிக்கவில்லை.",
    noSpeech: "இந்த உலாவியில் பேச்சை அடையாளம் காணும் வசதி இல்லை. ஆதரிக்கும் உலாவியைப் பயன்படுத்தவும் அல்லது தட்டச்சு செய்யவும்.",
    listening: "கேட்கிறது... இப்போது பேசுங்கள்.",
    recognitionError: "உங்கள் பேச்சைப் புரிந்துகொள்ள முடியவில்லை. மீண்டும் முயற்சிக்கவும் அல்லது தட்டச்சு செய்யவும்.",
    speechEnded: "குரல் உள்ளீடு முடிந்தது.",
    reading: "குரலில் படிக்கப்படுகிறது...",
    speechUnavailable: "இந்த உலாவியில் குரலில் வாசிக்கும் வசதி இல்லை.",
    speechStopped: "குரல் நிறுத்தப்பட்டது.",
    dataCleared: "உங்கள் சேமித்த குறிப்புகளும் கேள்விகளும் அழிக்கப்பட்டன.",
    confirmClear: "சேமித்த எல்லா குறிப்புகளையும் கேள்விகளையும் நீக்கவா? இதை மீட்டெடுக்க முடியாது.",
    storageWarning: "உலாவி சேமிப்பகம் கிடைக்கவில்லை. உங்கள் தரவு சேமிக்கப்படாமல் போகலாம்.",
    emptyTitle: "தலைப்பு இல்லை",
    savedQuestion: "சேமித்த கேள்வி",
    readIntroduction: "கிளாஸ்பிரிட்ஜுக்கு வரவேற்கிறோம். உங்கள் குறிப்புகளைச் சேமியுங்கள், கேள்விகளை எழுதுங்கள், உங்களுக்குப் பிடித்த மொழியில் கற்றுக்கொள்ளுங்கள். ஒவ்வொரு கேள்வியும் முக்கியம்.",
    deleteFailed: "இந்த உருப்படியை நீக்க முடியவில்லை."
  }
};

const speechLocales = {
  en: "en-IN",
  hi: "hi-IN",
  pa: "pa-IN",
  te: "te-IN",
  ml: "ml-IN",
  ta: "ta-IN"
};

let currentLanguage = "en";
let recognition = null;
let toastTimer = null;
let isListening = false;
let isSpeaking = false;

let notes = readStoredArray("classbridge_notes");
let questions = readStoredArray("classbridge_questions");

function t(key) {
  return translations[currentLanguage]?.[key] ??
         translations.en[key] ??
         key;
}

/* Safely read browser storage */
function readStoredArray(key) {
  try {
    const value = localStorage.getItem(key);
    const parsed = value ? JSON.parse(value) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveStoredArray(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    showToast(t("storageWarning"));
    return false;
  }
}

/* Language switching */
function setLanguage(language) {
  if (!translations[language]) language = "en";

  stopSpeaking();
  currentLanguage = language;

  document.documentElement.lang = ({
    en: "en",
    hi: "hi",
    pa: "pa",
    te: "te",
    ml: "ml",
    ta: "ta"
  })[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = t(key);

    // Only predefined translation strings are inserted as HTML.
    element.innerHTML = translated;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  $("#languageSelect").value = language;
  renderNotes();
  renderQuestions();
}

/* Small notification */
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* Speech playback */
function stopSpeaking() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  isSpeaking = false;
}

function speakText(text) {
  if (!("speechSynthesis" in window) ||
      typeof SpeechSynthesisUtterance === "undefined") {
    showToast(t("speechUnavailable"));
    return;
  }

  stopSpeaking();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechLocales[currentLanguage];
  utterance.rate = 0.9;
  utterance.pitch = 1;

  utterance.onstart = () => {
    isSpeaking = true;
    $("#voiceStatus").textContent = t("reading");
  };

  utterance.onend = () => {
    isSpeaking = false;
    $("#voiceStatus").textContent = "";
  };

  utterance.onerror = () => {
    isSpeaking = false;
    $("#voiceStatus").textContent = t("speechUnavailable");
  };

  window.speechSynthesis.speak(utterance);
}

/* Read the introduction */
$("#readWelcome").addEventListener("click", () => {
  speakText(t("readIntroduction"));
});

/* Read the latest note */
$("#readNotes").addEventListener("click", () => {
  if (notes.length === 0) {
    showToast(t("noNotes"));
    return;
  }

  const latest = notes[0];
  speakText(`${latest.title}. ${latest.content}`);
});

/* Speech-to-text support varies by browser */
function startVoiceInput() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    $("#voiceStatus").textContent = t("noSpeech");
    showToast(t("noSpeech"));
    return;
  }

  if (isListening && recognition) {
    recognition.stop();
    return;
  }

  try {
    recognition = new SpeechRecognition();
    recognition.lang = speechLocales[currentLanguage];
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    isListening = true;

    const questionInput = $("#questionContent");
    const originalText = questionInput.value.trim();

    recognition.onstart = () => {
      $("#voiceStatus").textContent = t("listening");
      $("#voiceQuestion").classList.add("listening");
    };

    recognition.onresult = (event) => {
      let finalTranscript = "";
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      const spokenText = (finalTranscript || interimTranscript).trim();

      if (spokenText) {
        questionInput.value =
          [originalText, spokenText].filter(Boolean).join(" ").trim();
      }
    };

    recognition.onerror = (event) => {
      if (event.error !== "aborted" && event.error !== "no-speech") {
        $("#voiceStatus").textContent = t("recognitionError");
      } else if (event.error === "no-speech") {
        $("#voiceStatus").textContent = t("recognitionError");
      }
    };

    recognition.onend = () => {
      isListening = false;
      $("#voiceQuestion").classList.remove("listening");

      if ($("#voiceStatus").textContent === t("listening")) {
        $("#voiceStatus").textContent = t("speechEnded");
      }
    };

    recognition.start();
  } catch (error) {
    isListening = false;
    $("#voiceStatus").textContent = t("recognitionError");
  }
}

$("#voiceQuestion").addEventListener("click", startVoiceInput);

/* Notes */
$("#noteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = $("#noteTitle").value.trim();
  const content = $("#noteContent").value.trim();

  if (!title || !content) {
    $("#noteStatus").textContent = t("titleRequired");
    return;
  }

  const newNote = {
    id: createId(),
    title,
    content,
    date: new Date().toISOString()
  };

  notes.unshift(newNote);

  if (!saveStoredArray("classbridge_notes", notes)) {
    notes.shift();
    return;
  }

  $("#noteForm").reset();
  $("#noteStatus").textContent = t("noteSaved");
  renderNotes();
  showToast(t("noteSaved"));
});

/* Questions */
$("#questionForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const subject = $("#questionSubject").value.trim();
  const content = $("#questionContent").value.trim();

  if (!content) {
    $("#questionStatus").textContent = t("questionRequired");
    return;
  }

  const newQuestion = {
    id: createId(),
    subject: subject || t("savedQuestion"),
    content,
    date: new Date().toISOString()
  };

  questions.unshift(newQuestion);

  if (!saveStoredArray("classbridge_questions", questions)) {
    questions.shift();
    return;
  }

  $("#questionForm").reset();
  $("#questionStatus").textContent = t("questionSaved");
  renderQuestions();
  showToast(t("questionSaved"));
});

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return "";

  try {
    return new Intl.DateTimeFormat(currentLanguage, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(date);
  } catch (error) {
    return date.toLocaleString();
  }
}

/* Create item elements safely using textContent */
function makeSavedItem(item, kind) {
  const article = document.createElement("article");
  article.className = "saved-item";

  const title = document.createElement("h3");
  title.textContent = item.title || item.subject || t("emptyTitle");

  const content = document.createElement("p");
  content.textContent = item.content || "";

  const meta = document.createElement("div");
  meta.className = "saved-meta";

  const date = document.createElement("span");
  date.textContent = formatDate(item.date);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-item";
  deleteButton.textContent = t("delete");
  deleteButton.addEventListener("click", () => deleteItem(item.id, kind));

  meta.append(date, deleteButton);
  article.append(title, content, meta);

  return article;
}

function renderNotes() {
  const list = $("#notesList");
  list.replaceChildren();

  $("#notesCount").textContent = notes.length;

  if (notes.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("emptyNotes");
    list.appendChild(empty);
    return;
  }

  notes.forEach((note) => {
    list.appendChild(makeSavedItem(note, "note"));
  });
}

function renderQuestions() {
  const list = $("#questionsList");
  list.replaceChildren();

  $("#questionsCount").textContent = questions.length;

  if (questions.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("emptyQuestions");
    list.appendChild(empty);
    return;
  }

  questions.forEach((question) => {
    list.appendChild(makeSavedItem(question, "question"));
  });
}

function deleteItem(id, kind) {
  if (kind === "note") {
    const previous = notes;
    notes = notes.filter((item) => item.id !== id);

    if (!saveStoredArray("classbridge_notes", notes)) {
      notes = previous;
      return;
    }

    renderNotes();
    showToast(t("noteDeleted"));
  } else {
    const previous = questions;
    questions = questions.filter((item) => item.id !== id);

    if (!saveStoredArray("classbridge_questions", questions)) {
      questions = previous;
      return;
    }

    renderQuestions();
    showToast(t("questionDeleted"));
  }
}

/* Clear locally stored project data */
$("#clearData").addEventListener("click", () => {
  if (!window.confirm(t("confirmClear"))) return;

  const previousNotes = notes;
  const previousQuestions = questions;

  notes = [];
  questions = [];

  const notesSaved = saveStoredArray("classbridge_notes", notes);
  const questionsSaved = saveStoredArray("classbridge_questions", questions);

  if (!notesSaved || !questionsSaved) {
    notes = previousNotes;
    questions = previousQuestions;
    renderNotes();
    renderQuestions();
    return;
  }

  renderNotes();
  renderQuestions();
  showToast(t("dataCleared"));
});

/* Mobile sidebar */
$("#menuButton").addEventListener("click", () => {
  const sidebar = $("#sidebar");
  const opened = sidebar.classList.toggle("open");

  $("#menuButton").setAttribute("aria-expanded", String(opened));
  $("#menuButton").setAttribute(
    "aria-label",
    opened ? "Close navigation" : "Open navigation"
  );
});

document.querySelectorAll(".nav-link, .tip-link").forEach((link) => {
  link.addEventListener("click", () => {
    $("#sidebar").classList.remove("open");
    $("#menuButton").setAttribute("aria-expanded", "false");
  });
});

/* Apply the selected language */
$("#languageSelect").addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

/* Start the application */
setLanguage("en");
renderNotes();
renderQuestions();
