/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles } from '@material-ui/core/styles';

const stylesHome = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  feedContainer: {
    marginTop: theme.spacing(8),
    alignItems: 'center',
  },
}));

export { stylesHome as default };
