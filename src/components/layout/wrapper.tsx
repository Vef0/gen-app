import {Paper} from '@mui/material';
import React from 'react';
import {userFormsStyles} from '../../../styles/userForms.styles';

const Wrapper: React.FC = (props) => {
  const styles = userFormsStyles();
  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>{props.children}</Paper>
    </div>
  );
};

export default Wrapper;
