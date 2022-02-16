export const initialState = {
  isLogged: false,
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
  nickname: null,
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        // equivalent de email: ou password:
        // selon ce qui est dans action.name
        [action.name]: action.value,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: action.data.logged,
        nickname: action.data.pseudo,
        token: action.data.token,
      };
    // notons que l'action LOGOUT est traitée dans userReducer ET dans recipesReducer
    case 'LOGOUT':
      // si on se déco, on remet tout a plat
      return {
        ...state,
        token: null,
        isLogged: false,
        email: '',
        password: '',
        nickname: null,
      };
    default:
      return state;
  }
};

export default reducer;
