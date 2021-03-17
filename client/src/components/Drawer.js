import React from 'react';
import { auth, provider } from '../firebase.js';
import { Drawer as MUIDrawer } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Note from './Note.js';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';

function Drawer() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        // get user data from firebase and log user in
      })
      .catch((e) => alert(e.message));
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            className='icon-button'
            color='pink'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
          >
            <MenuIcon className='menu-icon' />
          </IconButton>
          <IconButton onClick={signIn}>
            <Typography variant='h6' noWrap>
              Login
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      <MUIDrawer
        variant='persistent'
        anchor='right'
        open={open}
        className='drawer'
      >
        <Note />
        {/* <Note />
        <Note />
        <Note /> */}
      </MUIDrawer>
    </div>
  );
}

export default connect(null, { setUser })(Drawer);
