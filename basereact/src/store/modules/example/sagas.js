import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './action';
import * as types from '../types';
import { toast } from 'react-toastify';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSucces());
  } catch {
    toast.error('Erro ao fazer requisição');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
