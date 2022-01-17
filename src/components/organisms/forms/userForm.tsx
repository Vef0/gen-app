import InputField from 'components/atoms/form-fields/input-field';
import React from 'react';
import {FormikValues} from "formik";
import model from "../../../utils/form-models";
import {Grid, Typography } from '@mui/material';

interface PropsType {
  formsField: FormikValues
}

const UserForm: React.FC = (props) => {
  const {
    formField: {
      client_name,
      client_address,
      client_R_D,
      client_telephone,
      client_email,
      client_vim,
    },
  } = model;
  return (
    <div>
      <Typography>Ship</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField defaultProps={{
            name: client_name.name,
            label: client_name.label,
            fullWidth: true,
          }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField defaultProps={{
            name: client_address.name,
            label: client_address.label,
            fullWidth: true,
          }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField defaultProps={{
            name: client_R_D.name,
            label: client_R_D.label,
            fullWidth: true,
          }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField defaultProps={{
            name: client_telephone.name,
            label: client_telephone.label,
            fullWidth: true,
          }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField defaultProps={{
            name: client_email.name,
            label: client_email.label,
            fullWidth: true,
          }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField defaultProps={{
            name: client_vim.name,
            label: client_vim.label,
            fullWidth: true,
          }}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserForm;