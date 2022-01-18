/* eslint-disable import/no-anonymous-default-export */
export default {
  formId: 'checkoutForm',
  formField: {
    client_name: {
      name: 'client_name',
      label: 'Client Name',
      requiredErrorMessage: 'Client Name is required',
    },
    client_address: {
      name: 'client_address',
      label: 'Address',
      requiredErrorMessage: 'Client Address is required',
    },
    client_R_D: {
      name: 'client_R_D',
      label: 'RUC / DNI',
      requiredErrorMessage: 'Client RUC / DNI is required',
    },
    client_telephone: {
      name: 'client_telephone',
      label: 'Telephone',
      requiredErrorMessage: 'Client Telephone is required',
    },
    client_email: {
      name: 'client_email',
      label: 'Email',
      requiredErrorMessage: 'Client Email is required',
    },
    client_vim: {
      name: 'client_vim',
      label: 'VIM',
      requiredErrorMessage: 'Client VIM is required',
    },
    client_select: {
      name: 'client_select',
      label: 'Client Select',
      requiredErrorMessage: 'Client Select is required',
    },
    client_checkbox: {
      name: 'client_checkbox',
      label: 'Client Checkbox',
    },
    // VEHICLE
    vehiculo_placa: {
      name: 'vehiculo_placa',
      label: 'Placa',
      requiredErrorMessage: 'La Placa del vehiculo es obligatoria',
    },
    vehiculo_marca: {
      name: 'vehiculo_marca',
      label: 'Marca',
      requiredErrorMessage: 'La Marca del vehiculo es obligatoria',
    },
    vehiculo_modelo: {
      name: 'vehiculo_modelo',
      label: 'Modelo',
      requiredErrorMessage: 'El Modelo del vehiculo es obligatorio',
    },
    vehiculo_annio: {
      name: 'vehiculo_annio',
      label: 'Año',
      requiredErrorMessage: 'El Año del vehiculo es obligatorio',
    },
    vehiculo_color: {
      name: 'vehiculo_color',
      label: 'Color',
      requiredErrorMessage: 'El Color del vehiculo es obligatorio',
    },
    vehiculo_kilometraje: {
      name: 'vehiculo_kilometraje',
      label: 'Kilometraje',
      requiredErrorMessage: 'El Kilometraje del vehiculo es obligatorio',
    },
    vehiculo_combustible: {
      name: 'vehiculo_combustible',
      label: 'Nivel de Combustible',
      requiredErrorMessage:
        'El Nivel de Combustible del vehiculo es obligatorio',
    },
    vehiculo_personaRecojo: {
      name: 'vehiculo_personaRecojo',
      label: 'Persona Recojo',
      requiredErrorMessage: 'La Persona de Recojo del vehiculo es obligatoria',
    },
    vehiculo_entrega: {
      name: 'vehiculo_entrega',
      label: 'Entrega',
      requiredErrorMessage: 'La Entrega del vehiculo es obligatoria',
    },
    // INVENTARIO VEHICULO
    inventarioV_placa: {
      name: 'inventarioV_placas',
      label: 'Placas',
    },
    inventarioV_parach_post: {
      name: 'inventarioV_parachoques_post',
      label: 'Parachoques Posterior',
    },
    inventarioV_parachoques_del: {
      name: 'inventarioV_parachoques_del',
      label: 'Parachoques Delantero',
    },
    inventarioV_parabrisas: {
      name: 'inventarioV_parabrisas',
      label: 'Parabrisas',
    },
    inventarioV_plumillas: {
      name: 'inventarioV_plumillas',
      label: 'Plumillas y Brazos',
    },
    inventarioV_antena: {
      name: 'inventarioV_antena',
      label: 'Antena',
    },
    inventarioV_esp_laterales: {
      name: 'inventarioV_esp_laterales',
      label: 'Espejos Laterales',
    },
    inventarioV_esp_interores: {
      name: 'inventarioV_esp_interiores',
      label: 'Espejos Interiores',
    },
    inventarioV_lun_laterales: {
      name: 'inventarioV_lun_laterales',
      label: 'Lunas Laterales',
    },
    inventarioV_lun_posteriores: {
      name: 'inventarioV_lun_posteriores',
      label: 'Lunas Posteriores',
    },
    inventarioV_lun_manijas: {
      name: 'inventarioV_lun_manijas',
      label: 'Lunas Manijas',
    },
    inventarioV_lun_boton: {
      name: 'inventarioV_lun_boton',
      label: 'Lunas Boton',
    },
    inventarioV_barra_anti: {
      name: 'inventarioV_barra_anti',
      label: 'Barra Antivuelco',
    },
    inventarioV_caseta_tolva: {
      name: 'inventarioV_caseta_tolva',
      label: 'Caseta Tolva',
    },
    inventarioV_autoradio: {
      name: 'inventarioV_autoradio',
      label: 'Autoradio',
    },
    inventarioV_mascara: {
      name: 'inventarioV_mascara',
      label: 'Mascara',
    },
    inventarioV_parlantes: {
      name: 'inventarioV_parlantes',
      label: 'Parlantes',
    },
    inventarioV_encendedor: {
      name: 'inventarioV_encendedor',
      label: 'Encendedor',
    },
    inventarioV_cenicero: {
      name: 'inventarioV_cenicero',
      label: 'Cenicero',
    },
    inventarioV_calefaccion: {
      name: 'inventarioV_calefaccion',
      label: 'Calefaccion',
    },
    inventarioV_aire_acondicionado: {
      name: 'inventarioV_aire_acondicionado',
      label: 'Aire Acondicionado',
    },
    inventarioV_control_alarma: {
      name: 'inventarioV_control_alarma',
      label: 'Control de Alarma',
    },
    inventarioV_claxon: {
      name: 'inventarioV_claxon',
      label: 'Claxon',
    },
    inventarioV_tapasol: {
      name: 'inventarioV_tapasol',
      label: 'Tapasol',
    },
    inventarioV_cinturones: {
      name: 'inventarioV_cinturones',
      label: 'Cinturones',
    },
    inventarioV_asientos: {
      name: 'inventarioV_asientos',
      label: 'Asientos',
    },
    inventarioV_fundas: {
      name: 'inventarioV_fundas',
      label: 'Fundas',
    },
    inventarioV_cubre_piso: {
      name: 'inventarioV_cubre_piso',
      label: 'Cubre Piso',
    },
    inventarioV_tapiz_techo: {
      name: 'inventarioV_tapiz_techo',
      label: 'Tapiz Techo',
    },
    inventarioV_luces_delanteras: {
      name: 'inventarioV_luces_delanteras',
      label: 'Luces Delanteras',
    },
    inventarioV_luces_posteriores: {
      name: 'inventarioV_luces_posteriores',
      label: 'Luces Posteriores',
    },
    inventarioV_luces_direccionales: {
      name: 'inventarioV_luces_direccionales',
      label: 'Luces Direccionales',
    },
    // INVENTARIO VEHICULO PT2
    inventarioV_luces_emergencia: {
      name: 'inventarioV_luces_emergencia',
      label: 'Luces Emergencia',
    },
    inventarioV_luces_freno: {
      name: 'inventarioV_luces_freno',
      label: 'Luces Freno',
    },
    // Estos se pueden quitar ?? tarjeta - soat
    inventarioV_tarjeta: {
      name: 'inventarioV_tarjeta',
      label: 'Tarjeta',
    },
    inventarioV_soat: {
      name: 'inventarioV_soat',
      label: 'Soat',
    },
    inventarioV_luces_neblina: {
      name: 'inventarioV_luces_neblina',
      label: 'Luces Neblina',
    },
    inventarioV_luces_cabina: {
      name: 'inventarioV_luces_cabina',
      label: 'Luces Cabina Furgon',
    },
    inventarioV_emblemas: {
      name: 'inventarioV_emblemas',
      label: 'Emblemas',
    },
    inventarioV_escarpines: {
      name: 'inventarioV_escarpines',
      label: 'Escarpines',
    },
    inventarioV_pin_remolque: {
      name: 'inventarioV_pin_remolque',
      label: 'Pin Remolque',
    },
    inventarioV_tapa_aceite: {
      name: 'inventarioV_tapa_aceite',
      label: 'Tapa Aceite',
    },
    inventarioV_tapa_hidrolina: {
      name: 'inventarioV_tapa_hidrolina',
      label: 'Tapa Hidrolina',
    },
    inventarioV_tapa_radiador: {
      name: 'inventarioV_tapa_radiador',
      label: 'Tapa Radiador',
    },
    inventarioV_tapa_combustible: {
      name: 'inventarioV_tapa_combustible',
      label: 'Tapa Combustible',
    },
    inventarioV_medidor_aceite: {
      name: 'inventarioV_medidor_aceite',
      label: 'Medidor Aceite',
    },
    inventarioV_tapa_limpiaParabrisas: {
      name: 'inventarioV_tapa_limpiaParabrisas',
      label: 'Tapa Limpia Parabrisas',
    },
    inventarioV_protector_radiador: {
      name: 'inventarioV_protector_radiador',
      label: 'Protector Radiador',
    },
    inventarioV_triangulo_seguridad: {
      name: 'inventarioV_triangulo_seguridad',
      label: 'Triangulo Seguridad',
    },
    inventarioV_gata: {
      name: 'inventarioV_gata',
      label: 'Gata con palanca',
    },
    inventarioV_llave_ruedas: {
      name: 'inventarioV_llave_ruedas',
      label: 'Llave Ruedas',
    },
    inventarioV_dado_aros: {
      name: 'inventarioV_dado_aros',
      label: 'Dado de seguro de Aros',
    },
    inventarioV_estuche_herramientas: {
      name: 'inventarioV_estuche_herramientas',
      label: 'Estuche Herramientas',
    },
    inventarioV_botiquin: {
      name: 'inventarioV_botiquin',
      label: 'Botiquin',
    },
    inventarioV_extintor: {
      name: 'inventarioV_extintor',
      label: 'Extintor',
    },
    inventarioV_llanta_repuesto: {
      name: 'inventarioV_llanta_repuesto',
      label: 'Llanta Repuesto',
    },
    inventarioV_otros: {
      name: 'inventarioV_otros',
      label: 'Otros',
    },
    // ADICIONALES
    // RECEPCION DEL VEHICULO
    inventarioV_ingreso: {
      name: 'inventarioV_ingreso',
      label: 'Ingreso del Vehiculo',
    },
    inventarioV_hora_ingreso: {
      name: 'inventarioV_hora_ingreso',
      label: 'Hora de Ingreso del Vehiculo',
    },
    inventarioV_trabajador: {
      name: 'inventarioV_trabajador',
      label: 'Trabajador',
    },
    // TRABAJOS
    trabajos: {
      name: 'trabajos',
      label: 'Trabajos',
      requiredErrorMessage: 'Debe ingresar al menos un trabajo',
    },
  },
};
