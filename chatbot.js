/* =====================================================
   Harvestly "Farm Friend" chatbot
   - Works offline (no server, no API key)
   - 3 languages: English, Hindi, Tamil
   - Big tap buttons, typing, voice input (mic) and read-aloud
   ===================================================== */
(function () {
  'use strict';

  const L = {
    en: {
      title: 'Farm Friend', sub: 'Ask me — I explain in simple words', hint: 'Need help? Ask me!',
      placeholder: 'Type your question…', listen: 'Listen',
      chips: { howto: 'How to use?', addfield: 'Add my field', water: 'Watering', fert: 'Fertilizer', pest: 'Pest problem', harvest: 'Harvest time', stages: 'Crop stages', status: 'My farm status', help: 'Talk to expert' },
      hello: `Namaste! 🙏 I am your Farm Friend.\nI explain everything in simple words.\nTap a button below or type your question.`,
      howto: `Using Harvestly is easy:\n1️⃣ Add your field\n2️⃣ Write when you water, give fertilizer or see pests\n3️⃣ Keep changing the crop stage\n4️⃣ Watch your harvest get ready 🌾\n5️⃣ Tap any field to open it and see its crop details`,
      addfield: `To add a field:\n1️⃣ Tap 'My Fields' on the left (☰ on phone)\n2️⃣ Tap '＋ Add field'\n3️⃣ Write the field name, choose the crop, write the acres\n4️⃣ Tap Save ✅`,
      water: `💧 Watering tips:\n• Water early morning or evening\n• Give water when the soil feels dry\n• Do not give too much — roots can rot\nThen tap 'Daily Care' → Irrigation to write it down.`,
      fert: `🌿 Fertilizer tips:\n• Use only the amount your local agriculture officer suggests\n• Put it when the soil is a little moist\n• Keep it away from the leaves\nWrite it in 'Daily Care' → Fertilizer.`,
      pest: `🐛 If you see insects or spots on leaves:\n• Look under the leaves\n• Take a photo and show your agriculture officer\n• Write it in 'Daily Care' → Pests\nDo not spray strong medicine without advice.`,
      harvest: `🌾 Harvest time:\nWhen the crop shows 'Ready to harvest' 🧺 it is time to cut.\nAfter cutting, change the stage to 'Harvested' ✅. See all crops on the 'Harvest' page.`,
      stages: `Crop stages:\n🌱 Sowing → 🌿 Growing → 🌸 Flowering → 🧺 Ready to harvest → ✅ Harvested\nChange the stage in 'My Fields' using the small menu on each field.`,
      help: `Need an expert?\n📞 Kisan Call Centre: 1800-180-1551 (free)\nOr visit your nearest Krishi Vigyan Kendra / agriculture office.`,
      thanks: `You are welcome! 😊 Happy farming! 🌱`,
      fallback: `Sorry, I did not understand. 🙏\nPlease tap one of the buttons below.`,
      statusHead: 'Your farm today:', statusNone: `You have no fields yet. Tap 'Add my field' to begin.`, statusReady: '🧺 Ready to harvest:', statusRec: 'Records: 💧 {w} · 🌿 {f} · 🐛 {p}'
    },
    hi: {
      title: 'किसान मित्र', sub: 'पूछिए — मैं आसान भाषा में समझाऊँगा', hint: 'मदद चाहिए? मुझसे पूछें!',
      placeholder: 'अपना सवाल लिखें…', listen: 'सुनें',
      chips: { howto: 'कैसे चलाएँ?', addfield: 'खेत जोड़ें', water: 'सिंचाई', fert: 'खाद', pest: 'कीट की समस्या', harvest: 'कटाई का समय', stages: 'फसल की अवस्था', status: 'मेरे खेत की स्थिति', help: 'विशेषज्ञ से बात' },
      hello: `नमस्ते! 🙏 मैं आपका किसान मित्र हूँ।\nमैं हर बात आसान शब्दों में समझाता हूँ।\nनीचे कोई बटन दबाएँ या अपना सवाल लिखें।`,
      howto: `हार्वेस्टली चलाना आसान है:\n1️⃣ अपना खेत जोड़ें\n2️⃣ पानी, खाद या कीट दिखें तो लिख लें\n3️⃣ फसल की अवस्था बदलते रहें\n4️⃣ अपनी कटाई तैयार होते देखें 🌾\n5️⃣ किसी भी खेत पर दबाएँ — उसकी फसल की जानकारी खुलेगी`,
      addfield: `खेत जोड़ने के लिए:\n1️⃣ बाईं ओर 'मेरे खेत' दबाएँ (फोन में ☰)\n2️⃣ '＋ खेत जोड़ें' दबाएँ\n3️⃣ खेत का नाम लिखें, फसल चुनें, एकड़ लिखें\n4️⃣ 'सहेजें' दबाएँ ✅`,
      water: `💧 सिंचाई के सुझाव:\n• सुबह जल्दी या शाम को पानी दें\n• मिट्टी सूखी लगे तब पानी दें\n• ज़्यादा पानी न दें — जड़ें सड़ सकती हैं\nफिर 'रोज़ की देखभाल' → सिंचाई में लिख लें।`,
      fert: `🌿 खाद के सुझाव:\n• उतनी ही खाद डालें जितनी आपके कृषि अधिकारी बताएँ\n• मिट्टी में थोड़ी नमी हो तब डालें\n• पत्तियों पर न लगने दें\n'रोज़ की देखभाल' → खाद में लिख लें।`,
      pest: `🐛 पत्तियों पर कीड़े या दाग दिखें तो:\n• पत्तियों के नीचे देखें\n• फोटो लेकर कृषि अधिकारी को दिखाएँ\n• 'रोज़ की देखभाल' → कीट में लिख लें\nबिना सलाह के तेज़ दवा न छिड़कें।`,
      harvest: `🌾 कटाई का समय:\nजब फसल 'कटाई के लिए तैयार' 🧺 दिखे, तब काटें।\nकाटने के बाद अवस्था 'कट चुकी' ✅ कर दें। सारी फसलें 'कटाई' पेज पर देखें।`,
      stages: `फसल की अवस्थाएँ:\n🌱 बुवाई → 🌿 बढ़ रही है → 🌸 फूल आना → 🧺 कटाई के लिए तैयार → ✅ कट चुकी\n'मेरे खेत' में हर खेत के छोटे मेन्यू से अवस्था बदलें।`,
      help: `विशेषज्ञ से बात करनी है?\n📞 किसान कॉल सेंटर: 1800-180-1551 (मुफ़्त)\nया नज़दीकी कृषि विज्ञान केंद्र / कृषि कार्यालय जाएँ।`,
      thanks: `आपका स्वागत है! 😊 खेती में सफलता मिले! 🌱`,
      fallback: `माफ़ कीजिए, मैं समझ नहीं पाया। 🙏\nकृपया नीचे का कोई बटन दबाएँ।`,
      statusHead: 'आज आपका खेत:', statusNone: `अभी कोई खेत नहीं है। शुरू करने के लिए 'खेत जोड़ें' दबाएँ।`, statusReady: '🧺 कटाई के लिए तैयार:', statusRec: 'रिकॉर्ड: 💧 {w} · 🌿 {f} · 🐛 {p}'
    },
    ta: {
      title: 'விவசாய நண்பன்', sub: 'கேளுங்கள் — எளிதாக விளக்குவேன்', hint: 'உதவி வேண்டுமா? என்னிடம் கேளுங்கள்!',
      placeholder: 'உங்கள் கேள்வியை எழுதுங்கள்…', listen: 'கேளுங்கள்',
      chips: { howto: 'எப்படி பயன்படுத்துவது?', addfield: 'வயல் சேர்', water: 'நீர்', fert: 'உரம்', pest: 'பூச்சி பிரச்சனை', harvest: 'அறுவடை நேரம்', stages: 'பயிர் நிலைகள்', status: 'என் பண்ணை நிலை', help: 'நிபுணரிடம் பேசு' },
      hello: `வணக்கம்! 🙏 நான் உங்கள் விவசாய நண்பன்.\nஎல்லாவற்றையும் எளிய வார்த்தைகளில் சொல்வேன்.\nகீழே ஒரு பொத்தானை அழுத்துங்கள் அல்லது கேள்வியை எழுதுங்கள்.`,
      howto: `ஹார்வெஸ்ட்லி பயன்படுத்துவது எளிது:\n1️⃣ உங்கள் வயலைச் சேருங்கள்\n2️⃣ நீர், உரம் அல்லது பூச்சி தெரிந்தால் எழுதுங்கள்\n3️⃣ பயிர் நிலையை மாற்றிக் கொண்டே இருங்கள்\n4️⃣ உங்கள் அறுவடை தயாராவதைப் பாருங்கள் 🌾\n5️⃣ எந்த வயலையும் அழுத்துங்கள் — அதன் பயிர் விவரம் திறக்கும்`,
      addfield: `வயல் சேர்க்க:\n1️⃣ இடப்பக்கம் 'என் வயல்கள்' அழுத்துங்கள் (போனில் ☰)\n2️⃣ '＋ வயல் சேர்' அழுத்துங்கள்\n3️⃣ வயல் பெயர் எழுதி, பயிர் தேர்ந்தெடுத்து, ஏக்கர் எழுதுங்கள்\n4️⃣ 'சேமி' அழுத்துங்கள் ✅`,
      water: `💧 நீர் குறிப்புகள்:\n• அதிகாலை அல்லது மாலையில் நீர் பாய்ச்சுங்கள்\n• மண் காய்ந்தது போல் இருந்தால் நீர் விடுங்கள்\n• அதிகமாக விட வேண்டாம் — வேர் அழுகும்\nபிறகு 'தினசரி பராமரிப்பு' → நீர்ப்பாசனத்தில் எழுதுங்கள்.`,
      fert: `🌿 உரக் குறிப்புகள்:\n• வேளாண் அலுவலர் சொன்ன அளவே இடுங்கள்\n• மண் சிறிது ஈரமாக இருக்கும்போது இடுங்கள்\n• இலைகளில் படாமல் பார்த்துக் கொள்ளுங்கள்\n'தினசரி பராமரிப்பு' → உரத்தில் எழுதுங்கள்.`,
      pest: `🐛 இலைகளில் பூச்சி அல்லது புள்ளிகள் தெரிந்தால்:\n• இலைகளின் அடியில் பாருங்கள்\n• படம் எடுத்து வேளாண் அலுவலரிடம் காட்டுங்கள்\n• 'தினசரி பராமரிப்பு' → பூச்சிகளில் எழுதுங்கள்\nஆலோசனை இல்லாமல் வீரியமான மருந்து தெளிக்க வேண்டாம்.`,
      harvest: `🌾 அறுவடை நேரம்:\nபயிர் 'அறுவடைக்கு தயார்' 🧺 என்று காட்டினால் அறுக்கலாம்.\nஅறுத்த பிறகு நிலையை 'அறுவடை முடிந்தது' ✅ என மாற்றுங்கள். எல்லா பயிர்களையும் 'அறுவடை' பக்கத்தில் பாருங்கள்.`,
      stages: `பயிர் நிலைகள்:\n🌱 விதைப்பு → 🌿 வளர்கிறது → 🌸 பூக்கும் நிலை → 🧺 அறுவடைக்கு தயார் → ✅ அறுவடை முடிந்தது\n'என் வயல்கள்'ல் ஒவ்வொரு வயலின் சிறிய பட்டியலில் நிலையை மாற்றுங்கள்.`,
      help: `நிபுணரிடம் பேச வேண்டுமா?\n📞 கிசான் கால் சென்டர்: 1800-180-1551 (இலவசம்)\nஅல்லது அருகிலுள்ள வேளாண் அறிவியல் நிலையம் / வேளாண் அலுவலகம் செல்லுங்கள்.`,
      thanks: `வரவேற்கிறேன்! 😊 விவசாயம் செழிக்கட்டும்! 🌱`,
      fallback: `மன்னிக்கவும், எனக்குப் புரியவில்லை. 🙏\nகீழே உள்ள பொத்தான்களில் ஒன்றை அழுத்துங்கள்.`,
      statusHead: 'இன்று உங்கள் பண்ணை:', statusNone: `இன்னும் வயல்கள் இல்லை. தொடங்க 'வயல் சேர்' அழுத்துங்கள்.`, statusReady: '🧺 அறுவடைக்கு தயார்:', statusRec: 'பதிவுகள்: 💧 {w} · 🌿 {f} · 🐛 {p}'
    }
  };

  /* Words (in all 6 languages + common Roman spellings) that trigger each topic.
     Order matters: more specific topics are checked first. */
  const KW = [
    ['status',   ['status', 'summary', 'overview', 'my farm', 'स्थिति', 'हालत', 'பண்ணை நிலை', 'நிலவரம்']],
    ['addfield', ['add', 'new field', 'जोड़', 'சேர்']],
    ['water',    ['water', 'irrigat', 'pani', 'paani', 'thanni', 'neer', 'jal', 'पानी', 'सिंचाई', 'தண்ணீர்', 'நீர்', 'பாசன']],
    ['fert',     ['fertil', 'khad', 'uram', 'urea', 'dap', 'npk', 'खाद', 'உரம்']],
    ['pest',     ['pest', 'insect', 'bug', 'disease', 'keeda', 'keede', 'कीट', 'कीड़े', 'रोग', 'பூச்சி', 'நோய்']],
    ['harvest',  ['harvest', 'ripe', 'katai', 'cut', 'कटाई', 'काट', 'அறுவடை']],
    ['stages',   ['stage', 'phase', 'अवस्था', 'நிலை']],
    ['help',     ['expert', 'call', 'contact', 'number', 'विशेषज्ञ', 'नंबर', 'நிபுண']],
    ['thanks',   ['thank', 'dhanyavad', 'shukriya', 'nandri', 'धन्यवाद', 'நன்றி']],
    ['howto',    ['how', 'use', 'start', 'कैसे', 'எப்படி', 'பயன்']],
    ['hello',    ['hi', 'hello', 'hey', 'namaste', 'vanakkam', 'नमस्ते', 'வணக்கம்']]
  ];
  const ORDER = ['howto', 'addfield', 'water', 'fert', 'pest', 'harvest', 'stages', 'status', 'help'];

  const S = () => L[lang] || L.en;
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  let fab, hint, panel, body, qr, input, micBtn, soundBtn, headTitle, headSub;
  let isOpen = false, autoSpeak = true, greeted = false, busy = false;

  function detect(text) {
    const q = text.toLowerCase();
    for (const [intent, words] of KW) {
      for (const w of words) {
        if (/^[a-z]{1,3}$/.test(w) ? new RegExp('\\b' + w + '\\b').test(q) : q.includes(w)) return intent;
      }
    }
    return 'fallback';
  }

  function statusMsg() {
    const s = S();
    if (!fields.length) return s.statusNone;
    const out = [s.statusHead];
    fields.forEach(f => out.push(`${CROPS[f.crop] || '🌱'} ${f.name} — ${t('c_' + f.crop)} — ${STAGE_ICON[f.stage]} ${t(STAGES[f.stage])}`));
    const ready = fields.filter(f => f.stage === 3);
    if (ready.length) out.push('', s.statusReady + ' ' + ready.map(f => f.name).join(', '));
    const c = x => records.filter(r => r.type === x).length;
    out.push('', s.statusRec.replace('{w}', c('irrig')).replace('{f}', c('fert')).replace('{p}', c('pest')));
    return out.join('\n');
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      speechSynthesis.cancel();
      const clean = text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{20E3}＋→•]/gu, ' ').replace(/\s+/g, ' ').trim();
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = LANGS[lang].code; u.rate = 0.9;
      speechSynthesis.speak(u);
    } catch (e) { /* speech not available */ }
  }

  function scroll() { body.scrollTop = body.scrollHeight; }

  function addMsg(text, who) {
    const m = el('div', 'kmsg ' + (who === 'bot' ? 'kb' : 'ku'));
    m.appendChild(document.createTextNode(text));
    if (who === 'bot') {
      const b = el('button', 'ksay', '🔊 ' + S().listen);
      b.type = 'button';
      b.onclick = () => speak(text);
      m.appendChild(document.createElement('br'));
      m.appendChild(b);
    }
    body.appendChild(m); scroll();
    return m;
  }

  function answer(intent) {
    const typing = el('div', 'ktyping'); typing.innerHTML = '<i></i><i></i><i></i>';
    body.appendChild(typing); scroll(); busy = true;
    setTimeout(() => {
      typing.remove(); busy = false;
      const s = S();
      const txt = intent === 'status' ? statusMsg() : (intent === 'hello' ? s.hello : (s[intent] || s.fallback));
      addMsg(txt, 'bot');
      if (autoSpeak) speak(txt);
    }, 550);
  }

  function send(text, forcedIntent) {
    text = (text || '').trim(); if (!text) return;
    addMsg(text, 'user');
    answer(forcedIntent || detect(text));
  }

  function renderChips() {
    qr.innerHTML = '';
    ORDER.forEach(k => {
      const b = el('button', null, S().chips[k]); b.type = 'button';
      b.onclick = () => send(S().chips[k], k);
      qr.appendChild(b);
    });
  }

  function refreshChrome() {
    const s = S();
    headTitle.textContent = s.title; headSub.textContent = s.sub;
    hint.textContent = s.hint; input.placeholder = s.placeholder;
    renderChips();
  }

  function openBot() {
    isOpen = true; panel.classList.add('open'); hint.remove();
    if (!greeted) { greeted = true; answer('hello'); }
    setTimeout(() => input.focus({ preventScroll: true }), 300);
  }
  function closeBot() { isOpen = false; panel.classList.remove('open'); try { speechSynthesis.cancel(); } catch (e) { } }

  function startMic() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    try {
      const r = new SR(); r.lang = LANGS[lang].code; r.interimResults = false; r.maxAlternatives = 1;
      micBtn.classList.add('rec');
      r.onresult = e => send(e.results[0][0].transcript);
      r.onend = r.onerror = () => micBtn.classList.remove('rec');
      r.start();
    } catch (e) { micBtn.classList.remove('rec'); }
  }

  function build() {
    fab = el('button', 'kbot-fab', '🧑‍🌾'); fab.type = 'button'; fab.setAttribute('aria-label', 'Farm Friend chat');
    hint = el('div', 'kbot-hint');
    panel = el('section', 'kbot'); panel.setAttribute('aria-live', 'polite');

    const head = el('div', 'kbot-head');
    head.appendChild(el('div', 'kbot-av', '🧑‍🌾'));
    const tt = el('div', 'tt'); headTitle = el('b'); headSub = el('small'); tt.append(headTitle, headSub); head.appendChild(tt);
    soundBtn = el('button', 'kbot-ib', '🔊'); soundBtn.type = 'button'; soundBtn.title = 'Voice on/off';
    soundBtn.onclick = () => { autoSpeak = !autoSpeak; soundBtn.textContent = autoSpeak ? '🔊' : '🔇'; if (!autoSpeak) { try { speechSynthesis.cancel(); } catch (e) { } } };
    const x = el('button', 'kbot-ib', '✕'); x.type = 'button'; x.onclick = closeBot;
    head.append(soundBtn, x);

    body = el('div', 'kbot-body');
    qr = el('div', 'kbot-qr');
    const form = el('form', 'kbot-in');
    input = el('input'); input.type = 'text'; input.autocomplete = 'off';
    micBtn = el('button', 'kmic', '🎤'); micBtn.type = 'button'; micBtn.onclick = startMic;
    if (!(window.SpeechRecognition || window.webkitSpeechRecognition)) micBtn.style.display = 'none';
    const go = el('button', null, '➤'); go.type = 'submit';
    form.append(input, micBtn, go);
    form.onsubmit = e => { e.preventDefault(); const v = input.value; input.value = ''; send(v); };

    panel.append(head, body, qr, form);
    document.body.append(panel, hint, fab);
    fab.onclick = () => (isOpen ? closeBot() : openBot());
    refreshChrome();
    setTimeout(() => { if (!isOpen && hint.isConnected) hint.style.display = 'block'; }, 2500);
    hint.style.display = 'none';
    hint.onclick = openBot;
  }

  /* Called by script.js whenever the language changes */
  window.botLang = function () {
    if (!panel) return;
    refreshChrome();
    if (greeted) answer('hello');
  };

  build();
})();
