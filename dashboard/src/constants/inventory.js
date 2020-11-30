export const inventory = [
  {
    id: 'electricity',
    name: 'Electricity',
    description: 'Enter the amount spent in the office electricity usage.',
    fields: [
      { id: 'electricityAmount', type: 'number', unit: '€' },
      {
        id: 'electricityRenewableEnergy',
        label: 'Renewable energy',
        type: 'number',
        unit: '%',
      },
    ],
  },
  {
    id: 'heating',
    name: 'Heating',
    description: 'Enter the amount spent in the office heating fuel usage.',
    fields: [
      { id: 'heatDiesel', label: 'Diesel', type: 'number', unit: '€' },
      { id: 'heatNaturalGas', label: 'Natural gas', type: 'number', unit: '€' },
      { id: 'airConditioner', label: 'Air conditioner', type: 'checkbox' },
    ],
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Enter the amount spent for each fuel type.',
    fields: [
      {
        id: 'transportationDiesel',
        label: 'Diesel',
        type: 'number',
        unit: '€',
      },
      {
        id: 'transportationGasoline',
        label: 'Gasoline',
        type: 'number',
        unit: '€',
      },
    ],
  },
  {
    id: 'water',
    name: 'Water',
    description: 'Enter the amount spent in water.',
    fields: [{ id: 'waterUsage', type: 'number', unit: '€' }],
  },
  {
    id: 'paper',
    name: 'Paper',
    description: 'Enter the amount of reams of paper. (1 ream = 500 sheets)',
    fields: [{ id: 'paperReams', type: 'number' }],
  },
];
