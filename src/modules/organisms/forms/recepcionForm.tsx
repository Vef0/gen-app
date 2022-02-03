import {Grid} from '@mui/material';
import {FormikValues} from 'formik';
import {DatePicker, InputField} from '../../../common/components/atoms/form-fields';
import React from 'react';

interface PropsType {
  formsField: FormikValues;
}

const RecepcionForm: React.FC<PropsType> = (props) => {
  const {
    formsField: {recepcionV_fecha, recepcionV_hora, recepcionV_trabajador},
  } = props;
  return (
    <div>
      <Grid container spacing={3} sx={{p: 2}}>
        <Grid item xs={12}>
          <DatePicker
            name={recepcionV_fecha.name}
            label={recepcionV_fecha.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: recepcionV_hora.name,
              label: recepcionV_hora.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: recepcionV_trabajador.name,
              label: recepcionV_trabajador.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RecepcionForm;
