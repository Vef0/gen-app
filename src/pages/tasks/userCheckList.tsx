import React from 'react';
import {Button, Card, CardActions, CardContent, TextField,} from '@mui/material';
import {Form, Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import {createStyles, makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    nextBtn: {
      marginTop: theme.spacing(2),
      backgroundColor: '#000000',
      flexGrow: 1,
      '&:hover': {
        backgroundColor: '#C94235',
      },
    },
    backBtn: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(15),
      marginRight: theme.spacing(15),
      backgroundColor: '#C94235',
      flexGrow: 1,
      '&:hover': {
        backgroundColor: '#000000',
      },
    },
    card: {
      marginTop: theme.spacing(0),
    },
  })
);

const checkValidationSchema = Yup.object().shape({
  cli_name: Yup.string().required('El campo es obligatorio'),
  cli_addr: Yup.string().required('El campo es obligatorio'),
  cli_r_d: Yup.string()
    .min(8, 'El valor debe ser mayor a 8')
    .required('El campo es obligatorio'),
  cli_pho: Yup.string()
    .min(9, 'El valor debe ser mayor a 9 digitos')
    .required('El campo es obligatorio'),
  cli_email: Yup.string().required('El campo es obligatorio'),
  cli_ser_v: Yup.string().required('El campo es obligatorio'),
});

interface IFormValues {
  cli_name: string;
  cli_addr: string;
  cli_r_d: string;
  cli_pho: string;
  cli_email: string;
  cli_ser_v: string;
}

const UserCheckList = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        cli_name: '',
        cli_addr: '',
        cli_r_d: '',
        cli_pho: '',
        cli_email: '',
        cli_ser_v: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={checkValidationSchema}
    >
      {(formik: FormikProps<IFormValues>) => {
        const {
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          isSubmitting,
        } = formik;
        return (
          <Form autoComplete="off" className={classes.root} noValidate>
            <Card className={classes.card}>
              <CardContent>
                <TextField
                  name="cli_name"
                  id="cli_name"
                  label="Nombre del cliente"
                  value={values.cli_name}
                  type="text"
                  fullWidth
                  helperText={
                    errors.cli_name && touched.cli_name
                      ? errors.cli_name
                      : 'Ingrese el nombre del cliente'
                  }
                  error={!!(errors.cli_name && touched.cli_name)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <TextField
                  name="cli_addr"
                  label="Direccion del cliente"
                  value={values.cli_addr}
                  type="text"
                  fullWidth
                  helperText={
                    errors.cli_addr && touched.cli_addr
                      ? errors.cli_addr
                      : 'Ingrese la direccion del cliente'
                  }
                  error={!!(errors.cli_addr && touched.cli_addr)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <TextField
                  name="cli_r_d"
                  label="RUC/DNI del cliente"
                  value={values.cli_r_d}
                  type="text"
                  fullWidth
                  helperText={
                    errors.cli_r_d && touched.cli_r_d
                      ? errors.cli_r_d
                      : 'Ingrese el RUC/DNI del cliente'
                  }
                  error={!!(errors.cli_r_d && touched.cli_r_d)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <TextField
                  name="cli_pho"
                  label="Telefono del cliente"
                  value={values.cli_pho}
                  type="text"
                  fullWidth
                  helperText={
                    errors.cli_pho && touched.cli_pho
                      ? errors.cli_pho
                      : 'Ingrese el telefono del cliente'
                  }
                  error={!!(errors.cli_pho && touched.cli_pho)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  name="cli_email"
                  label="Email del cliente"
                  value={values.cli_email}
                  type="text"
                  fullWidth
                  helperText={
                    errors.cli_email && touched.cli_email
                      ? errors.cli_email
                      : 'Ingrese el email del cliente'
                  }
                  error={!!(errors.cli_email && touched.cli_email)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  name="cli_ser_v"
                  label="Serie VIN del cliente"
                  value={values.cli_ser_v}
                  type="text"
                  fullWidth
                  helperText={
                    errors.cli_ser_v && touched.cli_ser_v
                      ? errors.cli_ser_v
                      : 'Ingrese la serie VIN del cliente'
                  }
                  error={!!(errors.cli_ser_v && touched.cli_ser_v)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  className={classes.nextBtn}
                  onClick={() => console.log('click')}
                  disabled={isSubmitting}
                >
                  SIGUIENTE
                </Button>
              </CardActions>
            </Card>
            <Link href="/" passHref>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className={classes.backBtn}
              >
                Salir
              </Button>
            </Link>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserCheckList;
