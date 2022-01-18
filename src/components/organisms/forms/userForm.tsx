import { Grid } from '@mui/material';
import {
  CheckBoxField,
  InputField,
  SelectField,
} from 'components/atoms/form-fields';
import { FormikValues } from 'formik';
import React from 'react';

interface PropsType {
  formsField: FormikValues;
}

const clients = [
  {
    value: '',
    label: '- - Seleccione uno - -',
  },
  {
    value: '1',
    label: 'Cliente 1',
  },
  {
    value: '2',
    label: 'Cliente 2',
  },
  {
    value: '3',
    label: 'Cliente 3',
  },
];

const UserForm: React.FC<PropsType> = (props) => {
  const {
    formsField: {
      client_name,
      client_address,
      client_R_D,
      client_telephone,
      client_email,
      client_vim,
      client_select,
      client_checkbox,
    },
  } = props;
  return (
    <div>
      <Grid container spacing={3} sx={{ p: 2 }}>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: client_name.name,
              label: client_name.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: client_address.name,
              label: client_address.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: client_R_D.name,
              label: client_R_D.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: client_telephone.name,
              label: client_telephone.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: client_email.name,
              label: client_email.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: client_vim.name,
              label: client_vim.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={client_select.name}
            label={client_select.label}
            data={clients}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CheckBoxField
            name={client_checkbox.name}
            label={client_checkbox.label}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserForm;
