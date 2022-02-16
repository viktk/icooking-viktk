import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Fav = ({ favoritesRecipes, getFavorites }) => {
  // appelé au chargement du composant
  // déclenche la récupération des recettes favories
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes préférées"
        text="Retrouvez ici vos recettes préférées, sympa non ?"
        recipes={favoritesRecipes}
      />
    </Page>
  );
};

Fav.propTypes = {
  favoritesRecipes: PropTypes.array.isRequired,
  getFavorites: PropTypes.func.isRequired,
};

export default Fav;
