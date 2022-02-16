import axios from 'axios';

import { createGetRecipesSuccessAction } from 'src/actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_RECIPES':
      // je recois une action GET_RECIPES....
      // je vais donc déclencher une requête HTTP sur l'endpoint /recipes
      axios.get(`${process.env.API_URL}/recipes`)
        .then((response) => {
          store.dispatch(createGetRecipesSuccessAction(response.data));
        });
      // on nexte l'action pour qu'elle arrive dans le reducer
      // dans le reducer, on réagira a GET_RECIPES
      // pour mettre isLoading a true
      next(action);
      break;
    case 'GET_FAVORITES': {
      // je réucp l'état afin de pouvoir en extraire le token
      const state = store.getState();

      const options = {
        method: 'GET',
        url: 'http://localhost:3000/favorites',
        headers: {
          // on donne le token dans le header Authorization
          // attention a l'espace après Bearer
          Authorization: `Bearer ${state.user.token}`,
        },
      };

      axios(options).then((response) => {
        console.log(response.data);
        // on  vient de récupérer nos favoris
        // stockons les dans le state
        store.dispatch({ type: 'GET_FAVORITES_SUCCESS', favorites: response.data.favorites });
      }).catch((error) => {
        console.error(error);
      });
      break;
    }
    default:
      next(action);
  }
};

export default recipesMiddleware;
