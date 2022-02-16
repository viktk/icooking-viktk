// on importe react car on va écrire au n moment du JSX
import React from 'react';
// on importe shallow depuis enzyme (voir commentaire plus bas)
import { shallow } from 'enzyme';

// on importe le composant que l'on veut tester
import Content from 'src/components/Content';

// on importe Card car on en aura besoin dans les tests
import Card from 'src/components/Card';

// on importe nos données de test... pour les donner en prop au composant <Content>
import recipes from 'src/data';

describe('<Content /> component', () => {
  // on va utiliser shallow pour faire un rendu "superficiel"
  // un genre de vrai-faux rendu, qui n'existe pas dans le DOM (normal, on est dans un terminal...)
  // mais qui sera suffisant pour vérifier que notre composant fonctionne
  const render = shallow(<Content title="Test" text="Hello World" recipes={recipes} />);

  it('should have a title', () => {
    // je peux .find sur le retour de shallow pour trouver des trucs
    // et ainsi vérifier que mon composant affiche bien ce que j'attends
    // ici, je vérifie que j'ai un titre en regardant sa classe css
    // .find peut prendre en parametre un selecteur CSS
    expect(render.find('.content-title')).toHaveLength(1);
  });

  it('should have a text content', () => {
    expect(render.find('.content-text')).toHaveLength(1);
  });

  // ca devrait avoir autant d'enfants "Cards" que de recettes
  it('should have as many Cards as recipes', () => {
    // on peut aussi donner a find un composant ! et oui !
    expect(render.find(Card)).toHaveLength(recipes.length);

  });

  // ca ne devrait pas afficher de Cards si on n'a pas de recettes
  it('should not display any cards if no recipes given', () => {
    const renderWithoutRecipes = shallow(<Content title="Test" text="Hello World" />);

    expect(renderWithoutRecipes.find(Card)).toHaveLength(0);
  });

});
