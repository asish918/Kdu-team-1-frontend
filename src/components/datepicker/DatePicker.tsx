import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import { isBefore, isAfter, isSameDay, addDays } from 'date-fns';
import { Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { parseDateString } from '../../utils/util';
import { DateList, ExchangeRateData } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../utils/i18next';
import "./Calendar.css";
import "./DatePickerStyles.css";

type ValuePiece = Date;
type Value = ValuePiece | [ValuePiece, ValuePiece] | null;

export function DatePicker() {
    const [value, setValue] = useState<Value>(new Date());
    const [startDate, setStartDate] = useState<ValuePiece | null>(null);
    const [endDate, setEndDate] = useState<ValuePiece | null>(null);
    const [maxDate, setMaxDate] = useState<ValuePiece | null>(null);
    const [minDate, setMinDate] = useState<ValuePiece | null>(null);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const datePickerRef = useRef<HTMLDivElement>(null);

    const { t, i18n } = useTranslation();

    const roomPrices: DateList[] = useSelector((state: RootState) => state.calendar.dateList);
    const maxLengthStay: number = useSelector((state: RootState) => state.propertyConfig.property.maxLengthStay);
    const exchangeRates: ExchangeRateData = useSelector((state: RootState) => state.intel.exchangeRates);
    const activeCurrency: string = useSelector((state: RootState) => state.intel.activeCurrency);

    const handleDateClick = (date: Date) => {
        if (!startDate) {
            setMessage(`Please select end date. Max. length of stay: ${maxLengthStay} day(s)`);
            setStartDate(date);
            setEndDate(null);
            setMaxDate(addDays(date, maxLengthStay));
            setMinDate(date);
        } else if (!endDate && !isBefore(date, startDate)) {
            setEndDate(date);
            setMaxDate(null);
            setMinDate(null);
            setMessage('Minimum nightly rate over stay is $50');
        } else {
            setStartDate(date);
            setEndDate(null);
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="datePickerContainer">
            <Typography variant="subtitle1" gutterBottom component="div" className="date-dropdown-label">
                {t('landingPageForm.selectDate')}
            </Typography>
            <button className="selected-dates" onClick={() => setShowCalendar(prev => !prev)}>
                {startDate === null && <div className="DateValue">{t('landingPageForm.checkIn')}</div>}
                {startDate && <div className="DateValue">{startDate.toDateString()}</div>}
                <ArrowForwardIcon />
                {endDate === null && <div className="DateValue">{t('landingPageForm.checkOut')}</div>}
                {endDate && <div className="DateValue">{endDate.toDateString()}</div>}
                <CalendarMonthIcon />
            </button>
            <div className="dateSelectorContainer">
                {showCalendar && (
                    <div ref={datePickerRef} className="CalendarContainer">
                        <div className="Calendar-box">
                            <Calendar
                                onChange={setValue}
                                value={value}
                                tileDisabled={tileDisabled}
                                tileClassName={tileClassName}
                                tileContent={tileContent}
                                onClickDay={(date) => handleDateClick(date)}
                                showDoubleView={window.screen.width >= 450}
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
            </div>
        </div>
    );
}
