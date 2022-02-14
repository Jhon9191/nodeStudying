import * as types from '../types';

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicaBotaoSucces() {
  return {
    type: types.BOTAO_CLICADO_SUCCES,
  };
}

export function clicaBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
