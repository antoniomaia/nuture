import { countries } from './countries';

export const questions = [
  {
    id: 'country',
    title: 'What country do you live in?',
    choices: countries,
    answerType: 'dropdown',
  },
  {
    id: 'travelMethod',
    title: 'Select the transport method you use most often',
    description: '',
    choices: [
      { value: 'car', name: 'Car' },
      { value: 'bus', name: 'Bus' },
      { value: 'train', name: 'Train' },
      { value: 'motorbike', name: 'Motorbike' },
      { value: 'bicycle', name: 'Bicycle' },
      { value: 'walk', name: 'Walk' },
    ],
    answerType: 'single-choice',
  },
  {
    id: 'travelDistancePerYear',
    title: 'What is your average travel distance per year?',
    description: '',
    choices: [{ value: 'manual', name: '' }],
    answerType: 'input',
  },
  {
    id: 'travelDomesticFlightsPerYear',
    title: 'How many short flights do you take each year?',
    description: 'Flights less than 4 hours.',
    choices: [
      { value: 0, name: 'None' },
      { value: 3, name: '3 roundtrips' },
      { value: 6, name: '6 roundtrips' },
      { value: 'manual', name: 'Other' },
    ],
    answerType: 'single-choice',
  },
  {
    id: 'travelInternationalFlightsPerYear',
    title: 'How many long flights do you take each year?',
    description: 'Flights longer than 4 hours.',
    choices: [
      { value: 0, name: 'None' },
      { value: 2, name: '2 roundtrips' },
      { value: 4, name: '4 roundtrips' },
      { value: 'manual', name: 'Other' },
    ],
    answerType: 'single-choice',
  },
  {
    id: 'dietPreference',
    title: 'What is your diet like?',
    description: 'Some stuff about diet affecting carbon emissions',
    choices: [
      { value: 'vegan', name: 'Vegan' },
      { value: 'vegetarian', name: 'Vegetarian' },
      { value: 'lowMeat', name: 'Low meat or fish' },
      { value: 'mediumMeat', name: 'Meat in some meals' },
      { value: 'highMeat', name: 'Meat in every meal' },
    ],
    answerType: 'single-choice',
  },
  /*  {
    title: 'How much do you use in your home?',
    choices: ['Electricity', 'Natural Gas'],
  },
  {
    title: 'How much do you spend on new stuff monthly?',
    choices: ['Shopping', 'New Stuff'],
  },*/
];
