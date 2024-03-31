import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { useTranslation } from 'react-i18next';
import { IconContainer, StyledCheckbox, StyledLabel } from './styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setMilitary } from '../../redux/reducers/filterSortReducer';

interface MilitaryToggleProps {
    step: number;
}

const MilitaryToggle: React.FC<MilitaryToggleProps> = ({ step }) => {
    const { i18n } = useTranslation();
    const [toggle, setToggle] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleChange = () => {
        setToggle(!toggle);
        dispatch(setMilitary(!toggle));
    }

    return (
        <div>
            <IconContainer>
                <StyledCheckbox checked={toggle} onChange={handleChange} id="militarytoggle" name="militaryToggle" />
                <MilitaryTechIcon style={{ fontSize: step === 0 ? "16px" : "30px" }} />
                {(step === 0 || screen.width <= 570) && <StyledLabel htmlFor="militarytoggle">{i18n.t("landingPageForm.military")}</StyledLabel>}
            </IconContainer>
        </div>
    );
};

export default MilitaryToggle;

