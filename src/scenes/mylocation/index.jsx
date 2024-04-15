import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { apiDeleteLocation, apiGetLocationById } from '../../apis/location'
import { Avatar, Button, } from '@mui/material'
import { apiGetCurrentUser, apiGetUserById } from "../../apis/user";
import Loading from "../../components/Loading";
import ModalDetail from "../../components/ModalDetail";
import { toast } from "react-toastify";
import { MyActions } from "../../components/MyActions";

const MyLocations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([])
  const [dataModal, setDataModal] = useState([])
  const [isOpen, setIsOpen] = useState(false)


  const getCurrentUser = async () => {
    const response = await apiGetCurrentUser()
    if (response.err === 0) {
      console.log('currentUser', response.data)
      setData(response.data.location)
    }
  }

  console.log('data', data)
  useEffect(() => {
    getCurrentUser()
  }, [])

  const handleMap = async (id) => {
    console.log('handleMap', id)
  }


  const handleDetail = async (id) => {
    const response = await apiGetLocationById(id)
    if (response.err === 0) {
      console.log('handleDetail', response.data)
      setDataModal(response.data)
      setIsOpen(true)
    }
  }

  const handleDelete = async (id) => {
    console.log('handleDelete', id)
    if (!id) return;
    const response = await apiDeleteLocation(id)
    if (response.err === 0) {
      // toast.success('Đã tải file thành công 🚀🚀🚀', {
      //   icon: '🚀',
      //   autoClose: 2000,
      //   type: 'success',
      // });
      // toast('🦄 Wow so easy!', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
      getCurrentUser()
    }
  }

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
        // console.log('params: ', params.row.openType)
        return (
          <div>
            <div>{params.row.openType === "OPEN" ? 'Đang hoạt động' : 'Ngừng hoạt động'}</div>
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
        // console.log('params: ', params.row.id)
        // <div>
        //   <Button
        //     onClick={() => handleMap(params?.row?.id)}
        //     sx={{
        //       color: '#ffff', background: '#50727B',
        //       textTransform: 'none', mr: 1
        //     }}>Chỉ đường </Button>

        //   <Button
        //     onClick={() => handleDetail(params?.row?.id)}
        //     sx={{
        //       color: '#ffff', background: '#50727B',
        //       textTransform: 'none',
        //       mr: 1
        //     }}>Xem chi tiết</Button>

        //   <Button
        //     onClick={() => handleDelete(params?.row?.id)}
        //     sx={{
        //       color: '#ffff', background: '#50727B',
        //       textTransform: 'none'
        //     }}>Xóa</Button>

        // </div>

        <MyActions
          params={params}
          handleMap={() => handleMap(params?.row?.id)}
          handleDetail={() => handleDetail(params?.row?.id)}
          handleDelete={() => handleDelete(params?.row?.id)}
        />
      ),
    },
  ];

  return (
    // <div>
    //   My Locations
    // </div>
    <>
      <Box m="20px">
        <Header
          title="USER"
          subtitle="Địa điểm của tôi"
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
          {
            data.length === 0 ? <Loading /> : <DataGrid
              rows={data}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          }
        </Box>
      </Box>

      {
        isOpen && <ModalDetail isOpen={isOpen} data={dataModal} onClose={() => setIsOpen(false)} />
      }
    </>

  );
};

export default MyLocations;
