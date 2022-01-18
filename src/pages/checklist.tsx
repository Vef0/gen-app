import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import stylesH from '../../styles/Home.module.css';
import { Wrapper } from '../components/layout';
import React from 'react';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import initialValues from 'utils/initial-values';
import { UserForm, VehicleForm } from '../components/organisms/forms';
import formModel from '../utils/form-models';
import validationSchema from 'utils/validation-schema';
import { useAppStyles } from '../../styles/forms_d.styles';

const steps = ['Cliente', 'Vehiculo', 'Trabajos', 'Final'];
const { formField } = formModel;

const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      // @ts-ignore
      return <UserForm formField={formField} />;
    case 1:
      return <VehicleForm formsField={formField} />;
    case 2:
      return <VehicleForm formsField={formField} />;
    case 3:
      return <div>d</div>;
  }
};

const CheckList: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const selectValidationSchema = validationSchema[activeStep];
  const isLast = activeStep === steps.length - 1;
  const stylesF = useAppStyles();

  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
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
    <div className={stylesH.container}>
      <Head>
        <title>CheckList</title>
        <meta name="description" content="Forms to validate user credentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={stylesH.main}>
        <h3 className={stylesH.title}>CheckList</h3>
        <Wrapper>
          <Stepper activeStep={activeStep} className={stylesF.stepper}>
            {steps.map((label, index) => (
              <Step key={label} active={index === 0}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <div>aqui va el checkout</div>
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
                    {activeStep === 0 && (
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
                        {isLast ? 'PASO FINAL' : 'SIGUIENTE'}
                      </Button>
                      {formikProps.isSubmitting && <CircularProgress />}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </Wrapper>
      </main>
    </div>
  );
};
export default CheckList;
