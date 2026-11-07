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
    bannerTitle:'Every little step helps your farm grow.',bannerSub:'Keep your fields happy and your farm work organised.',bannerBtn:'Explore my fields',galTitle:'Crops you can track',howTitle:'How it works',how1:'Add your field',how2:'Write daily care',how3:'Watch it grow & harvest',whyTitle:'Why farmers love Harvestly',why1:'3 local languages',why2:'Voice help',why3:'Big easy pictures',why4:'Works on any phone',tipsTitle:'Today\'s farm tips',tip1:'Water early in the morning to save water.',tip2:'Check under the leaves for tiny insects.',tip3:'Add fertilizer only when the soil is moist.',footTag:'Growing a greener tomorrow, together.',
    c_maize:'Maize',c_sugarcane:'Sugarcane',c_chilli:'Chilli',c_banana:'Banana',all:'All',fieldsSub:'Every field and every crop, in one place.',careSub:'Water, fertilizer and pests — write it down in seconds.',score:'Farm care score',scoreSub:'Fields with water and fertilizer records',
    t1:'Crops',t2:'Languages',t3:'Voice help',openField:'Open',backTo:'Back to fields',aboutCrop:'About this crop',season:'Season',dur:'Time to harvest',waterN:'Water need',areaL:'Area',kharif:'Kharif (monsoon)',rabi:'Rabi (winter)',allSeason:'All seasons',days:'days',months:'months',wHigh:'High',wMed:'Medium',wLow:'Low',approx:'Approximate — varies by variety and place. Ask your agriculture officer.',stageTitle:'Crop stage',tapStage:'Tap a step to change the stage',stip0:'Keep the soil moist so the seeds sprout well.',stip1:'Check water and weeds every few days.',stip2:'Keep water steady now — do not let the plant get dry.',stip3:'Harvest on a dry day, early in the morning.',stip4:'Store the crop in a dry, airy place.',careTitle:'Care records for this field',noneYet:'Nothing written yet',
    c_rice:'Rice',c_wheat:'Wheat',c_tomato:'Tomato',c_cotton:'Cotton'},
  hi:{label:'हिन्दी',code:'hi-IN',
    tag:'स्मार्ट खेती. आसान जीवन।',heroTitle:'बेहतर उगाएं. बेहतर काटें।',heroSub:'अपने खेत, फसल, पानी, खाद और कटाई — सब एक जगह।',
    f1:'अपने खेत जानें',f2:'पानी और देखभाल',f3:'कटाई देखें',signin:'लॉग इन',signSub:'आपका खेत बस एक कदम दूर है।',name:'आपका नाम',pass:'पासवर्ड',login:'मेरा खेत खोलें',demo:'डेमो: कोई भी नाम और पासवर्ड लिखें।',
    dash:'होम',fields:'मेरे खेत',acts:'रोज़ की देखभाल',harvest:'कटाई',logout:'बाहर निकलें',welcome:'स्वागत है',snap:'आज आपका खेत',
    sFields:'खेत',sWater:'सिंचाई',sPest:'कीट चेतावनी',sHarv:'कटाई के लिए तैयार',yourFields:'मेरे खेत',addField:'खेत जोड़ें',fname:'खेत का नाम',crop:'फसल',area:'क्षेत्र (एकड़)',stage:'अवस्था',save:'सहेजें',
    sow:'बुवाई',grow:'बढ़ रही है',flower:'फूल आना',ready:'कटाई के लिए तैयार',done:'कट चुकी',
    irrig:'सिंचाई',irrigD:'पानी कब दिया, लिखें',fert:'खाद',fertD:'कौन सी खाद डाली, लिखें',pest:'कीट',pestD:'कीड़े या बीमारी दिखे तो लिखें',
    choose:'खेत चुनें',note:'छोटा नोट',add:'रिकॉर्ड जोड़ें',history:'हाल के रिकॉर्ड',noRec:'अभी कोई रिकॉर्ड नहीं',harvestTitle:'कटाई की स्थिति',harvestSub:'देखें कौन सी फसल तैयार है',acres:'एकड़',listen:'सुनें',saved:'सहेजा गया ✓',
    bannerTitle:'हर छोटा कदम आपके खेत को बढ़ाता है।',bannerSub:'अपने खेत खुशहाल रखें और खेती का काम व्यवस्थित रखें।',bannerBtn:'मेरे खेत देखें',galTitle:'फसलें जिन्हें आप ट्रैक कर सकते हैं',howTitle:'यह कैसे काम करता है',how1:'अपना खेत जोड़ें',how2:'रोज़ की देखभाल लिखें',how3:'बढ़ते देखें और कटाई करें',whyTitle:'किसान हार्वेस्टली को क्यों पसंद करते हैं',why1:'3 स्थानीय भाषाएँ',why2:'आवाज़ से मदद',why3:'बड़ी आसान तस्वीरें',why4:'हर फोन पर चलता है',tipsTitle:'आज के खेती सुझाव',tip1:'पानी बचाने के लिए सुबह जल्दी सिंचाई करें।',tip2:'पत्तियों के नीचे छोटे कीड़े जांचें।',tip3:'मिट्टी में नमी हो तभी खाद डालें।',footTag:'मिलकर एक हरा-भरा कल उगा रहे हैं।',
    c_maize:'मक्का',c_sugarcane:'गन्ना',c_chilli:'मिर्च',c_banana:'केला',all:'सभी',fieldsSub:'हर खेत और हर फसल, एक ही जगह।',careSub:'पानी, खाद और कीट — कुछ ही सेकंड में लिखें।',score:'खेत देखभाल स्कोर',scoreSub:'जिन खेतों में पानी और खाद का रिकॉर्ड है',
    t1:'फसलें',t2:'भाषाएँ',t3:'आवाज़ से मदद',openField:'खोलें',backTo:'खेतों पर वापस',aboutCrop:'इस फसल के बारे में',season:'मौसम',dur:'कटाई तक का समय',waterN:'पानी की ज़रूरत',areaL:'क्षेत्र',kharif:'खरीफ (बरसात)',rabi:'रबी (सर्दी)',allSeason:'सभी मौसम',days:'दिन',months:'महीने',wHigh:'ज़्यादा',wMed:'मध्यम',wLow:'कम',approx:'अनुमानित — किस्म और जगह से बदलता है। कृषि अधिकारी से पूछें।',stageTitle:'फसल की अवस्था',tapStage:'अवस्था बदलने के लिए किसी कदम पर दबाएँ',stip0:'मिट्टी में नमी रखें ताकि बीज अच्छे से उगें।',stip1:'हर कुछ दिन पानी और खरपतवार देखें।',stip2:'अब पानी लगातार दें — पौधे को सूखने न दें।',stip3:'सूखे दिन में, सुबह जल्दी कटाई करें।',stip4:'फसल को सूखी, हवादार जगह रखें।',careTitle:'इस खेत के देखभाल रिकॉर्ड',noneYet:'अभी कुछ नहीं लिखा',
    c_rice:'चावल',c_wheat:'गेहूं',c_tomato:'टमाटर',c_cotton:'कपास'},
  ta:{label:'தமிழ்',code:'ta-IN',
    tag:'ஸ்மார்ட் விவசாயம். எளிய வாழ்க்கை.',heroTitle:'நன்றாக விளைவியுங்கள். நன்றாக அறுவடை செய்யுங்கள்.',heroSub:'உங்கள் வயல், பயிர், நீர், உரம், அறுவடை — எல்லாம் ஒரே இடத்தில்.',
    f1:'உங்கள் வயல்களை அறியுங்கள்',f2:'நீர் & பராமரிப்பு',f3:'அறுவடை பாருங்கள்',signin:'உள்நுழைக',signSub:'உங்கள் பண்ணை ஒரு அடி தூரத்தில்.',name:'உங்கள் பெயர்',pass:'கடவுச்சொல்',login:'என் பண்ணையைத் திற',demo:'டெமோ: எந்த பெயர், கடவுச்சொல்லும் எழுதலாம்.',
    dash:'முகப்பு',fields:'என் வயல்கள்',acts:'தினசரி பராமரிப்பு',harvest:'அறுவடை',logout:'வெளியேறு',welcome:'வரவேற்கிறோம்',snap:'இன்று உங்கள் பண்ணை',
    sFields:'வயல்கள்',sWater:'நீர்ப்பாசனம்',sPest:'பூச்சி எச்சரிக்கை',sHarv:'அறுவடைக்கு தயார்',yourFields:'என் வயல்கள்',addField:'வயல் சேர்',fname:'வயல் பெயர்',crop:'பயிர்',area:'பரப்பு (ஏக்கர்)',stage:'நிலை',save:'சேமி',
    sow:'விதைப்பு',grow:'வளர்கிறது',flower:'பூக்கும் நிலை',ready:'அறுவடைக்கு தயார்',done:'அறுவடை முடிந்தது',
    irrig:'நீர்ப்பாசனம்',irrigD:'எப்போது நீர் விட்டீர்கள் என எழுதுங்கள்',fert:'உரம்',fertD:'எந்த உரம் போட்டீர்கள் என எழுதுங்கள்',pest:'பூச்சிகள்',pestD:'பூச்சி அல்லது நோய் தெரிந்தால் எழுதுங்கள்',
    choose:'வயலைத் தேர்ந்தெடுங்கள்',note:'சிறு குறிப்பு',add:'பதிவு சேர்',history:'சமீபத்திய பதிவுகள்',noRec:'இன்னும் பதிவுகள் இல்லை',harvestTitle:'அறுவடை நிலை',harvestSub:'எந்த பயிர் தயார் என பாருங்கள்',acres:'ஏக்கர்',listen:'கேளுங்கள்',saved:'சேமிக்கப்பட்டது ✓',
    bannerTitle:'ஒவ்வொரு சிறு அடியும் உங்கள் பண்ணையை வளர்க்கும்.',bannerSub:'உங்கள் வயல்களை மகிழ்ச்சியாகவும் வேலைகளை ஒழுங்காகவும் வைத்திருங்கள்.',bannerBtn:'என் வயல்களைப் பாருங்கள்',galTitle:'நீங்கள் கண்காணிக்கக்கூடிய பயிர்கள்',howTitle:'இது எப்படி வேலை செய்கிறது',how1:'உங்கள் வயலைச் சேர்க்கவும்',how2:'தினசரி பராமரிப்பை எழுதுங்கள்',how3:'வளர்வதைப் பார்த்து அறுவடை செய்யுங்கள்',whyTitle:'விவசாயிகள் ஹார்வெஸ்ட்லியை ஏன் விரும்புகிறார்கள்',why1:'3 உள்ளூர் மொழிகள்',why2:'குரல் உதவி',why3:'பெரிய எளிய படங்கள்',why4:'எந்த போனிலும் வேலை செய்யும்',tipsTitle:'இன்றைய விவசாய குறிப்புகள்',tip1:'தண்ணீரை சேமிக்க அதிகாலையில் நீர் பாய்ச்சுங்கள்.',tip2:'இலைகளின் அடியில் சிறு பூச்சிகள் உள்ளதா என பாருங்கள்.',tip3:'மண் ஈரமாக இருக்கும்போது மட்டுமே உரம் இடுங்கள்.',footTag:'ஒன்றாக பசுமையான நாளையை வளர்க்கிறோம்.',
    c_maize:'மக்காச்சோளம்',c_sugarcane:'கரும்பு',c_chilli:'மிளகாய்',c_banana:'வாழை',all:'அனைத்தும்',fieldsSub:'ஒவ்வொரு வயலும் ஒவ்வொரு பயிரும் — ஒரே இடத்தில்.',careSub:'நீர், உரம், பூச்சிகள் — சில நொடிகளில் எழுதுங்கள்.',score:'பண்ணை பராமரிப்பு மதிப்பெண்',scoreSub:'நீர், உரம் பதிவுகள் உள்ள வயல்கள்',
    t1:'பயிர்கள்',t2:'மொழிகள்',t3:'குரல் உதவி',openField:'திற',backTo:'வயல்களுக்குத் திரும்பு',aboutCrop:'இந்தப் பயிர் பற்றி',season:'பருவம்',dur:'அறுவடை வரை',waterN:'நீர்த் தேவை',areaL:'பரப்பு',kharif:'காரீப் (பருவமழை)',rabi:'ரபி (குளிர்காலம்)',allSeason:'அனைத்துப் பருவம்',days:'நாட்கள்',months:'மாதங்கள்',wHigh:'அதிகம்',wMed:'நடுத்தரம்',wLow:'குறைவு',approx:'தோராயமானது — இரகம் மற்றும் இடத்தைப் பொறுத்து மாறும். வேளாண் அலுவலரிடம் கேளுங்கள்.',stageTitle:'பயிர் நிலை',tapStage:'நிலையை மாற்ற ஒரு படியை அழுத்துங்கள்',stip0:'விதைகள் நன்றாக முளைக்க மண்ணை ஈரமாக வைத்திருங்கள்.',stip1:'சில நாட்களுக்கு ஒருமுறை நீரையும் களையையும் பாருங்கள்.',stip2:'இப்போது நீரை சீராக வையுங்கள் — செடி காயாமல் பார்த்துக் கொள்ளுங்கள்.',stip3:'காய்ந்த நாளில், அதிகாலையில் அறுவடை செய்யுங்கள்.',stip4:'பயிரை உலர்ந்த, காற்றோட்டமான இடத்தில் சேமியுங்கள்.',careTitle:'இந்த வயலின் பராமரிப்புப் பதிவுகள்',noneYet:'இன்னும் எதுவும் எழுதவில்லை',
    c_rice:'நெல்',c_wheat:'கோதுமை',c_tomato:'தக்காளி',c_cotton:'பருத்தி'},
};


