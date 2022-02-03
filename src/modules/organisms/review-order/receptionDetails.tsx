import React from 'react';
import {FormikValues} from "formik";
import {Grid, Typography} from '@mui/material';

const ReceptionDetails: React.FC<FormikValues> = (props) => {
  const {recepcionV_fecha, recepcionV_hora, recepcionV_trabajador} = props;
  return (
    <div>
      <Grid item container direction="column" xs={12} sm={6}>
        <Typography variant="h5" gutterBottom sx={{mt: 2, fontWeight: 'medium'}}>
          Datos de Recepcion del Vehiculo
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography gutterBottom sx={{fontWeight: 'medium'}}>Fecha: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{recepcionV_fecha}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom sx={{fontWeight: 'medium'}}>Hora: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{recepcionV_hora}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom sx={{fontWeight: 'medium'}}>Trabajador: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{recepcionV_trabajador}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReceptionDetails;