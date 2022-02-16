import reducer, { initialState } from 'src/reducers/user';

describe('userReducer', () => {
  describe('structure', () => {
    it('is a function', () => {
      expect(typeof reducer).toBe('function');
    });

    it('returns the state with initial state value when called without arguments', () => {
      expect(reducer()).toEqual(initialState);
    });
  });

  describe('execution', () => {
    it('should handle correctly SET_INPUT_VALUE action', () => {
      // on veut tester que l'action SET_INPUT_VALUE modifie bien un champ
      // créeons une action
      const action = {
        type: 'SET_INPUT_VALUE',
        name: 'email',
        value: 'nono@ecoleoclock.io',
      };

      // créons un state initial en appelant le reducer sans param
      const state = reducer();

      // exécutons le reducer pour obtenir le nouvel état
      const newState = reducer(state, action);

      expect(newState).toEqual({
        ...state,
        email: 'nono@ecoleoclock.io'
      });
    });
    it('should handle correctly LOGIN_SUCCESS action', () => {
      // on simule le retour de l'api 
      const mockApiData = {
        "logged": true,
        "pseudo": "John",
        "token": "montokendemoi"
      };

      // on fabrique l'action
      const action = { type: 'LOGIN_SUCCESS', data: mockApiData };

      // on prépare le state initial 
      const state = reducer();

      // on fabrique le nouveau state
      const newState = reducer(state, action);

      // et on fait une assertion
      expect(newState).toEqual({
        ...state,
        isLogged: true,
        token: 'montokendemoi',
        nickname: 'John'
      });
    });
    it('should handle correctly LOGOUT action', () => {
      const action = { type: 'LOGOUT' };

      // faisons genre que l'on est déja connectés...
      const stateWhenLoggedIn = {
        isLogged: true,
        email: 'bouclierman@herocorp.io',
        password: 'jennifer',
        nickname: 'John',
        token: '12345667',
      };

      const newState = reducer(stateWhenLoggedIn, action);

      expect(newState).toEqual({
        email: '',
        password: '',
        nickname: null,
        token: null,
        isLogged: false
      });
    });
  });
});

