export const inventory = [
  {
    name: 'Electricity',
    description: 'Enter the amount spent in the office electricity usage.',
    fields: [
      { type: 'number', unit: '€' },
      {
        label: 'Renewable energy',
        type: 'number',
        unit: '%',
      },
    ],
  },
  {
    name: 'Heating',
    description: 'Enter the amount spent in the office heating fuel usage.',
    fields: [
      { label: 'Diesel', type: 'number', unit: '€' },
      { label: 'Natural gas', type: 'number', unit: '€' },
      { label: 'Air conditioner', type: 'checkbox' },
    ],
  },
  {
    name: 'Transportation',
    description: 'Enter the amount spent for each fuel type.',
    fields: [
      { label: 'Diesel', type: 'number', unit: '€' },
      { label: 'Gasoline', type: 'number', unit: '€' },
    ],
  },
  {
    name: 'Water',
    description: 'Enter the amount spent in water.',
    fields: [{ type: 'number', unit: '€' }],
  },
  {
    name: 'Paper',
    description: 'Enter the amount of reams of paper. (1 ream = 500 sheets)',
    fields: [{ type: 'number' }],
  },
];
