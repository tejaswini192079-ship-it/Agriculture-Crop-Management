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
    c_rice:'Rice',c_wheat:'Wheat',c_tomato:'Tomato',c_cotton:'Cotton'},
  hi:{label:'हिन्दी',code:'hi-IN',
    tag:'स्मार्ट खेती. आसान जीवन।',heroTitle:'बेहतर उगाएं. बेहतर काटें।',heroSub:'अपने खेत, फसल, पानी, खाद और कटाई — सब एक जगह।',
    f1:'अपने खेत जानें',f2:'पानी और देखभाल',f3:'कटाई देखें',signin:'लॉग इन',signSub:'आपका खेत बस एक कदम दूर है।',name:'आपका नाम',pass:'पासवर्ड',login:'मेरा खेत खोलें',demo:'डेमो: कोई भी नाम और पासवर्ड लिखें।',
    dash:'होम',fields:'मेरे खेत',acts:'रोज़ की देखभाल',harvest:'कटाई',logout:'बाहर निकलें',welcome:'स्वागत है',snap:'आज आपका खेत',
    sFields:'खेत',sWater:'सिंचाई',sPest:'कीट चेतावनी',sHarv:'कटाई के लिए तैयार',yourFields:'मेरे खेत',addField:'खेत जोड़ें',fname:'खेत का नाम',crop:'फसल',area:'क्षेत्र (एकड़)',stage:'अवस्था',save:'सहेजें',
    sow:'बुवाई',grow:'बढ़ रही है',flower:'फूल आना',ready:'कटाई के लिए तैयार',done:'कट चुकी',
    irrig:'सिंचाई',irrigD:'पानी कब दिया, लिखें',fert:'खाद',fertD:'कौन सी खाद डाली, लिखें',pest:'कीट',pestD:'कीड़े या बीमारी दिखे तो लिखें',
    choose:'खेत चुनें',note:'छोटा नोट',add:'रिकॉर्ड जोड़ें',history:'हाल के रिकॉर्ड',noRec:'अभी कोई रिकॉर्ड नहीं',harvestTitle:'कटाई की स्थिति',harvestSub:'देखें कौन सी फसल तैयार है',acres:'एकड़',listen:'सुनें',saved:'सहेजा गया ✓',
    c_rice:'चावल',c_wheat:'गेहूं',c_tomato:'टमाटर',c_cotton:'कपास'},
  te:{label:'తెలుగు',code:'te-IN',
    tag:'స్మార్ట్ వ్యవసాయం. సులభ జీవనం.',heroTitle:'బాగా పండించండి. బాగా కోయండి.',heroSub:'మీ పొలాలు, పంటలు, నీరు, ఎరువు, కోత — అన్నీ ఒకే చోట.',
    f1:'మీ పొలాలు తెలుసుకోండి',f2:'నీరు & సంరక్షణ',f3:'కోత చూడండి',signin:'లాగిన్',signSub:'మీ పొలం ఒక్క అడుగు దూరంలో ఉంది.',name:'మీ పేరు',pass:'పాస్‌వర్డ్',login:'నా పొలం తెరవండి',demo:'డెమో: ఏ పేరు, పాస్‌వర్డ్ అయినా రాయండి.',
    dash:'హోమ్',fields:'నా పొలాలు',acts:'రోజువారీ సంరక్షణ',harvest:'కోత',logout:'బయటకు',welcome:'స్వాగతం',snap:'ఈ రోజు మీ పొలం',
    sFields:'పొలాలు',sWater:'నీటిపారుదల',sPest:'చీడల హెచ్చరిక',sHarv:'కోతకు సిద్ధం',yourFields:'నా పొలాలు',addField:'పొలం చేర్చండి',fname:'పొలం పేరు',crop:'పంట',area:'విస్తీర్ణం (ఎకరాలు)',stage:'దశ',save:'సేవ్',
    sow:'విత్తనం',grow:'పెరుగుతోంది',flower:'పూత',ready:'కోతకు సిద్ధం',done:'కోత పూర్తి',
    irrig:'నీటిపారుదల',irrigD:'ఎప్పుడు నీరు పెట్టారో రాయండి',fert:'ఎరువు',fertD:'ఏ ఎరువు వేశారో రాయండి',pest:'చీడపీడలు',pestD:'పురుగులు లేదా తెగులు కనిపిస్తే రాయండి',
    choose:'పొలం ఎంచుకోండి',note:'చిన్న నోట్',add:'రికార్డ్ చేర్చండి',history:'ఇటీవలి రికార్డులు',noRec:'ఇంకా రికార్డులు లేవు',harvestTitle:'కోత స్థితి',harvestSub:'ఏ పంట సిద్ధంగా ఉందో చూడండి',acres:'ఎకరాలు',listen:'వినండి',saved:'సేవ్ అయింది ✓',
    c_rice:'వరి',c_wheat:'గోధుమ',c_tomato:'టమాటా',c_cotton:'పత్తి'},
  ta:{label:'தமிழ்',code:'ta-IN',
    tag:'ஸ்மார்ட் விவசாயம். எளிய வாழ்க்கை.',heroTitle:'நன்றாக விளைவியுங்கள். நன்றாக அறுவடை செய்யுங்கள்.',heroSub:'உங்கள் வயல், பயிர், நீர், உரம், அறுவடை — எல்லாம் ஒரே இடத்தில்.',
    f1:'உங்கள் வயல்களை அறியுங்கள்',f2:'நீர் & பராமரிப்பு',f3:'அறுவடை பாருங்கள்',signin:'உள்நுழைக',signSub:'உங்கள் பண்ணை ஒரு அடி தூரத்தில்.',name:'உங்கள் பெயர்',pass:'கடவுச்சொல்',login:'என் பண்ணையைத் திற',demo:'டெமோ: எந்த பெயர், கடவுச்சொல்லும் எழுதலாம்.',
    dash:'முகப்பு',fields:'என் வயல்கள்',acts:'தினசரி பராமரிப்பு',harvest:'அறுவடை',logout:'வெளியேறு',welcome:'வரவேற்கிறோம்',snap:'இன்று உங்கள் பண்ணை',
    sFields:'வயல்கள்',sWater:'நீர்ப்பாசனம்',sPest:'பூச்சி எச்சரிக்கை',sHarv:'அறுவடைக்கு தயார்',yourFields:'என் வயல்கள்',addField:'வயல் சேர்',fname:'வயல் பெயர்',crop:'பயிர்',area:'பரப்பு (ஏக்கர்)',stage:'நிலை',save:'சேமி',
    sow:'விதைப்பு',grow:'வளர்கிறது',flower:'பூக்கும் நிலை',ready:'அறுவடைக்கு தயார்',done:'அறுவடை முடிந்தது',
    irrig:'நீர்ப்பாசனம்',irrigD:'எப்போது நீர் விட்டீர்கள் என எழுதுங்கள்',fert:'உரம்',fertD:'எந்த உரம் போட்டீர்கள் என எழுதுங்கள்',pest:'பூச்சிகள்',pestD:'பூச்சி அல்லது நோய் தெரிந்தால் எழுதுங்கள்',
    choose:'வயலைத் தேர்ந்தெடுங்கள்',note:'சிறு குறிப்பு',add:'பதிவு சேர்',history:'சமீபத்திய பதிவுகள்',noRec:'இன்னும் பதிவுகள் இல்லை',harvestTitle:'அறுவடை நிலை',harvestSub:'எந்த பயிர் தயார் என பாருங்கள்',acres:'ஏக்கர்',listen:'கேளுங்கள்',saved:'சேமிக்கப்பட்டது ✓',
    c_rice:'நெல்',c_wheat:'கோதுமை',c_tomato:'தக்காளி',c_cotton:'பருத்தி'},
  pa:{label:'ਪੰਜਾਬੀ',code:'pa-IN',
    tag:'ਸਮਾਰਟ ਖੇਤੀ. ਸੌਖੀ ਜ਼ਿੰਦਗੀ।',heroTitle:'ਚੰਗਾ ਉਗਾਓ. ਚੰਗੀ ਵਾਢੀ ਕਰੋ।',heroSub:'ਆਪਣੇ ਖੇਤ, ਫ਼ਸਲ, ਪਾਣੀ, ਖਾਦ ਤੇ ਵਾਢੀ — ਸਭ ਇੱਕੋ ਥਾਂ।',
    f1:'ਆਪਣੇ ਖੇਤ ਜਾਣੋ',f2:'ਪਾਣੀ ਤੇ ਸੰਭਾਲ',f3:'ਵਾਢੀ ਵੇਖੋ',signin:'ਲੌਗ ਇਨ',signSub:'ਤੁਹਾਡਾ ਖੇਤ ਬੱਸ ਇੱਕ ਕਦਮ ਦੂਰ ਹੈ।',name:'ਤੁਹਾਡਾ ਨਾਂ',pass:'ਪਾਸਵਰਡ',login:'ਮੇਰਾ ਖੇਤ ਖੋਲ੍ਹੋ',demo:'ਡੈਮੋ: ਕੋਈ ਵੀ ਨਾਂ ਤੇ ਪਾਸਵਰਡ ਲਿਖੋ।',
    dash:'ਹੋਮ',fields:'ਮੇਰੇ ਖੇਤ',acts:'ਰੋਜ਼ ਦੀ ਸੰਭਾਲ',harvest:'ਵਾਢੀ',logout:'ਬਾਹਰ ਜਾਓ',welcome:'ਜੀ ਆਇਆਂ ਨੂੰ',snap:'ਅੱਜ ਤੁਹਾਡਾ ਖੇਤ',
    sFields:'ਖੇਤ',sWater:'ਸਿੰਚਾਈ',sPest:'ਕੀੜਿਆਂ ਦੀ ਚੇਤਾਵਨੀ',sHarv:'ਵਾਢੀ ਲਈ ਤਿਆਰ',yourFields:'ਮੇਰੇ ਖੇਤ',addField:'ਖੇਤ ਜੋੜੋ',fname:'ਖੇਤ ਦਾ ਨਾਂ',crop:'ਫ਼ਸਲ',area:'ਰਕਬਾ (ਏਕੜ)',stage:'ਪੜਾਅ',save:'ਸੇਵ ਕਰੋ',
    sow:'ਬਿਜਾਈ',grow:'ਵਧ ਰਹੀ ਹੈ',flower:'ਫੁੱਲ ਆਉਣਾ',ready:'ਵਾਢੀ ਲਈ ਤਿਆਰ',done:'ਵਾਢੀ ਹੋ ਗਈ',
    irrig:'ਸਿੰਚਾਈ',irrigD:'ਪਾਣੀ ਕਦੋਂ ਲਾਇਆ, ਲਿਖੋ',fert:'ਖਾਦ',fertD:'ਕਿਹੜੀ ਖਾਦ ਪਾਈ, ਲਿਖੋ',pest:'ਕੀੜੇ',pestD:'ਕੀੜੇ ਜਾਂ ਬਿਮਾਰੀ ਦਿਸੇ ਤਾਂ ਲਿਖੋ',
    choose:'ਖੇਤ ਚੁਣੋ',note:'ਛੋਟਾ ਨੋਟ',add:'ਰਿਕਾਰਡ ਜੋੜੋ',history:'ਹਾਲੀਆ ਰਿਕਾਰਡ',noRec:'ਹਾਲੇ ਕੋਈ ਰਿਕਾਰਡ ਨਹੀਂ',harvestTitle:'ਵਾਢੀ ਦੀ ਸਥਿਤੀ',harvestSub:'ਵੇਖੋ ਕਿਹੜੀ ਫ਼ਸਲ ਤਿਆਰ ਹੈ',acres:'ਏਕੜ',listen:'ਸੁਣੋ',saved:'ਸੇਵ ਹੋ ਗਿਆ ✓',
    c_rice:'ਝੋਨਾ',c_wheat:'ਕਣਕ',c_tomato:'ਟਮਾਟਰ',c_cotton:'ਕਪਾਹ'},
  ml:{label:'മലയാളം',code:'ml-IN',
    tag:'സ്മാർട്ട് കൃഷി. എളുപ്പ ജീവിതം.',heroTitle:'നന്നായി വളർത്തൂ. നന്നായി വിളവെടുക്കൂ.',heroSub:'നിങ്ങളുടെ വയൽ, വിള, വെള്ളം, വളം, വിളവെടുപ്പ് — എല്ലാം ഒരിടത്ത്.',
    f1:'നിങ്ങളുടെ വയലുകൾ അറിയൂ',f2:'വെള്ളവും പരിപാലനവും',f3:'വിളവെടുപ്പ് കാണൂ',signin:'ലോഗിൻ',signSub:'നിങ്ങളുടെ കൃഷിയിടം ഒരു ചുവട് അകലെ.',name:'നിങ്ങളുടെ പേര്',pass:'പാസ്‌വേഡ്',login:'എന്റെ കൃഷിയിടം തുറക്കൂ',demo:'ഡെമോ: ഏതെങ്കിലും പേരും പാസ്‌വേഡും എഴുതൂ.',
    dash:'ഹോം',fields:'എന്റെ വയലുകൾ',acts:'ദിവസേനയുള്ള പരിപാലനം',harvest:'വിളവെടുപ്പ്',logout:'പുറത്തുകടക്കുക',welcome:'സ്വാഗതം',snap:'ഇന്ന് നിങ്ങളുടെ കൃഷിയിടം',
    sFields:'വയലുകൾ',sWater:'നനയ്ക്കൽ',sPest:'കീട മുന്നറിയിപ്പ്',sHarv:'വിളവെടുപ്പിന് തയ്യാർ',yourFields:'എന്റെ വയലുകൾ',addField:'വയൽ ചേർക്കുക',fname:'വയലിന്റെ പേര്',crop:'വിള',area:'വിസ്തീർണ്ണം (ഏക്കർ)',stage:'ഘട്ടം',save:'സേവ് ചെയ്യുക',
    sow:'വിതയ്ക്കൽ',grow:'വളരുന്നു',flower:'പൂവിടൽ',ready:'വിളവെടുപ്പിന് തയ്യാർ',done:'വിളവെടുത്തു',
    irrig:'നനയ്ക്കൽ',irrigD:'എപ്പോൾ വെള്ളം നൽകി എന്ന് എഴുതൂ',fert:'വളം',fertD:'ഏത് വളം ഇട്ടു എന്ന് എഴുതൂ',pest:'കീടങ്ങൾ',pestD:'കീടമോ രോഗമോ കണ്ടാൽ എഴുതൂ',
    choose:'വയൽ തിരഞ്ഞെടുക്കൂ',note:'ചെറിയ കുറിപ്പ്',add:'രേഖ ചേർക്കുക',history:'സമീപകാല രേഖകൾ',noRec:'ഇതുവരെ രേഖകളില്ല',harvestTitle:'വിളവെടുപ്പ് നില',harvestSub:'ഏത് വിള തയ്യാർ എന്ന് നോക്കൂ',acres:'ഏക്കർ',listen:'കേൾക്കൂ',saved:'സേവ് ചെയ്തു ✓',
    c_rice:'നെല്ല്',c_wheat:'ഗോതമ്പ്',c_tomato:'തക്കാളി',c_cotton:'പരുത്തി'}
};

