import React from 'react';
import Grid2 from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { companies } from '../constants/company';

type Props = {
  header?: string;
};

const PageHeader: React.FC<Props> = ({ header }) => {
  return (
    <Grid2 container alignItems='center' justifyContent='space-between'>
      <Typography variant='body1' fontWeight='bold'>
        {header}
      </Typography>
      <Select size='small' defaultValue='1'>
        {companies?.map((company) => (
          <MenuItem key={company?.id} value={company?.id}>
            {company?.name}
          </MenuItem>
        ))}
      </Select>
    </Grid2>
  );
};

export default PageHeader;
