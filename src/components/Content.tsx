import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

const ContentDiv = styled.div`
  text-align: center;
  font-size: larger;
`;

export default function Content() {
  const { i18n } = useTranslation();
  const currency = useSelector((state: RootState) => state.auth.currency);
  const amount = useSelector((state: RootState) => state.auth.price);

  const formatCurrency = (amount: number, currency: string) => {
    switch (currency) {
      case "INR":
        return new Intl.NumberFormat(i18n.language, {
          style: "currency",
          currency: "INR",
        }).format(amount);
      case "USD":
        return new Intl.NumberFormat(i18n.language, {
          style: "currency",
          currency: "USD",
        }).format(amount);
      case "EUR":
        return new Intl.NumberFormat(i18n.language, {
          style: "currency",
          currency: "EUR",
        }).format(amount);
      default:
        return amount;
    }
  };

  return (
    <ContentDiv>
      <p>{formatCurrency(amount, currency)}</p>
    </ContentDiv>
  );
}
