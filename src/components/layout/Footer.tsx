import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.primaryDeepBlue};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;

  @media (max-width: 450px) {
    position: sticky;
  }
`;

const CompanyTitle = styled.div`
  h1 {
    margin-right: 10px;
    font-size: 24px;
    text-transform: uppercase;
    color: white;
  }
`;

const LegalInfo = styled.div`
  text-align: right;
  p {
    margin: 5px 0;
    font-size: 14px;
    opacity: 0.8;
    color: white;
  }
 
`;

// Footer component
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <CompanyTitle>
        <h1>{t("footer.title")}</h1>
      </CompanyTitle>
      <LegalInfo>
        <p>{t("footer.copyright")}</p>
        <p>{t("footer.rights")}</p>
      </LegalInfo>
    </FooterContainer>
  );
};

export default Footer;
