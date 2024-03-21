import AccessibleIcon from '@mui/icons-material/Accessible';
import { useTranslation } from 'react-i18next';
import { IconContainer, StyledCheckbox, StyledLabel } from './styled-components';

interface WheelchairAccessibleProps {
  step: number;
}

const WheelchairAccessible: React.FC = ({ step }: WheelchairAccessibleProps) => {
  const { i18n } = useTranslation();

  return (
    <div>
      <IconContainer>
        <StyledCheckbox id="wheelchairAccessible" name="wheelchairAccessible" />
        <AccessibleIcon style={{ fontSize: '16px' }} />
        <StyledLabel htmlFor="wheelchairAccessible">{i18n.t("landingPageForm.accessibility")}</StyledLabel>
      </IconContainer>
    </div>
  );
};

export default WheelchairAccessible;

