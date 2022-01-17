import { Paper } from '@mui/material';
import React, { ReactNode } from 'react';

import { useStyle } from '../../../styles/global.styles';

const Wrapper: React.FC = (props) => {
  const styles = useStyle();
  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>{props.children}</Paper>
    </div>
  );
};

export default Wrapper;
