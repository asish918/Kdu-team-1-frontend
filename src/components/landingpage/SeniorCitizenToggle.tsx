import ElderlyIcon from '@mui/icons-material/Elderly';
import { useTranslation } from 'react-i18next';
import { IconContainer, StyledCheckbox, StyledLabel } from './styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setSeniorCitizen } from '../../redux/reducers/filterSortReducer';

interface SeniorCitizenToggleProps {
    step: number;
}

const SeniorCitizenToggle: React.FC<SeniorCitizenToggleProps> = ({ step }) => {
    const { i18n } = useTranslation();
    const [toggle, setToggle] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleChange = () => {
        setToggle(!toggle);
        dispatch(setSeniorCitizen(!toggle));
    }

    return (
        <div>
            <IconContainer>
                <StyledCheckbox checked={toggle} onChange={handleChange} id="seniorCitizen" name="seniorCitizen" />
                <ElderlyIcon style={{ fontSize: step === 0 ? "16px" : "30px" }} />
                {(step === 0 || screen.width <= 570) && <StyledLabel htmlFor="seniorCitizen">{i18n.t("landingPageForm.seniorCitizen")}</StyledLabel>}
            </IconContainer>
        </div>
    );
};

export default SeniorCitizenToggle;

