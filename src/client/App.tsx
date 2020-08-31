import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import stylesHome from './commonStyles/stylesHome';
import * as actions from './reducer/actions/actions';
import TopBar from './features/navigation/TopBar';
import BottomBar from './features/navigation/BottomBar';
import TemperaturePanel from './features/temperature/TemperaturePanel';
import LightPanel from './features/lights/LightPanel';

export default function App(): JSX.Element {
  const classes = stylesHome();
  const dispatch = useDispatch();
  fetch('/api', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => {
      dispatch(
        actions.getState({
          temperature: data.temperature,
          eco: data.eco,
          lights: data.lights,
        }),
      );
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('an error occured trying to get info');
      throw err;
    });
  const [view, setView] = useState(0);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <TopBar />
      <div className={classes.feedContainer}>
        {view === 1 ? <LightPanel /> : <TemperaturePanel />}
      </div>
      <BottomBar view={view} setView={setView} />
    </Container>
  );
}
