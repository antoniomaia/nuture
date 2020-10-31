export const MEALS = {
  VEGAN: 'vegan',
  VEGETARIAN: 'vegetarian',
  FISH: 'fish',
  LOW_MEAT: 'lowMeat',
  MEDIUM_MEAT: 'mediumMeat',
  HIGH_MEAT: 'highMeat',
};

const MEALS_CO2 = {
  [MEALS.VEGAN]: 2.89,
  [MEALS.VEGETARIAN]: 3.81,
  [MEALS.FISH]: 3.91,
  [MEALS.LOW_MEAT]: 4.67,
  [MEALS.MEDIUM_MEAT]: 5.63,
  [MEALS.HIGH_MEAT]: 7.19,
};

const MEALS_PER_DAY = 3;
/**
 * calculate carbon emission of meal
 * return kgCO2 per meal
 *
 * source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/
 */
const carbonEmissionMealType = mealType => {
  const { VEGAN, VEGETARIAN, FISH, LOW_MEAT, MEDIUM_MEAT, HIGH_MEAT } = MEALS;
  switch (mealType) {
    case VEGAN: {
      return MEALS_CO2[VEGAN] / MEALS_PER_DAY;
    }
    case VEGETARIAN: {
      return MEALS_CO2[VEGETARIAN] / MEALS_PER_DAY;
    }
    case FISH: {
      return MEALS_CO2[FISH] / MEALS_PER_DAY;
    }
    case LOW_MEAT: {
      return MEALS_CO2[LOW_MEAT] / MEALS_PER_DAY;
    }
    case MEDIUM_MEAT: {
      return MEALS_CO2[MEDIUM_MEAT] / MEALS_PER_DAY;
    }
    case HIGH_MEAT: {
      return MEALS_CO2[HIGH_MEAT] / MEALS_PER_DAY;
    }
    default:
      throw Error(`unknown meal type: ${mealType}`);
  }
};

/**
 * calculate carbon emission of meal per year
 * return tonCO2 per year
 *
 * source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/
 */
export const carbonEmissionMealTypePerYear = mealType => {
  const emissions = carbonEmissionMealType(mealType) * 365 * MEALS_PER_DAY;
  return emissions / 1000;
};
