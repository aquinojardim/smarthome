/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles } from '@material-ui/core/styles';

const stylesChangeTemperature = makeStyles((theme:any) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
  },
}));

export { stylesChangeTemperature as default };
