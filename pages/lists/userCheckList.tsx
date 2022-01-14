import {Card, CardContent, TextField} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {object} from "yup";

export const UserCheckList = () => {
  return (
    <Card>
      <CardContent>
        <Formik
          validationSchema={object({
            // cli_name: Yup.string
          })}
          initialValues={
            {
              cli_name: '',
              cli_addr: '',
              cli_r_d: '',
              cli_pho: '',
              cli_email: '',
              cli_ser_v: '',
            }
          } onSubmit={() => {
        }}>
          <Form autoComplete="off">
            <Field name="cli_name" label="Nombre del cliente" component={TextField}/>
            <Field name="cli_addr" label="Direccion del cliente" component={TextField}/>
            <Field name="cli_r_d" label="RUC/DNI del cliente" component={TextField}/>
            <Field name="cli_pho" label="Telefono del cliente" component={TextField}/>
            <Field name="cli_email" label="Email del cliente" component={TextField}/>
            <Field name="cli_ser_v" label="Serie VIN del cliente" component={TextField}/>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
}

