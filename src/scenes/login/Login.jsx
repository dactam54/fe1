import { Button, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { apiLogin } from '../../apis/user'
import actionTypes from '../../store/actions/actionTypes'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [rememberPassword, setRememberPassword] = React.useState(false);
    const [autoLogin, setAutoLogin] = React.useState(false);

    const [payload, setPayload] = React.useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { isLogin } = useSelector(state => state.auth)

    const [login, setLogin] = useState(() => location.state?.register ? false : true)

    useEffect(() => {
        if (isLogin) {
            navigate('/')
        }
    }, [isLogin])

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberPasswordChange = (e) => {
        setRememberPassword(e.target.checked);
    };

    const handleAutoLoginChange = (e) => {
        setAutoLogin(e.target.checked);
    };

    const handleLogin = async () => {
        if (login) {
            const response = await apiLogin({ email: payload.email, password: payload.password })

            if (response.err === 0) {
                dispatch({ type: actionTypes.LOGIN, accessToken: response.accessToken, isLogin: true })
                console.log('response', response)
                setPayload({ email: '', password: '' })
                navigate(`/`)
            } else {
                dispatch({
                    type: actionTypes.ALERT, alert: response.rs, callback: () => {
                        dispatch({ type: actionTypes.ALERT, alert: '' })
                    }
                })
            }
        } else {
            navigate('/login')
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
                        ĐĂNG NHẬP
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
                <Button fullWidth size="large" onClick={handleLogin} sx={{
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
                    Đăng nhập
                </Button>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={rememberPassword}
                                onChange={handleRememberPasswordChange}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 19.37,
                                    },
                                }}
                            />
                        }

                        label={<span style={{ fontFamily: 'Inter', fontSize: '13.47px', paragraphSpacing: "18.33px", color: '#000000', fontWeight: 500, borderRadius: '3.37px' }}>Nhớ mật khẩu</span>}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={autoLogin}
                                onChange={handleAutoLoginChange}
                                disabled={!rememberPassword}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 19.37,
                                    },
                                }}
                            />
                        }
                        label={<span style={{ fontFamily: 'Inter', fontSize: '13.47px', paragraphSpacing: "18.33px", color: '#000000', borderRadius: '3.37px', fontWeight: 500, }}>Tự đăng nhập khi nhớ mật khẩu</span>}
                    />
                </FormGroup>
                <div style={{ color: "black" }}>
                    Bạn chưa có tài khoản? <Link to='/register' className='text-center'>Đăng ký</Link>
                </div>
                <div>
                    <Link to='/forgot' className='text-center'>Quên mật khẩu</Link>
                </div>
            </Grid>
        </div>

    )
}

export default Login