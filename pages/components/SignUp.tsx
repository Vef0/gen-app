import React, { useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    submitButton: {
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
    successMessage: { color: 'green' },
    errorMessage: { color: 'red' },
    card: {
      marginTop: theme.spacing(0),
    },
  })
);

interface ISignUpForm {
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
  idTrabajador: string;
}

interface IFormStatus {
  message: string;
  type: string;
}

interface IFormStatusProps {
  [key: string]: IFormStatus;
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: 'Registro exitoso',
    type: 'success',
  },
  duplicate: {
    message: 'El e-mail ya está registrado',
    type: 'error',
  },
  error: {
    message: 'Algo salió mal. Por favor intente nuevamente',
    type: 'error',
  },
};

const SignUp: React.FunctionComponent = () => {
  const classes = useStyles();
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  });

  const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
    try {
      // API call integration will be here. Handle success / error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success);
        resetForm({});
      }
    } catch (error) {
      const response = error.response;
      if (response.data === 'user already exist' && response.status === 400) {
        setFormStatus(formStatusProps.duplicate);
      } else {
        setFormStatus(formStatusProps.error);
      }
    } finally {
      setDisplayFormStatus(true);
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        password: '',
        confirmPassword: '',
        email: '',
        idTrabajador: '',
      }}
      onSubmit={(values: ISignUpForm, actions) => {
        createNewUser(values, actions.resetForm);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Ingrese un e-mail válido'),
        idTrabajador: Yup.string().required(
          'Ingrese un número de trabajador válido'
        ),
        fullName: Yup.string().required('Por favor ingrese su nombre completo'),
        password: Yup.string()
          .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
          )
          .required(
            'Ingrese una contraseña válida. Debe contener al menos una mayúscula, una minúscula, un número y un caracter especial'
          ),
        confirmPassword: Yup.string()
          .required('Requerido')
          .test(
            'password-match',
            'Las contraseñas deben coincidir',
            function (value) {
              return this.parent.password === value;
            }
          ),
      })}
    >
      {(props: FormikProps<ISignUpForm>) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
        } = props;
        return (
          <Form className={classes.root}>
            <Card className={classes.card}>
              <CardContent>
                <TextField
                  name="fullName"
                  id="fullName"
                  label="Nombre completo"
                  value={values.fullName}
                  type="text"
                  fullWidth
                  helperText={
                    errors.fullName && touched.fullName
                      ? errors.fullName
                      : 'Ingrese su nombre completo.'
                  }
                  error={errors.fullName && touched.fullName ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  name="password"
                  id="password"
                  label="Contraseña"
                  value={values.password}
                  type="password"
                  fullWidth
                  helperText={
                    errors.password && touched.password
                      ? 'Ingrese una contraseña válida. Debe contener al menos una mayúscula, una minúscula, un número y un caracter especial'
                      : 'Debe contener al menos una mayúscula, una minúscula, un número y un caracter especial'
                  }
                  error={errors.password && touched.password ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  name="confirmPassword"
                  id="confirmPassword"
                  label="Confirme la contraseña"
                  value={values.confirmPassword}
                  type="password"
                  fullWidth
                  helperText={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : 'Re-ingrese la contraseña para confirmar.'
                  }
                  error={
                    errors.confirmPassword && touched.confirmPassword
                      ? true
                      : false
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  name="idTrabajador"
                  id="idTrabajador"
                  label="ID Trabajador"
                  value={values.idTrabajador}
                  type="text"
                  fullWidth
                  helperText={
                    errors.idTrabajador && touched.idTrabajador
                      ? errors.idTrabajador
                      : 'Ingrese su ID de Trabajador'
                  }
                  error={errors.email && touched.email ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  name="email"
                  id="email"
                  label="Email"
                  value={values.email}
                  type="email"
                  fullWidth
                  helperText={
                    errors.email && touched.email
                      ? errors.email
                      : 'Ingrese su email'
                  }
                  error={errors.email && touched.email ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={isSubmitting}
                  className={classes.submitButton}
                >
                  Enviar
                </Button>
                {displayFormStatus && (
                  <div className="formStatus">
                    {formStatus.type === 'error' ? (
                      <p className={classes.errorMessage}>
                        {formStatus.message}
                      </p>
                    ) : formStatus.type === 'success' ? (
                      <p className={classes.successMessage}>
                        {formStatus.message}
                      </p>
                    ) : null}
                  </div>
                )}
              </CardActions>
            </Card>
            <Link href="/" passHref>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className={classes.backBtn}
              >
                Atras
              </Button>
            </Link>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUp;
