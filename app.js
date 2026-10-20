'use strict';

const STORE_KEY = 'harvestly-vanilla-farm-management-v1';
const COLORS = ['#2e7549', '#87ae69', '#d4ab59', '#779ca8', '#b58a70', '#9da878'];
const stagesByCrop = {
  Rice: ['Land preparation', 'Nursery / Sowing', 'Transplanting', 'Tillering', 'Panicle initiation', 'Flowering', 'Grain filling', 'Maturity', 'Harvested'],
  Wheat: ['Land preparation', 'Sowing', 'Germination', 'Tillering', 'Jointing', 'Booting', 'Heading / Flowering', 'Grain filling', 'Maturity', 'Harvested'],
  Maize: ['Land preparation', 'Sowing', 'Germination', 'Vegetative growth', 'Tasseling / Silking', 'Grain filling', 'Maturity', 'Harvested'],
  Cotton: ['Land preparation', 'Sowing', 'Seedling', 'Vegetative growth', 'Squaring', 'Flowering', 'Boll development', 'Boll opening / Picking', 'Harvested'],
  Groundnut: ['Land preparation', 'Sowing', 'Germination', 'Vegetative growth', 'Flowering', 'Pegging', 'Pod development', 'Maturity', 'Harvested'],
  Sugarcane: ['Land preparation', 'Planting', 'Germination', 'Tillering', 'Grand growth', 'Maturity', 'Harvested'],
  Tomato: ['Land preparation', 'Nursery', 'Transplanting', 'Vegetative growth', 'Flowering', 'Fruit development', 'Ripening', 'Harvested']
};
const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '▦' },
  { id: 'fields', label: 'Farms & fields', icon: '⌖' },
  { id: 'crops', label: 'Crop management', icon: '♧' },
  { id: 'activities', label: 'Cultivation activities', icon: '▤' },
  { id: 'harvest', label: 'Harvest management', icon: '♧' },
  { id: 'reports', label: 'Reports & insights', icon: '▥' },
  { id: 'farmers', label: 'Farmer management', icon: '♙', adminOnly: true }
];
const pageMeta = {
  dashboard: ['Farm overview', 'Your farm activities, crop progress, and items that may need attention.'],
  fields: ['Farms & fields', 'Organize farm profiles, field details, soil types, and water sources.'],
  crops: ['Crop management', 'Track crop cycles with cultivation stages suited to each crop.'],
  activities: ['Cultivation activities', 'Record irrigation, fertilizer applications, and pest observations.'],
  harvest: ['Harvest management', 'Record completed and planned harvests across your fields.'],
  reports: ['Reports & insights', 'Explore summaries generated from your current demonstration records.'],
  farmers: ['Farmer management', 'Review sample farmer profiles and their farm records.']
};

