import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import Head from 'next/head';
import homeStyles from '../../styles/Home.module.css';
import { Wrapper } from '../components/layout';
import React from 'react';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import initialValues from 'utils/initial-values';
import {
  UserForm,
  VehicleForm,
  RecepcionForm,
  VehicleItems,
  Trabajos,
} from '../components/organisms/forms';
import formModel from '../utils/form-models';
import validationSchema from 'utils/validation-schema';
import { checklistDisplayStyles } from '../../styles/checklistDisplay.styles';
import ReviewOrder from '../components/organisms/review-order';
import CheckoutSucces from '../components/organisms/forms/checkout-succes';
import Link from 'next/link';
import { userFormsStyles } from '../../styles/userForms.styles';

const steps = [
  'Cliente',
  'Vehiculo',
  'Recepcion',
  'Items del Vehiculo',
  'Trabajos',
  'Resumen',
];
const { formField } = formModel;

const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      // @ts-ignore
      return <UserForm formsField={formField} />;
    case 1:
      return <VehicleForm formsField={formField} />;
    case 2:
      return <RecepcionForm formsField={formField} />;
    case 3:
      return <VehicleItems formsField={formField} />;
    case 4:
      return <Trabajos formsField={formField} />;
    case 5:
      return <ReviewOrder />;
  }
};

const CheckList: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const selectValidationSchema = validationSchema[activeStep];
  const isLast = activeStep === steps.length - 1;
  const stylesF = checklistDisplayStyles();
  const userFStyles = userFormsStyles();

  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    actions.setSubmitting(false);
    setActiveStep((prev) => prev + 1);
  };

  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (isLast) {
      submitForm(values, actions);
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <div className={homeStyles.container}>
      <Head>
        <title>CheckList</title>
        <meta name="description" content="Forms to validate user credentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={homeStyles.main}>
        <h3 className={homeStyles.title}>CheckList</h3>
        <Wrapper>
          <Stepper activeStep={activeStep} className={stylesF.stepper}>
            {steps.map((label, index) => (
              <Step key={label} active={index >= 0}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <CheckoutSucces />
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={selectValidationSchema}
              onSubmit={handleSubmit}
            >
              {(formikProps) => (
                <Form>
                  {renderStepContent(activeStep)}
                  <div className={stylesF.buttons}>
                    {activeStep >= 1 && (
                      <Button
                        onClick={() => setActiveStep((prev) => prev - 1)}
                        className={stylesF.button}
                      >
                        Atras
                      </Button>
                    )}
                    <div className={stylesF.wrapper}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={stylesF.button}
                        disabled={formikProps.isSubmitting}
                      >
                        {isLast ? 'ENVIAR' : 'SIGUIENTE'}
                      </Button>
                      {formikProps.isSubmitting && <CircularProgress />}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </Wrapper>
        <Link href="/" passHref>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={userFStyles.backBtn}
          >
            Salir
          </Button>
        </Link>
      </main>
    </div>
  );
};
export default CheckList;
