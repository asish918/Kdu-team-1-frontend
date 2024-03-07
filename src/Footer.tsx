import React from 'react';
import styled from 'styled-components';

// Styled components for the footer
const FooterContainer = styled.footer`
 background-color: ${props=>props.theme.colors.primaryDeepBlue};
 padding: 15px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 position: fixed;
 bottom: 0;
 left: 0;
 width: 100%;
 color: white;
`;

const FirstPart = styled.div`
 h1 {
    margin-right: 10px;
    font-size: 24px;
    text-transform: uppercase;
    color: white;
 }
`;

const SecondPart = styled.div`
 text-align: right;
 p {
    margin: 5px 0;
    font-size: 14px;
    opacity: 0.8;
    color: white;
 }
 p:last-child {
    margin-bottom: 0;
 }
`;

// Footer component
const Footer: React.FC = () => {
 return (
    <FooterContainer>
      <FirstPart>
        <h1>Kickdrum</h1>
      </FirstPart>
      <SecondPart>
        <p>&copy; Kickdrum Technology Group LLC.</p>
        <p>All rights reserved.</p>
      </SecondPart>
    </FooterContainer>
 );
};

export default Footer;


