import { Grid, Stack } from '@mui/material';
import {
  CheckBoxField,
  DatePicker,
  InputField,
} from 'components/atoms/form-fields';
import { FormikValues } from 'formik';

interface PropsType {
  formsField: FormikValues;
}

const ChecklistConstancia: React.FC<PropsType> = (props) => {
  const {
    formsField: {
      caja_accesorios_cb,
      manual_cb,
      otros,
      na_cb,
      constancia_fecha,
    },
  } = props;
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid container spacing={3} sx={{ p: 2 }}>
          <Grid item xs={12} sm={6}>
            <CheckBoxField
              name={caja_accesorios_cb.name}
              label={caja_accesorios_cb.label}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CheckBoxField name={manual_cb.name} label={manual_cb.label} />
          </Grid>
          <Grid item xs={12}>
            <InputField
              defaultProps={{
                name: otros.name,
                label: otros.label,
                fullWidth: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CheckBoxField name={na_cb.name} label={na_cb.label} />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              name={constancia_fecha.name}
              label={constancia_fecha.label}
              fullWidth
            />
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default ChecklistConstancia;
