import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Genesis App</title>
        <meta name="description" content="Genesis app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://www.google.com/">Genesis</a> App!
        </h1>

        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className={styles.grid}>
          <Link href="/users/userIngreso">
            <a className={styles.card}>
              <h2>Ingresar &rarr;</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </a>
          </Link>
          <Link href="/users/userRegistro">
            <a className={styles.card}>
              <h2>Registrarse &rarr;</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todos los derechos reservados{' '}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Genesis Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
