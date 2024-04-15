import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { apiDeleteUser, apiGetAllUser } from "../../apis/user";
import { Avatar, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const dispatch = useDispatch()
  const { isAdmin } = useSelector(state => state.auth);

  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await apiGetAllUser()
    console.log('response', response.data)
    setData(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])


  const handleDelete = async (id) => {
    console.log('id', id)
    // const response = await apiDeleteUser(id)
    // if (response.err === 0) {
    //   toast.success('Xóa người dùng thành công')
    // }
  }

  const columns = [
    { field: "id", headerName: "ID", width: '200', sortable: true, sticky: 'left' },
    {
      field: "avatar",
      headerName: "Ảnh đại diện",
      width: 150,
      height: 150,
      renderCell: (params) => (
        // <div style={{ height: '150px' }}>
        <Avatar
          src={params.value || 'https://via.placeholder.com/150'}
          sx={{ width: 40, height: 40 }}
        />
        // </div>

      ),
    },
    {
      field: "name",
      headerName: "Tên người dùng",
      width: 200,
      sortable: true,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { name } }) => {
        return (
          <Typography color={colors.grey[100]}>{name || "Chưa có thông tin"}</Typography>
        );
      },
    },
    {
      field: "email",
      headerName: "Tên đăng nhập",
      cellClassName: "name-column--cell",
      sortable: true,
      // flex: 1,
      width: 200,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 150,
      sortable: true,
      renderCell: ({ row: { phone } }) => {
        return (
          <Typography color={colors.grey[100]}>{phone || "Chưa có thông tin"}</Typography>
        );
      },
    },

    {
      field: "role",
      headerName: "Quyền truy cập",
      width: '200',
      sortable: true,
      sticky: 'right',
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },

    {
      field: "action",
      headerName: "Thao tác",
      width: 200,
      pinned: 'right',
      renderCell: (params) => (
        console.log('params', params?.row?.role),
        <div>
          <Button sx={{
            color: '#ffff', background: '#50727B',
            textTransform: 'none',
            mr: 1
          }}>Xem chi tiết </Button>

          <Button
            // disabled={params?.row?.role === 'admin' ? true : false}
            onClick={() => handleDelete(params?.row?.id)}
            sx={{
              color: '#ffff',
              background: '#50727B',
              textTransform: 'none',

            }}>Xóa người dùng</Button>

        </div>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="ADMIN" subtitle="Quản trị người dùng" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          // checkboxSelection
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default Users;
