import {Grid, Typography} from '@mui/material';
import React from 'react';
import {FormikValues} from 'formik';

const ClientDetails: React.FC<FormikValues> = (props) => {
  const {
    formValues: {
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
      <Grid item container direction="column" xs={12} sm={6}>
        <Typography variant="h5"  gutterBottom sx={{mt: 2, fontWeight: 'medium'}}>
          Detalles del Cliente
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>Nombre: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{client_name}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>Direccion: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{client_address}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom  sx={{ fontWeight: 'medium' }}>RUC - DNI: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{client_R_D}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom  sx={{ fontWeight: 'medium' }}>Telefono: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{client_telephone}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom  sx={{ fontWeight: 'medium' }}>Email: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{client_email}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom  sx={{ fontWeight: 'medium' }}>Serie VIN: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{client_vin}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClientDetails;
