import React from 'react';
import { getToken } from '../../services/localStorage';

// import { Container } from './styles';

const Game: React.FC = () => {
  const user = getToken();

  return (
    <>
      <h1>Seja bem-vindo(a) {user?.name} </h1>
      <h4>Seu personagem é: {user?.character.name} </h4>
    </>
  );
}

export default Game;