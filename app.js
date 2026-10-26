'use strict';

const STORE_KEY = 'harvestly-vanilla-farm-management-v1';

const COLORS = [
  '#2e7549',
  '#87ae69',
  '#d4ab59',
  '#779ca8',
  '#b58a70',
  '#9da878'
];

const stagesByCrop = {
  Rice: [
    'Land preparation',
    'Nursery / Sowing',
    'Transplanting',
    'Tillering',
    'Panicle initiation',
    'Flowering',
    'Grain filling',
    'Maturity',
    'Harvested'
  ],
  Wheat: [
    'Land preparation',
    'Sowing',
    'Germination',
    'Tillering',
    'Jointing',
    'Booting',
    'Heading / Flowering',
    'Grain filling',
    'Maturity',
    'Harvested'
  ],
  Maize: [
    'Land preparation',
    'Sowing',
    'Germination',
    'Vegetative growth',
    'Tasseling / Silking',
    'Grain filling',
    'Maturity',
    'Harvested'
  ],
  Cotton: [
    'Land preparation',
    'Sowing',
    'Seedling',
    'Vegetative growth',
    'Squaring',
    'Flowering',
    'Boll development',
    'Boll opening / Picking',
    'Harvested'
  ],
  Groundnut: [
    'Land preparation',
    'Sowing',
    'Germination',
    'Vegetative growth',
    'Flowering',
    'Pegging',
    'Pod development',
    'Maturity',
    'Harvested'
  ],
  Sugarcane: [
    'Land preparation',
    'Planting',
    'Germination',
    'Tillering',
    'Grand growth',
    'Maturity',
    'Harvested'
  ],
  Tomato: [
    'Land preparation',
    'Nursery',
    'Transplanting',
    'Vegetative growth',
    'Flowering',
    'Fruit development',
    'Ripening',
    'Harvested'
  ]
};

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '▦' },
  { id: 'fields', label: 'Farms & fields', icon: '⌖' },
  { id: 'crops', label: 'Crop management', icon: '♧' },
  { id: 'activities', label: 'Cultivation activities', icon: '▤' },
  { id: 'harvest', label: 'Harvest management', icon: '♧' },
  { id: 'reports', label: 'Reports & insights', icon: '▥' },
  {
    id: 'farmers',
    label: 'Farmer management',
    icon: '♙',
    adminOnly: true
  }
];

const pageMeta = {
  dashboard: [
    'Farm overview',
    'Your farm activities, crop progress, and items that may need attention.'
  ],
  fields: [
    'Farms & fields',
    'Organize farm profiles, field details, soil types, and water sources.'
  ],
  crops: [
    'Crop management',
    'Track crop cycles with cultivation stages suited to each crop.'
  ],
  activities: [
    'Cultivation activities',
    'Record irrigation, fertilizer applications, and pest observations.'
  ],
  harvest: [
    'Harvest management',
    'Record completed and planned harvests across your fields.'
  ],
  reports: [
    'Reports & insights',
    'Explore summaries generated from your current demonstration records.'
  ],
  farmers: [
    'Farmer management',
    'Review sample farmer profiles and their farm records.'
  ]
};

const localDate = (offset = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);

  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

