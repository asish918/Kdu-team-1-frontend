import { Box, Button } from "@mui/material";
import styled from "styled-components";

// Search Button
export const StyledButton = styled(Button)`
  background-color: ${(props) => props.disabled ? '#ccc' : props.theme.colors.primaryNavyBlue};
  width: 40%;
  &:hover {
    background-color: ${(props) => props.disabled ? '#ccc' : props.theme.colors.secondaryBlue};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

// Styled Components for Search Form Page
export const StyledBox = styled(Box)`
  max-width: 450px;
  margin: 10px 25px 0px 25px;
  padding-block: 30px;
  padding-inline: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 1px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: white;

  @media (max-width: 450px) { 
    width: 100%;
    margin: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;
`;

export const GuestsContainer = styled.div`
  width: 70%;

   .MuiInputLabel-root {
    font-size: 1.2rem;
    color: black;
    position: inherit;
    margin-bottom: -10px;
    margin-left: -10px;
  }

  .MuiOutlinedInput-root {
    border: 1px solid ${props => props.theme.colors.lightGrey};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const RoomsContainer = styled.div`
  width: 30%;

  .MuiInputLabel-root {
    font-size: 1.2rem;
    color: black;
    position: inherit;
    margin-bottom: -10px;
    margin-left: -10px;
  }

  .MuiOutlinedInput-root {
    border: 1px solid ${props => props.theme.colors.lightGrey};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const CenteredContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// Styled Components for Accessibility Checkbox
export const StyledLabel = styled.label`
 margin-right: 10px;
 font-size: 14px;
 color: #333;
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
 cursor: pointer;
`;

export const IconContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 15px;
`;