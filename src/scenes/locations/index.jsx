import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetAllLocation, apiGetLocationById } from '../../apis/location'
import { useSelector } from 'react-redux'
import { Avatar, Button, } from '@mui/material'
import { apiGetCurrentUser, apiGetUserById } from "../../apis/user";

const Locations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([])




  const fetchData = async () => {
    const response = await apiGetAllLocation()
    if (response.err === 0) {
      console.log('locations', response.data)
      setData(response.data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: '200',
      pinned: 'left'
    },
    {
      field: "name",
      headerName: "Tên địa điểm",
      cellClassName: "name-column--cell",
      width: '200'
    },
    {
      field: "thumbnail",
      headerName: "Ảnh địa điểm",
      width: 150,
      renderCell: (params) => (

        <Avatar
          src={params.value || 'https://via.placeholder.com/150'}
          sx={{ width: 84, height: 84, mb: 1, }}
        />
      ),
    },
    {
      field: "region",
      headerName: "Vùng miền",
      cellClassName: "name-column--cell",
    },


    {
      field: "openTime",
      headerName: "Thời gian",
      cellClassName: "name-column--cell",
      renderCell: (params) => {
        console.log('params1: ', params.row.openTime[0].split('-'))
        return (
          <div>
            {/* <div>{`${params.row.openTime[0]} PM`}</div> */}
            <div>{`${params.row.openTime[0].split('-')[0]} AM - ${params.row.openTime[0].split('-')[1]} PM`}</div>
          </div>
        );
      }
    },
    {
      field: "address",
      headerName: "Địa điểm",
      cellClassName: "name-column--cell",
      width: '250',
      renderCell: (params) => {
        const addressObject = params.value;
        return (
          <div>
            <div>{addressObject.specific}</div>
          </div>
        );
      }
    },
    {
      field: "openType",
      headerName: "Trạng thái",
      cellClassName: "name-column--cell",
      width: '120',
      renderCell: (params) => {
        console.log('params: ', params.row.openType)
        return (
          <div>
            <div>{params.row.openType === "OPEN" ? 'Đang hoạt động' : 'Ngừng hoạt động'}</div>
          </div>
        );
      }
    },
    {
      field: "userId",
      headerName: "Người tạo",
      cellClassName: "name-column--cell",
      width: '150',
      renderCell: (params) => {
        console.log('params: ', params?.row?.userId)
        return (
          <div>
            <div>{params?.row?.userId || "Chua co thong tin"}</div>
          </div>
        );
      }
    },
    {
      field: "action",
      headerName: "Thao tác",
      width: 250,
      pinned: 'right',
      renderCell: (params) => (
        <div>
          <Button sx={{
            color: '#ffff', background: '#50727B',
            textTransform: 'none', mr: 1
          }}>Chỉ đường </Button>

          <Button sx={{
            color: '#ffff', background: '#50727B',
            textTransform: 'none',
            mr: 1
          }}>Xem chi tiết </Button>

          <Button sx={{
            color: '#ffff', background: '#50727B',
            textTransform: 'none'
          }}>Xóa</Button>

        </div>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="ADMIN"
        subtitle=" Quản lí địa điểm"
      // title={isAdmin ? "ADMIN" : "USER"}
      // subtitle={isAdmin ? "Quản lí địa điểm" : "Địa điểm của tôi"}
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />


      </Box>
    </Box>
  );
};

export default Locations;
