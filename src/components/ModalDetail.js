import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: '#ffff',
    pt: 2,
    px: 4,
    pb: 3,
};

// function ModalAcTion() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <React.Fragment>
//             <Button onClick={handleOpen}>Open Modal Action</Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="child-modal-title"
//                 aria-describedby="child-modal-description"
//             >
//                 <Box sx={{ ...style, width: 200 }}>
//                     <h2 id="child-modal-title">Text in a  Modal Action</h2>
//                     <p id="child-modal-description">
//                         Modal Action
//                     </p>
//                     <Button onClick={handleClose} >Close Modal Action</Button>
//                 </Box>
//             </Modal>
//         </React.Fragment>
//     );
// }

export default function ModalDetail({ isOpen, data, onClose }) {
    const [dataModal, setDataModal] = React.useState({})
    React.useEffect(() => {
        setDataModal(data);
    }, [data]);
    const handleClose = () => {
        onClose();
    };
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <div>
                        <h2 id="parent-modal-title">{dataModal.name || 'Chua co thong tin'}</h2>
                        <p id="parent-modal-description">
                            ID:  {dataModal.id || 'Chua co thong tin'}
                        </p>

                        <p id="parent-modal-description">
                            Tọa độ:  {`${dataModal?.address?.longitude || ''} - ${dataModal?.address?.latitude || ''}`}
                        </p>

                        <p id="parent-modal-description">
                            Vị trí:  {dataModal?.address?.specific || ''}
                        </p>
                        <p>
                            Trạng thái : {dataModal.openType === "OPEN" ? 'Đang hoạt động' : 'Ngừng hoạt động'}
                        </p>

                        <div>
                            <label>Liên hệ :</label>
                            <div>
                                <PhoneIcon /> {dataModal?.contact?.phone || 'Chưa có thông tin'}
                            </div>
                            <div>
                                <EmailIcon /> {dataModal?.contact?.email || 'Chưa có thông tin'}
                            </div>
                            <div>
                                <LanguageIcon /> {dataModal?.contact?.website || 'Chưa có thông tin'}
                            </div>

                            <div>
                                <FacebookIcon /> {dataModal?.contact?.facebook || 'Chưa có thông tin'}
                            </div>

                            <div>
                                <InstagramIcon /> {dataModal?.contact?.instagram || 'Chưa có thông tin'}
                            </div>
                        </div>

                    </div>

                    <Button onClick={handleClose} sx={{ color: '#ffff' }}>Close Modal Action</Button>
                </Box>
            </Modal>
        </div>
    );
}
