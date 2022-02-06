/* eslint-disable no-unused-vars */
import { createStore } from 'redux';

const botaoClidado = {
  botaoClidado: false,
};

const reducer = (state = botaoClidado, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClidado = !newState.botaoClidado;
      return newState;
    }
    default: {
      return state;
    }
  }
};
const store = createStore(reducer);

export default store;
