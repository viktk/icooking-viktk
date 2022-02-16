import { connect } from 'react-redux';

import Fav from 'src/components/Fav';

const mapStateToProps = (state) => ({
  favoritesRecipes: state.recipes.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  getFavorites: () => {
    dispatch({ type: 'GET_FAVORITES' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Fav);
