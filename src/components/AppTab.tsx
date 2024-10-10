import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

export type TabPanelProps = {
  index: number;
  value: number;
  children?: React.ReactNode;
};

type TabData = {
  label: React.ReactNode;
  content: React.ReactNode;
};

export type AppTabProps = {
  tabs: TabData[];
};

const Wrapper = styled(Box)(({ theme }) => ({
  '& .MuiTab-root': {
    textTransform: 'none',
    letterSpacing: 0.4,
    padding: '0 !important',
    color: theme.palette.common.black,
    fontWeight: 'bold',
    border: `1px solid ${theme.palette.grey[300]}`,
  },

  '&  .Mui-selected': {
    backgroundColor: theme.palette.grey[300],
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },

  '& .MuiTabs-root': {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 10,
  },
}));

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

export default function AppTab({ tabs }: AppTabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Tabs
        variant='fullWidth'
        indicatorColor='secondary'
        textColor='inherit'
        aria-label='full width tabs'
        value={value}
        onChange={handleChange}
      >
        {tabs?.map((tab, index) => <Tab key={index} label={tab?.label} {...a11yProps(index)} />)}
      </Tabs>
      <Box>
        {tabs?.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab?.content}
          </TabPanel>
        ))}
      </Box>
    </Wrapper>
  );
}
