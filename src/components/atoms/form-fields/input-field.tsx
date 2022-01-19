import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { useField } from 'formik';
import { at } from 'lodash';

interface PropsType {
  errorText?: string;
  defaultProps?: TextFieldProps;
}

const InputField: React.FC<PropsType> = (props) => {
  const { errorText, ...restProps } = props;
  // @ts-ignore
  // restProps.defaultProps.name should be String
  const [field, meta] = useField(restProps.defaultProps.name);
  const renderHelperText = () => {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return errorText || error;
    }
  };

  return (
    <TextField
      type="text"
      // @ts-ignore for error receive string instead of boolean but still working
      error={meta.touched && meta.error}
      helperText={renderHelperText()}
      {...field}
      {...restProps.defaultProps}
    />
  );
};

export default InputField;
