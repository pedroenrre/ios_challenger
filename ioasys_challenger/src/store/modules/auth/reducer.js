import produce from 'immer';

const INICIAL_STATE = {
  token: null,
  client: null,
  uid: null,
  signed: false,
};
export default function auth(state = INICIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SET_AUTH': {
        draft.token = action.payload.token;
        draft.client = action.payload.client;
        draft.uid = action.payload.uid;
        draft.signed = true;
        break;
      }
      case '@auth/AUTH_RESET': {
        draft.token = null;
        draft.client = null;
        draft.uid = null;
        draft.signed = false;
        break;
      }

      default:
        return state;
    }
  });
}
