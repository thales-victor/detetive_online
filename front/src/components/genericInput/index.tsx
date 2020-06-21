import React from 'react';
import { TextField } from '@material-ui/core';

// import { Container } from './styles';

interface Props {
  label: string;
  value: string;
  type?: string;
  autoFocus?: boolean;
  setValue: (value: string) => void;
}

const GenericInput: React.FC<Props> = ({ label, value, type = "text", autoFocus, setValue }) => {
  const handleChange = (event: any ) => {
    setValue(event.target.value);
  }

  return (

    <TextField
      variant="outlined"
      type={type}   
      label={label}
      value={value}
      autoFocus={autoFocus}
      onChange={handleChange}
      fullWidth
    />
  );
}

export default GenericInput;