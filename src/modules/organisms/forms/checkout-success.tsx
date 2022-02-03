import {Grid} from '@mui/material';

const CheckoutSuccess = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <h1>Fin de la orden</h1>
        <p>
          La orden se ha registrado satisfactoriamente. Puede salir de esta página
        </p>
      </Grid>
    </div>
  );
};

export default CheckoutSuccess;
