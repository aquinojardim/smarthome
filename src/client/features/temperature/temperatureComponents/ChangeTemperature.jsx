import React from "react";
import * as actions from "../../../reducer/actions/actions";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Slider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
}));

const generateMarks = () => {
  const result = [];
  for (let i = 0; i < 100; i += 10) {
    result.push({
      value: i,
      label: `${i}°`,
    });
  }
  return result;
};

const marks = generateMarks();

const valuetext = (value) => {
  return `${value}°`;
};

export default function ChangeTemperature() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Slider
        color="secondary"
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e) => {
          dispatch(actions.updateTarget(JSON.parse(e.target.textContent)));
        }}
        onChangeCommitted={(e) => {
          dispatch(
            actions.updateTemperature({
              eco: true,
              temperature: JSON.parse(e.target.textContent),
            })
          );
        }}
      />
      <Typography id="discrete-slider-custom" gutterBottom>
        Select Temperature
      </Typography>
    </div>
  );
}