const localDate = (offset = 0) => {
  const date = new Date(); date.setDate(date.getDate() + offset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};
const makeId = (prefix) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
const initialData = () => ({
  farmers: [
    { id: 'farmer-1', name: 'Ananya Devi', village: 'Ludhiana, Punjab', phone: 'Demo contact', status: 'Active' },
    { id: 'farmer-2', name: 'Ramesh Patel', village: 'Anand, Gujarat', phone: 'Demo contact', status: 'Active' },
    { id: 'farmer-3', name: 'Kavitha Reddy', village: 'Guntur, Andhra Pradesh', phone: 'Demo contact', status: 'Active' },
    { id: 'farmer-4', name: 'Suresh Kumar', village: 'Thanjavur, Tamil Nadu', phone: 'Demo contact', status: 'Active' }
  ],
  farms: [
    { id: 'farm-1', ownerId: 'farmer-1', name: 'Green Valley Farm', location: 'Ludhiana, Punjab', totalArea: 12.5 },
    { id: 'farm-2', ownerId: 'farmer-2', name: 'Saraswati Fields', location: 'Anand, Gujarat', totalArea: 9.2 },
    { id: 'farm-3', ownerId: 'farmer-3', name: 'Krishna Harvest Farm', location: 'Guntur, Andhra Pradesh', totalArea: 16 },
    { id: 'farm-4', ownerId: 'farmer-4', name: 'Cauvery Agro Farm', location: 'Thanjavur, Tamil Nadu', totalArea: 11.4 }
  ],
  fields: [
    { id: 'field-1', farmId: 'farm-1', name: 'North Paddy Field', area: 4.5, soilType: 'Alluvial', waterSource: 'Canal', status: 'Active' },
    { id: 'field-2', farmId: 'farm-1', name: 'East Wheat Plot', area: 3.2, soilType: 'Loamy', waterSource: 'Borewell', status: 'Active' },
    { id: 'field-3', farmId: 'farm-2', name: 'Canal-side Maize', area: 5.1, soilType: 'Black soil', waterSource: 'Canal', status: 'Active' },
    { id: 'field-4', farmId: 'farm-3', name: 'Lower Delta Rice', area: 6.3, soilType: 'Clay loam', waterSource: 'Canal', status: 'Active' },
    { id: 'field-5', farmId: 'farm-3', name: 'Cotton Block A', area: 4.6, soilType: 'Red loam', waterSource: 'Drip irrigation', status: 'Active' },
    { id: 'field-6', farmId: 'farm-4', name: 'Cauvery South Plot', area: 3.8, soilType: 'Delta alluvial', waterSource: 'Canal', status: 'Active' }
  ],
  crops: [
    { id: 'crop-1', fieldId: 'field-1', crop: 'Rice', variety: 'Pusa Basmati 1509', plantingDate: localDate(-63), stage: 'Flowering', expectedHarvest: localDate(27), status: 'Active' },
    { id: 'crop-2', fieldId: 'field-2', crop: 'Wheat', variety: 'HD 3086', plantingDate: localDate(-22), stage: 'Tillering', expectedHarvest: localDate(92), status: 'Active' },
    { id: 'crop-3', fieldId: 'field-3', crop: 'Maize', variety: 'HQPM-1', plantingDate: localDate(-44), stage: 'Vegetative growth', expectedHarvest: localDate(39), status: 'Active' },
    { id: 'crop-4', fieldId: 'field-4', crop: 'Rice', variety: 'Swarna', plantingDate: localDate(-81), stage: 'Grain filling', expectedHarvest: localDate(13), status: 'Active' },
    { id: 'crop-5', fieldId: 'field-5', crop: 'Cotton', variety: 'Suraj', plantingDate: localDate(-103), stage: 'Boll development', expectedHarvest: localDate(36), status: 'Active' },
    { id: 'crop-6', fieldId: 'field-6', crop: 'Groundnut', variety: 'TMV 7', plantingDate: localDate(-128), stage: 'Harvested', expectedHarvest: localDate(-4), status: 'Harvested' }
  ],
  activities: [
    { id: 'activity-1', type: 'irrigation', fieldId: 'field-1', cropId: 'crop-1', date: localDate(1), status: 'Planned', waterLitres: 8200, method: 'Canal flow', notes: 'Check bunds before releasing water.' },
    { id: 'activity-2', type: 'irrigation', fieldId: 'field-2', cropId: 'crop-2', date: localDate(-2), status: 'Planned', waterLitres: 5100, method: 'Sprinkler', notes: 'Review soil moisture before irrigation.' },
    { id: 'activity-3', type: 'fertilizer', fieldId: 'field-3', cropId: 'crop-3', date: localDate(3), status: 'Planned', fertilizerName: 'NPK 19:19:19', quantity: 18, unit: 'kg', method: 'Soil application', notes: 'Demo schedule; verify local guidance.' },
    { id: 'activity-4', type: 'fertilizer', fieldId: 'field-4', cropId: 'crop-4', date: localDate(-5), status: 'Completed', fertilizerName: 'Urea', quantity: 24, unit: 'kg', method: 'Top dressing', notes: 'Illustrative record.' },
    { id: 'activity-5', type: 'pest', fieldId: 'field-5', cropId: 'crop-5', date: localDate(-1), status: 'Open', pestName: 'Whitefly observation', severity: 'High', description: 'Observed on a small patch; needs inspection.', treatment: 'Pending inspection', notes: 'Record symptoms before deciding treatment.' },
    { id: 'activity-6', type: 'irrigation', fieldId: 'field-3', cropId: 'crop-3', date: localDate(-7), status: 'Completed', waterLitres: 6400, method: 'Furrow', notes: 'Example completed activity.' },
    { id: 'activity-7', type: 'pest', fieldId: 'field-1', cropId: 'crop-1', date: localDate(-3), status: 'Open', pestName: 'Leaf folder check', severity: 'Medium', description: 'A few folded leaves found near the edge.', treatment: 'Monitoring', notes: 'Re-check during next field visit.' },
    { id: 'activity-8', type: 'fertilizer', fieldId: 'field-5', cropId: 'crop-5', date: localDate(-9), status: 'Completed', fertilizerName: 'Compost', quantity: 35, unit: 'kg', method: 'Soil application', notes: 'Illustrative record.' },
    { id: 'activity-9', type: 'irrigation', fieldId: 'field-6', cropId: 'crop-6', date: localDate(-18), status: 'Completed', waterLitres: 4300, method: 'Drip', notes: 'Last irrigation before harvest.' }
  ],
  harvests: [
    { id: 'harvest-1', fieldId: 'field-6', cropId: 'crop-6', date: localDate(-3), quantity: 18.5, unit: 'quintal', status: 'Completed', quality: 'Good', notes: 'Illustrative groundnut harvest record.' },
    { id: 'harvest-2', fieldId: 'field-2', cropId: 'crop-2', date: localDate(-1), quantity: 0, unit: 'quintal', status: 'Planned', quality: 'Not assessed', notes: 'Expected harvest; quantity not yet recorded.' },
    { id: 'harvest-3', fieldId: 'field-3', cropId: 'crop-3', date: localDate(38), quantity: 0, unit: 'quintal', status: 'Planned', quality: 'Not assessed', notes: 'Estimated harvest window.' }
  ]
});

function loadData() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.farmers && parsed.farms && parsed.fields && parsed.crops && parsed.activities && parsed.harvests) return parsed;
    }
  } catch (error) { console.warn('Saved demo data could not be loaded.', error); }
  return initialData();
}
let data = loadData();
let currentPage = 'dashboard';
let currentRole = 'farmer';
let selectedFarmerId = 'farmer-1';
let activeSearch = '';
let activeFilter = 'all';
let editing = null;
let toastTimer;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value = '') => String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const num = (value) => Number(value || 0);
const sum = (values) => values.reduce((total, item) => total + num(item), 0);
const titleCase = (value = '') => value.charAt(0).toUpperCase() + value.slice(1);
const prettyDate = (value) => {
  if (!value) return '—';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return esc(value);
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
};
const dateDaysFromToday = (value) => {
  if (!value) return 0;
  return Math.round((new Date(`${value}T00:00:00`) - new Date(`${localDate()}T00:00:00`)) / 86400000);
};
const initials = (name = '') => name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0].toUpperCase()).join('') || 'FM';
const getById = (collection, id) => data[collection].find(item => item.id === id);
const getFarmer = (id) => getById('farmers', id);
const getFarm = (id) => getById('farms', id);
const getField = (id) => getById('fields', id);
const getCrop = (id) => getById('crops', id);
const farmerName = (id) => getFarmer(id)?.name || 'Unknown farmer';
const farmName = (id) => getFarm(id)?.name || 'Unknown farm';
const fieldName = (id) => getField(id)?.name || 'Unknown field';
const cropName = (id) => getCrop(id)?.crop || 'Crop not selected';
const fieldOwnerId = (fieldId) => { const f = getField(fieldId); const farm = f && getFarm(f.farmId); return farm?.ownerId || ''; };
const isVisibleToFarmer = (item) => currentRole === 'admin' || fieldOwnerId(item.fieldId) === selectedFarmerId;
const visibleFarmers = () => currentRole === 'admin' ? data.farmers : data.farmers.filter(f => f.id === selectedFarmerId);
const visibleFarms = () => currentRole === 'admin' ? data.farms : data.farms.filter(f => f.ownerId === selectedFarmerId);
const visibleFields = () => { const farmIds = new Set(visibleFarms().map(f => f.id)); return data.fields.filter(f => farmIds.has(f.farmId)); };
const visibleCrops = () => { const fieldIds = new Set(visibleFields().map(f => f.id)); return data.crops.filter(c => fieldIds.has(c.fieldId)); };
const visibleActivities = () => { const fieldIds = new Set(visibleFields().map(f => f.id)); return data.activities.filter(a => fieldIds.has(a.fieldId)); };
const visibleHarvests = () => { const fieldIds = new Set(visibleFields().map(f => f.id)); return data.harvests.filter(h => fieldIds.has(h.fieldId)); };
const activityLabel = (activity) => ({ irrigation: 'Irrigation', fertilizer: 'Fertilizer application', pest: 'Pest observation' }[activity.type] || titleCase(activity.type));
const activityInfo = (activity) => {
  if (activity.type === 'irrigation') return `${num(activity.waterLitres).toLocaleString('en-IN')} L · ${activity.method || 'Method not specified'}`;
  if (activity.type === 'fertilizer') return `${activity.fertilizerName || 'Fertilizer'} · ${num(activity.quantity)} ${activity.unit || 'kg'}`;
  return `${activity.pestName || 'Pest observation'} · ${activity.severity || 'Severity not set'}`;
};
const stageProgress = (crop) => { const stages = stagesByCrop[crop.crop] || stagesByCrop.Rice; const index = stages.indexOf(crop.stage); return index < 0 ? 0 : Math.round(index / Math.max(1, stages.length - 1) * 100); };
function persist() { try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (error) { showToast('Could not save to browser storage. Try exporting your data.'); console.warn(error); } }
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2800); }
function statusBadge(status = 'Active') {
  const norm = String(status).toLowerCase();
  let style = 'neutral';
  if (['completed', 'active', 'harvested', 'resolved'].includes(norm)) style = 'success';
  else if (['planned', 'pending', 'medium', 'in progress'].includes(norm)) style = 'warning';
  else if (['open', 'high', 'overdue', 'inactive'].includes(norm)) style = 'danger';
  else if (['low'].includes(norm)) style = 'info';
  return `<span class="badge badge-${style}">${esc(status)}</span>`;
}
function actionButton(action, id, label, icon, extra = '') {
  return `<button class="icon-button ${extra}" type="button" data-action="${esc(action)}" data-id="${esc(id)}" aria-label="${esc(label)}" title="${esc(label)}">${icon}</button>`;
}
function addButton(label, entity) { return `<button class="btn btn-primary" data-action="add" data-entity="${esc(entity)}"><span class="plus">＋</span>${esc(label)}</button>`; }
function emptyState(title, message, entity = '') {
  return `<div class="empty-state"><div class="empty-symbol">🌱</div><strong>${esc(title)}</strong><p>${esc(message)}</p>${entity ? `<div style="margin-top:15px">${addButton('Add first record', entity)}</div>` : ''}</div>`;
}
function fieldFilterOptions() { return [{ value: 'all', label: 'All fields' }, ...visibleFields().map(f => ({ value: f.id, label: f.name }))]; }
function selectOptions(options, selected, placeholder = '') {
  const list = options.map(option => typeof option === 'string' ? ({ value: option, label: option }) : option);
  return `${placeholder ? `<option value="">${esc(placeholder)}</option>` : ''}${list.map(option => `<option value="${esc(option.value)}" ${String(option.value) === String(selected ?? '') ? 'selected' : ''}>${esc(option.label)}</option>`).join('')}`;
}

