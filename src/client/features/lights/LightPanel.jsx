import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider } from '@material-ui/core';
import LightItem  from './lightsComponents/LightItem';
import { useSelector } from 'react-redux';
// define width of sidebar
const drawerWidth = '40%';

// custom styles for the sidebar
const useStyles = makeStyles((theme) => ({
  // drawer stays at fixed width, no matter the size of the screen
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  title: {
    marginLeft: '18px',
    marginTop: '52px',
  },
  // width of background of drawer
  drawerPaper: {
    backgroundColor: '#F1F5F8',
    margin: theme.spacing(14),
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));


function LightPanel(props) {
  // gives us access to styles object generated by makeStyles
  const classes = useStyles();
  const { lights } = useSelector((state) => state);
  const lightsArray = Object.values(lights)
  
  /* Drawer is our sidebar navigation component, stays permanently fixed to side, as docs recommend on desktop usage */
  return (
    <Drawer
    // targets the nested component of the drawer (in this case, the paper)
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
      variant="permanent"
      anchor="right"
    >
    <h3 className={classes.title}> Lights Panel </h3>
      <div className={classes.drawerContainer}>
        {/* map topics to new navbar items (rendered as a list) */}
        <List>
          {/* up and down implent logic comparing with Date.now()*/}
          {/* <LightItem id={1} name={'test'} status={true}/> */}
          {lightsArray.map((obj, index) => { 
            return (
              <LightItem id={index+1} name={obj.name} status={obj.status}/>
            )
          })}
          <Divider/>
          {/* form to arr a new light */}
        </List>
      </div>
    </Drawer>
  );
}
export default LightPanel;
