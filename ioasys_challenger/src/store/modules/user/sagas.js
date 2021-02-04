// import {takeLatest, call, put, all} from 'redux-saga/effects';

// import {
//   UserProfileRequestSuccess,
//   UserProfileRequestFailure,
//   UserProfileEditSuccess,
//   UserProfileEditRequestFailure,
//   SetUserSubordinate,
// } from './actions';

// import axios from 'axios';
// import base_url from '~/services/baseURL';

// export function* requestUserProfile({payload}) {
//   const {email, token} = payload;

//   let data = {
//     email,
//   };
//   let header = {
//     'X-Auth-Token': token,
//   };

//   try {
//     const response = yield call(axios, {
//       method: 'post',
//       url: base_url + 'cliente/dados',
//       headers: header,
//       data: data,
//       timeout: 5000,
//     });
//     const {cliente} = response.data;
//     if (cliente !== null) {
//       yield put(UserProfileRequestSuccess(cliente));
//     }
//   } catch (err) {
//     UserProfileRequestFailure(1);
//     console.log(err);
//   }
// }

// export function* requestUserEditProfile({payload}) {
//   const {nome, email, telefone, token} = payload;

//   let data = {
//     nome,
//     email,
//     telefone,
//   };

//   let header = {
//     'X-Auth-Token': token,
//   };

//   try {
//     const response = yield call(axios, {
//       method: 'post',
//       url: base_url + 'usuario/edit',
//       data: data,
//       headers: header,
//       timeout: 5000,
//     });

//     const {tipo} = response.data;
//     if (tipo === 0) {
//       yield put(UserProfileEditSuccess(nome, email, telefone));
//     }
//   } catch (err) {
//     const {tipo} = err.response.data;
//     const {status} = err.response;
//     if (status === 400) {
//       yield put(UserProfileEditRequestFailure(tipo));
//     } else {
//       yield put(UserProfileEditRequestFailure(1));
//     }
//   }
// }

// export function* requestUserSubordinate({payload}) {
//   const {token} = payload;

//   let data = {};
//   let header = {
//     'X-Auth-Token': token,
//   };

//   try {
//     const response = yield call(axios, {
//       method: 'post',
//       url: base_url + 'vendedorexterno/statusConta',
//       headers: header,
//       data: data,
//       timeout: 5000,
//     });
//     const {codereturn, cadastros} = response.data;
//     if (codereturn === 0 && cadastros.length > 0) {
//       yield put(SetUserSubordinate(cadastros[0]));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// export default all([
//   takeLatest('@user/USER_PROFILE_REQUEST', requestUserProfile),
//   takeLatest('@user/USER_PROFILE_EDIT_REQUEST', requestUserEditProfile),
//   takeLatest('@user/USER_SUBORDINATE_REQUEST', requestUserSubordinate),
// ]);
