import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { SetStateAction } from "react";
import { useTranslation } from "react-i18next";

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

const DateValue = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
`

const VerticalLine = styled.div`
    width: 1px;
    background-color: ${props => props.theme.colors.primaryDeepBlue};
    height: 50px;
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
            <DateButton onClick={() => calendarToggle(prev => !prev)}>
                <DateValue>
                    <div>{t('landingPageForm.checkIn')}</div>
                    <div className="DateValue">
                        {startDate ? startDate.toDateString() : "Any Date"}
                    </div>
                </DateValue>
                <VerticalLine />
                <DateValue>
                    <div>{t('landingPageForm.checkOut')}</div>
                    <div className="DateValue">
                        {endDate ? endDate.toDateString() : "Any Date"}
                    </div>
                </DateValue>
                <CalendarMonthIcon />
            </DateButton>
        </>
    )
}