import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { apiRegister } from '../../apis/user'

const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const [payload, setPayload] = React.useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate()
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleRegister = async () => {
        if (!payload.email || !payload.password) {
            console.log('Vui long nhap lai thong tin')
        }
        try {
            const response = await apiRegister(payload)
            if (response.err === 0) {
                console.log('Dang nhap thanh cong')
                navigate('/login')
            }
        } catch (err) {
            console.log('Xảy ra lỗi đăng kí :', err)
        }
    }

    return (
        <div style={{ backgroundColor: '#FFFF', position: 'relative', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '485px', height: '602.8px', borderRadius: '20px', }}>
            <Grid item xs={12} sm={6} md={4} lg={3}
                style={{ backgroundColor: '#ffffff', width: '357px', height: '538.8px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h5" component="h1" sx={{
                        mb: 2, fontWeight: 600, fontSize: "25.26px", lineHeight: "30.57px",
                        paragraphSpacing: "18.33px", mt: 2, fontFamily: 'Inter',
                        // fontWeight: 'semiBold',
                        color: '#000000'
                    }} >
                        ĐĂNG KÝ
                    </Typography>
                </div>


                <TextField
                    label="Tên đăng nhập"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={payload.email}
                    onChange={e => setPayload(prev => ({ ...prev, email: e.target.value }))}
                    sx={{

                        '& label': {
                            fontFamily: 'Inter',
                            fontWeight: 'regular',
                            fontSize: '16.84px',
                            color: '#000000',
                        },
                        // '& input': {
                        //     border: '1px solid #B0DBF1',
                        // }
                        '& input': {
                            color: '#000000',
                            '&:focus': {
                                borderColor: '#B0DBF1',
                                outline: 'none'
                            },
                        },
                    }}
                />
                <TextField
                    label="Mật khẩu"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type={showPassword ? 'text' : 'password'}
                    value={payload.password}
                    onChange={e => setPayload(prev => ({ ...prev, password: e.target.value }))}
                    sx={{
                        '& label': {
                            fontFamily: 'Inter',
                            fontWeight: 'regular',
                            fontSize: '16.84px',
                            color: '#000000',
                            mb: 3
                        },
                        '& input': {
                            color: '#000000',
                            '&:focus': {
                                borderColor: '#B0DBF1',
                                outline: 'none'
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                                sx={{ color: '#000000', opacity: 0.8 }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        ),
                    }}

                />
                <Button fullWidth size="large" onClick={handleRegister} sx={{
                    color: '#fff',
                    fontSize: '16.84px',
                    fontFamily: 'Inter',
                    fontWeight: 'semiBold',
                    backgroundColor: '#008BD1',
                    padding: '14px 0px',
                    paragraphSpacing: '18.33px',
                    '&:hover': {
                        backgroundColor: '#115293',
                    },
                    textTransform: 'none',
                    // mb: 3,
                    marginBottom: '20px',
                    mt: 3
                }}>
                    Đăng ký
                </Button>

                <div style={{ color: "black" }}>
                    Bạn đã có tài khoản? <Link to='/login' className='text-center'>Đăng nhập</Link>
                </div>
            </Grid>
        </div>
    )
}

export default Register