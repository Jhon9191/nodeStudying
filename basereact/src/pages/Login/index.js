import React, { useEffect } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';
import axios from '../../services/axios';

export default function Login() {
  useEffect(() => {
    axios.get('/alunos').then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <Container>
      <Title>
        Login
        <small>oie</small>
      </Title>
      <Paragrafo>Lorem Ips start_describe_definition</Paragrafo>
      <button>teste</button>
    </Container>
  );
}
