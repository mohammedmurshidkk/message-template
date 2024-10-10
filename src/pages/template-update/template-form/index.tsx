import FormControlLabel from '@mui/material/FormControlLabel';
import Grid2 from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useState } from 'react';
import { HeaderType, Mode } from '../../../enums/mode';
import ContentForm from './ContentForm';
import SetUpForm from './SetupForm';
import { Box } from '@mui/material';
import { Template } from '../../../constants/template';

const { EDIT, SETUP, SUBMIT } = Mode;

type Props = {
  mode: Mode;
  templateData: Template;
  onChange: (name: keyof Template, value: any) => void;
  onModeChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};

const radios = [
  {
    label: 'Setup template',
    value: SETUP,
  },
  {
    label: 'Edit template',
    value: EDIT,
  },
  {
    label: 'Submit for review',
    value: SUBMIT,
  },
];

const TemplateForm: React.FC<Props> = ({ mode, templateData, onChange }) => {
  const resolveForm = () => {
    const map = {
      SETUP: <SetUpForm templateData={templateData} onChange={onChange} />,
      EDIT: <ContentForm templateData={templateData} onChange={onChange} />,
      SUBMIT: <></>,
    };

    return map[mode];
  };

  return (
    <Grid2 sx={{ mt: 1, mb: 5 }}>
      <RadioGroup
        row
        value={mode}
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
      >
        {radios?.map((item) => {
          return (
            <FormControlLabel
              key={item?.value}
              value={item?.value}
              control={<Radio />}
              label={item?.label}
            />
          );
        })}
      </RadioGroup>
      <Box mt={2}>{resolveForm()}</Box>
    </Grid2>
  );
};

export default TemplateForm;
