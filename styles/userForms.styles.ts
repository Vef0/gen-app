import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
export const userFormsStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 400,
    margin: `${theme.spacing(0)} auto`,
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#E9897E',
    flexGrow: 1,
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  loginBtn: {
    width: '250px',
    backgroundColor: '#E9897E',
    color: '#000000',
    flexGrow: 1,
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  backBtn: {
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(15),
    backgroundColor: '#E9897E',
    flexGrow: 1,
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  successMessage: { color: 'green' },
  errorMessage: { color: 'red' },
  card: {
    marginTop: theme.spacing(0),
  },
  root: {
    width: 'auto',
    margin: theme.spacing(4),
    [theme.breakpoints.up(600 + +theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + +theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));
