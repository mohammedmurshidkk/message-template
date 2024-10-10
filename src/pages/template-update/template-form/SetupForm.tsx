import React from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyIcon from '@mui/icons-material/Key';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AppTab from '../../../components/AppTab';
import { Template } from '../../../constants/template';

const radios = [
  {
    label: 'Custom',
    value: 'Custom',
  },
  {
    label: 'Catalog',
    value: 'Catalog',
  },
  {
    label: 'Flows',
    value: 'Flows',
  },
  {
    label: 'Oder details',
    value: 'Oder details',
  },
];

type Props = {
  templateData: Template;
  onChange: (name: keyof Template, value: any) => void;
};

const MarketingPanel: React.FC<Props> = ({ templateData, onChange }) => {
  return (
    <Box mt={1}>
      <RadioGroup
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        value={templateData?.category}
        onChange={(_, v) => onChange('category', v)}
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
    </Box>
  );
};

const renderTab = (Icon: any, label: string) => {
  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Icon />
      {label}
    </Box>
  );
};

const SetUpForm: React.FC<Props> = ({ templateData, onChange }) => {
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant='subtitle2' fontWeight='bold'>
        Setup your template
      </Typography>
      <Typography variant='caption'>
        Choose that category that best describes your message template. Then select the message you
        want to send. <Link>Learn more about categories</Link>
      </Typography>
      <Box mt={1}>
        <AppTab
          tabs={[
            {
              label: renderTab(CampaignIcon, 'Marketing'),
              content: <MarketingPanel templateData={templateData} onChange={onChange} />,
            },
            {
              label: renderTab(NotificationsIcon, 'Utility'),
              content: <>Utility</>,
            },
            {
              label: renderTab(KeyIcon, 'Authentication'),
              content: <>Authentication</>,
            },
          ]}
        />
      </Box>
    </Card>
  );
};

export default SetUpForm;
