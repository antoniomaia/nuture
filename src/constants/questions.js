import { countries } from './countries';
import { MEALS } from '../co2e/food/meals';
import { TRANSPORT } from '../co2e/transport';

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
      { name: 'Car', key: TRANSPORT.CAR },
      { name: 'Bus', key: TRANSPORT.BUS },
      { name: 'Train', key: TRANSPORT.TRAIN },
      { name: 'Motorbike', key: TRANSPORT.MOTORBIKE },
      { name: 'Bicycle', key: TRANSPORT.BICYCLE },
      { name: 'Walk', key: TRANSPORT.WALK },
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
      { value: 0, name: 'None', key: '0' },
      { value: 3, name: '3 roundtrips', key: '3' },
      { value: 6, name: '6 roundtrips', key: '6' },
      { value: 'manual', name: 'Other', key: 'other' },
    ],
    answerType: 'single-choice',
  },
  {
    id: 'travelInternationalFlightsPerYear',
    title: 'How many long flights do you take each year?',
    description: 'Flights longer than 4 hours.',
    choices: [
      { value: 0, name: 'None', key: '0' },
      { value: 2, name: '2 roundtrips', key: '2' },
      { value: 4, name: '4 roundtrips', key: '4' },
      { value: 'manual', name: 'Other', key: 'other' },
    ],
    answerType: 'single-choice',
  },
  {
    id: 'dietPreference',
    title: 'What is your diet like?',
    description: 'Some stuff about diet affecting carbon emissions',
    choices: [
      { name: 'Vegan', key: MEALS.VEGAN },
      { name: 'Vegetarian', key: MEALS.VEGETARIAN },
      { name: 'Pescatarian', key: MEALS.FISH },
      { name: 'Low meat', key: MEALS.LOW_MEAT },
      {
        name: 'Meat in some meals',
        key: MEALS.MEDIUM_MEAT,
      },
      {
        name: 'Meat in every meal',
        key: MEALS.HIGH_MEAT,
      },
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
