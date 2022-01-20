import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { FieldHookConfig, useField } from 'formik';

//@ts-ignore
const DatePicker = (props) => {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;

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
      <DateTimePicker
        renderInput={(params) => (
          <TextField {...params} helperText="Entrega Estimada" />
        )}
        label="DateTimePicker"
        value={selectedDate}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
