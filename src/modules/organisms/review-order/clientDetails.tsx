import {Grid, List, Typography, ListItem, ListItemText} from '@mui/material';
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
      <Typography variant="h5" gutterBottom sx={{mt: 2, fontWeight: 'medium'}}>
        Detalles del Cliente
      </Typography>
      <List disablePadding>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Nombre:`}/>
          <Typography variant="body2" gutterBottom>{client_name}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Direccion:`}/>
          <Typography variant="body2" gutterBottom>{client_address}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`RUC - DNI: `}/>
          <Typography variant="body2" gutterBottom>{client_R_D}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Telefono:`}/>
          <Typography variant="body2" gutterBottom>{client_telephone}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Email:`}/>
          <Typography variant="body2" gutterBottom>{client_email}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`VIN:`}/>
          <Typography variant="body2" gutterBottom>{client_vin}</Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default ClientDetails;
