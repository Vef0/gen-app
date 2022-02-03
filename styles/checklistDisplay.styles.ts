import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const checklistDisplayStyles = makeStyles((theme: Theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    display: 'flex',
    backgroundColor: '#E9897E',
    flexGrow: 1,
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'absolute',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}));
