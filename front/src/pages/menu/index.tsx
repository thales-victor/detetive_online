import React, { useState, useEffect } from 'react';

import { Container, Title, Buttons } from './styles';
import MenuButton from '../../components/menuButton';
import NewGameDialog from '../../components/newGameDialog';
import { removeToken } from '../../services/localStorage';

const Menu: React.FC = () => {

  const [newGameOpen, setNewGameOpen] = useState<boolean>(false);

  useEffect(() => {
    removeToken();
  },[])

  const handleClickNewGame = () => {
    setNewGameOpen(true);
  }

  const handleClickJoinGame = () => {
    
  }

  return (
    <Container>
      <Title>Detetive online</Title>
      <Buttons>
        <MenuButton text="Novo jogo" action={handleClickNewGame} />
        <MenuButton text="Jogo existente" action={handleClickJoinGame} />
      </Buttons>

      <NewGameDialog
        open={newGameOpen}
        setOpen={setNewGameOpen}
      />
    </Container>
  )
}

export default Menu;