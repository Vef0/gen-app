import {FormikValues} from 'formik';
import React from 'react';
import {Stack} from '@mui/material';
import {SelectField} from '../../../common/components/atoms/form-fields';

interface PropsType {
  formsField: FormikValues;
}

const trabajos_lista = [
  {
    value: '',
    label: '----- Seleccione un trabajo -----',
    price: '',
    encargado: '',
  },
  {
    value: 'Ceramica',
    label: 'Ceramica',
    price: '50$',
    encargado: 'Orlando Diaz',
  },
  {
    value: 'Limpieza',
    label: 'Limpieza',
    price: '110$',
    encargado: 'Armando Paredes',
  },
  {
    value: 'Reparacion',
    label: 'Reparacion',
    price: '180$',
    encargado: 'Gonzalo Lopez',
  },
  {
    value: 'Extra',
    label: 'Extra',
    price: '200$',
    encargado: 'Juan Perez',
  },
];

const Trabajos: React.FC<PropsType> = (props) => {
  const {
    formsField: {
      trabajo_one,
      trabajo_two,
      trabajo_three,
      trabajo_four,
      trabajo_five,
      trabajo_six,
      trabajo_seven,
      trabajo_eight,
      trabajo_nine,
    },
  } = props;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      sx={{t: 2}}
    >
      <SelectField
        name={trabajo_one.name}
        label={trabajo_one.label}
        data={trabajos_lista}
        fullWidth
      />
      <SelectField
        name={trabajo_two.name}
        label={trabajo_two.label}
        data={trabajos_lista}
        fullWidth
      />
      <SelectField
        name={trabajo_three.name}
        label={trabajo_three.label}
        data={trabajos_lista}
        fullWidth
      />
      <SelectField
        name={trabajo_four.name}
        label={trabajo_four.label}
        data={trabajos_lista}
        fullWidth
      />
      <SelectField
        name={trabajo_five.name}
        label={trabajo_five.label}
        data={trabajos_lista}
        fullWidth
      />
      <SelectField
        name={trabajo_six.name}
        label={trabajo_six.label}
        data={trabajos_lista}
        fullWidth
      />
      <SelectField
        name={trabajo_seven.name}
        label={trabajo_seven.label}
        data={trabajos_lista}
        fullWidth
      />
      <SelectField
        name={trabajo_eight.name}
        label={trabajo_eight.label}
        data={trabajos_lista}
        fullWidth
      />
      <SelectField
        name={trabajo_nine.name}
        label={trabajo_nine.label}
        data={trabajos_lista}
        fullWidth
      />
    </Stack>
  );
};

export default Trabajos;
