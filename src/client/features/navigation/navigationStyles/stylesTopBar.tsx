import { makeStyles } from '@material-ui/core/styles';

const stylesTopBar = makeStyles((theme: {spacing:(x:number)=>void}) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export { stylesTopBar as default };
