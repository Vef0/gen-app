/* eslint-disable import/no-anonymous-default-export */
import model from './form-models';

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
} = model;

export default {
  [client_name.name]: '',
  [client_address.name]: '',
  [client_R_D.name]: '',
  [client_telephone.name]: '',
  [client_email.name]: '',
  [client_vim.name]: '',
  [client_select.name]: '',
};
