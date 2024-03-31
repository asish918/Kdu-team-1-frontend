import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Rating, Theme, SxProps } from '@mui/material';
import { styled } from '@mui/system';
import { useLocation } from 'react-router-dom';
import { ReviewRequest } from '../../types';
import { axiosRequest, prodUrlGenerator, urlGenerator } from '../../utils/util';
import { RequestType } from '../../utils/enums';
import { validateAndExtractToken } from '../../utils/jwtUtils';
import { Toaster, toast } from 'react-hot-toast';

const StyledTypography = styled(Typography)`
 margin-top: 10px;
 margin-right: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const modalStyle: SxProps<Theme> = {
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  marginInline: 'auto'
};

const FeedbackModal: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');


  const buttonDisabled = (): boolean => {
    return feedback.length == 0 || !token || !rating;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const tokenObj = await validateAndExtractToken(token!, `${process.env.JWT_KEY}`);

      const requestBody: ReviewRequest = {
        user_email: tokenObj!.email,
        review: feedback,
        room_type_id: parseInt(tokenObj!.roomTypeId),
        rating: rating!
      }

      const res = await axiosRequest(prodUrlGenerator(`${process.env.ROOM_REVIEW_API}`), RequestType.POST, requestBody);
      toast.success(res.data);
      setRating(0);
      setFeedback("");
    } catch (error: unknown) {
      toast.error(error.toString());
      setRating(0);
      setFeedback("");
    }
  };

  useEffect(() => {
    if (!token) throw new Error("Unauthorized request to feedback form")
  }, [token])

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={modalStyle}>
      <Toaster />
      <Typography variant="h6" gutterBottom>
        Room Review
      </Typography>
      <Box display="flex" alignItems="center" marginTop={2}>
        <StyledTypography variant="h6" gutterBottom>
          Rating
        </StyledTypography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>
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
      <StyledButton disabled={buttonDisabled()} variant="contained" color="primary" type="submit" fullWidth>
        Submit
      </StyledButton>
    </Box>
  );
};

export default FeedbackModal;






