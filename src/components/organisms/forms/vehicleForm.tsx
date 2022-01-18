import { Grid } from '@mui/material';
import { InputField } from 'components/atoms/form-fields';
import { FormikValues } from 'formik';

interface PropsType {
  formsField: FormikValues;
}

const VehicleForm: React.FC<PropsType> = (props) => {
  const {
    formsField: {
      vehiculo_placa,
      vehiculo_marca,
      vehiculo_modelo,
      vehiculo_annio,
      vehiculo_color,
      vehiculo_kilometraje,
      vehiculo_combustible,
      vehiculo_personaRecojo,
      vehiculo_entrega,
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
      inventarioV_ingreso,
      inventarioV_hora_ingreso,
      inventarioV_trabajador,
    },
  } = props;
  return (
    <div>
      <Grid container spacing={3} sx={{ p: 2 }}>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_placa.name,
              label: vehiculo_placa.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_marca.name,
              label: vehiculo_marca.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_modelo.name,
              label: vehiculo_modelo.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_annio.name,
              label: vehiculo_annio.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_color.name,
              label: vehiculo_color.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_kilometraje.name,
              label: vehiculo_kilometraje.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_combustible.name,
              label: vehiculo_combustible.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_personaRecojo.name,
              label: vehiculo_personaRecojo.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: vehiculo_entrega.name,
              label: vehiculo_entrega.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default VehicleForm;
