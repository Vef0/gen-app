import {FormikValues} from "formik";
import React from "react";
import {Grid} from "@mui/material";
import {SelectField} from "../../atoms/form-fields";

interface PropsType {
  formsField: FormikValues
}

const trabajos_lista = [
  {
    value: '',
    label: 'Seleccione un trabajo',
  },
  {
    value: 'Ceramica',
    label: 'Ceramica',
  },
  {
    value: 'Limpieza',
    label: 'Limpieza',
  },
  {
    value: 'Reparacion',
    label: 'Reparacion',
  },
  {
    value: 'Extra',
    label: 'Extra',
  },
]

const Trabajos: React.FC<PropsType> = (props) => {
  const {formsField: {trabajos}} = props;
  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      <Grid item xs={12} sm={6}>
        <SelectField
          name={trabajos.name}
          label={trabajos.label}
          data={trabajos_lista}
          fullWidth
        />
      </Grid>
    </Grid>
  )
}

export default Trabajos;