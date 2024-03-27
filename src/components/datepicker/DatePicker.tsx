import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { isBefore, isAfter, isSameDay, addDays } from 'date-fns';
import { parseDateString } from '../../utils/util';
import { DateList, ExchangeRateData } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../utils/i18next';
import "./Calendar.css";
import "./DatePickerStyles.css";
import { setEndDatePick, setStartDatePick } from '../../redux/reducers/searchFormReducer';
import { default as DateToggleLandingPage } from '../landingpage/DateToggle';
import { default as DateToggleRoomResultPage } from '../searchpage/DateToggle';
import styled from 'styled-components';

type ValuePiece = Date;
type Value = ValuePiece | [ValuePiece, ValuePiece] | null;

const DateContainer = styled.div<{ $step: number; }>`
    position: absolute;
    top: 85px;
    left: ${props => props.$step === 0 ? "0px" : "auto"};
    right: ${props => props.$step === 0 ? "auto" : "0px"};
    
    @media (max-width: 768px) {
        right: ${props => props.$step === 0 ? "auto" : "90px"};
    }
`

interface DatePickerProps {
    step: number;
}

export function DatePicker({ step }: DatePickerProps) {
    const [value, setValue] = useState<Value>(new Date());
    const [maxDate, setMaxDate] = useState<ValuePiece | null>(null);
    const [minDate, setMinDate] = useState<ValuePiece | null>(null);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const { t, i18n } = useTranslation();
    const dispatch: AppDispatch = useDispatch();

    const roomPrices: DateList[] = useSelector((state: RootState) => state.calendar.dateList);
    const maxLengthStay: number = useSelector((state: RootState) => state.propertyConfig.property.maxLengthStay);
    const exchangeRates: ExchangeRateData = useSelector((state: RootState) => state.intel.exchangeRates);
    const activeCurrency: string = useSelector((state: RootState) => state.intel.activeCurrency);

    const startDate: string | null = useSelector((state: RootState) => state.searchForm.startDate);
    const endDate: string | null = useSelector((state: RootState) => state.searchForm.endDate);

    const handleDateClick = (date: Date) => {
        if (!startDate) {
            setMessage(`Please select end date. Max. length of stay: ${maxLengthStay} day(s)`);
            dispatch(setStartDatePick(date.toISOString()));
            dispatch(setEndDatePick(null));
            setMaxDate(addDays(date, maxLengthStay));
            setMinDate(date);
        } else if (!endDate && !isBefore(date, startDate)) {
            dispatch(setEndDatePick(date.toISOString()));
            setMaxDate(null);
            setMinDate(null);
            setMessage('Minimum nightly rate over stay is $50');
        } else {
            dispatch(setStartDatePick(date.toISOString()));
            dispatch(setEndDatePick(null));
            setMaxDate(addDays(date, maxLengthStay));
            setMinDate(date);
            setMessage(`Please select end date. Max. length of stay: ${maxLengthStay} day(s)`);
        }
    };

    const handelApplyButtonClick = () => {
        setShowCalendar(false);
    };

    const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
        const currentDate = new Date();
        const yesterday = new Date(currentDate);
        yesterday.setDate(currentDate.getDate() - 1);
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        if (view === 'month') {
            return (
                (minDate && isBefore(date, minDate)) ||
                isBefore(date, yesterday) ||
                (maxDate && isAfter(date, maxDate))
            );
        }
        if ((view === 'double' && isBefore(date, firstDayOfMonth)) || isAfter(date, lastDayOfMonth)) {
            return true;
        }
    };

    const tileClassName = ({ date }: { date: Date }) => {
        if (startDate && isSameDay(date, startDate)) {
            return 'start-end-date';
        } else if (endDate && isSameDay(date, endDate)) {
            return 'start-end-date';
        } else if (startDate && endDate && isBefore(date, endDate) && isAfter(date, startDate)) {
            return 'range-date';
        }
    };

    const tileContent = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month') {
            const roomPrice = roomPrices.find((roomPrice) => isSameDay(date, parseDateString(roomPrice.date)));
            if (roomPrice) {
                return <div className="room-price">{formatCurrency(roomPrice.price, activeCurrency, exchangeRates, i18n)}</div>;
            }
        }
        return null;
    };

    return (
        <div className="datePickerContainer">
            {
                step === 0 ?
                    <DateToggleLandingPage startDate={startDate} endDate={endDate} calendarToggle={setShowCalendar} /> :
                    <DateToggleRoomResultPage startDate={startDate} endDate={endDate} calendarToggle={setShowCalendar} />
            }
            <DateContainer $step={step} className='dateSelectorContainer'>
                {showCalendar && (
                    <div className="CalendarContainer">
                        <div className="Calendar-box">
                            <Calendar
                                onChange={setValue}
                                value={value}
                                tileDisabled={tileDisabled}
                                tileClassName={tileClassName}
                                tileContent={tileContent}
                                onClickDay={(date) => handleDateClick(date)}
                                showDoubleView={window.screen.width > 768}
                                calendarType="hebrew"
                                formatShortWeekday={(locale, date) => {
                                    const weekdayNames = ['SU', 'M', 'T', 'W', 'Th', 'F', 'S']; // Abbreviated weekday names
                                    const dayIndex = date.getDay(); // Get the index of the day (0 for Sunday, 1 for Monday, etc.)
                                    return weekdayNames[dayIndex];
                                }}
                            />
                        </div>
                        <div className="calendarBottom-box">
                            <button onClick={handelApplyButtonClick} className={`apply-dates-btn ${startDate && endDate ? 'apply-dates-btn-active' : 'apply-dates-btn-disabled'}`} disabled={!startDate && !endDate}>Apply Dates</button>
                            <span className={`${startDate && endDate ? 'rate-label' : 'warning-label'}`}>{message}</span>
                        </div>
                    </div>
                )}
            </DateContainer>
        </div>
    );
}
