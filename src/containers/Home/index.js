import { connect } from 'react-redux';
import Home from 'src/components/Home';

import { getTitleByRecipesNumber } from 'src/selectors/recipes';

const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
  prettyTitle: getTitleByRecipesNumber(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
