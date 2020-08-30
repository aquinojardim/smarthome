/* eslint-disable react/prop-types */
import React from "react";
import * as actions from "../../../reducer/actions/actions";
import { useDispatch } from "react-redux";
import { stylesLightItem } from "../lightsStyles/stylesLightItem";
import { FormControlLabel, ListItem, ListItemSecondaryAction, ListItemText, Switch, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function LightItem({ id, name, status }) {
  const classes = stylesLightItem();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      actions.updateLight({
        id: id,
        value: {
          name: name,
          status: event.target.checked,
        },
      })
    );
  };

  return (
    <ListItem>
      <FormControlLabel
        control={
          <Switch
            checked={status}
            onChange={handleChange}
            aria-label="light switch"
          />
        }
        label={status ? "on" : "off"}
      />
      <ListItemText className={classes.name} primary={name} />
      <ListItemSecondaryAction>
        <IconButton
          // eslint-disable-next-line no-unused-vars
          onClick={(e) => {
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
