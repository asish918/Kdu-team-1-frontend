import ElderlyIcon from '@mui/icons-material/Elderly';
import { useTranslation } from 'react-i18next';
import { IconContainer, StyledCheckbox, StyledLabel } from './styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setSeniorCitizen } from '../../redux/reducers/filterSortReducer';
import { RootState } from '../../redux/store';

interface SeniorCitizenToggleProps {
    step: number;
}

const SeniorCitizenToggle: React.FC<SeniorCitizenToggleProps> = ({ step }) => {
    const { i18n } = useTranslation();
    const toggle = useSelector((state: RootState) => state.filterState.seniorCitizen);
    const dispatch = useDispatch();

    const handleChange = () => {
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

