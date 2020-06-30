/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getToken, Autentication } from '../../services/localStorage';
import { useHistory } from 'react-router-dom';
import { socket } from '../../services/socket/socket';



const Game: React.FC = () => {
  const [user, setUser] = useState<Autentication>()

  const history = useHistory();  

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
    socket.on('novoJogador', novoJogadorConnected);

  }

  const onConnect = () => {
    if (socket.connected) {
      console.log(socket.id);
    }
  }
  const novoJogadorConnected = (command: any) => {
    console.log('novo jogador conectado: ', command);
  }

  return (
    <>
      <h1>Seja bem-vindo(a) {user?.name} </h1>
      <h4>Seu personagem é: {user?.character.name} </h4>
    </>
  );
}

export default Game;