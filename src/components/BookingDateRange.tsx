import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';

export default function DatePickerValue() {
 const [dateRange, setDateRange] = React.useState<[Dayjs | null, Dayjs | null]>([dayjs(), dayjs().add(1, 'day')]);

 const handleDateRangeChange = (newDateRange: [Dayjs | null, Dayjs | null]) => {
    setDateRange(newDateRange);
 };

 return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        startText="Check-In"
        endText="Check-Out"
        value={dateRange}
        onChange={handleDateRangeChange}
        renderInput={(startProps:any, endProps:any) => (
          <React.Fragment>
            <TextField {...startProps} />
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
 );
}




















