import produce from 'immer';

const INICIAL_STATE = {
  investor: null,
  enterprise: null,
};
export default function user(state = INICIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/SET_USER': {
        draft.investor = action.payload.investor;
        draft.enterprise = action.payload.enterprise;
        break;
      }
      case '@user/USER_PROFILE_RESET': {
        draft.investor = null;
        draft.enterprise = null;
        break;
      }
      default:
        return state;
    }
  });
}
