import { SxProps, Theme, styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.colors.primaryNavyBlue,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.colors.primaryNavyBlue,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        '& .CustomStepIcon-completedIcon': {
            color: 'white',
            zIndex: 1,
            fontSize: 25,
            padding: 5,
            backgroundColor: theme.colors.primaryNavyBlue,
            borderRadius: '50%'
        },
        '& .CustomStepIcon-circle': {
            zIndex: 1,
            fontSize: 25,
            padding: 5,
            backgroundColor: ownerState.active ? theme.colors.primaryRed : 'currentColor',
            borderRadius: '50%',
        },
    }),
);

function CustomStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
        <StepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="CustomStepIcon-completedIcon" />
            ) : (
                <Check className="CustomStepIcon-circle" />
            )}
        </StepIconRoot>
    );
}

const StepperContainerStyles: SxProps<Theme> = {
    width: {
        md: "70%"
    },
    marginInline: 'auto',
    marginTop: '10px'
}


export default function CustomStepper() {
    const step = useSelector((state: RootState) => state.appNavigation.step);
    const { t, i18n } = useTranslation();
    const steps = [`1. ${i18n.t("stepper.step1")}`, `2. ${i18n.t("stepper.step2")}`, `3. ${i18n.t("stepper.step3")}`];

    return (
        <Stack sx={StepperContainerStyles} spacing={1}>
            <Stepper alternativeLabel activeStep={step} connector={<CustomConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}