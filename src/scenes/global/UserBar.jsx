import { useTheme } from '@emotion/react';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { apiGetCurrentUser } from '../../apis/user';


const UserBar = () => {
    const { isLogin } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [dataUser, setDataUser] = React.useState(null);


    const getCurrentUser = async () => {
        const response = await apiGetCurrentUser();
        if (response.err === 0) {
            setDataUser(response.data);
            console.log(response.data);
        }
    }

    React.useEffect(() => {
        getCurrentUser()
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);

    };

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/dang-nhap')

    };

    const handleProfile = () => {
        // dispatch({ type: 'LOGOUT' });
        navigate('/profile')

    };

    return (
        <>
            {isLogin && dataUser && <Avatar
                src={dataUser?.avatar || 'https://via.placeholder.com/150'}
                sx={{ width: 40, height: 40 }}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-hasPopup="true"
                onClick={handleClick}
            />}

            {/* <Avatar
                        sx={{
                            cursor: 'pointer',
                            backgroundColor: '#fff',
                            width: '40px',
                            height: '40px',
                            '&:active': {
                                backgroundColor: '#F8FAFD',
                            },
                        }}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-hasPopup="true"
                        onClick={handleClick}
                    >
                        <span
                            style={{
                                color: theme.palette.primary.main,
                                fontSize: '20px',
                                fontWeight: 600,
                            }}
                        >
                            H
                        </span>
                    </Avatar> */}



            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            // bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                        width: 200,
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Box
                    sx={{
                        padding: '0 14px 8px 14px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '16px',
                        }}
                    >
                        <span
                            style={{
                                fontWeight: 600,
                            }}
                        >
                            Xin chào,
                        </span>
                        <span
                            style={{
                                fontSize: '14px',
                                fontWeight: 500,
                            }}
                        >
                            {dataUser?.name}
                        </span>
                    </div>
                </Box>
                <MenuItem
                    onClick={handleProfile}
                    sx={{
                        '&:hover': {
                            backgroundColor: '#e0f2fe',
                        },
                    }}
                >
                    <Avatar /> Hồ Sơ

                </MenuItem>
                <MenuItem
                    sx={{
                        '&:hover': {
                            backgroundColor: '#e0f2fe',
                        },
                    }}
                    onClick={handleClose}
                >
                    <Avatar /> Thông tin
                </MenuItem>
                <Divider />
                <MenuItem
                    sx={{
                        '&:hover': {
                            backgroundColor: '#e0f2fe',
                        },
                    }}
                    onClick={handleClose}
                >
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Cài đặt
                </MenuItem>

                <MenuItem
                    sx={{
                        '&:hover': {
                            backgroundColor: '#e0f2fe',
                        },
                    }}
                    onClick={handleLogout}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Đăng xuất
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserBar;
