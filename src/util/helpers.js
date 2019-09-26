const DOSAGE_LEVEL_LIGHT = 'light';
const DOSAGE_LEVEL_MILD = 'mild';
const DOSAGE_LEVEL_MEDIUM = 'medium';
const DOSAGE_LEVEL_STRONG = 'strong';
const DOSAGE_LEVEL_HEAVY = 'heavy';

export function getLevel(recipePerServing) {
  if (recipePerServing < 2.5) {
    return DOSAGE_LEVEL_LIGHT;
  }
  else if (recipePerServing < 15) {
    return DOSAGE_LEVEL_MILD;
  }
  else if (recipePerServing < 30) {
    return DOSAGE_LEVEL_MEDIUM;
  }
  else if (recipePerServing < 50) {
    return DOSAGE_LEVEL_STRONG;
  }
  else {
    return DOSAGE_LEVEL_HEAVY;
  }
}

export function getRecipeTotal({ weight, strength }) {
  return 10 * weight * strength;
}

export function getRecipePerServing({ weight, strength, numServings }) {
  return 10 * weight * strength / numServings;
}
