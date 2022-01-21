import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { MobileDateTimePicker } from '@mui/lab';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

//@ts-ignore
const DatePicker = (props) => {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      //@ts-ignore
      setSelectedDate(date);
    }
  }, [value]);

  //@ts-ignore
  function onChange(date) {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        value={selectedDate}
        onChange={onChange}
        error={isError}
        invalidDateMessage={isError && error}
        helperText={isError && error}
        inputVariant="outlined"
        format="yyyy/MM/dd hh:mm a"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