/* ============ CONSTANTS ============ */
const px = (id, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const CROPS = {rice:'🌾',wheat:'🌿',tomato:'🍅',cotton:'☁️',maize:'🌽',sugarcane:'🎋',chilli:'🌶️',banana:'🍌'};
/* Approximate crop facts (shown on the field detail page) */
const CROPINFO = {
  rice:     {s:'kharif',    d:'110–150', u:'days',   w:'wHigh'},
  wheat:    {s:'rabi',      d:'110–150', u:'days',   w:'wMed'},
  tomato:   {s:'allSeason', d:'90–120',  u:'days',   w:'wMed'},
  cotton:   {s:'kharif',    d:'150–180', u:'days',   w:'wMed'},
  maize:    {s:'kharif',    d:'90–110',  u:'days',   w:'wMed'},
  sugarcane:{s:'allSeason', d:'10–12',   u:'months', w:'wHigh'},
  chilli:   {s:'kharif',    d:'150–180', u:'days',   w:'wMed'},
  banana:   {s:'allSeason', d:'10–12',   u:'months', w:'wHigh'}
};
const STAGES = ['sow','grow','flower','ready','done'];
const STAGE_ICON = ['🌱','🌿','🌸','🧺','✅'];
const LOGIN_BG = [px(171442,1600), px(11733084,1600), px(14242144,1600), px(31551945,1600)];

/* ============ STATE ============ */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const store = {
  get(k,d){try{return JSON.parse(localStorage.getItem(k)) ?? d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
let lang = store.get('hv_lang','en');
if(!LANGS[lang]) lang = 'en';              // old saved languages (Telugu etc.) fall back to English
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
let currentId = null;
let filter = 'all';
const t = k => (LANGS[lang] && LANGS[lang][k]) || LANGS.en[k] || k;
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

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
  const a=$('#loginBg'), b=$('#loginBg2');
  const on = bgI%2===0 ? a : b, off = on===a ? b : a;
  on.style.backgroundImage = `url(${LOGIN_BG[bgI%LOGIN_BG.length]})`;
  on.classList.add('on'); off.classList.remove('on');
  bgI++;
}
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
  renderAll(); go('home');
}

/* ============ NAVIGATION ============ */
function go(v){
  $$('.view').forEach(x=>x.classList.add('hidden'));
  $('#v-'+v).classList.remove('hidden');
  const nav = v==='detail' ? 'fields' : v;
  $$('.side nav a').forEach(a=>a.classList.toggle('active',a.dataset.go===nav));
  $('#side').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(watchReveal,50);
  if(v==='home') countUp();
}
$$('.side nav a').forEach(a=>a.onclick=()=>go(a.dataset.go));
$('#burger').onclick = ()=>$('#side').classList.toggle('open');
$('#bannerBtn').onclick = ()=>go('fields');
$('#viewAll').onclick = ()=>go('fields');

/* ============ FIELD CARDS ============ */
function stageClass(i){return ['g0','g1c','g2c','g3c','g4c'][i]}
function chipsFor(f){
  const c=x=>records.filter(r=>r.field===f.id&&r.type===x).length;
  const w=c('irrig'),fe=c('fert'),p=c('pest');
  return `<div class="chips"><span class="chip w ${w?'':'z'}">💧 ${w}</span><span class="chip f ${fe?'':'z'}">🌿 ${fe}</span><span class="chip p ${p?'':'z'}">🐛 ${p}</span></div>`;
}
function fieldCard(f){
  const pct = (f.stage+1)/STAGES.length*100;
  const steps = STAGE_ICON.map((ic,i)=>`<span class="${i<=f.stage?'on':''}">${ic}</span>`).join('');
  return `<article class="field" data-open="${f.id}" tabindex="0" role="button" aria-label="${esc(f.name)}">
    <div class="cover ph-${f.crop}"><span class="cbadge ${stageClass(f.stage)}">${STAGE_ICON[f.stage]} ${t(STAGES[f.stage])}</span></div>
    <div class="body">
      <div class="ftitle"><h4>${esc(f.name)}</h4><small>${t('c_'+f.crop)} · ${f.area} ${t('acres')}</small></div>
      <div class="bar"><i style="width:${pct}%"></i></div><div class="steps">${steps}</div>
      ${chipsFor(f)}
      <div class="open">${t('openField')} →</div>
    </div></article>`;
}
document.addEventListener('click',e=>{
  const c=e.target.closest&&e.target.closest('[data-open]');
  if(c) openField(+c.dataset.open);
});
document.addEventListener('keydown',e=>{
  if(e.key==='Enter'){const c=e.target.closest&&e.target.closest('[data-open]'); if(c) openField(+c.dataset.open);}
});

/* ============ FIELD DETAIL PAGE ============ */
function openField(id){ currentId=id; renderDetail(); go('detail'); }
function renderDetail(){
  const f = fields.find(x=>x.id===currentId), box=$('#detail');
  if(!f){ box.innerHTML=''; return; }
  const info = CROPINFO[f.crop] || {s:'allSeason',d:'-',u:'days',w:'wMed'};
  const recs = records.filter(r=>r.field===f.id);
  const of = x=>recs.filter(r=>r.type===x);
  const last = x=>{const a=of(x);return a.length?esc(a[a.length-1].note):t('noneYet')};
  const pct = (f.stage+1)/STAGES.length*100;
  const timeline = STAGES.map((s,i)=>`<button class="tstep ${i<f.stage?'done':''} ${i===f.stage?'now':''}" data-stage="${i}"><i>${STAGE_ICON[i]}</i><span>${t(s)}</span></button>`).join('');
  const icons = {irrig:'💧',fert:'🌿',pest:'🐛'};
  const hist = recs.length ? recs.slice().reverse().map(r=>`<div class="rec"><div class="ri">${icons[r.type]}</div><div><b>${t(r.type)}</b><br><small>${esc(r.note)} · ${r.date}</small></div></div>`).join('') : `<p class="muted">${t('noRec')}</p>`;
  box.innerHTML = `
    <button class="back" id="backBtn">← ${t('backTo')}</button>
    <div class="dhero ph-${f.crop}"><div class="dhero-in">
      <span class="badge ${stageClass(f.stage)}">${STAGE_ICON[f.stage]} ${t(STAGES[f.stage])}</span>
      <h2>${esc(f.name)}</h2><p>${t('c_'+f.crop)} · ${f.area} ${t('acres')}</p>
    </div></div>

    <h3 class="sec">${t('aboutCrop')}</h3>
    <div class="dinfo">
      <div class="itile"><span>📅</span><small>${t('season')}</small><b>${t(info.s)}</b></div>
      <div class="itile i2"><span>⏳</span><small>${t('dur')}</small><b>${info.d} ${t(info.u)}</b></div>
      <div class="itile i3"><span>💧</span><small>${t('waterN')}</small><b>${t(info.w)}</b></div>
      <div class="itile i4"><span>📐</span><small>${t('areaL')}</small><b>${f.area} ${t('acres')}</b></div>
    </div>
    <p class="muted small">${t('approx')}</p>

    <div class="card dstage">
      <h3>${t('stageTitle')}</h3><p class="muted">${t('tapStage')}</p>
      <div class="timeline">${timeline}</div>
      <div class="bar big"><i style="width:${pct}%"></i></div>
      <div class="tipbox">💡 ${t('stip'+f.stage)}</div>
    </div>

    <h3 class="sec">${t('careTitle')}</h3>
    <div class="dcare">
      <div class="dc ph-irrig"><h4>💧 ${t('irrig')} <em>${of('irrig').length}</em></h4><p>${last('irrig')}</p><button class="btn light" data-add="irrig">＋ ${t('add')}</button></div>
      <div class="dc ph-fert"><h4>🌿 ${t('fert')} <em>${of('fert').length}</em></h4><p>${last('fert')}</p><button class="btn light" data-add="fert">＋ ${t('add')}</button></div>
      <div class="dc ph-pest"><h4>🐛 ${t('pest')} <em>${of('pest').length}</em></h4><p>${last('pest')}</p><button class="btn light" data-add="pest">＋ ${t('add')}</button></div>
    </div>
    <div class="card">${hist}</div>`;
  $('#backBtn').onclick = ()=>go('fields');
  box.querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>setStage(f.id,b.dataset.stage));
  box.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>openCare(b.dataset.add,f.id));
}
function setStage(id,v){
  const f = fields.find(x=>x.id===id); f.stage = +v;
  store.set('hv_fields_v2',fields); renderAll(); toast(t('saved'));
}

/* ============ LISTS, STATS, SCORE ============ */
function renderFieldList(){
  const bar=$('#filters');
  const opts=['all',...STAGES.map((x,i)=>i)];
  bar.innerHTML=opts.map(o=>{const lab=o==='all'?t('all'):STAGE_ICON[o]+' '+t(STAGES[o]);return `<button class="fpill ${String(o)===String(filter)?'on':''}" data-f="${o}">${lab}</button>`}).join('');
  bar.querySelectorAll('button').forEach(b=>b.onclick=()=>{filter=b.dataset.f;renderFieldList()});
  const list=fields.filter(f=>filter==='all'||f.stage===+filter);
  $('#fieldList').innerHTML=list.map(fieldCard).join('')||`<p class="muted">${t('noRec')}</p>`;
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
  renderScore();
  $('#homeFields').innerHTML = fields.slice(0,3).map(fieldCard).join('');
  renderFieldList();
  $('#harvestList').innerHTML = fields.slice().sort((a,b)=>b.stage-a.stage).map(fieldCard).join('');
  const icons = {irrig:'💧',fert:'🌿',pest:'🐛'};
  $('#history').innerHTML = records.length ? records.slice().reverse().slice(0,15).map(r=>{
    const f = fields.find(x=>x.id===r.field);
    return `<div class="rec"><div class="ri">${icons[r.type]}</div><div><b>${t(r.type)}</b> — ${f?esc(f.name):''}<br><small>${esc(r.note)} · ${r.date}</small></div></div>`;
  }).join('') : `<p class="muted">${t('noRec')}</p>`;
  if(currentId!==null) renderDetail();
}
function fillSelects(){
  $('#fCrop').innerHTML = Object.keys(CROPS).map(c=>`<option value="${c}">${CROPS[c]} ${t('c_'+c)}</option>`).join('');
  $('#fStage').innerHTML = STAGES.map((s,i)=>`<option value="${i}">${STAGE_ICON[i]} ${t(s)}</option>`).join('');
  $('#cField').innerHTML = fields.map(f=>`<option value="${f.id}">${esc(f.name)}</option>`).join('');
}

