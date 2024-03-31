import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { useTranslation } from 'react-i18next';
import { IconContainer, StyledCheckbox, StyledLabel } from './styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setMilitary } from '../../redux/reducers/filterSortReducer';
import { RootState } from '../../redux/store';

interface MilitaryToggleProps {
    step: number;
}

const MilitaryToggle: React.FC<MilitaryToggleProps> = ({ step }) => {
    const { i18n } = useTranslation();
    const toggle = useSelector((state: RootState) => state.filterState.military);
    const dispatch = useDispatch();

    const handleChange = () => {
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

