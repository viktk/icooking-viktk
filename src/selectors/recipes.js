/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

export function getTitleByRecipesNumber(state) {
  if (state.recipes.list.length === 1) {
    return 'Découvrez notre recette';
  }

  if (state.recipes.list.length > 1) {
    return `Découvrez nos ${state.recipes.list.length} recettes`;
  }

  return 'Découvrez prochainement nos recettes';
}
