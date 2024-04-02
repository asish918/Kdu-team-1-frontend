import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// Styled components for the footer
const FooterContainer = styled.footer<{ $sticky: boolean; }>`
  background-color: ${(props) => props.theme.colors.primaryDeepBlue};
  padding-inline: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${props => props.$sticky ? "sticky" : "inehrit"};
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  padding-block: 5px;
`;

const CompanyTitle = styled.img`
    margin-right: 10px;
    font-size: 24px;
    height: 20px;
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

interface FooterProps {
  sticky: boolean
}

// Footer component
const Footer: React.FC<FooterProps> = ({ sticky }) => {
  const propertyConfig = useSelector((state: RootState) => state.propertyConfig.property)
  const { t } = useTranslation();
  return (
    <FooterContainer $sticky={sticky}>
      <CompanyTitle src={propertyConfig.footerLogoUrl} />
      <LegalInfo>
        <p>{t("footer.copyright")}</p>
        <p>{t("footer.rights")}</p>
      </LegalInfo>
    </FooterContainer>
  );
};

export default Footer;
