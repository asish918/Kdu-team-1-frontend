import React from 'react';
import { Select, MenuItem } from '@mui/material';
import styled from 'styled-components';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const StyledSelect = styled(Select)`
  .MuiInputLabel-root {
    font-size: 1.2rem;
    color: black;
    position: inherit;
    margin-bottom: -10px;
    margin-left: -10px;
    width: 110px;
  }

  .MuiInputBase-input {
    padding: 0;
    font-size: 0.9rem;
  }

  .MuiOutlinedInput-root {
    border: 1px solid ${props => props.theme.colors.lightGrey};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onChange(e.target.value as string)}
    >
      <MenuItem value="price low">Price Low</MenuItem>
      <MenuItem value="price high">Price High</MenuItem>
    </StyledSelect>
  );
};

export default SortDropdown;
