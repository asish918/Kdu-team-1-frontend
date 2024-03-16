import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

interface SearchButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ isDisabled, onClick }) => {
  const { i18n } = useTranslation();

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
        width: '40%',
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
      {i18n.t("landingPageForm.search")}
    </Button>
  );
};

export default SearchButton;









