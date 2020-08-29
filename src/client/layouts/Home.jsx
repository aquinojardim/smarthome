import React from 'react';
import { Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import LightPanel from '../features/lights/LightPanel';
import TemperaturePanel from '../features/lights/TemperaturePanel';

// generate object to hold our custom stylings
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  feedContainer: {
    marginTop: theme.spacing(8),
    alignItems: 'center',
    width: '100%',
  }
}));



const Home = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const today = new Date().toISOString().slice(0, 10)

  dispatch(getState())

  return (
    <div className={classes.feedContainer}>
      <h1> WELCOME HOME {today} </h1>
      <Container maxWidth="lg" className={classes.root}>
        <LightPanel/>
        <TemperaturePanel/>
      </Container>
    </div>
  );
};

export default Home; 
