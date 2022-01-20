import {Stack, Typography} from '@mui/material';
import {reviewOrderStyles} from '../../../../styles/reviewOrder.styles';
import React from "react";
import {FormikValues} from "formik";

const ClientDetails: React.FC<FormikValues> = (props) => {
  const {
    formValues: {
      client_name,
      client_address,
      client_R_D,
      client_telephone,
      client_email,
      client_vim,
    },
  } = props;

  const reviewOrderS = reviewOrderStyles();

  return (
    <div>
      <Typography variant="h6" gutterBottom className={reviewOrderS.title}>
        Detalles del Cliente
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Typography
          gutterBottom
        >{`Nombre: ${client_name} - Direccion: ${client_address}`}</Typography>
        <Typography
          gutterBottom
        >{`RD: ${client_R_D} - Telefono: ${client_telephone}`}</Typography>
        <Typography
          gutterBottom
        >{`Email: ${client_email} - VIM: ${client_vim}`}</Typography>
      </Stack>
    </div>
  );
}

export default ClientDetails;
