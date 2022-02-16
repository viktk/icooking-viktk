import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: `Bonjour ${state.user.nickname}`,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch({
      type: 'SET_INPUT_VALUE',
      name: name,
      value: newValue,
    });
  },
  handleLogin: () => {
    // pas besoin de redonner email, et password, elles sont déja dans le state
    dispatch({ type: 'SUBMIT_LOGIN' });
  },
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
