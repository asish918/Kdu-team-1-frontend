import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton } from './styled-components';

// Define props interface
interface SearchButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

// Define SearchButton component
const SearchButton: React.FC<SearchButtonProps> = ({ isDisabled, onClick }) => {
  const { i18n } = useTranslation();

  return (
    <StyledButton
      variant="contained"
      color="primary"
      disabled={isDisabled}
      onClick={onClick}
    >
      {i18n.t("landingPageForm.search")}
    </StyledButton>
  );
};

export default SearchButton;
