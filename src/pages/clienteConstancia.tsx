import {Box, Button, CircularProgress, Container, Grid, Paper} from '@mui/material';
import {ChecklistConstancia} from 'modules/organisms/forms';
import {Form, Formik, FormikHelpers, FormikValues} from 'formik';
import formModel from 'common/utils/constanciaCliente/form-ModelCC';
import initialValuesCC from 'common/utils/constanciaCliente/initial-valuesCC';
import homeStyles from '../../styles/Home.module.css';
import React from "react";
import Link from "next/link";

const {formFieldCC} = formModel;

const ClienteConstancia: React.FC = () => {
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
  };
  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    submitForm(values, actions).then();
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
          <h1 className={homeStyles.title}>Constancia de Conformidad</h1>
          <Formik initialValues={initialValuesCC} onSubmit={handleSubmit}>
            {(formikProps) => (
              <Form>
                <ChecklistConstancia formsField={formFieldCC}/>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{mt: 3, ml: 1}}
                    disabled={formikProps.isSubmitting}
                  >
                    Enviar
                  </Button>
                  {formikProps.isSubmitting && <CircularProgress/>}
                </Box>
              </Form>
            )}
          </Formik>
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

export default ClienteConstancia;
