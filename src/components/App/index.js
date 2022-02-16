import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Fav from 'src/containers/Fav';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({ getRecipes, loading, isLogged }) {
  // le hook useLocation nous renvoie l'url courante
  const location = useLocation();

  // pour executer du code au chargement de l'application
  // je vais utiliser useEffect avec un tableau de dépendances vides
  useEffect(() => {
    // on appelle une prop qui declencehra l'action GET_RECIPES
    // (voir le container de App)
    getRecipes();
  }, []);

  // lorsque l'url change (récupérée grace au hook useLocation)
  useEffect(() => {
    // on scroll la page en haut a gauche (0, 0)
    window.scroll(0, 0);
  }, [location]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipe/:slug">
          <Recipe />
        </Route>
        {/* on ne va ajouter la route favorites que si on est connecté */}
        {isLogged && (
          <Route exact path="/favorites">
            <Fav />
          </Route>
        )}
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
  getRecipes: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
