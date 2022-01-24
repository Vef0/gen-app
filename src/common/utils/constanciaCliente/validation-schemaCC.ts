import * as yup from 'yup';
import formModel from './form-ModelCC';

const {
  formFieldCC: { constancia_fecha },
} = formModel;

const validationSchemaCC = [
  yup.object().shape({
    [constancia_fecha.name]: yup
      .string()
      .required(`${constancia_fecha.requiredErrorMessage}`),
  }),
];

export default validationSchemaCC;
