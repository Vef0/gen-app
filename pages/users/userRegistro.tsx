import SignUp from '../components/SignUp';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const userRegistro = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Regsitro de usuario</title>
        <meta name="description" content="Forms to validate user credentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title} style={{ padding: 10 }}>
          Registre sus datos
        </h3>
        <SignUp />
      </main>
    </div>
  );
};
export default userRegistro;
