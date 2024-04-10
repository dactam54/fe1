import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { apiGetCurrentUser } from "../../apis/user";
import { Avatar } from '@mui/material'

const Profile = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [data, setData] = useState(null)

  const fetchCurrentUser = async () => {
    const response = await apiGetCurrentUser();
    setData(response.data)
    console.log('response', response.data)
  }

  useEffect(() => { fetchCurrentUser() }, []);

  return (
    <Box m="20px">
      <Header title="USER" subtitle="Hồ sơ người dùng" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Avatar
          src={data?.avatar || 'https://via.placeholder.com/150'}
          sx={{ width: 84, height: 84, mb: 1, }}
        />
        <div>
          <label htmlFor="">Tên người dùng :</label>
          <span>
            {data?.name}
          </span>
        </div>

        <div>
          <label htmlFor="">Tên người dùng :</label>
          <span>
            {data?.email}
          </span>
        </div>

        <div>
          <label htmlFor="">Tên người dùng :</label>
          <span>
            {data?.role === 'user' ? 'USER' : 'ADMIN'}
          </span>
        </div>

      </div>




    </Box>
  );
};

export default Profile




