import React from "react";
import * as actions from "../../../reducer/actions/actions";
import { useDispatch } from "react-redux";
import { Typography, Slider } from "@material-ui/core";
import { stylesChangeTemperature } from "../temperatureStyles/stylesChangeTemperature";
import { generateMarks , valueText } from "../temperatureHelpers/helpersChangeTemperature";


export default function ChangeTemperature() {
  const classes = stylesChangeTemperature();
  const dispatch = useDispatch();
  const marks = generateMarks();

  return (
    <div className={classes.root}>
      <Slider
        color="secondary"
        defaultValue={0}
        getAriaValueText={valueText}
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
