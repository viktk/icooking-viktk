export const GET_RECIPES = 'GET_RECIPES';

export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';

export const createGetRecipesAction = () => ({
  type: GET_RECIPES,
});

export const createGetRecipesSuccessAction = (recipes) => ({
  type: GET_RECIPES_SUCCESS,
  recipes: recipes,
});
