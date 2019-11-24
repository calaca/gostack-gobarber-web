import { all, takeLatest, call, put, take } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import constants from './constants';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure, signUpRequest } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é prestador');
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação. Por favor, verifique seus dados.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro. Por favor, verifique seus dados.');
    yield put(signFailure());
  }
}

export default all([
  takeLatest(constants.authSignInRequest, signIn),
  takeLatest(constants.authSignUpRequest, signUp),
]);
