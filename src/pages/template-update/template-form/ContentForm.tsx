import React from 'react';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { Editor } from 'primereact/editor';
import { languages } from '../../../constants/language';
import TemplatePreview from '../../../components/template-preview';
import { Template } from '../../../constants/template';
import { HeaderType } from '../../../enums/mode';

type Props = {
  templateData: Template;
  onChange: (name: keyof Template, value: any) => void;
};

const headerOptions = [
  {
    id: HeaderType.TEXT,
    name: 'Text',
  },
];

const ContentForm: React.FC<Props> = ({ templateData, onChange }) => {
  return (
    <Grid2 container gap={3}>
      <Grid2 sx={{ flexGrow: 1 }}>
        <Paper sx={{ p: 2 }}>
          <Typography fontWeight='bold'>Template name and language</Typography>
          <Grid2 container spacing={1} mt={2}>
            <Grid2 size={9}>
              <TextField
                fullWidth
                value={templateData?.name}
                size='small'
                label='Name your template'
                placeholder='Enter a template name'
                onChange={(e) => onChange('name', e?.target?.value)}
              />
            </Grid2>
            <Grid2 size={3}>
              <Select
                size='small'
                fullWidth
                value={templateData?.language}
                onChange={(e) => onChange('language', e?.target?.value)}
              >
                {languages?.map((language) => {
                  return (
                    <MenuItem key={language?.id} value={language?.id}>
                      {language?.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid2>
          </Grid2>
        </Paper>
        <Paper sx={{ mt: 2, p: 2 }}>
          <Typography fontWeight='bold'>Content</Typography>
          <Box mt={2}>
            <Typography variant='subtitle1'>
              <b>Header</b> . Optional
            </Typography>
            <Select
              size='small'
              fullWidth
              value={templateData?.headerType}
              onChange={(e) => onChange('headerType', e?.target?.value)}
            >
              {headerOptions?.map((item) => {
                return (
                  <MenuItem key={item?.id} value={item?.id}>
                    {item?.name}
                  </MenuItem>
                );
              })}
            </Select>
            <Collapse in={templateData?.headerType === HeaderType.TEXT}>
              <TextField
                fullWidth
                size='small'
                value={templateData?.header}
                sx={{ mt: 1 }}
                onChange={(e) => onChange('header', e?.target?.value)}
              />
            </Collapse>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant='subtitle2' sx={{ mb: 1 }}>
              Body
            </Typography>
            <Editor
              value={templateData.body}
              onTextChange={(e) => onChange('body', e.htmlValue)}
              style={{ height: '150px' }}
            />
          </Box>
          <Box mt={2}>
            <Typography variant='subtitle1'>
              <b>Footer</b> . Optional
            </Typography>
            <TextField
              fullWidth
              size='small'
              value={templateData?.footer}
              sx={{ mt: 1 }}
              onChange={(e) => onChange('footer', e?.target?.value)}
            />
          </Box>
        </Paper>
      </Grid2>
      <TemplatePreview
        title={templateData?.header}
        body={templateData?.body}
        footer={templateData?.footer}
      />
    </Grid2>
  );
};

export default ContentForm;
