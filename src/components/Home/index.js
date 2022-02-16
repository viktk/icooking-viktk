import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Home = ({ recipes, prettyTitle }) => (
  <Page>
    <AppHeader />
    <Content
      title={prettyTitle}
      text="Recettes délicieuses, faciles et rapides pour les gourmand(e)s"
      recipes={recipes}
    />
  </Page>
);

Home.propTypes = {
  recipes: PropTypes.array.isRequired,
  prettyTitle: PropTypes.string.isRequired,
};

export default Home;
