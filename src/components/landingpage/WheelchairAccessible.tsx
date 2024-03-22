import AccessibleIcon from '@mui/icons-material/Accessible';
import { useTranslation } from 'react-i18next';
import { IconContainer, StyledCheckbox, StyledLabel } from './styled-components';

interface WheelchairAccessibleProps {
  step: number;
}

const WheelchairAccessible: React.FC<WheelchairAccessibleProps> = ({ step }) => {
  const { i18n } = useTranslation();

  return (
    <div>
      <IconContainer>
        <StyledCheckbox id="wheelchairAccessible" name="wheelchairAccessible" />
        <AccessibleIcon style={{ fontSize: step === 0 ? "16px" : "30px" }} />
        {(step === 0 || screen.width <= 570) && <StyledLabel htmlFor="wheelchairAccessible">{i18n.t("landingPageForm.accessibility")}</StyledLabel>}
      </IconContainer>
    </div>
  );
};

export default WheelchairAccessible;

