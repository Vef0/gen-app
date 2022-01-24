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
      vehiculo_entrega,

      // VEHICLE INVENTORY
      inventarioV_placa,
      inventarioV_parach_post,
      inventarioV_parachoques_del,
      inventarioV_parabrisas,
      recepcionV_fecha
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
        <Typography gutterBottom>{`FECHA: ${recepcionV_fecha}`}</Typography>
        <Typography gutterBottom>{`Placa: ${vehiculo_placa}`}</Typography>
        <Typography gutterBottom>{`Marca: ${vehiculo_marca}`}</Typography>
        <Typography gutterBottom>{`Modelo: ${vehiculo_modelo}`}</Typography>
        <Typography gutterBottom>{`Ano: ${vehiculo_annio}`}</Typography>
        <Typography gutterBottom>{`Color: ${vehiculo_color}`}</Typography>
        <Typography gutterBottom>{`Kilometraje: ${vehiculo_kilometraje}`}</Typography>
        <Typography gutterBottom>{`Combustible: ${vehiculo_combustible}`}</Typography>
        <Typography
          gutterBottom
        >{`Marca: ${vehiculo_personaRecojo}`}</Typography>
        <Typography gutterBottom>{`Marca: ${vehiculo_entrega}`}</Typography>

        <Typography gutterBottom>{`Placa : ${
          inventarioV_placa === false ? 'NO' : 'SI'
        }`}</Typography>
        <Typography gutterBottom>{`Parachoques: ${
          inventarioV_parach_post === false ? 'NO' : 'SI'
        }`}</Typography>
      </Stack>
    </div>
  );
};

export default VehicleDetails;
