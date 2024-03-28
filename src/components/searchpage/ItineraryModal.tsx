
import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const style = {
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 width: 400,
 bgcolor: 'background.paper',
 boxShadow: 24,
 p: 4,
};

const ModalComponent = ({ open, handleClose, title, content }) => {
 return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {content}
        </Typography>
      </Box>
    </Modal>
 );
};

export default ModalComponent;
