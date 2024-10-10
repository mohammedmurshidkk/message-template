import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatBubble, { ChatBubbleProps } from './ChatBubble';

type Props = ChatBubbleProps & {};

const TemplatePreview: React.FC<Props> = ({ title, footer, body }) => {
  return (
    <Stack sx={{ width: 350 }}>
      <Box sx={{ backgroundColor: '#C4C5CC', py: 2, px: 3 }}>
        <Typography fontWeight='bold'>Template preview</Typography>
      </Box>
      <Box sx={{ backgroundColor: '#E5DED5', py: 2, px: 3 }}>
        <ChatBubble title={title} footer={footer} body={body} />
      </Box>
    </Stack>
  );
};

export default TemplatePreview;
