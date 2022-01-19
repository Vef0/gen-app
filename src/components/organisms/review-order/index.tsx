import { Typography } from "@mui/material";
import {useFormikContext} from "formik";

const ReviewOrder = () => {
  const {values} = useFormikContext();
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Resumen de Orden
      </Typography>
    </div>
  );
};

export default ReviewOrder;