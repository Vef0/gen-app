import { Grid } from '@mui/material';
import {
  CheckBoxField,
  InputField,
  DatePicker,
} from 'components/atoms/form-fields';
import { FormikValues } from 'formik';
import React from 'react';

interface PropsType {
  formsField: FormikValues;
}

const VehicleForm: React.FC<PropsType> = (props) => {
  const {
    formsField: {
      // VEHICLE
      vehiculo_placa,
      vehiculo_marca,
      vehiculo_modelo,
      vehiculo_annio,
      vehiculo_color,
      vehiculo_kilometraje,
      vehiculo_combustible,
      vehiculo_personaRecojo,
      vehiculo_entrega_estimada,
    },
  } = props;

  return (
    <div>
      <Grid container spacing={3} sx={{ p: 2 }}>
        {/*VEHICLE TEXTFIELDS*/}
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_placa.name,
              label: vehiculo_placa.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_marca.name,
              label: vehiculo_marca.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_modelo.name,
              label: vehiculo_modelo.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_annio.name,
              label: vehiculo_annio.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_color.name,
              label: vehiculo_color.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_kilometraje.name,
              label: vehiculo_kilometraje.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_combustible.name,
              label: vehiculo_combustible.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_personaRecojo.name,
              label: vehiculo_personaRecojo.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            name={vehiculo_entrega_estimada.name}
            label={vehiculo_entrega_estimada.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default VehicleForm;
