import { getTitleByRecipesNumber } from 'src/selectors/recipes';

// "Découvrez prochainement nos recettes"
// "Découvrez notre recette"
// "Découvrez nos N recettes"


describe('getTitleByRecipesNumber', () => {

  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof getTitleByRecipesNumber).toBe('function');
    });    
    it('should return a string', () => {
      const stateBidon = {
        recipes: {
          list: [
            { title: 'une recette bidon' }
          ]
        }
      };

      expect(typeof getTitleByRecipesNumber(stateBidon)).toBe('string');
    });
  });

  describe('execution', () => {
    it('should return a specific title for no recipes', () => {
      const stateBidon = {
        recipes: {
          list: []
        }
      };

      expect(getTitleByRecipesNumber(stateBidon)).toBe('Découvrez prochainement nos recettes');
    });


    it('should return a specific title for one recipe', () => {
      const stateBidon = {
        recipes: {
          list: [
            { title: 'une recette bidon' }
          ]
        }
      };

      expect(getTitleByRecipesNumber(stateBidon)).toBe('Découvrez notre recette');
    });

    it('should return a specific title for many recipes', () => {
      const stateBidon = {
        recipes: {
          list: [
            { title: 'une recette bidon' },
            { title: 'une recette bidon' },
            { title: 'une recette bidon' }
          ]
        }
      };

      expect(getTitleByRecipesNumber(stateBidon)).toBe('Découvrez nos 3 recettes');
    });
  });
});
