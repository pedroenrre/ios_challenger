export function SetAuth(token, client, uid) {
  return {
    type: '@auth/SET_AUTH',
    payload: {token, client, uid},
  };
}

export function AuthReset() {
  return {
    type: '@auth/AUTH_RESET',
    payload: {},
  };
}
