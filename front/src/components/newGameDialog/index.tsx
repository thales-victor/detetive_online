import React, { useState } from 'react';
import GenericDialog from '../genericDialog';
import GenericInput from '../genericInput';
import { startNewGame } from '../../services/api';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const NewGameDialog: React.FC<Props> = ({ open, setOpen }) => {
  const [name, setName] = useState<string>("");
  
  const history = useHistory();

  const handleStartNewGame = () => {
    let result = startNewGame(name);
    if (result) {
      history.push("game/" + result);
    }
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <GenericDialog
      title="Novo jogo"
      buttonText="Começar"
      open={open}
      handleClose={handleClose}
      action={handleStartNewGame}
    >
      <GenericInput
        label="Seu nome"
        value={name}
        setValue={setName}
        autoFocus
      />
    </GenericDialog>
  );
}

export default NewGameDialog;