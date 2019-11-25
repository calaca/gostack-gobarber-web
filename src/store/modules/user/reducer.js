import produce from 'immer';
import constantsAuth from '../auth/constants';
import constantsUser from './constants';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constantsAuth.authSignInSuccess:
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case constantsUser.userUpdateProfileSuccess:
      return produce(state, draft => {
        draft.profile = action.payload.profile;
      });
    default:
      return state;
  }
}
