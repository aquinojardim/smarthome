import React, {useState} from 'react';
import { Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../reducer/actions/actions';
import TopBar from '../components/TopBar';
import TemperaturePanel from '../features/temperature/TemperaturePanel';
import LightPanel from '../features/lights/LightPanel';
import BottomBar from '../components/BottomBar';

// generate object to hold our custom stylings
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  feedContainer: {
    marginTop: theme.spacing(8),
    alignItems: 'center',
  }
}));



const Home = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  dispatch(actions.getState())
  const [view, setView] = useState(0)


  return (
      <Container maxWidth="lg" className={classes.root}>
        <TopBar/>
        <div className={classes.feedContainer}>
        {view === 1 ?
          <LightPanel/> :
          <TemperaturePanel/>
        }
        </div>
        <BottomBar view={view} setView={setView}/>
      </Container>
  );
};

export default Home; 
