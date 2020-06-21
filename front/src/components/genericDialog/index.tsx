import React from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

interface Props {
  title: string;
  buttonText: string;
  children: any;
  open: boolean;
  handleClose: () => void;
  action: () => void;
}

const GenericDialog: React.FC<Props> = ({ title, buttonText, children, open, handleClose, action }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
          </Button>
        <Button onClick={action} color="primary">
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GenericDialog;