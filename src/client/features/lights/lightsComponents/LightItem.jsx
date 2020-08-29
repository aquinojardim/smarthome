import React from 'react';
import * as actions from '../../../reducer/actions/actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { 
  FormControlLabel,
  ListItem, 
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  IconButton
} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  name: {
    position: 'absolute',
    left: '40%',
  },
}));

export default function LightItem ({id, name, status}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(actions.updateLight({
      id: id,
      value: {
        name: name,
        status: event.target.checked,
      }
    }))
  }

  return (
      <ListItem>
        <FormControlLabel
            control={ <Switch 
            checked={status} 
            onChange={handleChange} 
            aria-label="light switch" />}
            label={status ? 'on' : 'off'}
        />
        <ListItemText className={classes.name} primary={name} />
        <ListItemSecondaryAction>
          <IconButton 
            onClick={(e) => {
              dispatch(actions.deleteLight(id))
            }}
            edge="end" 
            aria-label="delete" >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  );
}
