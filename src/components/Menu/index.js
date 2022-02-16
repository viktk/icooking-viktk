import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const Menu = ({ recipes }) => (
  <nav className="menu">
    <NavLink
      exact
      activeClassName="menu-link--active"
      className="menu-link"
      to="/"
    >
      Accueil
    </NavLink>
    <NavLink
      exact
      activeClassName="menu-link--active"
      className="menu-link"
      to="/favorites"
    >
      ⭐ Favoris ⭐
    </NavLink>
    {recipes.map((recipe) => (
      <NavLink
        key={recipe.id}
        exact
        activeClassName="menu-link--active"
        className="menu-link"
        to={`/recipe/${recipe.slug}`}
      >
        {recipe.title}
      </NavLink>
    ))}
  </nav>
);

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
