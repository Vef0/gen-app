import {Step, StepLabel, Stepper, Typography} from '@mui/material';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import {Wrapper} from "../components/layout";
import React from "react";
import {Form, Formik} from 'formik';
import initialValues from 'utils/initial-values';
import {UserForm} from "../components/organisms/forms";
import formModel from '../utils/form-models';

const steps = ["Cliente", "Vehiculo", "Trabajos", "Pago"];
const {formField} = formModel;


const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      // @ts-ignore
      return <UserForm formField={formField}/>
    case 1:
      return <div>b</div>
    case 2:
      return <div>c</div>
  }
}


const CheckList: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>CheckList</title>
        <meta name="description" content="Forms to validate user credentials"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>CheckList</h3>
        <Wrapper>
          <Typography component={'span'}>AQUI VA EL TITULO?</Typography>
          <Stepper>
            {steps.map((label, index) => (
              <Step key={label} active={index === 0}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Formik
            initialValues={initialValues}
            onSubmit={() => {
            }}
          >
            <Form>{renderStepContent(activeStep)}</Form>
          </Formik>

        </Wrapper>
      </main>
    </div>
  );
};
export default CheckList;
