import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import {getSession} from "next-auth/react";

//@ts-ignore
const OrderOptions = ({session, hello}) => {
  console.log('>>>> sesion ' , session)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Ordenes - {hello}</h1>
        <br />
        <div className={styles.grid}>
          <Link href="/checklist">
            <a className={styles.card}>
              <h2>Crear nueva Orden &rarr;</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </a>
          </Link>
          <Link href="/clienteConstancia">
            <a className={styles.card}>
              <h2>Buscar Orden &rarr;</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

//@ts-ignore
export async function getServerSideProps({req, res}) {

  const session = await getSession({req});
  console.log(session)

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
      hello: 'Adolfo'
    },
  }
}

export default OrderOptions;
