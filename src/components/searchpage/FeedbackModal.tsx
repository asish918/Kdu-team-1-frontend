import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Rating, Theme, SxProps} from '@mui/material';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)`
 margin-top: 10px;
 margin-right: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const FeedbackModal: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  // Define the style for the modal content
  const modalStyle: SxProps<Theme> = {
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    marginInline: 'auto'
  };

  return (
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
  );
};

export default FeedbackModal;






