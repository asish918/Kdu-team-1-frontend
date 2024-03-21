import { Typography } from "@mui/material";
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { SetStateAction } from "react";
import { useTranslation } from "react-i18next";

const DateTypography = styled(Typography)`
    font-family: "Lato", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: black;
`

const DateButton = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: white;
    font-size: 1rem;
    padding: 15px;
    justify-content: space-between;
    border: 1px solid #c9c9c9;
    border-radius: 4px;
    margin-top: 5px;
`

const DateValue = styled.div<{ $step: number; }>`
`

interface DateToggleProps {
    calendarToggle: (value: SetStateAction<boolean>) => void;
    startDate: Date | null;
    endDate: Date | null;
}

export default function DateToggle({ calendarToggle, startDate, endDate }: DateToggleProps) {
    const { t } = useTranslation();

    return (
        <>
            <DateTypography variant="subtitle1" gutterBottom component="div">
                {t('landingPageForm.selectDate')}
            </DateTypography>
            <DateButton onClick={() => calendarToggle(prev => !prev)}>
                {startDate === null && <div>{t('landingPageForm.checkIn')}</div>}
                {startDate && <div className="DateValue">{startDate.toDateString()}</div>}
                <ArrowForwardIcon />
                {endDate === null && <div>{t('landingPageForm.checkOut')}</div>}
                {endDate && <div className="DateValue">{endDate.toDateString()}</div>}
                <CalendarMonthIcon />
            </DateButton>
        </>
    )
}