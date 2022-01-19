import { Button, Grid } from '@mui/material';
import Link from 'next/link';
import { userFormsStyles } from '../../../../styles/userForms.styles';

const CheckoutSucces = () => {
  const classes = userFormsStyles();
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          voluptas commodi repudiandae quam dicta. .
        </p>
        <Link href="/" passHref>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.backBtn}
          >
            Salir
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default CheckoutSucces;
