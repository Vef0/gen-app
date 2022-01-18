import * as yup from 'yup';
import formModel from './form-models';

const {
  formField: {
    client_name,
    client_address,
    client_R_D,
    client_telephone,
    client_email,
    client_vim,
    client_select,
  },
} = formModel;

const validationSchema = [
  yup.object().shape({
    [client_name.name]: yup
      .string()
      .required(`${client_name.requiredErrorMessage}`),
    [client_address.name]: yup
      .string()
      .required(`${client_address.requiredErrorMessage}`),
    [client_R_D.name]: yup
      .string()
      .required(`${client_R_D.requiredErrorMessage}`),
    [client_telephone.name]: yup
      .string()
      .required(`${client_telephone.requiredErrorMessage}`),
    [client_email.name]: yup
      .string()
      .required(`${client_email.requiredErrorMessage}`),
    [client_vim.name]: yup
      .string()
      .required(`${client_vim.requiredErrorMessage}`),
    [client_select.name]: yup
      .string()
      .required(`${client_select.requiredErrorMessage}`),
  }),
];
export default validationSchema;
