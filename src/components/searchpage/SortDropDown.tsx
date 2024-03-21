// SortDropdown.tsx
import React from 'react';
import styled from 'styled-components';

interface SortDropdownProps {
 value: string;
 onChange: (value: string) => void;
}

const Dropdown = styled.select`
 font-size: 16px;
 padding: 5px;
 width: 110px;
 background-color: transparent;
 border: none;
 border-radius: 4px;
 appearance: none;
 -webkit-appearance: none;
 -moz-appearance: none;
 background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
 background-repeat: no-repeat;
 background-position-x: calc(100% - 10px); 
 background-position-y: 50%;

 &:focus {
   outline: none;
   border: none;
 }

 option {
   font-size: 16px; 
   border-radius: 1px;
   background-color: white; 
   padding: 5px;
 }

`;

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
 return (
    <Dropdown value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="price low">Price Low</option>
      <option value="price high">Price High</option>
    </Dropdown>
 );
};

export default SortDropdown;