const makeId = (prefix) =>
  `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;

const initialData = () => ({
  farmers: [
    {
      id: 'farmer-1',
      name: 'Farm Owner',
      village: 'My Farm',
      phone: 'Not provided',
      status: 'Active'
    }
  ],

  farms: [
    {
      id: 'farm-1',
      ownerId: 'farmer-1',
      name: 'Green Valley Farm',
      location: 'Ludhiana, Punjab',
      totalArea: 12.5
    },
    {
      id: 'farm-2',
      ownerId: 'farmer-1',
      name: 'Saraswati Fields',
      location: 'Anand, Gujarat',
      totalArea: 9.2
    },
    {
      id: 'farm-3',
      ownerId: 'farmer-1',
      name: 'Krishna Harvest Farm',
      location: 'Guntur, Andhra Pradesh',
      totalArea: 16
    },
    {
      id: 'farm-4',
      ownerId: 'farmer-1',
      name: 'Cauvery Agro Farm',
      location: 'Thanjavur, Tamil Nadu',
      totalArea: 11.4
    }
  ],

  fields: [
    {
      id: 'field-1',
      farmId: 'farm-1',
      name: 'North Paddy Field',
      area: 4.5,
      soilType: 'Alluvial',
      waterSource: 'Canal',
      status: 'Active'
    },
    {
      id: 'field-2',
      farmId: 'farm-1',
      name: 'East Wheat Plot',
      area: 3.2,
      soilType: 'Loamy',
      waterSource: 'Borewell',
      status: 'Active'
    },
    {
      id: 'field-3',
      farmId: 'farm-2',
      name: 'Canal-side Maize',
      area: 5.1,
      soilType: 'Black soil',
      waterSource: 'Canal',
      status: 'Active'
    },
    {
      id: 'field-4',
      farmId: 'farm-3',
      name: 'Lower Delta Rice',
      area: 6.3,
      soilType: 'Clay loam',
      waterSource: 'Canal',
      status: 'Active'
    },
    {
      id: 'field-5',
      farmId: 'farm-3',
      name: 'Cotton Block A',
      area: 4.6,
      soilType: 'Red loam',
      waterSource: 'Drip irrigation',
      status: 'Active'
    },
    {
      id: 'field-6',
      farmId: 'farm-4',
      name: 'Cauvery South Plot',
      area: 3.8,
      soilType: 'Delta alluvial',
      waterSource: 'Canal',
      status: 'Active'
    }
  ],

  crops: [
    {
      id: 'crop-1',
      fieldId: 'field-1',
      crop: 'Rice',
      variety: 'Pusa Basmati 1509',
      plantingDate: localDate(-63),
      stage: 'Flowering',
      expectedHarvest: localDate(27),
      status: 'Active'
    },
    {
      id: 'crop-2',
      fieldId: 'field-2',
      crop: 'Wheat',
      variety: 'HD 3086',
      plantingDate: localDate(-22),
      stage: 'Tillering',
      expectedHarvest: localDate(92),
      status: 'Active'
    },
    {
      id: 'crop-3',
      fieldId: 'field-3',
      crop: 'Maize',
      variety: 'HQPM-1',
      plantingDate: localDate(-44),
      stage: 'Vegetative growth',
      expectedHarvest: localDate(39),
      status: 'Active'
    },
    {
      id: 'crop-4',
      fieldId: 'field-4',
      crop: 'Rice',
      variety: 'Swarna',
      plantingDate: localDate(-81),
      stage: 'Grain filling',
      expectedHarvest: localDate(13),
      status: 'Active'
    },
    {
      id: 'crop-5',
      fieldId: 'field-5',
      crop: 'Cotton',
      variety: 'Suraj',
      plantingDate: localDate(-103),
      stage: 'Boll development',
      expectedHarvest: localDate(36),
      status: 'Active'
    },
    {
      id: 'crop-6',
      fieldId: 'field-6',
      crop: 'Groundnut',
      variety: 'TMV 7',
      plantingDate: localDate(-128),
      stage: 'Harvested',
      expectedHarvest: localDate(-4),
      status: 'Harvested'
    }
  ],

  activities: [
    {
      id: 'activity-1',
      type: 'irrigation',
      fieldId: 'field-1',
      cropId: 'crop-1',
      date: localDate(1),
      status: 'Planned',
      waterLitres: 8200,
      method: 'Canal flow',
      notes: 'Check bunds before releasing water.'
    },
    {
      id: 'activity-2',
      type: 'irrigation',
      fieldId: 'field-2',
      cropId: 'crop-2',
      date: localDate(-2),
      status: 'Planned',
      waterLitres: 5100,
      method: 'Sprinkler',
      notes: 'Review soil moisture before irrigation.'
    },
    {
      id: 'activity-3',
      type: 'fertilizer',
      fieldId: 'field-3',
      cropId: 'crop-3',
      date: localDate(3),
      status: 'Planned',
      fertilizerName: 'NPK 19:19:19',
      quantity: 18,
      unit: 'kg',
      method: 'Soil application',
      notes: 'Demo schedule; verify local guidance.'
    },
    {
      id: 'activity-4',
      type: 'fertilizer',
      fieldId: 'field-4',
      cropId: 'crop-4',
      date: localDate(-5),
      status: 'Completed',
      fertilizerName: 'Urea',
      quantity: 24,
      unit: 'kg',
      method: 'Top dressing',
      notes: 'Illustrative record.'
    },
    {
      id: 'activity-5',
      type: 'pest',
      fieldId: 'field-5',
      cropId: 'crop-5',
      date: localDate(-1),
      status: 'Open',
      pestName: 'Whitefly observation',
      severity: 'High',
      description: 'Observed on a small patch; needs inspection.',
      treatment: 'Pending inspection',
      notes: 'Record symptoms before deciding treatment.'
    }
  ],

  harvests: [
    {
      id: 'harvest-1',
      fieldId: 'field-6',
      cropId: 'crop-6',
      date: localDate(-3),
      quantity: 18.5,
      unit: 'quintal',
      status: 'Completed',
      quality: 'Good',
      notes: 'Illustrative groundnut harvest record.'
    },
    {
      id: 'harvest-2',
      fieldId: 'field-2',
      cropId: 'crop-2',
      date: localDate(-1),
      quantity: 0,
      unit: 'quintal',
      status: 'Planned',
      quality: 'Not assessed',
      notes: 'Expected harvest; quantity not yet recorded.'
    },
    {
      id: 'harvest-3',
      fieldId: 'field-3',
      cropId: 'crop-3',
      date: localDate(38),
      quantity: 0,
      unit: 'quintal',
      status: 'Planned',
      quality: 'Not assessed',
      notes: 'Estimated harvest window.'
    }
  ]
});
