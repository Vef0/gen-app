import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useField } from 'formik';
import { at } from 'lodash';
import React, { useEffect } from 'react';

interface PropsType {
  data: Array<{ label: string; value: string }>;
  label: string;
  name: string;
  fullWidth?: boolean;
}

const SelectField: React.FC<PropsType> = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error;
  const { setValue } = helper;
  // useEffect(() => setValue(selectedValue ?? ''), [selectedValue]);

  function renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }
  // const handleChangeSelect = (event: SelectChangeEvent<typeof selectedValue>) => {
  //   const { target: {value}, } = event;
  //   setValue(typeof value === 'string' ? value.split(',') : value);
  // };

  return (
    <FormControl {...rest} variant="standard" error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        value={selectedValue}
        // onChange={handleChangeSelect}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label ?? item.value}
          </MenuItem>
        ))}
      </Select>
      {renderHelperText()}
    </FormControl>
  );
};

export default SelectField;
