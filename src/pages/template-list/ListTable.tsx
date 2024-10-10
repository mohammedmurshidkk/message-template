import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useTemplate from '../../hooks/useTemplate';

const ListTable = () => {
  const { templateList } = useTemplate();

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'name',
      headerName: 'Template name',
      width: 200,
    },
    {
      field: 'category',
      headerName: 'Category',
    },
    {
      field: 'language',
      headerName: 'Language',
    },
    {
      field: 'status',
      headerName: 'Status',
    },
    {
      field: 'messageSent',
      headerName: 'Message sent',
      type: 'number',
    },
    {
      field: 'messageOpen',
      headerName: 'Message opened',
      type: 'number',
    },
    {
      field: 'topBlockReason',
      headerName: 'Top block reason',
    },
    {
      field: 'lastEdited',
      headerName: 'Last Edited',
    },
  ];

  const rows = templateList?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      category: item?.category || 'N/A',
      language: item?.language || 'N/A',
      status: item?.status || 'N/A',
      messageSent: item?.messageSent || 0,
      messageOpen: item?.messageOpen || 0,
      topBlockReason: item?.topBlockReason || 'N/A',
      lastEdited: new Date(item?.lastEdited || '').toLocaleDateString() || 'N/A',
    };
  });

  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        disableColumnMenu
        pageSizeOptions={[20]}
        disableRowSelectionOnClick
      />
    </Paper>
  );
};

export default ListTable;
