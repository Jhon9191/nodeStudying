import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';
import { useDispatch } from 'react-redux';
import * as exampleAction from '../../store/modules/example/action';
export default function Login() {
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(exampleAction.clicaBotaoRequest());
  };

  return (
    <Container>
      <Title>
        Login
        <small>oie</small>
      </Title>
      <Paragrafo>Lorem Ips start_describe_definition</Paragrafo>
      <button onClick={handleLogin}>teste</button>
    </Container>
  );
}
