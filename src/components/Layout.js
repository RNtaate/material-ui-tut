import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useHistory, useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

let useStyles = makeStyles({
  root: {
    display: "flex"
  },
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerButton: {
    backgroundColor: "#f3f3f3"
  }
});

let Layout = ({ children }) => {

  let classes = useStyles();
  let history = useHistory();
  let location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary"/>,
      path: "/"
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary"/>,
      path: "/create"
    }
  ]

  let handlePathClick = (item) => {
    history.push(item.path);
  }

  return (
    <div className={classes.root}>

      {/* Side Bar*/}

      <Drawer
        sx={{
          width: drawerWidth
        }}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}
      >
        <div>
          <Typography 
            variant="h5"
            color="text.secondary"
            sx={{
              padding: (theme) => theme.spacing(2)
            }}
          >
            Norp Notes
          </Typography>

          {/** List links */}
          <List>
            {menuItems.map(item => (
              <ListItemButton
                key={item.text}
                onClick={ () => handlePathClick(item)}
                sx={{
                  backgroundColor: location.pathname == item.path ? "#f3f3f3" : null
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>

      <div className={classes.page}>
        {/* app bar */}
        <AppBar 
          position="static"
          elevation={0}
        >
          <Toolbar>
            <Typography 
              color="text.primary"
              sx={{
                flexGrow: 1
              }}
            >
              Today is the {format(new Date(), "do MMMM Y")}
            </Typography>
            <Typography>
              Dipesh
            </Typography>
            <Avatar 
              alt="Dipesh Image"
              src="/bird.jpg"
              sx={{
                ml: 2
              }}
            />
          </Toolbar>
        </AppBar>
        {children}
      </div>
    </div>
  )
}

export default Layout;
