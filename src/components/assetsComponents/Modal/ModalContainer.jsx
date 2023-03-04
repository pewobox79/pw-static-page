import style from '../../../styling/Modal.module.css';
import { Box, Modal, Typography } from '@mui/material';

export default function ModalContainer({openModal, setOpenModal, externalLink, modalTitle, modalBody, clientName}) {
    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            className={style.modalSection}
        >
            <Box className={style.modalContentBox}>
                <button
                    onClick={handleClose}
                    className={style.modalCloseButton}
                >
                    X
                </button>
                <Typography id='modal-modal-title' variant='h6' component='h2' sx={{fontWeight: "bold"}}>
                    {modalTitle}
                </Typography>
                <Typography id='modal-modal-description' display={"block"} sx={{ mt: 2, wordWrap: "break-word", whiteSpace: "normal" }}>
                    {modalBody}
                </Typography>
                {externalLink ? (

                        <a href={externalLink}
                            onClick={handleClose}
                            target={'_blank'}
                            className={style.goToButton}
                            style={{ marginTop: '60px' }}
                        >
                            {`Open ${clientName} website`}
                        </a>

                ) : null}
            </Box>
        </Modal>
    );
}
