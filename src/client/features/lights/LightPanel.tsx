/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Drawer, List, Divider,
} from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PowerOffIcon from '@material-ui/icons/PowerOff';
import stylesPanel from '../../commonStyles/stylesPanel';
import { InitialState } from '../../reducer/reducerTypes/typesReducer';
import * as actions from '../../reducer/actions/actions';
import LightItem from './lightsComponents/LightItem';
import LightForm from './lightsComponents/LightForm';

export default function LightPanel(): JSX.Element {
  // gives us access to styles object generated by makeStyles
  const classes = stylesPanel();
  // manupulated store central data
  const dispatch = useDispatch();
  // gives acess to store central data
  const { lights } = useSelector((state: InitialState) => state);
  // reorganizes lights in an array
  const lightsArray = Object.values(lights);

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
      variant="permanent"
      anchor="right"
    >
      <h3 className={classes.title}> Lights Panel </h3>
      <div className={classes.drawerContainer}>
        <Button
          // eslint-disable-next-line no-unused-vars
          onClick={() => {
            dispatch(actions.allLights(true));
          }}
          color="secondary"
          className={classes.button}
          startIcon={<PowerSettingsNewIcon />}
        >
          All On
        </Button>
        <Button
          // eslint-disable-next-line no-unused-vars
          onClick={() => {
            dispatch(actions.allLights(false));
          }}
          color="default"
          className={classes.button}
          startIcon={<PowerOffIcon />}
        >
          All Off
        </Button>
        <List>
          {lightsArray.map((obj: {name:string, status:boolean}, index: number) => (
            <LightItem
              key={index + 1}
              id={index + 1}
              name={obj.name}
              status={obj.status}
            />
          ))}
          <Divider />
          <LightForm />
        </List>
      </div>
    </Drawer>
  );
}
