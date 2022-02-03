import {Typography} from '@mui/material';
import {useFormikContext} from 'formik';
import ClientDetails from './clientDetails';
import VehicleDetails from './vehicleDetails';
import ReceptionDetails from './receptionDetails';

const ReviewOrder = () => {
  const { values } = useFormikContext();
  return (
    <div>
      <br/>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium' }}>
        Resumen de Orden
      </Typography>
      <div>
        <ClientDetails formValues={values} />
        <VehicleDetails formValues={values} />
        <ReceptionDetails formValues={values}/>
      </div>
    </div>
  );
};

export default ReviewOrder;
