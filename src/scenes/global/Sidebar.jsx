import { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { apiGetCurrentUser } from "../../apis/user";
import { useDispatch, useSelector } from 'react-redux'
// import { Button } from '@mui/material'
import actionTypes from "../../store/actions/actionTypes";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const [data, setData] = useState(null)
  const { isAdmin } = useSelector(state => state.app)



  const getCurrentUser = async () => {
    const response = await apiGetCurrentUser()
    if (response.err === 0) {
      setData(response.data)
      console.log('Đăng nhập thành công', response.data)
    } else {
      console.log('Đăng nhập thất bại', response)
    }
  }
  useEffect(() => { getCurrentUser() }, []);


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  {/* {data?.data?.name || "Chưa có"} */}
                  Tổng quát
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  {
                    isCollapsed ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />
                  }

                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={data?.avatar || "https://via.placeholder.com/150"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {data?.name || "Chưa có"}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]} >
                  {`Role : ${data?.role === 'admin' ? "Admin" : "User"}`}
                </Typography>
              </Box>
            </Box>
          )}

          {/* ADMIN */}
          {
            isAdmin && data?.role === 'admin' ? <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Admin
              </Typography>

              <Item
                title="Quản lí người dùng"
                to="/users"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Quản lí địa điểm"
                to="/locations"
                icon={<LocationOnOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>

              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box> : <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                User
              </Typography>

              <Item
                title="Hồ sơ người dùng"
                to="/profile"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Địa điểm của tôi"
                to="/mylocations"
                icon={<LocationOnOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>

              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          }
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
