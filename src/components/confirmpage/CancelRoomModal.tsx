import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close'; 

const StyledDialog = styled(Dialog)({
 '& .MuiDialog-paper': {
    width: '400px',
    borderRadius: '10px',
 },
});

const StyledDialogTitle = styled(DialogTitle)({
 padding: '16px',
 display: 'flex',
 justifyContent: 'space-between',
 alignItems: 'center',
});

const StyledDialogContent = styled(DialogContent)({
 padding: '16px',
});

const StyledTextField = styled(TextField)({
 marginBottom: '16px',
});

const StyledButton = styled(Button)({
 textTransform: 'capitalize',
 marginRight: '8px',
});

const CancelRoomModal = ({ open, handleClose, handleConfirmOtp, otp, setOtp }) => {
 return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>        
        <b>Enter OTP for Cancelling the Room</b>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <StyledDialogContent>
        <StyledTextField
          autoFocus
          margin="dense"
          label="OTP"
          type="text"
          fullWidth
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </StyledDialogContent>
      <DialogActions>
        <StyledButton onClick={handleConfirmOtp}>Confirm OTP</StyledButton>
      </DialogActions>
    </StyledDialog>
 );
};

export default CancelRoomModal;


