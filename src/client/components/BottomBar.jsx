/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import SpeedIcon from "@material-ui/icons/Speed";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "black",
  },
  button: {
    width: "100%",
  },
});

export default function BottomBar({ view, setView }) {
  const classes = useStyles();

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
