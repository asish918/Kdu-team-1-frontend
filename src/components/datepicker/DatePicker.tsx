import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { isBefore, isAfter, isSameDay, addDays } from "date-fns";
import "./Calendar.css";
import "./DatePickerStyles.css";
import { Typography } from "@mui/material";
import rightArrowIcon from "../../../Images/DateArrow.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import calendarIcon from "../../../Images/Calendar.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type ValuePiece = Date;
type Value = ValuePiece | [ValuePiece, ValuePiece];
interface RoomPrice {
    date: Date;
    price: number;
}
export function DatePicker() {
    const currentDate = new Date();
    const [value, setValue] = useState<Value>(new Date());
    const [startDate, setStartDate] = useState<ValuePiece | null>(null);
    const [endDate, setEndDate] = useState<ValuePiece | null>(null);
    const [maxDate, setMaxDate] = useState<ValuePiece | null>(null);
    const [minDate, setMinDate] = useState<ValuePiece | null>(null);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const roomPrices: RoomPrice[] = [
        { date: new Date(2024, 3, 1), price: 100 },
        { date: new Date(2024, 3, 5), price: 150 },
        { date: new Date(2024, 3, 10), price: 200 },
    ];

    useEffect(() => {
        console.log(roomPrices)
    }, [])

    const handleDateClick = (date: Date) => {
        if (!startDate) {
            setMessage("Please select end date. Max. length of stay: 14 days");
            setStartDate(date);
            setEndDate(null);
            setMaxDate(addDays(date, 10));
            setMinDate(date);
        } else if (!endDate && !isBefore(date, startDate)) {
            setEndDate(date);
            setMaxDate(null);
            setMinDate(null);
            setMessage("Minimum nightly rate over stay is $100");
        } else {
            setStartDate(date);
            setEndDate(null);
            setMaxDate(addDays(date, 10));
            setMinDate(date);
            setMessage("Please select end date. Max. length of stay: 14 days");
        }
    };

    function handelApplyButtonClick() {
        setShowCalendar(false);
    }

    function tileDisabled({ date, view }) {
        const currentDate = new Date();
        const yesterday = new Date(currentDate);
        yesterday.setDate(currentDate.getDate() - 1);
        const firstDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );
        const lastDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        );
        if (view === "month") {
            return (
                (minDate && isBefore(date, minDate)) ||
                isBefore(date, yesterday) ||
                (maxDate && isAfter(date, maxDate))
            );
        }
        if (
            (view === "double" && isBefore(date, firstDayOfMonth)) ||
            isAfter(date, lastDayOfMonth)
        ) {
            return true;
        }
    }
    function tileClassName({ date }) {
        if (startDate && isSameDay(date, startDate)) {
            return "start-end-date";
        } else if (endDate && isSameDay(date, endDate)) {
            return "start-end-date";
        } else if (
            startDate &&
            endDate &&
            isBefore(date, endDate) &&
            isAfter(date, startDate)
        ) {
            return "range-date";
        }
    }
    function tileContent({ date, view }) {
        if (view === "month") {
            const roomPrice = roomPrices.find((roomPrice) =>
                isSameDay(date, roomPrice.date)
            );
            if (roomPrice) {
                return <div className="room-price">{roomPrice.price}</div>;
            }
        }
        return null;
    }
    return (
        <div className="datePickerContainer">
            <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                className="date-dropdown-label"
            >
                Select dates
            </Typography>
            <button
                className="selected-dates"
                onClick={() => setShowCalendar((prev) => !prev)}
            >
                {startDate === null && <div className="DateValue">Check-in</div>}
                {startDate && (
                    <div className="DateValue">{startDate.toDateString()}</div>
                )}
                <ArrowForwardIcon />
                {/* <img src={rightArrowIcon} alt="date arrow Icon" /> */}
                {endDate === null && <div className="DateValue">Check-out</div>}
                {endDate && <div className="DateValue">{endDate.toDateString()}</div>}
                <CalendarMonthIcon />
                {/* <img src={calendarIcon} alt="Calendar Icon" /> */}
            </button>
            <div className="dateSelectorContainer">
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
                            <button onClick={handelApplyButtonClick} className={`apply-dates-btn ${startDate && endDate ? "apply-dates-btn-active" : "apply-dates-btn-disabled"}`} disabled={!startDate && !endDate}>Apply Dates</button>
                            <span className={`${startDate && endDate ? "rate-label" : "warning-label"}`}>{message}</span>
                        </div>
                    </div>
                )
                }
            </div >
        </div >
    );
} 