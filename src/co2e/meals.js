export const ACTIVITY_TYPE_MEAL = 'ACTIVITY_TYPE_MEAL';

export const MEAL_TYPE_VEGAN = 'MEAL_TYPE_VEGAN';
export const MEAL_TYPE_VEGETARIAN = 'MEAL_TYPE_VEGETARIAN';
export const MEAL_TYPE_FISH = 'MEAL_TYPE_FISH';
export const MEAL_TYPE_LOW_MEAT = 'MEAL_TYPE_LOW_MEAT';
export const MEAL_TYPE_MEDIUM_MEAT = 'MEAL_TYPE_MEDIUM_MEAT';
export const MEAL_TYPE_HIGH_MEAT = 'MEAL_TYPE_HIGH_MEAT';

const MEALS_PER_DAY = 3;
/**
 * calculate carbon emission of meal
 * return kgCO2 per meal
 *
 * source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/
 */
const carbonEmissionMealType = mealType => {
  switch (mealType) {
    case MEAL_TYPE_VEGAN: {
      return 2.89 / MEALS_PER_DAY;
    }
    case MEAL_TYPE_VEGETARIAN: {
      return 3.81 / MEALS_PER_DAY;
    }
    case MEAL_TYPE_FISH: {
      return 3.91 / MEALS_PER_DAY;
    }
    case MEAL_TYPE_LOW_MEAT: {
      return 4.67 / MEALS_PER_DAY;
    }
    case MEAL_TYPE_MEDIUM_MEAT: {
      return 5.63 / MEALS_PER_DAY;
    }
    case MEAL_TYPE_HIGH_MEAT: {
      return 7.19 / MEALS_PER_DAY;
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
