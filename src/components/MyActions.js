import React from "react";
import { Popover, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ReportIcon from '@mui/icons-material/Report';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export function MyActions({ handleEdit, handleDetail, handleDelete, handleMap, ...props }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickDelete = () => {
        setAnchorEl(null);
        handleDelete(props.params.data);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="mythaotac">
            {handleMap ? (
                <Tooltip title="Xem đường đi" arrow>
                    <LocationOnOutlinedIcon
                        onClick={() => {
                            handleMap(props.params.data);
                        }}
                        style={{ color: '#63c2de', fontSize: '20px' }}
                    />
                    {/* Chỉ đường */}
                </Tooltip>
            ) : (
                ''
            )}


            {handleDetail ? (
                <Tooltip title="Xem chi tiết" arrow>
                    <InfoIcon
                        onClick={() => {
                            handleDetail(props.params.data);
                        }}
                        style={{ color: '#3163c6', fontSize: '20px' }}
                    />
                </Tooltip>
            ) : (
                ''
            )}


            {handleEdit ? (
                <Tooltip title="Sửa" arrow>
                    <ModeOutlinedIcon
                        onClick={() => {
                            handleEdit(props.params.data);
                        }}
                        style={{ color: '#63c2de', fontSize: '20px' }}
                    />
                </Tooltip>
            ) : (
                ''
            )}


            {handleDelete ? (
                <Tooltip title="Xóa" arrow>
                    <DeleteOutlineIcon onClick={handleClick} style={{ color: '#f44336', fontSize: '20px' }} />
                </Tooltip>
            ) : (
                ''
            )}

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div style={{ padding: '5px' }}>
                    <div style={{ display: 'flex', fontSize: '12px', gap: '5px' }}>
                        <ReportIcon sx={{ color: 'orange', width: '18px' }} />
                        <Typography color={'#00000099'}>Xóa bản ghi này ? </Typography>
                    </div>
                    <div style={{ display: 'flex', fontSize: '16px', gap: '5px', justifyContent: 'center' }}>
                        <div onClick={handleClose} style={{ cursor: 'pointer' }}>
                            Hủy
                        </div>
                        <div onClick={handleClickDelete} style={{ cursor: 'pointer', color: '#f44336' }}>
                            Xóa
                        </div>
                    </div>
                </div>
            </Popover>
        </div>
    );
}