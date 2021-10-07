import {showLoading} from '../slices/securitySlice';
import {showErrorToast} from '../../utils/toast';

// Thunk-Function Creator
export const ejecutarConTry = thunkFunction => async (dispatch, getState) => {
  // Mostrar loading
  dispatch(showLoading(true));

  try {
    await thunkFunction(dispatch, getState);

    // Ocultar loading
    dispatch(showLoading(false));
  } catch (err) {
    let message = '';

    if (err.code === 'auth/email-already-in-use') {
      message = 'That email address is already in use!';
    } else if (err.code === 'auth/invalid-email') {
      message = 'That email address is invalid!';
    } else {
      message = 'An error ocurred';
    }

    // Mostrar error y ocultar loading
    dispatch(showLoading(false));
    showErrorToast('Error', message);
  }
};
