/* eslint-disable react/prop-types */
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import stylesBottomBar from '../styles/stylesBottomBar';

export interface typesBottomBar {
  view:number;
  setView:(a:number) => void;
}

export default function BottomBar({ view, setView }:typesBottomBar): JSX.Element {
  const classes = stylesBottomBar();

  return (
    <BottomNavigation
      value={view}
      onChange={(event:unknown, newValue:number) => {
        setView(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.button}
        label="Temperature Panel"
        icon={<SpeedIcon />}
      />
      <BottomNavigationAction
        className={classes.button}
        label="Light Panel"
        icon={<EmojiObjectsIcon />}
      />
    </BottomNavigation>
  );
}
