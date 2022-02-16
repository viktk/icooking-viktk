import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Recipe from 'src/components/Recipe';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  recipe: findRecipe(state.recipes.list, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

// une enveloppe (HoC) qui parle a redux
const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

// autour de cette enveloppe, une seconde qui parle a react-router
const containerWithRouter = withRouter(container);

export default containerWithRouter;
