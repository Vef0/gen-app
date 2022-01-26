import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import {signIn} from "next-auth/react";
import Button from "@mui/material/Button";
import React from "react";
import {userFormsStyles} from "../../styles/userForms.styles";

const Home: NextPage = () => {
  const classes = userFormsStyles();
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
        <br/>
        <Button className={classes.loginBtn} onClick={() => signIn()}>Ingresar con Google</Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todos los derechos reservados - Genesis App.{' '}
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
