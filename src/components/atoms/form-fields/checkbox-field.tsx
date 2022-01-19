import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import {useField} from 'formik';
import {at} from 'lodash';
import React from 'react';

interface PropsType {
  name: string;
  label: string;
}

const CheckBoxField: React.FC<PropsType> = (props) => {
  const {label, ...restProps} = props;
  const [field, meta, helper] = useField(props);
  const {setValue} = helper;

  function renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.checked);
  }

  return (
    <FormControl {...restProps}>
      <FormControlLabel
        value={field.value}
        checked={field.checked}
        control={<Checkbox {...field} onChange={onChange}/>}
        label={label}
        labelPlacement="start"
      />
    </FormControl>
  );
};

export default CheckBoxField;
