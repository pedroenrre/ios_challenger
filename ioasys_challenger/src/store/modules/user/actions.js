export function SetUser(investor, enterprise) {
  return {
    type: '@user/SET_USER',
    payload: {investor, enterprise},
  };
}

export function UserReset() {
  return {
    type: '@user/USER_PROFILE_RESET',
    payload: {},
  };
}
