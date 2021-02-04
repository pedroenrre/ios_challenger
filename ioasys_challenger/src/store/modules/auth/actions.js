export function SignInRequest(email, password, device) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password, device},
  };
}

export function SignInSuccess(token, useremail, permissions, device, profile) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      useremail,
      permissions,
      token,
      device,
      profile,
    },
  };
}

export function SetProfile(profile) {
  return {
    type: '@auth/SET_PROFILE',
    payload: {
      profile,
    },
  };
}

export function SignFailure(errorType) {
  return {
    type: '@auth/SIGN_FAILURE',
    payload: {errorType},
  };
}
export function setErrorNull() {
  return {
    type: '@auth/SET_ERROR_NULL',
  };
}

export function startApp() {
  return {
    type: '@auth/START_APP',
  };
}
export function firstTimeOpened() {
  return {
    type: '@auth/FIRST_TIME_OPENED',
  };
}

export function SignOut(token, device) {
  return {
    type: '@auth/SIGN_OUT',
    payload: {
      token,
      device,
    },
  };
}

export function SignUpRequest(
  name,
  email,
  cpf,
  phone,
  password,
  device,
  is_seller,
  codigo_ingresso,
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      cpf,
      phone,
      password,
      device,
      is_seller,
      codigo_ingresso,
    },
  };
}
export function ExternalSellerSignUpRequest(
  name,
  email,
  cpf,
  phone,
  password,
  device,
  is_external_seller,
  codigo_referencia,
) {
  return {
    type: '@auth/EXTERNAL_SELLER_SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      cpf,
      phone,
      password,
      device,
      is_external_seller,
      codigo_referencia,
    },
  };
}

export function NewExternalSeller(option) {
  return {
    type: '@auth/NEW_EXTERNAL_SELLER',
    payload: {option},
  };
}

export function SignOutSuccess() {
  return {
    type: '@auth/SIGN_OUT_SUCCESS',
  };
}
