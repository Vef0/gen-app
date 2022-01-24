import {FormikValues} from "formik";
import React from "react";
import {Grid} from "@mui/material";
import {CheckBoxField, InputField} from "../../../common/components/atoms/form-fields";

interface PropsType {
  formsField: FormikValues
}


const VehicleItems: React.FC<PropsType> = (props) => {
  const { formsField : {
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
  }} = props;
  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      {/*VEHICLE CHECKBOXES*/}
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_placa.name}
          label={inventarioV_placa.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_parach_post.name}
          label={inventarioV_parach_post.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_parachoques_del.name}
          label={inventarioV_parachoques_del.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_parabrisas.name}
          label={inventarioV_parabrisas.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_plumillas.name}
          label={inventarioV_plumillas.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_antena.name}
          label={inventarioV_antena.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_esp_laterales.name}
          label={inventarioV_esp_laterales.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_esp_interores.name}
          label={inventarioV_esp_interores.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_lun_laterales.name}
          label={inventarioV_lun_laterales.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_lun_posteriores.name}
          label={inventarioV_lun_posteriores.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_lun_manijas.name}
          label={inventarioV_lun_manijas.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_lun_boton.name}
          label={inventarioV_lun_boton.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_barra_anti.name}
          label={inventarioV_barra_anti.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_caseta_tolva.name}
          label={inventarioV_caseta_tolva.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_autoradio.name}
          label={inventarioV_autoradio.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_mascara.name}
          label={inventarioV_mascara.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_parlantes.name}
          label={inventarioV_parlantes.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_encendedor.name}
          label={inventarioV_encendedor.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_cenicero.name}
          label={inventarioV_cenicero.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_calefaccion.name}
          label={inventarioV_calefaccion.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_aire_acondicionado.name}
          label={inventarioV_aire_acondicionado.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_control_alarma.name}
          label={inventarioV_control_alarma.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_claxon.name}
          label={inventarioV_claxon.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_tapasol.name}
          label={inventarioV_tapasol.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_cinturones.name}
          label={inventarioV_cinturones.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_asientos.name}
          label={inventarioV_asientos.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_fundas.name}
          label={inventarioV_fundas.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_cubre_piso.name}
          label={inventarioV_cubre_piso.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_tapiz_techo.name}
          label={inventarioV_tapiz_techo.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_luces_delanteras.name}
          label={inventarioV_luces_delanteras.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_luces_posteriores.name}
          label={inventarioV_luces_posteriores.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_luces_direccionales.name}
          label={inventarioV_luces_direccionales.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_luces_emergencia.name}
          label={inventarioV_luces_emergencia.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_luces_freno.name}
          label={inventarioV_luces_freno.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_tarjeta.name}
          label={inventarioV_tarjeta.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_soat.name}
          label={inventarioV_soat.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_luces_neblina.name}
          label={inventarioV_luces_neblina.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_luces_cabina.name}
          label={inventarioV_luces_cabina.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_emblemas.name}
          label={inventarioV_emblemas.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_escarpines.name}
          label={inventarioV_escarpines.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_pin_remolque.name}
          label={inventarioV_pin_remolque.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_tapa_aceite.name}
          label={inventarioV_tapa_aceite.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_tapa_hidrolina.name}
          label={inventarioV_tapa_hidrolina.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_tapa_radiador.name}
          label={inventarioV_tapa_radiador.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_tapa_combustible.name}
          label={inventarioV_tapa_combustible.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_medidor_aceite.name}
          label={inventarioV_medidor_aceite.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_tapa_limpiaParabrisas.name}
          label={inventarioV_tapa_limpiaParabrisas.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_protector_radiador.name}
          label={inventarioV_protector_radiador.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_triangulo_seguridad.name}
          label={inventarioV_triangulo_seguridad.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_gata.name}
          label={inventarioV_gata.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_llave_ruedas.name}
          label={inventarioV_llave_ruedas.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_dado_aros.name}
          label={inventarioV_dado_aros.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_estuche_herramientas.name}
          label={inventarioV_estuche_herramientas.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_botiquin.name}
          label={inventarioV_botiquin.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_extintor.name}
          label={inventarioV_extintor.label}
        />
      </Grid>
      <Grid item xs={12}>
        <CheckBoxField
          name={inventarioV_llanta_repuesto.name}
          label={inventarioV_llanta_repuesto.label}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          defaultProps={{
            name: inventarioV_otros.name,
            label: inventarioV_otros.label,
            fullWidth: true,
          }}
        />
      </Grid>
    </Grid>
  )
}

export default VehicleItems;