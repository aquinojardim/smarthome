/* eslint-disable react/prop-types */
import React from "react";
import { stylesBottomBar } from "../styles/stylesBottomBar";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import SpeedIcon from "@material-ui/icons/Speed";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

export default function BottomBar({ view, setView }) {
  const classes = stylesBottomBar();

  return (
    <BottomNavigation
      value={view}
      onChange={(event, newValue) => {
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
