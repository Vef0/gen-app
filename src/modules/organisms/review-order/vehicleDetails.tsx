import {Stack, Typography} from '@mui/material';
import {FormikValues} from 'formik';
import {reviewOrderStyles} from '../../../../styles/reviewOrder.styles';
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

  const reviewOrderS = reviewOrderStyles();

  return (
    <div>
      <Typography variant="h6" gutterBottom className={reviewOrderS.title}>
        Detalles del Vehiculo
      </Typography>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Typography gutterBottom>{`Placa: ${vehiculo_placa}`}</Typography>
        <Typography gutterBottom>{`Marca: ${vehiculo_marca}`}</Typography>
        <Typography gutterBottom>{`Modelo: ${vehiculo_modelo}`}</Typography>
        <Typography gutterBottom>{`Ano: ${vehiculo_annio}`}</Typography>
        <Typography gutterBottom>{`Color: ${vehiculo_color}`}</Typography>
        <Typography gutterBottom>{`Kilometraje: ${vehiculo_kilometraje}`}</Typography>
        <Typography gutterBottom>{`Nivel de Combustible: ${vehiculo_combustible}`}</Typography>
        <Typography
          gutterBottom
        >{`Persona recojo: ${vehiculo_personaRecojo}`}</Typography>
        <Typography gutterBottom>{`Fecha de entrega estimada: ${vehiculo_entrega_estimada}`}</Typography>

      </Stack>
    </div>
  );
};

export default VehicleDetails;
