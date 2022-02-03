import React, {useEffect, useState} from 'react';
import {useField} from 'formik';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {TextField} from '@mui/material';
import moment from 'moment';

//@ts-ignore
const DateSelector = (props) => {
  const {label} = props;
  const [field,, helper] = useField(props);
  const {setValue} = helper;
  const {value} = field;
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
        const DateStringJson = JSON.stringify(moment(date).format('DD-MM-YYYY'));
        setValue(DateStringJson);
      } catch (e) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...field}
        label={`${label}`}
        value={selectedDate}
        onChange={onChange}
        renderInput={(props) => <TextField {...props} helperText={null} />}
      />
    </LocalizationProvider>
  );
};

export default DateSelector;
