import Login from '../tasks/Login';
import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
const userIngreso = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ingreso usuario</title>
        <meta name="description" content="Forms to validate user credentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>Ingrese sus datos</h3>
        <Login />
      </main>
    </div>
  );
};
export default userIngreso;
