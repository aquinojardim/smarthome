/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FormControlLabel, ListItem, ListItemSecondaryAction, ListItemText, Switch, IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import stylesLightItem from '../lightsStyles/stylesLightItem';
import * as actions from '../../../reducer/actions/actions';

export interface typesLightItem {
  id: number,
  name: string,
  status: boolean,
}

export default function LightItem({ id, name, status }:typesLightItem): JSX.Element {
  const classes = stylesLightItem();
  const dispatch = useDispatch();

  const handleChange = (event: {target:{checked:boolean}}) => {
    dispatch(
      actions.updateLight({
        id,
        value: {
          name,
          status: event.target.checked,
        },
      }),
    );
  };

  return (
    <ListItem>
      <FormControlLabel
        control={(
          <Switch
            checked={status}
            onChange={handleChange}
            aria-label="light switch"
          />
        )}
        label={status ? 'on' : 'off'}
      />
      <ListItemText className={classes.name} primary={name} />
      <ListItemSecondaryAction>
        <IconButton
          // eslint-disable-next-line no-unused-vars
          onClick={() => {
            dispatch(actions.deleteLight(id));
          }}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
