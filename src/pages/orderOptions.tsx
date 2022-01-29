import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import {getSession, signOut} from "next-auth/react";
import {Button} from '@mui/material';
import {userFormsStyles} from "../../styles/userForms.styles";
import {TodosContainer} from '../modules/organisms/search-order'
import {GetServerSideProps} from "next";
import { Session } from 'next-auth';

const OrderOptions = ({session}: {session: Session}) => {
  const classes = userFormsStyles();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Ordenes - {session?.user?.name} 🚗</h1>
        <br/>
        <div className={styles.grid}>
          <Link href="/checklist">
            <a className={styles.card}>
              <h2>Crear nueva Orden ➕</h2>
            </a>
          </Link>
          <Link href="/clienteConstancia">
            <a className={styles.card}>
              <h2>Buscar Orden 🔎</h2>
            </a>
          </Link>
        </div>
        <TodosContainer/>
        <Button className={classes.loginBtn} onClick={() => signOut()}>Salir</Button>
      </main>
    </div>
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
