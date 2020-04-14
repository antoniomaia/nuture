import { countries } from './countries';

export const questions = [
  {
    title: 'What country do you live in?',
    choices: countries,
    answerType: 'dropdown',
  },
  {
    title: 'Select the transport mode you use most often',
    description: 'Some stuff about diet affecting carbon emissions',
    choices: ['Car', 'Bus', 'Train', 'Motorbike', 'Bicycle', 'Walk'],
    answerType: 'single',
  },
  {
    title: 'On average how much time per day do you spend traveling?',
    description: 'Some stuff about diet affecting carbon emissions',
    choices: [''],
    answerType: 'number',
  },
  {
    title: 'How many roundtrip flights do you take each year?',
    description: 'Some stuff about diet affecting carbon emissions',
    choices: [''],
    answerType: 'number',
  },
  {
    title: 'What is your diet like?',
    description: 'Some stuff about diet affecting carbon emissions',
    choices: [
      'Vegan',
      'Vegetarian',
      'Low meat or fish',
      'Meat in some meals',
      'Meat in every meal',
    ],
    answerType: 'single',
  },
  {
    title: 'How much do you use in your home?',
    choices: ['Electricity', 'Natural Gas'],
  },
  {
    title: 'How much do you spend on new stuff monthly?',
    choices: ['Shopping', 'New Stuff'],
  },
];
