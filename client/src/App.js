import React from 'react';
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Persistent drawer
          </Typography>
          <IconButton
            color='pink'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            className={open}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant='persistent' anchor='left' open={open}>
        <h1>Hello</h1>
      </Drawer>
    </div>
  );
}

export default App;