/* ============ MODALS ============ */
function openAddField(crop){
  if(crop) $('#fCrop').value = crop;
  $('#mField').classList.remove('hidden');
  setTimeout(()=>$('#fName').focus(),50);
}
function openCare(type,fieldId){
  careType = type; $('#careTitle').textContent = t(type);
  fillSelects(); if(fieldId) $('#cField').value = fieldId;
  $('#mCare').classList.remove('hidden');
}
$('#openAdd').onclick = ()=>openAddField();
$$('[data-close]').forEach(b=>b.onclick=()=>b.closest('.modal').classList.add('hidden'));
$$('.modal').forEach(m=>m.onclick=e=>{if(e.target===m)m.classList.add('hidden')});
$$('.gcard[data-crop]').forEach(g=>g.onclick=()=>{ if(user) openAddField(g.dataset.crop); });
$$('.care').forEach(c=>c.onclick=()=>openCare(c.dataset.type));

$('#fieldForm').onsubmit = e=>{
  e.preventDefault();
  fields.push({id:Date.now(),name:$('#fName').value.trim(),crop:$('#fCrop').value,area:+$('#fArea').value,stage:+$('#fStage').value});
  store.set('hv_fields_v2',fields); e.target.reset();
  $('#mField').classList.add('hidden'); fillSelects(); renderAll(); toast(t('saved'));
};
$('#careForm').onsubmit = e=>{
  e.preventDefault();
  records.push({type:careType,field:+$('#cField').value,note:$('#cNote').value.trim(),date:new Date().toLocaleDateString(LANGS[lang].code)});
  store.set('hv_records_v2',records); e.target.reset();
  $('#mCare').classList.add('hidden'); renderAll(); toast(t('saved'));
};

/* ============ TOAST + ANIMATION HELPERS ============ */
function toast(m){
  const el = $('#toast'); el.textContent = m; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1800);
}
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

/* ============ START ============ */
applyLang();
rotateBg(); setInterval(()=>{ if(!user) rotateBg(); },7000);
if(user) showApp();
