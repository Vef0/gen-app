import {Typography} from '@mui/material';
import {useFormikContext} from 'formik';
import ClientDetails from './clientDetails';
import VehicleDetails from './vehicleDetails';

const ReviewOrder = () => {
  const { values } = useFormikContext();
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Resumen de Orden
      </Typography>
      <div>
        <ClientDetails formValues={values} />
        <VehicleDetails formValues={values} />
      </div>
    </div>
  );
};

export default ReviewOrder;
