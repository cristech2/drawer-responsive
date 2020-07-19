import React from "react";
import {
  makeStyles,
  Drawer,
  Divider,
  isWidthUp,
  withWidth,
} from "@material-ui/core";
import ListMenu from "./ListMenu";

const drawerWidth = 240;

const estilos = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Cajon = (props) => {
  const classes = estilos();

  if (isWidthUp("md", props.width)) {
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <ListMenu onClose={props.onClose} />
      </Drawer>
    );
  } else {
    return (
      <Drawer
        className={classes.drawer}
        variant="temporary"
        classes={{ paper: classes.drawerPaper }}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <ListMenu onClose={props.onClose} />
      </Drawer>
    );
  }
};

export default withWidth()(Cajon);
