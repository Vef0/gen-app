import React from 'react';
import {FormikValues} from "formik";
import {List, ListItem, ListItemText, Typography} from '@mui/material';

const ReceptionDetails: React.FC<FormikValues> = (props) => {
  const {formValues: {recepcionV_fecha, recepcionV_hora, recepcionV_trabajador},} = props;
  return (
    <div>
      <Typography variant="h5" gutterBottom sx={{mt: 2, fontWeight: 'medium'}}>
        Datos de Recepcion del Vehiculo
      </Typography>
      <List disablePadding>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Recepcion del vehiculo:`}/>
          <Typography variant="body2" gutterBottom>{recepcionV_fecha}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Hora:`}/>
          <Typography variant="body2" gutterBottom>{recepcionV_hora}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Trabajador:`}/>
          <Typography variant="body2" gutterBottom>{recepcionV_trabajador}</Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default ReceptionDetails;