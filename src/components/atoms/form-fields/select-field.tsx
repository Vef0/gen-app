import {FormControl, FormHelperText, InputLabel, MenuItem, Select, TextFieldProps} from '@mui/material';
import React from 'react';
import {useField} from "formik";
import {at} from "lodash";

interface PropsType {
  data: Array<{label: string; value: string}>
  label: string
  name: string
  fullWidth?: boolean
}

const SelectField: React.FC<PropsType>= (props) => {
  const {label, data, ...rest} = props;
  const [field, meta] = useField(props)
  const { value: selectedValue } = field
  const [touched, error] = at(meta, "touched", "error")
  const isError = touched && error && true
  function renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>
    }
  }

  return (
    <FormControl>
      <InputLabel>
        {label}
      </InputLabel>
      <Select>
        <MenuItem>
        </MenuItem>
      </Select>
    </FormControl>
  )

};

export default SelectField;