import { countries } from './countries';

export const questions = [
  {
    id: 'country',
    title: 'What country do you live in?',
    choices: countries,
    answerType: 'dropdown',
  },
  {
    id: 'transportMethod',
    title: 'Select the transport mode you use most often',
    description: '',
    choices: ['Car', 'Bus', 'Train', 'Motorbike', 'Bicycle', 'Walk'],
    answerType: 'single',
  },
  {
    id: 'transportTravelDistancePerYear',
    title: 'What is your average travel distance per year?',
    description: '',
    choices: [],
    answerType: 'input',
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
