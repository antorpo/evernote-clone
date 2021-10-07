import {ejecutarConTry} from './baseAction';
import {
  registerEmailAndPassword,
  loginEmailAndPassword,
  signOutEmailAndPassword,
} from '../../services/firebase.service';
import {showSuccessToast} from '../../utils/toast';
import {signInUser, signOutUser} from '../slices/userSlice';
import {showLoading} from '../slices/securitySlice';

export const signUp = (email, password) => {
  return ejecutarConTry(async (dispatch, getState) => {
    await registerEmailAndPassword(email, password);
    showSuccessToast('Success', 'Register complete');
  });
};

export const signIn = (email, password) => {
  return ejecutarConTry(async (dispatch, getState) => {
    const userCredentials = await loginEmailAndPassword(email, password);

    // Save the credentials in store and put signIn = true
    dispatch(
      signInUser({
        email: userCredentials.user.email,
        id: userCredentials.user.uid,
      }),
    );
    showSuccessToast('Success', `Welcome ${userCredentials.user.email}`);
  });
};

export const signOut = () => {
  return ejecutarConTry(async (dispatch, getState) => {
    await signOutEmailAndPassword();
    dispatch(signOutUser());
  });
};
