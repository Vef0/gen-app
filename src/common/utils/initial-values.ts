/* eslint-disable import/no-anonymous-default-export */
import model from './form-models';

const {
  formField: {
    nro_orden,
    // CLIENT
    client_name,
    client_address,
    client_R_D,
    client_telephone,
    client_email,
    client_vin,

    // VEHICLE
    vehiculo_placa,
    vehiculo_marca,
    vehiculo_modelo,
    vehiculo_annio,
    vehiculo_color,
    vehiculo_kilometraje,
    vehiculo_combustible,
    vehiculo_personaRecojo,
    vehiculo_entrega_estimada,

    // VEHICLE INVENTORY
    inventarioV_placa,
    inventarioV_parach_post,
    inventarioV_parachoques_del,
    inventarioV_parabrisas,
    inventarioV_plumillas,
    inventarioV_antena,
    inventarioV_esp_laterales,
    inventarioV_esp_interores,
    inventarioV_lun_laterales,
    inventarioV_lun_posteriores,
    inventarioV_lun_manijas,
    inventarioV_lun_boton,
    inventarioV_barra_anti,
    inventarioV_caseta_tolva,
    inventarioV_autoradio,
    inventarioV_mascara,
    inventarioV_parlantes,
    inventarioV_encendedor,
    inventarioV_cenicero,
    inventarioV_calefaccion,
    inventarioV_aire_acondicionado,
    inventarioV_control_alarma,
    inventarioV_claxon,
    inventarioV_tapasol,
    inventarioV_cinturones,
    inventarioV_asientos,
    inventarioV_fundas,
    inventarioV_cubre_piso,
    inventarioV_tapiz_techo,
    inventarioV_luces_delanteras,
    inventarioV_luces_posteriores,
    inventarioV_luces_direccionales,
    inventarioV_luces_emergencia,
    inventarioV_luces_freno,
    inventarioV_tarjeta,
    inventarioV_soat,
    inventarioV_luces_neblina,
    inventarioV_luces_cabina,
    inventarioV_emblemas,
    inventarioV_escarpines,
    inventarioV_pin_remolque,
    inventarioV_tapa_aceite,
    inventarioV_tapa_hidrolina,
    inventarioV_tapa_radiador,
    inventarioV_tapa_combustible,
    inventarioV_medidor_aceite,
    inventarioV_tapa_limpiaParabrisas,
    inventarioV_protector_radiador,
    inventarioV_triangulo_seguridad,
    inventarioV_gata,
    inventarioV_llave_ruedas,
    inventarioV_dado_aros,
    inventarioV_estuche_herramientas,
    inventarioV_botiquin,
    inventarioV_extintor,
    inventarioV_llanta_repuesto,
    inventarioV_otros,

    // RECEPCION DEL VEHICULO
    recepcionV_fecha,
    recepcionV_trabajador,

    // TRABAJOS
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
} = model;

export default {
  [nro_orden.name]: '',
  [client_name.name]: '',
  [client_address.name]: '',
  [client_R_D.name]: '',
  [client_telephone.name]: '',
  [client_email.name]: '',
  [client_vin.name]: '',

  //VEHICULO
  [vehiculo_placa.name]: '',
  [vehiculo_marca.name]: '',
  [vehiculo_modelo.name]: '',
  [vehiculo_annio.name]: '',
  [vehiculo_color.name]: '',
  [vehiculo_kilometraje.name]: '',
  [vehiculo_combustible.name]: '',
  [vehiculo_personaRecojo.name]: '',
  [vehiculo_entrega_estimada.name]: '',

  //VEHICULO INVENTARIO
  [inventarioV_placa.name]: false,
  [inventarioV_parach_post.name]: false,
  [inventarioV_parachoques_del.name]: false,
  [inventarioV_parabrisas.name]: false,
  [inventarioV_plumillas.name]: false,
  [inventarioV_antena.name]: false,
  [inventarioV_esp_laterales.name]: false,
  [inventarioV_esp_interores.name]: false,
  [inventarioV_lun_laterales.name]: false,
  [inventarioV_lun_posteriores.name]: false,
  [inventarioV_lun_manijas.name]: false,
  [inventarioV_lun_boton.name]: false,
  [inventarioV_barra_anti.name]: false,
  [inventarioV_caseta_tolva.name]: false,
  [inventarioV_autoradio.name]: false,
  [inventarioV_mascara.name]: false,
  [inventarioV_parlantes.name]: false,
  [inventarioV_encendedor.name]: false,
  [inventarioV_cenicero.name]: false,
  [inventarioV_calefaccion.name]: false,
  [inventarioV_aire_acondicionado.name]: false,
  [inventarioV_control_alarma.name]: false,
  [inventarioV_claxon.name]: false,
  [inventarioV_tapasol.name]: false,
  [inventarioV_cinturones.name]: false,
  [inventarioV_asientos.name]: false,
  [inventarioV_fundas.name]: false,
  [inventarioV_cubre_piso.name]: false,
  [inventarioV_tapiz_techo.name]: false,
  [inventarioV_luces_delanteras.name]: false,
  [inventarioV_luces_posteriores.name]: false,
  [inventarioV_luces_direccionales.name]: false,
  [inventarioV_luces_emergencia.name]: false,
  [inventarioV_luces_freno.name]: false,
  [inventarioV_tarjeta.name]: false,
  [inventarioV_soat.name]: false,
  [inventarioV_luces_neblina.name]: false,
  [inventarioV_luces_cabina.name]: false,
  [inventarioV_emblemas.name]: false,
  [inventarioV_escarpines.name]: false,
  [inventarioV_pin_remolque.name]: false,
  [inventarioV_tapa_aceite.name]: false,
  [inventarioV_tapa_hidrolina.name]: false,
  [inventarioV_tapa_radiador.name]: false,
  [inventarioV_tapa_combustible.name]: false,
  [inventarioV_medidor_aceite.name]: false,
  [inventarioV_tapa_limpiaParabrisas.name]: false,
  [inventarioV_protector_radiador.name]: false,
  [inventarioV_triangulo_seguridad.name]: false,
  [inventarioV_gata.name]: false,
  [inventarioV_llave_ruedas.name]: false,
  [inventarioV_dado_aros.name]: false,
  [inventarioV_estuche_herramientas.name]: false,
  [inventarioV_botiquin.name]: false,
  [inventarioV_extintor.name]: false,
  [inventarioV_llanta_repuesto.name]: false,
  [inventarioV_otros.name]: '',

  // RECEPCION VEHICULO
  [recepcionV_fecha.name]: '',
  [recepcionV_trabajador.name]: '',

  //TRABAJOS
  [trabajo_one.name]: '',
  [trabajo_two.name]: '',
  [trabajo_three.name]: '',
  [trabajo_four.name]: '',
  [trabajo_five.name]: '',
  [trabajo_six.name]: '',
  [trabajo_seven.name]: '',
  [trabajo_eight.name]: '',
  [trabajo_nine.name]: '',
};