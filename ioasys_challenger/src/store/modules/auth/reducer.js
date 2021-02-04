import produce from 'immer';

const INICIAL_STATE = {
  newExternalSeller: false,
  firstTimeOpened: true,
  useremail: null,
  permissions: [],
  profile: null,
  token: null,
  signed: false,
  isLoading: false,
  deviceRegister: null,
  is_seller: null,
  error: null,
  /**
   * 0 -> Cadastro realizado com sucesso
   *
   * 10 -> error de autenticação
   * 11 -> falha de comunicação
   * 12-> Permissão inválida
   *
   * Create account:
   * 21 -> cpf invalido
   * 22 -> E-mail inválido
   * 23 -> erro nao previsto
   * 25 -> código da loja inválido
   * 20 -> falha de comunicação
   */
};
export default function auth(state = INICIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/FIRST_TIME_OPENED': {
        draft.firstTimeOpened = false;
        break;
      }
      case '@auth/SIGN_IN_REQUEST': {
        draft.isLoading = true;
        draft.error = null;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.permissions = action.payload.permissions;
        draft.profile = action.payload.profile;
        draft.useremail = action.payload.useremail;
        draft.deviceRegister = action.payload.device;
        draft.is_seller = action.payload.is_seller;
        draft.signed = true;
        draft.isLoading = false;
        draft.error = null;
        break;
      }
      case '@auth/SET_PROFILE': {
        draft.profile = action.payload.profile;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.signed = false;
        draft.isLoading = false;
        draft.error = action.payload.errorType;
        break;
      }
      case '@user/USER_PROFILE_EDIT_REQUEST_SUCCESS': {
        draft.useremail = action.payload.email;
        break;
      }
      case '@auth/SET_ERROR_NULL': {
        draft.error = null;
        break;
      }
      case '@auth/START_APP': {
        draft.error = null;
        draft.isLoading = false;
        break;
      }
      case '@auth/SIGN_OUT_SUCCESS': {
        draft.token = null;
        draft.permissions = [''];
        draft.profile = null;
        draft.useremail = null;
        draft.deviceRegister = null;
        draft.signed = false;
        draft.isLoading = false;
        draft.error = null;
        draft.newExternalSeller = false;
        break;
      }
      case '@auth/SIGN_UP_REQUEST': {
        draft.isLoading = true;
        break;
      }
      case '@auth/EXTERNAL_SELLER_SIGN_UP_REQUEST': {
        draft.isLoading = true;
        break;
      }
      case '@auth/NEW_EXTERNAL_SELLER': {
        draft.newExternalSeller = action.payload.option;
        break;
      }

      default:
        return state;
    }
  });
}
