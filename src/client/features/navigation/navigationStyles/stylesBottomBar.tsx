import { makeStyles } from '@material-ui/core/styles';

const stylesBottomBar = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: 'black',
  },
  button: {
    width: '100%',
  },
}));

export { stylesBottomBar as default };
