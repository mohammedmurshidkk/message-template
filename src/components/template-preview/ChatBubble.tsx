import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledBubble = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '5px 15px',
  color: '#000',
  maxWidth: '230px',
  fontSize: '14px',
  wordWrap: 'break-word',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  minHeight: 30,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '3px',
    left: '-7px',
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderRight: `10px solid #fff`,
    borderBottom: '10px solid transparent',
  },

  '& .title': {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export type ChatBubbleProps = {
  title?: string;
  body?: string;
  footer?: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ title, body = '', footer }) => {
  return (
    <StyledBubble>
      <Typography className='title'>{title}</Typography>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <Typography variant='caption'>{footer}</Typography>
    </StyledBubble>
  );
};

export default ChatBubble;
