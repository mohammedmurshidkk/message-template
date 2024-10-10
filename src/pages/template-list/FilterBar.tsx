import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const FilterBar = () => {
  return (
    <Card sx={{ p: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Link to='add'>
        <Button variant='contained'>Create template</Button>
      </Link>
    </Card>
  );
};

export default FilterBar;
