/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Nav } from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const botaoClidado = useSelector((state) => state.botaoClidado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/Login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/404">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClidado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
