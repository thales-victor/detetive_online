/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getToken, Autentication } from '../../services/localStorage';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';

// import { Container } from './styles';

const Game: React.FC = () => {
  const [user, setUser] = useState<Autentication>()

  const history = useHistory();
  const socket = io('http://localhost:3001');
  

  useEffect(() => {
    getUserToken();
  }, []);

  const getUserToken = () => {
    const response = getToken();
    if (!response) {
      history.push('/');
      return;
    }
    setUser(response);
    startSocket();
  }

  const startSocket = () => {
    socket.on('connect', onConnect);
  }

  const onConnect = () => {
    console.log(socket.id);
  }

  return (
    <>
      <h1>Seja bem-vindo(a) {user?.name} </h1>
      <h4>Seu personagem é: {user?.character.name} </h4>
    </>
  );
}

export default Game;