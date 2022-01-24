import { Grid } from '@mui/material';
import { InputField } from 'common/components/atoms/form-fields';
import { FormikValues } from 'formik';
import React from 'react';

interface PropsType {
  formsField: FormikValues;
}

const ClientForm: React.FC<PropsType> = (props) => {
  const {
    formsField: {
      nro_orden,
      client_name,
      client_address,
      client_R_D,
      client_telephone,
      client_email,
      client_vin,
    },
  } = props;
  return (
    <div>
      <Grid container spacing={3} sx={{ p: 2 }}>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: nro_orden.name,
              label: nro_orden.label,
              fullWidth: true,
            }}
          />
        </Grid>
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
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: client_vin.name,
              label: client_vin.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ClientForm;
