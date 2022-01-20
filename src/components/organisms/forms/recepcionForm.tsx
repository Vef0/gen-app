import { Grid } from "@mui/material";
import {FormikValues} from "formik";
import {InputField} from "../../atoms/form-fields";
import React from "react";

interface PropsType {
  formsField: FormikValues;
}

const RecepcionForm: React.FC<PropsType> = (props) => {
  const {formsField: {
    recepcionV_ingreso,
    recepcionV_hora_ingreso,
    recepcionV_trabajador,
  }} = props;
  return (
    <div>
      <Grid container spacing={3} sx={{p:2}}>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: recepcionV_ingreso.name,
              label: recepcionV_ingreso.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: recepcionV_hora_ingreso.name,
              label: recepcionV_hora_ingreso.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: recepcionV_trabajador.name,
              label: recepcionV_trabajador.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default RecepcionForm;