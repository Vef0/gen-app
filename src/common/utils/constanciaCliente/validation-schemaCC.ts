import * as yup from 'yup';
import formModel from './form-ModelCC';

const {
  formFieldCC: {constancia_fecha, constancia_hora},
} = formModel;

const validationSchemaCC = [
  yup.object().shape({
    [constancia_fecha.name]: yup
      .string()
      .required(`${constancia_fecha.requiredErrorMessage}`),
  }),
  yup.object().shape({
    [constancia_hora.name]: yup
      .string()
      .required(`${constancia_hora.requiredErrorMessage}`),
  }),
];

export default validationSchemaCC;
