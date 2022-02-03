import homeStyles from '../../styles/Home.module.css';
import {getSession, signOut} from "next-auth/react";
import {Button, Container, Stack} from '@mui/material';
import {userFormsStyles} from "../../styles/userForms.styles";
import {TodosContainer} from '../modules/organisms/search-order'
import {GetServerSideProps} from "next";
import {Session} from 'next-auth';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';

const OrderOptions = ({session}: { session: Session }) => {
  const classes = userFormsStyles();
  return (
    <Container fixed>
      <Stack
        spacing={8}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{p: 4}}
      >
        <h1 className={homeStyles.title}>Ordenes - {session?.user?.name} 🚗</h1>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" size="large" startIcon={<AddCircleIcon/>} href="/checklist">
            Crear nueva Orden
          </Button>
          <Button variant="contained" size="large" endIcon={<SearchIcon/>} href="/clienteConstacia">
            Buscar Orden
          </Button>
        </Stack>
        <TodosContainer/>
        <Button className={classes.loginBtn}
                onClick={() => signOut({callbackUrl: 'http://localhost:3000/'})}>Salir</Button>
      </Stack>
    </Container>
  );
};

export default OrderOptions;

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const session = await getSession({req});
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
