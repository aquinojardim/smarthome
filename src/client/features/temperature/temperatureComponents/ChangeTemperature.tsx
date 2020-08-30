import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Slider } from '@material-ui/core';
import * as actions from '../../../reducer/actions/actions';
import stylesChangeTemperature from '../temperatureStyles/stylesChangeTemperature';
import { generateMarks, valueText } from '../temperatureHelpers/helpersChangeTemperature';
import { InitialState } from '../../../reducer/reducerTypes/typesReducer';

export default function ChangeTemperature(): JSX.Element {
  const classes = stylesChangeTemperature();
  const { eco } = useSelector((state:InitialState) => state);
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
        onChange={(e:{target:{textContent:number}}) => {
          dispatch(actions.updateTarget(e.target.textContent));
        }}
        onChangeCommitted={(e:{target:{textContent:number}}) => {
          dispatch(
            actions.updateTemperature({
              eco,
              temperature: e.target.textContent,
            }),
          );
        }}
      />
      <Typography id="discrete-slider-custom" gutterBottom>
        Select Temperature
      </Typography>
    </div>
  );
}
