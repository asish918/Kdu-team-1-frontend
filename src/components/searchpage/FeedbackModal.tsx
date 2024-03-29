import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Modal, Rating } from '@mui/material';
import { styled } from '@mui/system';

interface FeedbackFormProps {
 onSubmit: (feedback: string, name: string, email: string, rating: number) => void;
 open: boolean;
 handleClose: () => void;
}

const StyledTypography = styled(Typography)({
 marginTop: '10px',
 marginRight: '16px',
});

const StyledButton = styled(Button)({
 marginTop: '16px',
});

const FeedbackModal: React.FC<FeedbackFormProps> = ({ onSubmit, open, handleClose }) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [feedback, setFeedback] = useState('');
 const [rating, setRating] = useState<number | null>(null);

 const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(feedback, name, email, rating || 0);
    handleClose();
 };

 // Define the style for the modal content
 const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
 };

 return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={modalStyle}>
        <Typography variant="h6" gutterBottom>
          Feedback Form
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Feedback"
          variant="outlined"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Box display="flex" alignItems="center" marginTop={2}>
          <StyledTypography variant="h6" gutterBottom>
            Ratings
          </StyledTypography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Box>
        <StyledButton variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </StyledButton>
      </Box>
    </Modal>
 );
};

export default FeedbackModal;






