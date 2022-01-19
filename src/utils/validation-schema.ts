import * as yup from 'yup';
import formModel from './form-models';

const {
  formField: {
    // CLIENT
    client_name,
    client_address,
    client_R_D,
    client_telephone,
    client_email,
    client_vim,
    client_select,

    //VEHICLE
    vehiculo_placa,
    vehiculo_marca,
    vehiculo_modelo,
    vehiculo_annio,
    vehiculo_color,
    vehiculo_kilometraje,
    vehiculo_combustible,
    vehiculo_personaRecojo,
    vehiculo_entrega,
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
  yup.object().shape({
    [vehiculo_placa.name]: yup
      .string()
      .required(`${vehiculo_placa.requiredErrorMessage}`),
    [vehiculo_marca.name]: yup
      .string()
      .required(`${vehiculo_marca.requiredErrorMessage}`),
    [vehiculo_modelo.name]: yup
      .string()
      .required(`${vehiculo_modelo.requiredErrorMessage}`),
    [vehiculo_annio.name]: yup
      .string()
      .required(`${vehiculo_annio.requiredErrorMessage}`),
    [vehiculo_color.name]: yup
      .string()
      .required(`${vehiculo_color.requiredErrorMessage}`),
    [vehiculo_kilometraje.name]: yup
      .string()
      .required(`${vehiculo_kilometraje.requiredErrorMessage}`),
    [vehiculo_combustible.name]: yup
      .string()
      .required(`${vehiculo_combustible.requiredErrorMessage}`),
    [vehiculo_personaRecojo.name]: yup
      .string()
      .required(`${vehiculo_personaRecojo.requiredErrorMessage}`),
    [vehiculo_entrega.name]: yup
      .string()
      .required(`${vehiculo_entrega.requiredErrorMessage}`),
  }),
];
export default validationSchema;