import React from 'react';

import { Button } from './styles';
interface Props {
  text: string;
  action: () => void;
}
const MenuButton: React.FC<Props> = ({ text, action }) => {
  return (
    <Button onClick={action}>
      {text}
    </Button>
  );
}

export default MenuButton;