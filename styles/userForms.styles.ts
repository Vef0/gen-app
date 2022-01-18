import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
export const userForms = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 400,
    margin: `${theme.spacing(0)} auto`,
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#000000',
    flexGrow: 1,
    '&:hover': {
      backgroundColor: '#C94235',
    },
  },
  loginBtn: {
    marginTop: theme.spacing(2),
    backgroundColor: '#000000',
    flexGrow: 1,
    '&:hover': {
      backgroundColor: '#C94235',
    },
  },
  backBtn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(15),
    backgroundColor: '#C94235',
    flexGrow: 1,
    '&:hover': {
      backgroundColor: '#000000',
    },
  },
  successMessage: { color: 'green' },
  errorMessage: { color: 'red' },
  card: {
    marginTop: theme.spacing(0),
  },
}));
