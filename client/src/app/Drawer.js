import React from 'react';
import { useStateValue } from '../StateProvider.js';
import { actionTypes } from '../reducer';
import { auth, provider } from '../firebase.js';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer as MUIDrawer } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Note from './Note.js';

function Drawer() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch((e) => alert(e.message));
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };

  const drawerWidth = 300;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: drawerWidth
    },
    title: {
      flexGrow: 1
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    }
  }));

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          {/* <Typography variant='h6' noWrap> */}
          Persistent drawer
          {/* </Typography> */}
          <IconButton
            className='icon-button'
            color='pink'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
          >
            <MenuIcon className='menu-icon' />
          </IconButton>
          <IconButton onClick={signIn}>Login</IconButton>
        </Toolbar>
      </AppBar>

      <MUIDrawer
        variant='persistent'
        anchor='right'
        open={open}
        className='drawer'
      >
        <Note />
      </MUIDrawer>
    </div>
  );
}

export default Drawer;
