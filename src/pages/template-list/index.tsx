import Stack from '@mui/material/Stack';
import PageHeader from '../../components/PageHeader';
import FilterBar from './FilterBar';
import ListTable from './ListTable';

const MessageList = () => {
  return (
    <Stack gap={2} m={2}>
      <PageHeader header='Message Templates' />
      <FilterBar />
      <ListTable />
    </Stack>
  );
};

export default MessageList;
