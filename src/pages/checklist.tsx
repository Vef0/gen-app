import {Box, Button, CircularProgress, Container, Grid, Paper, Step, StepLabel, Stepper,} from '@mui/material';
import homeStyles from '../../styles/Home.module.css';
import React from 'react';
import {Form, Formik, FormikHelpers, FormikValues} from 'formik';
import initialValues from 'common/utils/initial-values';
import {
  CheckoutSuccess,
  ClientForm,
  RecepcionForm,
  Trabajos,
  VehicleForm,
  VehicleItems
} from '../modules/organisms/forms';
import formModel from '../common/utils/form-models';
import validationSchema from 'common/utils/validation-schema';
import {checklistDisplayStyles} from '../../styles/checklistDisplay.styles';
import ReviewOrder from '../modules/organisms/review-order';
import Link from 'next/link';

const steps = [
  'Cliente',
  'Vehiculo',
  'Recepcion',
  'Items del Vehiculo',
  'Trabajos',
  'Resumen',
];
const {formField} = formModel;

const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      // @ts-ignore
      return <ClientForm formsField={formField}/>;
    case 1:
      return <VehicleForm formsField={formField}/>;
    case 2:
      return <RecepcionForm formsField={formField}/>;
    case 3:
      return <VehicleItems formsField={formField}/>;
    case 4:
      return <Trabajos formsField={formField}/>;
    case 5:
      return <ReviewOrder/>;
  }
};

const CheckList: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const selectValidationSchema = validationSchema[activeStep];
  const isLast = activeStep === steps.length - 1;
  const stylesF = checklistDisplayStyles();
  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    // Axios post all values to server
    // axios.post("../api/todos", {})
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
      submitForm(values, actions).then();
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '100vh'}}
      >
        <Paper
          variant="outlined"
          sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}
        >
          <h1 className={homeStyles.title}>CheckList</h1>
          <br/>
          <Stepper activeStep={activeStep} className={stylesF.stepper}>
            {steps.map((label, index) => (
              <Step key={label} active={index >= 0}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <br/>
          {activeStep === steps.length ? (
            <CheckoutSuccess/>
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={selectValidationSchema}
              onSubmit={handleSubmit}
            >
              {(formikProps) => (
                <Form>
                  {renderStepContent(activeStep)}
                  <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={() => setActiveStep((prev) => prev - 1)}
                        sx={{mt: 3, ml: 1}}
                      >
                        Atras
                      </Button>
                    )}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{mt: 3, ml: 1}}
                      disabled={formikProps.isSubmitting}
                    >
                      {isLast ? 'TERMINAR ORDEN' : 'SIGUIENTE'}
                    </Button>
                    {formikProps.isSubmitting && <CircularProgress/>}
                  </Box>
                </Form>
              )}
            </Formik>
          )}
        </Paper>
        <Link href="/" passHref>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            sx={{mt: 3, ml: 1}}
          >
            Salir
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};
export default CheckList;
