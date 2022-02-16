export const initialState = {
  list: [],
  favorites: [],
  isLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // lorsque je viens de déclencher la requête
    case 'GET_RECIPES':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_RECIPES_SUCCESS':
      return {
        ...state,
        list: action.recipes,
        isLoading: false,
      };
    case 'GET_FAVORITES_SUCCESS':
      return {
        ...state,
        favorites: action.favorites,
        isLoading: false,
      };
    // notons que l'action LOGOUT est traitée dans userReducer ET dans recipesReducer
    case 'LOGOUT':
      return {
        ...state,
        // si on se déco, on vide les favoris
        favorites: [],
      };
    default:
      return state;
  }
};

export default reducer;
