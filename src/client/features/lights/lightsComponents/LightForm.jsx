import React, {useState} from 'react';
import * as actions from '../../../reducer/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { 
  ListItem,
  TextField,
  IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  name: {
    position: 'absolute',
    left: '40%',
  },
}));

export default function LightForm () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { lightCount } = useSelector((state) => state);
  const [fields, setFields] = useState({
    input:''
  });

  const handleChange = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setFields({
      ...fields,
      [targetName]: value
    })
  }

  return (
      <ListItem>
        <TextField 
          id="input-light" 
          label="Add a new light" 
          required
          name="input"
          value={fields.input}
          onChange={handleChange}
          />
        <IconButton 
          onClick={() => {
            dispatch(actions.updateLight({
            id: lightCount+1,
            value: {
              name: fields.input,
              status: false,
            }}))
            setFields({
            ...fields,
            input: ''
            })
          }}
          edge="end" 
          aria-label="add"
        >
          <AddCircleIcon/>
        </IconButton>
      </ListItem>
  );
}
