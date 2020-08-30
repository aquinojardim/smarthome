import { makeStyles } from "@material-ui/core/styles";

// custom styles for the drawer
const stylesPanel = makeStyles((theme) => ({
  // drawer stays at fixed width, no matter the size of the screen
  drawer: {
    flexShrink: 0,
  },
  button: {
    width: "50%",
  },
  title: {
    marginLeft: "18px",
    marginTop: "52px",
  },
  // width of background of drawer
  drawerPaper: {
    backgroundColor: "#333",
    [theme.breakpoints.up("xs")]: {
      width: "80%",
      height: "70%",
      margin: "10%",
      marginTop: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      height: "80%",
      margin: "10%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
      height: "80%",
      margin: "5%",
    },
  },
  drawerContainer: {
    overflow: "auto",
  },
  form: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export { stylesPanel }