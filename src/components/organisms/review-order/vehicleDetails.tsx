import { Grid, Stack, Typography } from '@mui/material';
import { FormikValues } from 'formik';
import { reviewOrderStyles } from '../../../../styles/reviewOrder.styles';

interface PropsType {
  formValues: FormikValues;
}

const VehicleDetails: React.FC<PropsType> = (props) => {
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
        <Typography gutterBottom>{`Marca: ${vehiculo_modelo}`}</Typography>
        <Typography gutterBottom>{`Marca: ${vehiculo_annio}`}</Typography>
        <Typography gutterBottom>{`Marca: ${vehiculo_color}`}</Typography>
        <Typography gutterBottom>{`Marca: ${vehiculo_kilometraje}`}</Typography>
        <Typography gutterBottom>{`Marca: ${vehiculo_combustible}`}</Typography>
        <Typography
          gutterBottom
        >{`Marca: ${vehiculo_personaRecojo}`}</Typography>
        <Typography gutterBottom>{`Marca: ${vehiculo_entrega}`}</Typography>

        <Typography gutterBottom>{`Placa : ${
          inventarioV_placa === true ? 'SI' : 'NO'
        }`}</Typography>
        <Typography gutterBottom>{`Parachoques: ${
          inventarioV_parach_post === true ? 'SI' : 'NO'
        }`}</Typography>
      </Stack>
    </div>
  );
};

export default VehicleDetails;