function renderNav() {
  $('#sideNav').innerHTML = navItems.filter(item => !item.adminOnly || currentRole === 'admin').map(item => {
    const count = item.id === 'activities' ? visibleActivities().filter(a => a.type === 'pest' && a.status !== 'Resolved' && a.severity === 'High').length : 0;
    return `<button class="nav-item ${currentPage === item.id ? 'active' : ''}" data-page="${item.id}"><span class="nav-icon">${item.icon}</span><span>${item.label}</span>${count ? `<span class="nav-count">${count}</span>` : ''}</button>`;
  }).join('');
}
function renderTopbar() {
  const roleSelect = $('#roleSelect'); roleSelect.value = currentRole;
  $('#farmerControl').hidden = currentRole === 'admin';
  $('#activeFarmer').innerHTML = selectOptions(data.farmers.map(f => ({ value: f.id, label: f.name })), selectedFarmerId);
  $('#avatarInitials').textContent = currentRole === 'admin' ? 'AD' : initials(farmerName(selectedFarmerId));
  $('#breadcrumbCurrent').textContent = pageMeta[currentPage]?.[0] || 'Dashboard';
}
function renderPageHeader() {
  const [title, description] = pageMeta[currentPage] || pageMeta.dashboard;
  let actions = '';
  if (currentPage === 'fields') actions = `${addButton('Add farm', 'farms')}${addButton('Add field', 'fields')}`;
  if (currentPage === 'crops') actions = addButton('Add crop cycle', 'crops');
  if (currentPage === 'activities') actions = addButton('Add activity', 'activities');
  if (currentPage === 'harvest') actions = addButton('Record harvest', 'harvest');
  if (currentPage === 'farmers' && currentRole === 'admin') actions = addButton('Add farmer', 'farmers');
  if (currentPage === 'reports') actions = `<button class="btn btn-secondary" data-action="export-csv">↓ Export report CSV</button><button class="btn btn-primary" data-action="export-json">⇩ Backup data</button>`;
  $('#pageHeader').innerHTML = `<div><h1>${esc(title)}</h1><p>${esc(description)}</p></div>${actions ? `<div class="header-actions">${actions}</div>` : ''}`;
}
function render() {
  if (currentRole !== 'admin' && currentPage === 'farmers') currentPage = 'dashboard';
  renderNav(); renderTopbar(); renderPageHeader();
  const content = ({ dashboard: renderDashboard, fields: renderFields, crops: renderCrops, activities: renderActivities, harvest: renderHarvest, reports: renderReports, farmers: renderFarmers }[currentPage] || renderDashboard)();
  $('#appContent').innerHTML = content;
  $('#sidebar').classList.remove('open'); $('.mobile-overlay')?.classList.remove('show');
}
function statCard(label, value, foot, icon, tint = '') {
  return `<article class="stat-card"><div class="stat-top"><span class="stat-label">${esc(label)}</span><span class="stat-icon" ${tint ? `style="background:${tint}"` : ''}>${icon}</span></div><div class="stat-value">${esc(value)}</div><div class="stat-foot">${foot}</div></article>`;
}
function renderDashboard() {
  const farms = visibleFarms(), fields = visibleFields(), crops = visibleCrops(), activities = visibleActivities(), harvests = visibleHarvests();
  const activeCrops = crops.filter(c => c.status !== 'Harvested');
  const pending = activities.filter(a => a.status !== 'Completed' && a.status !== 'Resolved').sort((a, b) => a.date.localeCompare(b.date));
  const highPests = activities.filter(a => a.type === 'pest' && a.severity === 'High' && a.status !== 'Resolved');
  const overdue = pending.filter(a => dateDaysFromToday(a.date) < 0);
  const cropDistribution = Object.keys(stagesByCrop).map(crop => ({ label: crop, value: crops.filter(c => c.crop === crop).length })).filter(item => item.value > 0);
  const totalCropCount = cropDistribution.reduce((acc, item) => acc + item.value, 0) || 1;
  let acc = 0;
  const stops = cropDistribution.map((item, index) => { const start = acc; acc += item.value / totalCropCount * 100; return `${COLORS[index % COLORS.length]} ${start}% ${acc}%`; }).join(', ');
  const stages = crops.reduce((result, crop) => { result[crop.stage] = (result[crop.stage] || 0) + 1; return result; }, {});
  const stageEntries = Object.entries(stages).sort((a,b) => b[1] - a[1]).slice(0, 5);
  const maxStage = Math.max(1, ...stageEntries.map(entry => entry[1]));
  const tasksHtml = pending.slice(0, 5).map(activity => {
    const taskType = activity.type === 'irrigation' ? 'irrigation' : activity.type === 'fertilizer' ? 'fertilizer' : 'pest';
    const dueText = dateDaysFromToday(activity.date) < 0 ? `${Math.abs(dateDaysFromToday(activity.date))} day(s) overdue` : dateDaysFromToday(activity.date) === 0 ? 'Due today' : `Due ${prettyDate(activity.date)}`;
    return `<div class="task-row"><span class="task-icon ${taskType}">${activity.type === 'irrigation' ? '♒' : activity.type === 'fertilizer' ? '✳' : '⚑'}</span><div class="task-main"><strong>${esc(activityLabel(activity))} · ${esc(fieldName(activity.fieldId))}</strong><span>${esc(activityInfo(activity))} · ${esc(dueText)}</span></div>${statusBadge(activity.status)}</div>`;
  }).join('');
  const alerts = [
    ...highPests.map(a => ({ kind: 'danger', icon: '⚑', title: `High-severity pest: ${a.pestName || 'Observation'}`, detail: `${fieldName(a.fieldId)} · ${a.description || 'Inspection is pending'}`, id: a.id })),
    ...overdue.map(a => ({ kind: 'warning', icon: '◷', title: `Overdue: ${activityLabel(a)}`, detail: `${fieldName(a.fieldId)} · Scheduled ${prettyDate(a.date)}`, id: a.id }))
  ].slice(0, 4);
  const alertsHtml = alerts.length ? alerts.map(a => `<div class="alert-item"><span class="alert-symbol ${a.kind}">${a.icon}</span><div class="alert-copy"><strong>${esc(a.title)}</strong><p>${esc(a.detail)}</p><button data-action="review-activity" data-id="${esc(a.id)}">Review record →</button></div></div>`).join('') : `<div class="empty-state"><div class="empty-symbol">✓</div><strong>All clear for now</strong><p>No high-severity pest observations or overdue activities in this view.</p></div>`;
  const donut = cropDistribution.length ? `<div class="donut-area"><div class="donut" style="background:conic-gradient(${stops})"><div class="donut-center"><strong>${totalCropCount}</strong><span>crop cycles</span></div></div><div class="legend">${cropDistribution.map((item, i) => `<div class="legend-row"><span class="legend-dot" style="background:${COLORS[i % COLORS.length]}"></span><span>${esc(item.label)}</span><strong>${item.value}</strong></div>`).join('')}</div></div>` : emptyState('No crop cycles yet', 'Add a crop cycle to see the distribution chart.', 'crops');
  const barChart = stageEntries.length ? `<div class="bar-chart">${stageEntries.map(([label,value]) => `<div class="bar-group"><span class="bar-value">${value}</span><div class="bar-track"><div class="bar-fill" style="height:${Math.round(value / maxStage * 100)}%"></div></div><span class="bar-label">${esc(label.length > 16 ? label.slice(0,14) + '…' : label)}</span></div>`).join('')}</div>` : emptyState('No stage data', 'Crop stages will appear here after you add crops.', 'crops');
  const farmArea = sum(fields.map(field => field.area));
  const totalHarvest = sum(harvests.filter(h => h.status === 'Completed').map(h => h.quantity));
  return `
    <div class="callout"><span>✦</span><div><strong>${currentRole === 'admin' ? 'Administrator overview' : `Welcome back, ${esc(farmerName(selectedFarmerId).split(' ')[0])}`}</strong> · ${currentRole === 'admin' ? 'You are viewing all demonstration farmers and farm records.' : 'Here is a snapshot of your farm records and what may need your attention.'} All records are illustrative and saved locally in this browser.</div></div>
    <div class="stats-grid">
      ${statCard('Total farms', farms.length, `${fields.length} fields registered`, '⌖')}
      ${statCard('Cultivated area', `${farmArea.toLocaleString('en-IN',{maximumFractionDigits:1})} ac`, 'Area across visible fields', '◫', '#eef3f9')}
      ${statCard('Active crop cycles', activeCrops.length, `${crops.length} total crop cycles`, '♧', '#f1f7e8')}
      ${statCard('Items needing attention', highPests.length + overdue.length, `${highPests.length} high pest · ${overdue.length} overdue`, '⚑', '#fbf1df')}
    </div>
    <div class="dash-grid">
      <article class="panel"><div class="panel-heading"><div><h2>Crop distribution</h2><p>Breakdown by crop cycles in this view</p></div><span class="badge badge-neutral">${crops.length} records</span></div>${donut}</article>
      <article class="panel"><div class="panel-heading"><div><h2>Cultivation stages</h2><p>Crop cycles grouped by current stage</p></div><span class="badge badge-neutral">Live demo data</span></div>${barChart}</article>
    </div>
    <div class="dashboard-bottom">
      <article class="panel"><div class="panel-heading"><div><h2>Upcoming activities</h2><p>Planned actions and outstanding records</p></div><button class="btn btn-secondary btn-sm" data-page="activities">View all →</button></div><div class="task-list">${tasksHtml || `<div class="empty-state"><div class="empty-symbol">✓</div><strong>No pending activities</strong><p>Completed activity records will be available on the Activities page.</p></div>`}</div></article>
      <article class="panel"><div class="panel-heading"><div><h2>Attention needed</h2><p>Rule-based alerts from your records</p></div><span class="attention-count">${alerts.length}</span></div><div class="alert-list">${alertsHtml}</div><div class="demo-note">ⓘ Alerts depend on the dates, status and severity that have been entered. This is not live sensor or AI analysis.</div></article>
    </div>`;
}
function toolbar(searchPlaceholder, filterOptions = [], filterLabel = 'Filter') {
  return `<div class="toolbar"><div class="toolbar-left"><label class="search-field"><span>⌕</span><input id="pageSearch" type="search" placeholder="${esc(searchPlaceholder)}" value="${esc(activeSearch)}" autocomplete="off"></label></div><div class="toolbar-right">${filterOptions.length ? `<select id="pageFilter" class="select-filter" aria-label="${esc(filterLabel)}">${selectOptions(filterOptions, activeFilter)}</select>` : ''}<button class="btn btn-secondary" data-action="export-current">↓ Export CSV</button></div></div>`;
}
function renderFields() {
  const farms = visibleFarms();
  const filteredFarms = farms.filter(f => `${f.name} ${f.location} ${farmerName(f.ownerId)}`.toLowerCase().includes(activeSearch.toLowerCase()));
  const fields = visibleFields().filter(f => {
    const haystack = `${f.name} ${farmName(f.farmId)} ${f.soilType} ${f.waterSource}`.toLowerCase();
    return haystack.includes(activeSearch.toLowerCase()) && (activeFilter === 'all' || f.status === activeFilter);
  });
  const farmCards = filteredFarms.map((farm, index) => {
    const farmFields = data.fields.filter(f => f.farmId === farm.id);
    const farmCrops = data.crops.filter(c => farmFields.some(f => f.id === c.fieldId) && c.status !== 'Harvested');
    return `<article class="farm-card"><div class="farm-banner banner-${index % 4}"><strong>${esc(farm.name)}</strong><span>${esc((farm.location || '').toUpperCase())}</span></div><div class="farm-card-body"><div class="farm-title-row"><div><h3>${esc(farm.name)}</h3><p>⌖ ${esc(farm.location || 'Location not specified')}</p></div>${actionButton('edit','farms:'+farm.id,'Edit farm','✎')}${actionButton('delete','farms:'+farm.id,'Delete farm','×','danger')}</div><div class="farm-stats"><div><strong>${farmFields.length}</strong><span>Fields</span></div><div><strong>${num(farm.totalArea).toLocaleString('en-IN')}</strong><span>Farm area (ac)</span></div><div><strong>${farmCrops.length}</strong><span>Active crops</span></div></div><div class="farm-card-footer"><span class="avatar-small">${initials(farmerName(farm.ownerId))}</span><span style="flex:1">Managed by <strong>${esc(farmerName(farm.ownerId))}</strong></span>${statusBadge('Active')}</div></div></article>`;
  }).join('');
  const fieldRows = fields.map(field => `<tr><td><div class="cell-primary">${esc(field.name)}</div><div class="cell-secondary">${esc(field.id)}</div></td><td>${esc(farmName(field.farmId))}</td><td><strong>${num(field.area).toLocaleString('en-IN')}</strong> ac</td><td>${esc(field.soilType || '—')}</td><td>${esc(field.waterSource || '—')}</td><td>${statusBadge(field.status)}</td><td><div class="table-actions">${actionButton('edit','fields:'+field.id,'Edit field','✎')}${actionButton('delete','fields:'+field.id,'Delete field','×','danger')}</div></td></tr>`).join('');
  return `${toolbar('Search farms, fields, soil…', [{ value: 'all', label: 'All field statuses' }, { value: 'Active', label: 'Active' }, { value: 'Inactive', label: 'Inactive' }], 'Filter field status')}
    <div class="section-heading"><div><h2>Farm profiles</h2><p>${filteredFarms.length} farm${filteredFarms.length === 1 ? '' : 's'} in this view</p></div></div>
    ${farmCards ? `<div class="farm-grid">${farmCards}</div>` : emptyState('No farms found', 'Try a different search or add a farm.', 'farms')}
    <div class="section-heading"><div><h2>Field directory</h2><p>Field-level information across registered farms</p></div></div>
    <div class="table-wrap"><div class="table-scroll"><table><thead><tr><th>Field</th><th>Farm</th><th>Area</th><th>Soil type</th><th>Water source</th><th>Status</th><th>Actions</th></tr></thead><tbody>${fieldRows || `<tr><td colspan="7">${emptyState('No fields found','Add a field profile or change your filters.','fields')}</td></tr>`}</tbody></table></div></div>`;
}
function renderCrops() {
  let crops = visibleCrops().filter(c => `${c.crop} ${c.variety} ${fieldName(c.fieldId)} ${c.stage}`.toLowerCase().includes(activeSearch.toLowerCase()));
  if (activeFilter !== 'all') crops = crops.filter(c => c.status === activeFilter || c.stage === activeFilter);
  const rows = crops.map(crop => {
    const progress = stageProgress(crop);
    return `<tr><td><div class="cell-primary">${esc(crop.crop)}</div><div class="cell-secondary">${esc(crop.variety || 'Variety not specified')}</div></td><td>${esc(fieldName(crop.fieldId))}<div class="cell-secondary">${esc(farmName(getField(crop.fieldId)?.farmId))}</div></td><td>${prettyDate(crop.plantingDate)}</td><td><div class="progress-cell"><div class="progress-meta"><span>${esc(crop.stage)}</span><strong>${progress}%</strong></div><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div></div></td><td>${prettyDate(crop.expectedHarvest)}</td><td>${statusBadge(crop.status)}</td><td><div class="table-actions">${actionButton('edit','crops:'+crop.id,'Edit crop cycle','✎')}${actionButton('delete','crops:'+crop.id,'Delete crop cycle','×','danger')}</div></td></tr>`;
  }).join('');
  const filters = [{ value:'all', label:'All statuses' },{ value:'Active', label:'Active' },{ value:'Harvested', label:'Harvested' }, ...[...new Set(visibleCrops().map(c=>c.stage))].map(stage=>({value:stage,label:stage}))];
  return `${toolbar('Search crops, varieties, fields…', filters, 'Filter crops')}<div class="table-wrap"><div class="table-scroll"><table><thead><tr><th>Crop / variety</th><th>Field</th><th>Planting date</th><th>Current stage</th><th>Expected harvest</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows.join('') || `<tr><td colspan="7">${emptyState('No crop cycles found','Add a crop or change the search and filters.','crops')}</td></tr>`}</tbody></table></div></div><div class="demo-note">ⓘ Progress is an illustrative position within the selected crop's stage list. It is not a yield prediction or agronomic recommendation.</div>`;
}
function renderActivities() {
  let activities = visibleActivities().filter(a => `${activityLabel(a)} ${fieldName(a.fieldId)} ${cropName(a.cropId)} ${activityInfo(a)} ${a.notes || ''}`.toLowerCase().includes(activeSearch.toLowerCase()));
  if (activeFilter !== 'all') activities = activities.filter(a => a.type === activeFilter || a.status === activeFilter);
  activities.sort((a,b) => b.date.localeCompare(a.date));
  const rows = activities.map(a => `<tr><td><div class="cell-primary">${esc(activityLabel(a))}</div><div class="cell-secondary">${prettyDate(a.date)}</div></td><td>${esc(fieldName(a.fieldId))}<div class="cell-secondary">${esc(cropName(a.cropId))}</div></td><td>${esc(activityInfo(a))}</td><td>${a.type === 'pest' ? statusBadge(a.severity || 'Unrated') : statusBadge(a.status)}</td><td>${statusBadge(a.status)}</td><td><div class="table-actions">${a.status !== 'Completed' && a.status !== 'Resolved' ? actionButton('complete-activity',a.id,'Mark activity complete','✓') : ''}${actionButton('edit','activities:'+a.id,'Edit activity','✎')}${actionButton('delete','activities:'+a.id,'Delete activity','×','danger')}</div></td></tr>`).join('');
  const filters = [{value:'all',label:'All types / statuses'},{value:'irrigation',label:'Irrigation'},{value:'fertilizer',label:'Fertilizer'},{value:'pest',label:'Pest observation'},{value:'Planned',label:'Planned'},{value:'Completed',label:'Completed'},{value:'Open',label:'Open'}];
  return `${toolbar('Search activities, crops, fields…',filters,'Filter activity records')}<div class="callout"><span>ⓘ</span><div>Schedule dates and pest severity are entered in this demo. Alerts are generated from recorded dates and statuses, not from live field sensors.</div></div><div class="table-wrap"><div class="table-scroll"><table><thead><tr><th>Activity</th><th>Field / crop</th><th>Details</th><th>Severity</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows || `<tr><td colspan="6">${emptyState('No activities found','Add an activity record or try different filters.','activities')}</td></tr>`}</tbody></table></div></div>`;
}
function renderHarvest() {
  let harvests = visibleHarvests().filter(h => `${cropName(h.cropId)} ${fieldName(h.fieldId)} ${h.quality} ${h.notes || ''}`.toLowerCase().includes(activeSearch.toLowerCase()));
  if (activeFilter !== 'all') harvests = harvests.filter(h => h.status === activeFilter || h.unit === activeFilter);
  harvests.sort((a,b)=>b.date.localeCompare(a.date));
  const rows = harvests.map(h => `<tr><td><div class="cell-primary">${esc(cropName(h.cropId))}</div><div class="cell-secondary">${esc(fieldName(h.fieldId))}</div></td><td>${prettyDate(h.date)}</td><td><strong>${num(h.quantity).toLocaleString('en-IN',{maximumFractionDigits:2})}</strong> ${esc(h.unit || 'kg')}</td><td>${esc(h.quality || '—')}</td><td>${statusBadge(h.status)}</td><td><div class="table-actions">${actionButton('edit','harvest:'+h.id,'Edit harvest','✎')}${actionButton('delete','harvest:'+h.id,'Delete harvest','×','danger')}</div></td></tr>`).join('');
  const filters = [{value:'all',label:'All statuses / units'},{value:'Completed',label:'Completed'},{value:'Planned',label:'Planned'},{value:'In progress',label:'In progress'},{value:'kg',label:'Kilograms'},{value:'quintal',label:'Quintals'},{value:'tonne',label:'Tonnes'}];
  return `${toolbar('Search harvests, crops, fields…',filters,'Filter harvest records')}<div class="stats-grid">${statCard('Harvest records', harvests.length, 'Planned and completed', '♧')}${statCard('Completed records', harvests.filter(h=>h.status==='Completed').length, 'Recorded as completed', '✓')}${statCard('Harvest quantity', `${sum(harvests.filter(h=>h.status==='Completed' && h.unit==='kg').map(h=>h.quantity)).toLocaleString('en-IN')} kg`, 'Kilogram records only', '▤')}${statCard('Planned harvests', harvests.filter(h=>h.status!=='Completed').length, 'Update after harvest', '◷', '#fbf1df')}</div><div class="table-wrap"><div class="table-scroll"><table><thead><tr><th>Crop / field</th><th>Harvest date</th><th>Quantity</th><th>Quality</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows || `<tr><td colspan="6">${emptyState('No harvest records found','Add a harvest record to get started.','harvest')}</td></tr>`}</tbody></table></div></div><div class="demo-note">ⓘ Quantities are displayed in the units recorded. Different units are not combined into one total.</div>`;
}
function renderReports() {
  const crops = visibleCrops(), fields = visibleFields(), activities = visibleActivities(), harvests = visibleHarvests();
  const cropTotals = Object.keys(stagesByCrop).map(name => ({ name, count: crops.filter(c => c.crop === name).length })).filter(item => item.count);
  const maxCrop = Math.max(1, ...cropTotals.map(x => x.count));
  const stageTotals = [...new Set(crops.map(c => c.stage))].map(name => ({ name, count: crops.filter(c => c.stage === name).length }));
  const maxStage = Math.max(1,...stageTotals.map(x=>x.count));
  const irriCount = activities.filter(a=>a.type==='irrigation').length;
  const water = sum(activities.filter(a=>a.type==='irrigation').map(a=>a.waterLitres));
  const fertilizerCount = activities.filter(a=>a.type==='fertilizer').length;
  const fertilizerKg = sum(activities.filter(a=>a.type==='fertilizer' && (a.unit||'kg')==='kg').map(a=>a.quantity));
  const doneHarvests = harvests.filter(h=>h.status==='Completed');
  const harvestGroups = [...new Set(doneHarvests.map(h=>h.unit||'kg'))].map(unit=>({unit,qty:sum(doneHarvests.filter(h=>(h.unit||'kg')===unit).map(h=>h.quantity))}));
  const cropBars = cropTotals.map((entry,index)=>`<div class="task-row"><div class="task-main"><strong>${esc(entry.name)}</strong><span>${entry.count} crop cycle${entry.count===1?'':'s'}</span></div><div style="width:40%;max-width:200px"><div class="progress-track"><div class="progress-fill" style="width:${entry.count/maxCrop*100}%;background:${COLORS[index%COLORS.length]}"></div></div></div></div>`).join('');
  const stageBars = stageTotals.map((entry,index)=>`<div class="task-row"><div class="task-main"><strong>${esc(entry.name)}</strong><span>${entry.count} crop cycle${entry.count===1?'':'s'}</span></div><div style="width:38%;max-width:190px"><div class="progress-track"><div class="progress-fill" style="width:${entry.count/maxStage*100}%"></div></div></div></div>`).join('');
  return `<div class="callout"><span>▥</span><div><strong>Reports are calculated from the current records.</strong> Update a crop or activity to see its effect reflected here. Data is stored in this browser only.</div></div>
    <div class="report-grid">
      <article class="panel"><div class="panel-heading"><div><h2>Crop breakdown</h2><p>Crop cycles by crop type</p></div><span class="badge badge-neutral">${crops.length} total</span></div><div class="task-list">${cropBars || '<p class="stat-foot">No crop data to display yet.</p>'}</div></article>
      <article class="panel"><div class="panel-heading"><div><h2>Growth-stage distribution</h2><p>Selected stage on each crop record</p></div></div><div class="task-list">${stageBars || '<p class="stat-foot">No stage data to display yet.</p>'}</div></article>
      <article class="panel"><div class="panel-heading"><div><h2>Irrigation & fertilizer</h2><p>Recorded application summary</p></div></div><div class="report-metric"><span>Irrigation records</span><strong>${irriCount}</strong></div><div class="report-metric"><span>Recorded irrigation water</span><strong>${water.toLocaleString('en-IN')} L</strong></div><div class="report-metric"><span>Fertilizer records</span><strong>${fertilizerCount}</strong></div><div class="report-metric"><span>Fertilizer quantity (kg entries)</span><strong>${fertilizerKg.toLocaleString('en-IN')} kg</strong></div></article>
      <article class="panel"><div class="panel-heading"><div><h2>Harvest summary</h2><p>Completed harvest quantities grouped by unit</p></div></div><div class="report-metric"><span>Harvest records</span><strong>${harvests.length}</strong></div><div class="report-metric"><span>Completed records</span><strong>${doneHarvests.length}</strong></div>${harvestGroups.map(group=>`<div class="report-metric"><span>Total recorded (${esc(group.unit)})</span><strong>${group.qty.toLocaleString('en-IN',{maximumFractionDigits:2})}</strong></div>`).join('') || '<div class="report-metric"><span>No completed harvest quantities</span><strong>—</strong></div>'}</article>
    </div>
    <article class="panel" style="margin-top:16px"><div class="panel-heading"><div><h2>Data tools</h2><p>Download a copy, import a previous backup, or restore the original demo dataset.</p></div></div><div class="data-tools" style="margin-top:17px"><button class="btn btn-secondary" data-action="export-json">⇩ Download full JSON backup</button><button class="btn btn-secondary" data-action="import-json">↑ Import JSON backup</button><button class="btn btn-danger" data-action="reset-data">↻ Reset demo data</button></div><div class="demo-note">ⓘ Resetting replaces all local changes in this browser with the original illustrative records. Export a backup first if you need to keep your work.</div></article>`;
}
function renderFarmers() {
  if (currentRole !== 'admin') return emptyState('Administrator view only','Switch to Administrator from the top menu to review demo profiles.');
  let farmers = data.farmers.filter(f => `${f.name} ${f.village} ${f.phone} ${f.status}`.toLowerCase().includes(activeSearch.toLowerCase()));
  if (activeFilter !== 'all') farmers = farmers.filter(f => f.status === activeFilter);
  const rows = farmers.map(f => {
    const farms = data.farms.filter(farm => farm.ownerId === f.id);
    const fieldsCount = data.fields.filter(field => farms.some(farm => farm.id === field.farmId)).length;
    const cyclesCount = data.crops.filter(crop => data.fields.some(field => field.id === crop.fieldId && farms.some(farm => farm.id === field.farmId))).length;
    return `<tr><td><div style="display:flex;align-items:center;gap:9px"><span class="avatar-small">${initials(f.name)}</span><div><div class="cell-primary">${esc(f.name)}</div><div class="cell-secondary">${esc(f.id)}</div></div></div></td><td>${esc(f.village || '—')}</td><td>${esc(f.phone || '—')}</td><td>${farms.length}</td><td>${fieldsCount}</td><td>${cyclesCount}</td><td>${statusBadge(f.status)}</td><td><div class="table-actions">${actionButton('edit','farmers:'+f.id,'Edit farmer','✎')}${actionButton('delete','farmers:'+f.id,'Delete farmer','×','danger')}</div></td></tr>`;
  }).join('');
  return `${toolbar('Search farmers, villages…',[{value:'all',label:'All statuses'},{value:'Active',label:'Active'},{value:'Inactive',label:'Inactive'}],'Filter farmers')}<div class="callout"><span>ⓘ</span><div>These are fictional demo profiles. Do not enter real personal or contact information in this prototype.</div></div><div class="table-wrap"><div class="table-scroll"><table><thead><tr><th>Farmer</th><th>Location</th><th>Contact</th><th>Farms</th><th>Fields</th><th>Crop cycles</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows || `<tr><td colspan="8">${emptyState('No farmers found','Add a demo farmer or change your search.','farmers')}</td></tr>`}</tbody></table></div></div>`;
}

