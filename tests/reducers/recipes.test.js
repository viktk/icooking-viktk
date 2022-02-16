// ca y est ! notre premier test
// on va tester ici notre reducer

// on va commencer par importer le reducer !
import reducer, { initialState } from 'src/reducers/recipes';

import { createGetRecipesSuccessAction } from 'src/actions/recipes';

// qu'est-ce qu'on veut tester sur un reducer ? quels sont les cas de tests ?

// describe nous permet de définir des "bouts" de tests
// ici, nous testons le reducer des requêtes
describe('recipes reducer', () => {
  describe('structure', () => {
    // est-ce que mon reducer est bien une fonction ??
    // "ca devrait etre une fonction"
    // it permet de nommer le test
    it('should be a function', () => {
      // ici, on va pouvoir faire notre assertion
      // "je m'attends a ce que le type de reducer soit une fonction"
      // "expect type of reducer to be a function"
      // expect permet de faire une assertion
      expect(typeof reducer).toBe('function');
    })
    // est-ce que mon reducer renvoie bien un objet ??
    it('should return an object', () => {
      // "je m'attends a ce que le type du return de reducer soit de type object"
      // "expect type of reducer() to be an object"
      expect(typeof reducer()).toBe('object');
    });
  });

  describe('execution', () => {
    // est-ce quand j'appelle le reducer sans parametre, je récupere bien le state initial ?
    it('should return the initial state when called without arguments', () => {
      // "je m'attends a ce que le retour du reducer soit égal au state initial"
      // "expect the return to be equal to the initial state"
      // note : pour comparer un objet (ou un tableau) entièrement (donc toutes ses clés)
      // il faut utiliser toEqual
      // car toBe ne fait qu'une comparaison de "surface"
      // en résumé :
      // je veux comparer un objet ou un tableau ----> toEqual
      // je veux comparer un type primitif (string, number, boolean) ----> toBe
      expect(reducer()).toEqual(initialState);
    });
    // est-ce que si je donne un state et une action, je récupère bien le nouveau state attendu
    it('should handle correctly GET_RECIPES_SUCCESS action', () => {
      // on commence par écrire notre assertion
      // mock = fait de simuler un truc dont aura besoin notre test
      // ici, on ne va pas donner des recettes en entier... ce que l'on veut tester, c'est surtout que le reducer sauvegarde bien ce qu'on lui donne
      const mockRecipes = [{
        id: 1,
        title: 'crepe',
      }];

      // j'aurai besoin d'un state de base !
      const state = reducer();

      // j'aurai aussi besoin d'une action !
      const action = createGetRecipesSuccessAction(mockRecipes);

      // ou bien version sans action creator
      // const action = { type: 'GET_RECIPES_SUCCESS', recipes: mockRecipes };

      // on appelle le reducer avec ancien state, et action, pour fabrique le nouveau state
      const newState = reducer(state, action);

      // "je m'attends a ce que la valeur renvoyée par le reducer (en lui donnant un state et une action contienne les recettes que j'ai ajoutées"
      expect(newState).toEqual({
        // on veut vérifier que le nouveau state est égal a l'ancien..
        ...state,
        // sauf que, dans la clé "list" il me faut maintenant les recettes que j'ai donné a l'action
        list: mockRecipes
      });
    });
  });
});
