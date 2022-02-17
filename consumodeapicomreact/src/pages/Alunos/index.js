/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { AlunoContainer, ProfilePicture } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { get } from 'lodash'
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
export default function Alunos() {

  const [alunos, setAlunos] = useState([]);
  React.useEffect(() => {
    async function loadAlunos() {
      const res = await axios.get('/alunos');
      setAlunos(res.data);
    }
    loadAlunos();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            {get(aluno, 'Fotos[0].url', false) ? (
              <ProfilePicture>
                <img src={"http://" + aluno.Fotos[0].url} alt="teste" />
              </ProfilePicture>
            ) : (
              <FaUserCircle size={36}/>
            )}
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={16}/></Link>
            <Link to={`/aluno/${aluno.id}/delet`}><FaWindowClose size={16}/></Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