function fieldOptList() { return visibleFields().map(f => ({value:f.id,label:`${f.name} · ${farmName(f.farmId)}`})); }
function farmOptList() { return visibleFarms().map(f => ({value:f.id,label:`${f.name} · ${f.location}`})); }
function cropOptList(fieldId = '') { return visibleCrops().filter(c => !fieldId || c.fieldId === fieldId).map(c => ({value:c.id,label:`${c.crop} · ${fieldName(c.fieldId)}`})); }
function farmerOptList() { return data.farmers.map(f => ({value:f.id,label:`${f.name} · ${f.village}`})); }
function formField(field, value, entity) {
  const name = field.name;
  const id = `form-${name}`;
  const required = field.required ? 'required' : '';
  const full = field.full ? 'full' : '';
  const helper = field.help ? `<small>${esc(field.help)}</small>` : '';
  const group = field.group ? `data-conditional-group="${field.group}"` : '';
  let control = '';
  if (field.type === 'textarea') control = `<textarea id="${id}" name="${name}" placeholder="${esc(field.placeholder || '')}" ${required}>${esc(value ?? '')}</textarea>`;
  else if (field.type === 'select') control = `<select id="${id}" name="${name}" ${required}>${selectOptions(field.options || [], value, field.placeholder || 'Choose…')}</select>`;
  else control = `<input id="${id}" name="${name}" type="${field.type || 'text'}" value="${esc(value ?? '')}" placeholder="${esc(field.placeholder || '')}" ${field.min !== undefined ? `min="${field.min}"` : ''} ${field.step ? `step="${field.step}"` : ''} ${required}>`;
  return `<div class="form-field ${full}" ${group} ${field.hidden ? 'hidden' : ''}><label for="${id}">${esc(field.label)}${field.required ? ' *' : ''}</label>${control}${helper}</div>`;
}
function getFormDefinition(entity, record = {}) {
  const commonStatus = [{value:'Active',label:'Active'},{value:'Inactive',label:'Inactive'}];
  const fFields = fieldOptList();
  const base = {
    farms: [
      {name:'name',label:'Farm name',required:true,placeholder:'e.g. Green Valley Farm'},
      {name:'location',label:'Location',required:true,placeholder:'Village / district / state'},
      ...(currentRole === 'admin' ? [{name:'ownerId',label:'Farmer / owner',type:'select',options:farmerOptList(),required:true}] : []),
      {name:'totalArea',label:'Total farm area (acres)',type:'number',min:0.01,step:'0.01',required:true,help:'Use acres for consistency in this demonstration.'}
    ],
    fields: [
      {name:'farmId',label:'Farm',type:'select',options:farmOptList(),required:true,full:true},
      {name:'name',label:'Field name',required:true,placeholder:'e.g. North Paddy Field'},
      {name:'area',label:'Field area (acres)',type:'number',min:0.01,step:'0.01',required:true},
      {name:'soilType',label:'Soil type',type:'select',options:['Alluvial','Loamy','Black soil','Red loam','Clay loam','Sandy','Delta alluvial','Other'].map(v=>({value:v,label:v})),required:true},
      {name:'waterSource',label:'Water source',type:'select',options:['Canal','Borewell','Well','Rain-fed','Drip irrigation','Sprinkler','Other'].map(v=>({value:v,label:v})),required:true},
      {name:'status',label:'Field status',type:'select',options:commonStatus}
    ],
    crops: [
      {name:'fieldId',label:'Field',type:'select',options:fFields,required:true,full:true},
      {name:'crop',label:'Crop',type:'select',options:Object.keys(stagesByCrop).map(v=>({value:v,label:v})),required:true},
      {name:'variety',label:'Crop variety',required:true,placeholder:'e.g. Pusa Basmati 1509'},
      {name:'plantingDate',label:'Planting date',type:'date',required:true},
      {name:'stage',label:'Current cultivation stage',type:'select',options:(stagesByCrop[record.crop] || stagesByCrop.Rice).map(v=>({value:v,label:v})),required:true,full:true,help:'Stage options adapt to the crop selected above.'},
      {name:'expectedHarvest',label:'Expected harvest date',type:'date',required:true},
      {name:'status',label:'Crop-cycle status',type:'select',options:[{value:'Active',label:'Active'},{value:'Harvested',label:'Harvested'},{value:'Paused',label:'Paused'}]}
    ],
    activities: [
      {name:'type',label:'Activity type',type:'select',options:[{value:'irrigation',label:'Irrigation'},{value:'fertilizer',label:'Fertilizer application'},{value:'pest',label:'Pest observation'}],required:true},
      {name:'date',label:'Activity date',type:'date',required:true},
      {name:'fieldId',label:'Field',type:'select',options:fFields,required:true,full:true},
      {name:'cropId',label:'Crop cycle',type:'select',options:cropOptList(record.fieldId),required:false,full:true,placeholder:'Select crop (optional)'},
      {name:'status',label:'Record status',type:'select',options:[{value:'Planned',label:'Planned'},{value:'Completed',label:'Completed'},{value:'Open',label:'Open'},{value:'Resolved',label:'Resolved'}]},
      {name:'waterLitres',label:'Water quantity (litres)',type:'number',min:0,step:'1',group:'irrigation'},
      {name:'method',label:'Method',type:'select',options:['Canal flow','Furrow','Sprinkler','Drip','Flood','Soil application','Top dressing','Foliar spray','Other'].map(v=>({value:v,label:v})),group:'method'},
      {name:'fertilizerName',label:'Fertilizer name / type',group:'fertilizer',placeholder:'e.g. Compost or NPK 19:19:19'},
      {name:'quantity',label:'Quantity',type:'number',min:0,step:'0.01',group:'fertilizer'},
      {name:'unit',label:'Unit',type:'select',options:['kg','g'].map(v=>({value:v,label:v})),group:'fertilizer'},
      {name:'pestName',label:'Pest / symptom',group:'pest',placeholder:'Describe what was observed'},
      {name:'severity',label:'Severity',type:'select',options:['Low','Medium','High'].map(v=>({value:v,label:v})),group:'pest'},
      {name:'description',label:'Observation details',type:'textarea',full:true,group:'pest',placeholder:'Where was it seen? What symptoms were noticed?'},
      {name:'treatment',label:'Treatment / follow-up',type:'text',full:true,group:'pest',placeholder:'e.g. Inspect again; treatment pending'},
      {name:'notes',label:'Notes',type:'textarea',full:true,placeholder:'Additional details (optional)'}
    ],
    harvest: [
      {name:'fieldId',label:'Field',type:'select',options:fFields,required:true,full:true},
      {name:'cropId',label:'Crop cycle',type:'select',options:cropOptList(record.fieldId),required:true,full:true},
      {name:'date',label:'Harvest date',type:'date',required:true},
      {name:'quantity',label:'Harvest quantity',type:'number',min:0,step:'0.01',required:true},
      {name:'unit',label:'Measurement unit',type:'select',options:['kg','quintal','tonne'].map(v=>({value:v,label:v})),required:true},
      {name:'status',label:'Harvest status',type:'select',options:[{value:'Planned',label:'Planned'},{value:'In progress',label:'In progress'},{value:'Completed',label:'Completed'}]},
      {name:'quality',label:'Quality assessment',type:'select',options:['Not assessed','Good','Average','Needs review'].map(v=>({value:v,label:v}))},
      {name:'notes',label:'Notes',type:'textarea',full:true,placeholder:'Optional harvest notes'}
    ],
    farmers: [
      {name:'name',label:'Farmer name',required:true,placeholder:'Enter demo name'},
      {name:'village',label:'Location',required:true,placeholder:'Village / district / state'},
      {name:'phone',label:'Contact placeholder',placeholder:'Use demo contact only',help:'Do not enter real personal information.'},
      {name:'status',label:'Demo profile status',type:'select',options:commonStatus}
    ]
  };
  const definitions = base[entity] || [];
  return definitions.map(field => {
    let value = record[field.name];
    if (value === undefined || value === null) {
      if (field.name === 'status') value = entity === 'activities' ? (record.type === 'pest' ? 'Open' : 'Planned') : entity === 'harvest' ? 'Planned' : 'Active';
      else if (field.name === 'date' || field.name === 'plantingDate') value = localDate();
      else if (field.name === 'expectedHarvest') value = localDate(60);
      else if (field.name === 'unit') value = entity === 'harvest' ? 'quintal' : 'kg';
      else if (field.name === 'severity') value = 'Medium';
      else if (field.name === 'quality') value = 'Not assessed';
      else if (field.name === 'stage') value = (stagesByCrop[record.crop] || stagesByCrop.Rice)[0];
      else if (field.name === 'crop') value = 'Rice';
      else if (field.name === 'ownerId') value = selectedFarmerId;
      else if (field.name === 'farmId') value = farmOptList()[0]?.value || '';
      else if (field.name === 'fieldId') value = fieldOptList()[0]?.value || '';
      else if (field.name === 'cropId') value = cropOptList(record.fieldId || fieldOptList()[0]?.value)[0]?.value || '';
      else if (field.name === 'type') value = 'irrigation';
      else if (field.name === 'method') value = 'Canal flow';
      else value = '';
    }
    return {...field, value};
  });
}
function openForm(entity, id = null) {
  if (entity.includes(':')) [entity, id] = entity.split(':');
  if (entity === 'farmers' && currentRole !== 'admin') { showToast('Farmer management is available in the administrator demo.'); return; }
  if (['farms','fields','crops','activities','harvest'].includes(entity) && !visibleFarms().length && entity !== 'farms') { showToast('Add a farm before creating this record.'); currentPage = 'fields'; render(); return; }
  if (['crops','activities','harvest'].includes(entity) && !visibleFields().length) { showToast('Add a field before creating this record.'); currentPage = 'fields'; render(); return; }
  const record = id ? getById(entity, id) : {};
  if (id && !record) { showToast('That record could not be found.'); return; }
  if (id && record && currentRole !== 'admin' && entity === 'farms' && record.ownerId !== selectedFarmerId) { showToast('This demo record is outside the selected farmer view.'); return; }
  editing = { entity, id };
  const titleByEntity = {farms:'farm',fields:'field',crops:'crop cycle',activities:'activity',harvest:'harvest record',farmers:'farmer profile'};
  $('#modalEyebrow').textContent = id ? 'EDIT RECORD' : 'NEW RECORD';
  $('#modalTitle').textContent = `${id ? 'Edit' : 'Add'} ${titleByEntity[entity] || 'record'}`;
  $('#saveRecordButton').innerHTML = `${id ? 'Save changes' : 'Save record'} <span>→</span>`;
  const definition = getFormDefinition(entity, record || {});
  $('#modalBody').innerHTML = definition.map(field => formField(field, field.value, entity)).join('');
  $('#modalBackdrop').hidden = false;
  document.body.style.overflow = 'hidden';
  applyConditionalFields();
  if (entity === 'crops') refreshCropStages(record?.stage);
  if (entity === 'activities' || entity === 'harvest') refreshCropOptions();
  const firstInput = $('#modalBody input, #modalBody select');
  if (firstInput) firstInput.focus({ preventScroll: true });
}
function closeModal() { $('#modalBackdrop').hidden = true; document.body.style.overflow = ''; editing = null; }
function applyConditionalFields() {
  const entity = editing?.entity;
  if (entity !== 'activities') return;
  const type = $('#form-type')?.value || 'irrigation';
  $$('[data-conditional-group]', $('#modalBody')).forEach(element => {
    const group = element.dataset.conditionalGroup;
    const show = group === type || group === 'method' && type !== 'pest';
    element.hidden = !show;
  });
  const status = $('#form-status');
  if (status) {
    const options = type === 'pest' ? [{value:'Open',label:'Open'},{value:'Resolved',label:'Resolved'}] : [{value:'Planned',label:'Planned'},{value:'Completed',label:'Completed'}];
    const prior = status.value;
    status.innerHTML = selectOptions(options, options.some(o=>o.value===prior) ? prior : options[0].value);
  }
}
function refreshCropStages(preferred) {
  const cropSelect = $('#form-crop'), stageSelect = $('#form-stage');
  if (!cropSelect || !stageSelect) return;
  const stages = stagesByCrop[cropSelect.value] || stagesByCrop.Rice;
  const desired = preferred && stages.includes(preferred) ? preferred : stages[0];
  stageSelect.innerHTML = selectOptions(stages.map(v=>({value:v,label:v})), desired);
}
function refreshCropOptions() {
  const fieldSelect = $('#form-fieldId'), cropSelect = $('#form-cropId');
  if (!fieldSelect || !cropSelect) return;
  const oldValue = cropSelect.value;
  const choices = cropOptList(fieldSelect.value);
  cropSelect.innerHTML = selectOptions(choices, choices.some(o=>o.value===oldValue) ? oldValue : '', 'Select crop (optional)');
}
function upsertRecord(entity, record) {
  const index = data[entity].findIndex(item => item.id === record.id);
  if (index >= 0) data[entity][index] = {...data[entity][index], ...record};
  else data[entity].unshift(record);
}
function handleFormSubmit(event) {
  event.preventDefault();
  if (!editing) return;
  const { entity, id } = editing;
  const values = Object.fromEntries(new FormData(event.currentTarget).entries());
  const existing = id ? getById(entity, id) : null;
  const record = { ...values, id: id || makeId(entity.slice(0, -1)) };
  if (entity === 'farms') {
    record.totalArea = num(values.totalArea);
    if (currentRole !== 'admin') record.ownerId = selectedFarmerId;
    if (!record.ownerId) record.ownerId = selectedFarmerId;
  }
  if (entity === 'fields') record.area = num(values.area);
  if (entity === 'crops') {
    if (!record.stage || !(stagesByCrop[record.crop] || []).includes(record.stage)) record.stage = (stagesByCrop[record.crop] || stagesByCrop.Rice)[0];
    if (record.stage === 'Harvested') record.status = 'Harvested';
  }
  if (entity === 'activities') {
    ['waterLitres','quantity'].forEach(key => { if (values[key] !== '') record[key] = num(values[key]); else delete record[key]; });
    if (!record.cropId) record.cropId = data.crops.find(c => c.fieldId === record.fieldId)?.id || '';
    if (record.type === 'irrigation') { delete record.fertilizerName; delete record.severity; delete record.pestName; delete record.description; delete record.treatment; }
    if (record.type === 'fertilizer') { delete record.waterLitres; delete record.severity; delete record.pestName; delete record.description; delete record.treatment; }
    if (record.type === 'pest') { delete record.waterLitres; delete record.fertilizerName; delete record.quantity; delete record.unit; delete record.method; }
  }
  if (entity === 'harvest') record.quantity = num(values.quantity);
  if (entity === 'farmers' && currentRole !== 'admin') { showToast('Only the administrator demo can manage farmer profiles.'); return; }
  if (entity === 'fields' && !visibleFarms().some(farm => farm.id === record.farmId)) { showToast('Choose a farm in the selected demo view.'); return; }
  if (entity === 'crops' && !visibleFields().some(field => field.id === record.fieldId)) { showToast('Choose a field in the selected demo view.'); return; }
  if (['activities','harvest'].includes(entity) && !visibleFields().some(field => field.id === record.fieldId)) { showToast('Choose a field in the selected demo view.'); return; }
  if (entity === 'activities' && record.cropId && getCrop(record.cropId)?.fieldId !== record.fieldId) record.cropId = '';
  if (entity === 'harvest' && getCrop(record.cropId)?.fieldId !== record.fieldId) { showToast('Choose a crop cycle from the selected field.'); return; }
  upsertRecord(entity, record);
  if (entity === 'harvest' && record.status === 'Completed') {
    const crop = getCrop(record.cropId);
    if (crop && crop.status !== 'Harvested' && confirm('Mark this crop cycle as Harvested too?')) { crop.status = 'Harvested'; crop.stage = 'Harvested'; }
  }
  persist(); closeModal(); render(); showToast(`${titleCase(entity.replace(/s$/,''))} ${id ? 'updated' : 'added'} successfully.`);
}
function deleteRecord(entity, id) {
  const item = getById(entity, id);
  if (!item) return;
  if (entity === 'farmers' && currentRole !== 'admin') return showToast('Only administrator can manage farmer profiles.');
  if (currentRole !== 'admin' && entity === 'farms' && item.ownerId !== selectedFarmerId) return showToast('That record is outside the selected farmer view.');
  if (!confirm(`Delete this ${entity.slice(0,-1)}? Related records may also be removed. This cannot be undone unless you exported a backup.`)) return;
  if (entity === 'farmers') {
    const farmIds = data.farms.filter(f => f.ownerId === id).map(f => f.id);
    const fieldIds = data.fields.filter(f => farmIds.includes(f.farmId)).map(f => f.id);
    const cropIds = data.crops.filter(c => fieldIds.includes(c.fieldId)).map(c => c.id);
    data.harvests = data.harvests.filter(h => !fieldIds.includes(h.fieldId));
    data.activities = data.activities.filter(a => !fieldIds.includes(a.fieldId));
    data.crops = data.crops.filter(c => !cropIds.includes(c.id));
    data.fields = data.fields.filter(f => !fieldIds.includes(f.id));
    data.farms = data.farms.filter(f => !farmIds.includes(f.id));
    data.farmers = data.farmers.filter(f => f.id !== id);
    if (!data.farmers.length) data.farmers.push({id:makeId('farmer'),name:'Demo Farmer',village:'India',phone:'Demo contact',status:'Active'});
    if (!getFarmer(selectedFarmerId)) selectedFarmerId = data.farmers[0].id;
  } else if (entity === 'farms') {
    const fieldIds = data.fields.filter(f => f.farmId === id).map(f => f.id);
    const cropIds = data.crops.filter(c => fieldIds.includes(c.fieldId)).map(c => c.id);
    data.harvests = data.harvests.filter(h => !fieldIds.includes(h.fieldId));
    data.activities = data.activities.filter(a => !fieldIds.includes(a.fieldId));
    data.crops = data.crops.filter(c => !cropIds.includes(c.id));
    data.fields = data.fields.filter(f => f.farmId !== id);
    data.farms = data.farms.filter(f => f.id !== id);
  } else if (entity === 'fields') {
    const cropIds = data.crops.filter(c => c.fieldId === id).map(c => c.id);
    data.activities = data.activities.filter(a => a.fieldId !== id);
    data.harvests = data.harvests.filter(h => h.fieldId !== id);
    data.crops = data.crops.filter(c => c.fieldId !== id);
    data.fields = data.fields.filter(f => f.id !== id);
  } else if (entity === 'crops') {
    data.activities = data.activities.filter(a => a.cropId !== id);
    data.harvests = data.harvests.filter(h => h.cropId !== id);
    data.crops = data.crops.filter(c => c.id !== id);
  } else data[entity] = data[entity].filter(row => row.id !== id);
  persist(); render(); showToast('Record deleted.');
}
function completeActivity(id) {
  const activity = getById('activities', id); if (!activity) return;
  activity.status = activity.type === 'pest' ? 'Resolved' : 'Completed';
  persist(); render(); showToast(activity.type === 'pest' ? 'Pest observation marked resolved.' : 'Activity marked completed.');
}
function csvCell(value) { const text = String(value ?? ''); return /[",\n]/.test(text) ? `"${text.replace(/"/g,'""')}"` : text; }
function downloadFile(filename, content, mime) {
  const blob = new Blob([content], {type:mime}); const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
function exportJson() {
  downloadFile(`harvestly-demo-backup-${localDate()}.json`, JSON.stringify({ app:'Harvestly Farm Management Platform', version:1, exportedAt:new Date().toISOString(), data },null,2), 'application/json');
  showToast('JSON backup downloaded.');
}
function csvForCurrentPage() {
  let records = [], headers = [], prefix = currentPage;
  if (currentPage === 'fields') { records = visibleFields(); headers = ['id','farmId','name','area','soilType','waterSource','status']; }
  else if (currentPage === 'crops') { records = visibleCrops(); headers = ['id','fieldId','crop','variety','plantingDate','stage','expectedHarvest','status']; }
  else if (currentPage === 'activities') { records = visibleActivities(); headers = ['id','type','fieldId','cropId','date','status','waterLitres','method','fertilizerName','quantity','unit','pestName','severity','description','treatment','notes']; }
  else if (currentPage === 'harvest') { records = visibleHarvests(); headers = ['id','fieldId','cropId','date','quantity','unit','status','quality','notes']; }
  else if (currentPage === 'farmers') { records = visibleFarmers(); headers = ['id','name','village','phone','status']; }
  else if (currentPage === 'dashboard') { records = [...visibleFarms().map(f=>({...f,recordType:'farm'})),...visibleFields().map(f=>({...f,recordType:'field'})),...visibleCrops().map(c=>({...c,recordType:'crop'}))]; headers = ['recordType','id','name','farmId','fieldId','crop','variety','area','location','stage','status']; }
  else if (currentPage === 'reports') { records = visibleActivities(); headers = ['id','type','fieldId','cropId','date','status','waterLitres','fertilizerName','quantity','unit','pestName','severity']; }
  else { records = visibleFarms(); headers = ['id','ownerId','name','location','totalArea']; }
  const lines = [headers.map(csvCell).join(','), ...records.map(record => headers.map(header => csvCell(record[header])).join(','))].join('\n');
  downloadFile(`harvestly-${prefix}-${localDate()}.csv`, '\ufeff'+lines, 'text/csv;charset=utf-8'); showToast('CSV export downloaded.');
}
function resetData() {
  if (!confirm('Reset the website to the original sample data? All changes saved in this browser will be replaced.')) return;
  data = initialData(); selectedFarmerId = 'farmer-1'; currentRole = 'farmer'; currentPage = 'dashboard'; activeSearch = ''; activeFilter = 'all'; persist(); render(); showToast('Demo data restored.');
}
function importJsonFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result); const candidate = parsed.data || parsed;
      const required = ['farmers','farms','fields','crops','activities','harvests'];
      if (!required.every(key=>Array.isArray(candidate[key]))) throw new Error('The file does not contain all required record collections.');
      if (!confirm('Import this backup and replace the current browser demo records?')) return;
      data = candidate;
      if (!data.farmers.some(f=>f.id===selectedFarmerId)) selectedFarmerId = data.farmers[0]?.id || '';
      persist(); render(); showToast('Backup imported successfully.');
    } catch (error) { alert(`Could not import backup: ${error.message}`); }
  };
  reader.readAsText(file);
}

// Global click delegation keeps the application framework-free.
document.addEventListener('click', (event) => {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) {
    const nextPage = pageButton.dataset.page;
    if (nextPage === 'farmers' && currentRole !== 'admin') { showToast('Switch to Administrator to open Farmer Management.'); return; }
    currentPage = nextPage; activeSearch = ''; activeFilter = 'all'; render(); return;
  }
  const closeButton = event.target.closest('[data-close-modal]');
  if (closeButton) { closeModal(); return; }
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'add') { openForm(button.dataset.entity); return; }
  if (action === 'edit' || action === 'delete') {
    const [entity,id] = button.dataset.id.split(':');
    if (action === 'edit') openForm(entity,id); else deleteRecord(entity,id);
    return;
  }
  if (action === 'complete-activity') { completeActivity(button.dataset.id); return; }
  if (action === 'review-activity') { currentPage = 'activities'; activeSearch = ''; activeFilter = 'all'; render(); return; }
  if (action === 'export-json') { exportJson(); return; }
  if (action === 'export-csv' || action === 'export-current') { csvForCurrentPage(); return; }
  if (action === 'reset-data') { resetData(); return; }
  if (action === 'import-json') { $('#importFile').click(); return; }
});
$('#recordForm').addEventListener('submit', handleFormSubmit);
$('#modalBody').addEventListener('change', (event) => {
  if (event.target.id === 'form-type') applyConditionalFields();
  if (event.target.id === 'form-crop') refreshCropStages();
  if (event.target.id === 'form-fieldId') refreshCropOptions();
});
$('#roleSelect').addEventListener('change', event => {
  currentRole = event.target.value;
  if (currentRole === 'admin' && currentPage === 'farmers') activeSearch = '';
  if (currentRole === 'farmer' && currentPage === 'farmers') currentPage = 'dashboard';
  activeSearch = ''; activeFilter = 'all'; render(); showToast(currentRole === 'admin' ? 'Administrator demo view enabled.' : 'Farmer demo view enabled.');
});
$('#activeFarmer').addEventListener('change', event => { selectedFarmerId = event.target.value; activeSearch=''; activeFilter='all'; render(); showToast(`Viewing ${farmerName(selectedFarmerId)}'s demo records.`); });
$('#profileButton').addEventListener('click', () => showToast(currentRole === 'admin' ? 'Administrator demo · platform supervisor' : `Farmer demo · ${farmerName(selectedFarmerId)}`));
$('#menuToggle').addEventListener('click', () => { $('#sidebar').classList.toggle('open'); $('.mobile-overlay')?.classList.toggle('show'); });
$('#importFile').addEventListener('change', event => { importJsonFile(event.target.files?.[0]); event.target.value = ''; });
$('#appContent').addEventListener('input', event => {
  if (event.target.id === 'pageSearch') {
    activeSearch = event.target.value;
    const cursor = event.target.selectionStart;
    const page = currentPage;
    const scrollTop = window.scrollY;
    const html = ({fields:renderFields,crops:renderCrops,activities:renderActivities,harvest:renderHarvest,farmers:renderFarmers}[page] || (()=>'') )();
    $('#appContent').innerHTML = html;
    const replacement = $('#pageSearch'); if (replacement) { replacement.focus(); replacement.setSelectionRange(cursor,cursor); }
    window.scrollTo(0,scrollTop);
  }
});
$('#appContent').addEventListener('change', event => {
  if (event.target.id === 'pageFilter') { activeFilter = event.target.value; render(); }
});
$('#modalBackdrop').addEventListener('click', event => { if (event.target === $('#modalBackdrop')) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#modalBackdrop').hidden) closeModal(); });

// Add a mobile backdrop to close the slide-out menu when tapping outside it.
const mobileOverlay = document.createElement('div'); mobileOverlay.className = 'mobile-overlay'; document.body.appendChild(mobileOverlay);
mobileOverlay.addEventListener('click', () => { $('#sidebar').classList.remove('open'); mobileOverlay.classList.remove('show'); });

persist();
render();
