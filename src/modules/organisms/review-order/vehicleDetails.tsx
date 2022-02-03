import {List, ListItem, ListItemText, Typography} from '@mui/material';
import {FormikValues} from 'formik';
import React from "react";

const VehicleDetails: React.FC<FormikValues> = (props) => {
  const {
    formValues: {
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
      <Typography variant="h5" gutterBottom sx={{mt: 2, fontWeight: 'medium'}}>
        Datos de Recepcion del Vehiculo
      </Typography>
      <List disablePadding>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Placa:`}/>
          <Typography variant="body2" gutterBottom>{vehiculo_placa}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Marca:`}/>
          <Typography variant="body2" gutterBottom>{vehiculo_marca}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Modelo: `}/>
          <Typography variant="body2" gutterBottom>{vehiculo_modelo}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Año:`}/>
          <Typography variant="body2" gutterBottom>{vehiculo_annio}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Color:`}/>
          <Typography variant="body2" gutterBottom>{vehiculo_color}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Kilometraje:`}/>
          <Typography variant="body2" gutterBottom>{vehiculo_kilometraje}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Nivel de combustible:`}/>
          <Typography variant="body2" gutterBottom>{vehiculo_combustible}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Persona asignada al recojo:`}/>
          <Typography variant="body2" gutterBottom>{vehiculo_personaRecojo}</Typography>
        </ListItem>
        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary={`Entrega estimada del vehiculo:`}/>
          <Typography variant="body2" gutterBottom>{vehiculo_entrega_estimada}</Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default VehicleDetails;
