import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import React, {useEffect} from 'react';
import {useField} from 'formik';
import {MobileDateTimePicker} from '@mui/lab';

//@ts-ignore
const DatePicker = (props) => {
  const [field, meta, helper] = useField(props);
  const {label} = props;
  const {touched, error} = meta;
  const {setValue} = helper;
  const isError = touched && error;
  const {value} = field;

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
    }
  }, [value]);

  function handleChange(date: React.SetStateAction<Date | null>) {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toLocaleString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateTimePicker
        renderInput={(params) => (
          <TextField {...params} helperText="Elija uan fecha y hora"/>
        )}
        label={label}
        value={selectedDate}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
