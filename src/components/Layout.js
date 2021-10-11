import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

let useStyles = makeStyles({
  root: {
    display: "flex"
  },
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%"
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  }
});

let Layout = ({ children }) => {

  let classes = useStyles();
  return (
    <div className={classes.root}>

      {/* Side Bar*/}

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}
      >
        <div>
          <Typography variant="h5" color="text.secondary">
            Norp Notes
          </Typography>
        </div>
      </Drawer>

      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}

export default Layout;
