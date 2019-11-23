import { all, takeLatest, call, put } from 'redux-saga/effects';
import constants from './constants';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Usuário não é prestador');
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest(constants.authSignInRequest, signIn)]);
