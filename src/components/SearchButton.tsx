import React from 'react';
import Button from '@mui/material/Button';

interface SearchButtonProps {
 isDisabled: boolean;
 onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ isDisabled, onClick }) => {
 return (
    <Button
      variant="contained"
      color="primary"
      disabled={isDisabled}
      onClick={onClick}
      sx={{
        backgroundColor: isDisabled ? '#ccc' : '#2f296f',
        '&:hover': {
          backgroundColor: isDisabled ? '#ccc' : '#0056b3',
        },
        width:'40%',
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: 0.5,
        },
        '&:focus': {
          outline: 'none',
        },
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out, opacity 0.3s ease-in-out',
      }}
    >
      Search
    </Button>
 );
};

export default SearchButton;









