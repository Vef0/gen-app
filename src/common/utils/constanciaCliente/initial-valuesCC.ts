/* eslint-disable import/no-anonymous-default-export */
import model from './form-ModelCC';

const {
  formFieldCC: {
    caja_accesorios_cb,
    manual_cb,
    otros,
    na_cb,
    constancia_fecha,
    constancia_hora,
  },
} = model;

export default {
  [caja_accesorios_cb.name]: false,
  [manual_cb.name]: false,
  [otros.name]: '',
  [na_cb.name]: false,
  [constancia_fecha.name]: '',
  [constancia_hora.name]: '',
};
