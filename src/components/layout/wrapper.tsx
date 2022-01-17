import { Paper } from '@mui/material';
import React, {ReactNode} from 'react';

const Wrapper: React.FC<{children: ReactNode}> = (props) => {
  return (
    <div>
      <Paper>
        {props.children}
      </Paper>
    </div>
  );
};

export default Wrapper;