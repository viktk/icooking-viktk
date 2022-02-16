import { connect } from 'react-redux';

import { createGetRecipesAction } from 'src/actions/recipes';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.recipes.isLoading,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => {
    dispatch(createGetRecipesAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
