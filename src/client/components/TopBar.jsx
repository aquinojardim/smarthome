import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, IconButton, MenuItem, Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const today = new Date().toDateString();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // eslint-disable-next-line no-unused-vars
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <div>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {today}
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Login</MenuItem>
              <MenuItem onClick={handleClose}>Sign up </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </div>
    </div>
  );
}
