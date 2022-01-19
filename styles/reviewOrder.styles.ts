import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const reviewOrderStyles = makeStyles((theme: Theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));
