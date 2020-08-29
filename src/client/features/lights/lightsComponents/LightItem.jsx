import React from 'react';
import * as actions from '../actions/actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LightSwitch from './LightSwitch';

const useStyles = makeStyles((theme) => ({
  floatRight: {
    display: 'inline',
    float: 'right',
  },
  name: {
    position: 'absolute',
    left: '50px',
  },
  floatLeft: {
    position: 'absolute',
    left: '170px',
  },
}));

export default function LightItem ({id, name, status}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
      <ListItem 
      // button onClick={(e) => dispatch(actions.addFav(topic))}
      >
        <IconButton className={floatRight} aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <span className={classes.name}>{name}</span>
        <LightSwitch className={floatLeft}/>
      </ListItem>
  );
}
