import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

type Props = {
  onNext?: () => void;
  onDiscard?: () => void;
};

const Footer: React.FC<Props> = ({ onNext, onDiscard }) => {
  return (
    <Paper
      elevation={7}
      sx={{
        p: 1,
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        bottom: 10,
      }}
    >
      <Button variant='outlined' onClick={onDiscard}>
        Discard
      </Button>
      <Button variant='contained' onClick={onNext}>
        Next
      </Button>
    </Paper>
  );
};

export default Footer;
