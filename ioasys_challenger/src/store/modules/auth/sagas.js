// import {takeLatest, call, put, all, select} from 'redux-saga/effects';
// import api from '~/services/api';

// import {
//   SignInRequest,
//   SignInSuccess,
//   SignFailure,
//   SignOutSuccess,
//   NewExternalSeller,
// } from './actions';

// import {
//   UserProfileRequest,
//   UserProfileReset,
// } from '~/store/modules/user/actions';

// import axios from 'axios';
// import base_url from '~/services/baseURL';

// // import {} from 'react-navigation'

// export function* signIn({payload}) {
//   const {email, password, device} = payload;

//   const data = {
//     login: email,
//     pwd: password,
//   };
//   try {
//     const response = yield call(axios, {
//       method: 'post',
//       url: `${base_url}api/login`,
//       data,
//       timeout: 5000,
//     });
//     const {username, permissions, access_token} = response.data;

//     api.defaults.headers.common['X-Auth-Token'] = access_token;
//     const isClientOnly =
//       permissions.length === 1 && permissions[0] === 'ROLE_CLIENTE';
//     if (isClientOnly) {
//       yield put(SignFailure(13));
//       return;
//     }

//     if (permissions.includes('ROLE_EMPRESA')) {
//       yield put(
//         SignInSuccess(access_token, username, permissions, device, 'ADMIN'),
//       );
//       yield put(UserProfileRequest(email, access_token));
//     } else if (permissions.includes('ROLE_CONFERENTE')) {
//       yield put(
//         SignInSuccess(
//           access_token,
//           username,
//           permissions,
//           device,
//           'CONFERENTE',
//         ),
//       );
//       yield put(UserProfileRequest(email, access_token));
//     } else {
//       const data2 = {
//         token: device,
//       };
//       const header = {
//         'X-Auth-Token': access_token,
//       };
//       const response2 = yield call(axios, {
//         method: 'post',
//         url: `${base_url}cliente/new_device`, // url do servidor de homolog
//         headers: header,
//         data: data2,
//         timeout: 5000,
//       });
//       if (response2.data.tipo === 0) {
//         // Verificar perfil do usuário

//         if (permissions.includes('ROLE_VENDEDOR')) {
//           yield put(
//             SignInSuccess(
//               access_token,
//               username,
//               permissions,
//               device,
//               'VENDEDOR',
//             ),
//           );
//           yield put(UserProfileRequest(email, access_token));
//         } else if (permissions.includes('ROLE_VENDEDOR_EXTERNO')) {
//           yield put(
//             SignInSuccess(
//               access_token,
//               username,
//               permissions,
//               device,
//               'VENDEDOR_EXTERNO',
//             ),
//           );
//           // yield put(UserProfileRequest(email, access_token));
//         } else {
//           yield put(SignFailure(11));
//         }
//       } else {
//         yield put(SignFailure(11));
//       }
//     }
//   } catch (err) {
//     const erro = err.toString();
//     console.log(err);
//     if (
//       erro === 'Error: Request failed with status code 401' ||
//       erro === 'Error: Request failed with status code 400'
//     ) {
//       yield put(SignFailure(10));
//       // } else if (erro === 'Error: Network Error') {
//     } else {
//       yield put(SignFailure(11));
//     }
//   }
// }

// export function* signOut({payload}) {
//   const {token, device} = payload;
//   const data = {
//     token: device,
//   };
//   const header = {
//     'X-Auth-Token': token,
//   };

//   try {
//     if (device) {
//       yield call(axios, {
//         method: 'post',
//         url: `${base_url}cliente/remove_device`,
//         headers: header,
//         data,
//         timeout: 5000,
//       });
//     }
//     try {
//       yield call(axios, {
//         method: 'post',
//         url: `${base_url}publico/logout`,
//         timeout: 5000,
//       });
//       yield put(SignOutSuccess());
//       yield put(UserProfileReset());
//     } catch (err) {
//       console.log(`SIGN_OUT - USER: ${err}`);
//     }
//   } catch (err) {
//     console.log(`SIGN_OUT - DEVICE: ${err}`);
//   }
// }

// export function* signUp({payload}) {
//   const {
//     name,
//     email,
//     cpf,
//     phone,
//     password,
//     device,
//     is_seller,
//     codigo_ingresso,
//   } = payload;

//   const data = {
//     nome: name,
//     email,
//     cpf,
//     telefone: phone,
//     password,
//     is_seller,
//     codigo_ingresso,
//   };

//   try {
//     const response = yield call(axios, {
//       method: 'post',
//       url: `${base_url}publico/cadastrar`,
//       data,
//       timeout: 5000,
//     });
//     const {tipo} = response.data;

//     switch (tipo) {
//       case 0: {
//         yield put(SignFailure(0));
//         // yield put(SignInRequest(email, password, device));
//         break;
//       }
//       case 1: {
//         yield put(SignFailure(21));
//         break;
//       }
//       case 2: {
//         yield put(SignFailure(22));
//         break;
//       }
//       case 5: {
//         yield put(SignFailure(25));
//         break;
//       }
//       case 6: {
//         yield put(SignFailure(26));
//         break;
//       }

//       // TODO case 7: E-mail não verificado
//       default: {
//         yield put(SignFailure(23));
//         break;
//       }
//     }
//   } catch (err) {
//     yield put(SignFailure(20));
//     console.log(err);
//   }
// }
// export function* externalSellerSignUp({payload}) {
//   const {
//     name,
//     email,
//     cpf,
//     phone,
//     password,
//     device,
//     is_external_seller,
//     codigo_referencia,
//   } = payload;

//   const data = {
//     nome: name,
//     email,
//     cpf,
//     telefone: phone,
//     password,
//     is_external_seller,
//     codigo_referencia,
//   };

//   try {
//     const response = yield call(axios, {
//       method: 'post',
//       url: `${base_url}publico/cadastrar`,
//       data,
//       timeout: 5000,
//     });
//     const {tipo} = response.data;

//     switch (tipo) {
//       case 0: {
//         yield put(SignFailure(0));
//         yield put(NewExternalSeller(true));
//         // yield put(SignInRequest(email, password, device));
//         break;
//       }
//       case 1: {
//         yield put(SignFailure(21));
//         break;
//       }
//       case 2: {
//         yield put(SignFailure(22));
//         break;
//       }
//       case 5: {
//         yield put(SignFailure(25));
//         break;
//       }
//       case 6: {
//         yield put(SignFailure(26));
//         break;
//       }
//       case 8: {
//         yield put(SignFailure(28));
//         break;
//       }
//       default: {
//         yield put(SignFailure(23));
//         break;
//       }
//     }
//   } catch (err) {
//     yield put(SignFailure(20));
//     console.log(err);
//   }
// }

// export function* startApp() {
//   const {token} = yield select((state) => state.auth);
//   if (token) {
//     api.defaults.headers.common['X-Auth-Token'] = token;
//   }
// }

// export default all([
//   takeLatest('@auth/SIGN_IN_REQUEST', signIn),
//   takeLatest('@auth/SIGN_OUT', signOut),
//   takeLatest('@auth/SIGN_UP_REQUEST', signUp),
//   takeLatest('@auth/EXTERNAL_SELLER_SIGN_UP_REQUEST', externalSellerSignUp),
//   takeLatest('@auth/START_APP', startApp),
// ]);
