import produce from 'immer';
import constants from '../auth/constants';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.authSignInSuccess:
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
