import { Button, CircularProgress } from '@mui/material';
import { Wrapper } from 'components/layout';
import { ChecklistConstancia } from 'components/organisms/forms';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import Head from 'next/head';
import formModel from 'utils/constanciaCliente/form-ModelCC';
import initialValuesCC from 'utils/constanciaCliente/initial-valuesCC';
import homeStyles from '../../styles/Home.module.css';
import { checklistDisplayStyles } from '../../styles/checklistDisplay.styles';

const { formFieldCC } = formModel;

const ClienteConstancia: React.FC = () => {
  const stylesF = checklistDisplayStyles();
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
    submitForm(values, actions);
  };
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Constancia de Conformidad</title>
        <meta name="description" content="Forms to validate user credentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={homeStyles.main}>
        <h3 className={homeStyles.title}>Constancia de Conformidad</h3>
        <Wrapper>
          <Formik initialValues={initialValuesCC} onSubmit={handleSubmit}>
            {(formikProps) => (
              <Form>
                <ChecklistConstancia formsField={formFieldCC} />
                <div className={stylesF.wrapper}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={stylesF.button}
                    disabled={formikProps.isSubmitting}
                  >
                    Enviar
                  </Button>
                  {formikProps.isSubmitting && <CircularProgress />}
                </div>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </main>
    </div>
  );
};

export default ClienteConstancia;
