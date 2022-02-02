import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import {getSession, signIn} from "next-auth/react";
import Button from "@mui/material/Button";
import React from "react";
import {userFormsStyles} from "../../styles/userForms.styles";
import {Container, Stack} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

const Home: NextPage = () => {
  const classes = userFormsStyles();
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Genesis App</title>
        <meta name="description" content="Genesis app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Stack
        spacing={8}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{p: 4}}
      >
        <h1 className={styles.title}>
          Bienvenido a <a href="https://www.google.com/">Genesis</a> Checklist App!
        </h1>
        <Button className={classes.loginBtn} size="large" variant="contained" endIcon={<GoogleIcon/>}
                onClick={() => signIn()}>Ingresar con Google</Button>
      </Stack>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todos los derechos reservados - Genesis App.{' '}
        </a>
      </footer>
    </Container>
  );
};

export default Home;

//@ts-ignore
export async function getServerSideProps({req, res}) {
  const session = await getSession({req});
  if (session) {
    return {
      redirect: {
        destination: '/orderOptions',
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