const CROPS = {rice:'🌾',wheat:'🌿',tomato:'🍅',cotton:'☁️'};
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
let fields = store.get('hv_fields',[
  {id:1,name:'Green Valley',crop:'rice',area:2.5,stage:1},
  {id:2,name:'Sunrise Farm',crop:'tomato',area:1.2,stage:2},
  {id:3,name:'Harvest Hope',crop:'wheat',area:3,stage:3}
]);
let records = store.get('hv_records',[]);
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
    <div class="head ${stageClass(f.stage)}"><div class="em">${CROPS[f.crop]||'🌱'}</div>
      <div><h4>${esc(f.name)}</h4><small>${t('c_'+f.crop)} · ${f.area} ${t('acres')}</small></div></div>
    <div class="body"><span class="badge ${stageClass(f.stage)}">${STAGE_ICON[f.stage]} ${t(STAGES[f.stage])}</span>
      <div class="bar"><i style="width:${pct}%"></i></div><div class="steps">${steps}</div>${sel}</div></div>`;
}
function renderAll(){
  const water = records.filter(r=>r.type==='irrig').length;
  const pests = records.filter(r=>r.type==='pest').length;
  const ready = fields.filter(f=>f.stage===3).length;
  $('#stats').innerHTML = [
    ['s1','🗺️',fields.length,'sFields'],['s2','💧',water,'sWater'],['s3','🐛',pests,'sPest'],['s4','🧺',ready,'sHarv']
  ].map(([c,ic,n,k])=>`<div class="stat ${c}"><div class="ic">${ic}</div><b>${n}</b><span>${t(k)}</span></div>`).join('');
  $('#homeFields').innerHTML = fields.map(f=>fieldCard(f,false)).join('');
  $('#fieldList').innerHTML = fields.map(f=>fieldCard(f,true)).join('');
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
  store.set('hv_fields',fields); renderAll(); toast(t('saved'));
};
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

/* ============ MODALS ============ */
$('#openAdd').onclick = ()=>$('#mField').classList.remove('hidden');
$$('[data-close]').forEach(b=>b.onclick=()=>b.closest('.modal').classList.add('hidden'));
$$('.modal').forEach(m=>m.onclick=e=>{if(e.target===m)m.classList.add('hidden')});

$('#fieldForm').onsubmit = e=>{
  e.preventDefault();
  fields.push({id:Date.now(),name:$('#fName').value.trim(),crop:$('#fCrop').value,area:+$('#fArea').value,stage:+$('#fStage').value});
  store.set('hv_fields',fields); e.target.reset();
  $('#mField').classList.add('hidden'); fillSelects(); renderAll(); toast(t('saved'));
};
$$('.care').forEach(c=>c.onclick=()=>{
  careType = c.dataset.type; $('#careTitle').textContent = t(careType);
  fillSelects(); $('#mCare').classList.remove('hidden');
});
$('#careForm').onsubmit = e=>{
  e.preventDefault();
  records.push({type:careType,field:+$('#cField').value,note:$('#cNote').value.trim(),date:new Date().toLocaleDateString(LANGS[lang].code)});
  store.set('hv_records',records); e.target.reset();
  $('#mCare').classList.add('hidden'); renderAll(); toast(t('saved'));
};

/* ============ TOAST ============ */
function toast(m){
  const el = $('#toast'); el.textContent = m; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1800);
}

/* ============ START ============ */
applyLang();
if(user) showApp();
