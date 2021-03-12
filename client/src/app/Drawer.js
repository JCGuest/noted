import React from 'react';
import { useStateValue } from '../StateProvider.js';
import { actionTypes } from '../reducer';
import { auth, provider } from '../firebase.js';
import { Drawer as MUIDrawer } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Note from './Note.js';
import Typography from '@material-ui/core/Typography';
// import { NavLink } from 'react-router-dom';

// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import List from '@material-ui/core/List';

function Drawer() {
  // const drawerWidth = 500;

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: 'flex'
  //   },
  //   appBar: {
  //     transition: theme.transitions.create(['margin', 'width'], {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.leavingScreen
  //     })
  //   },
  //   appBarShift: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     transition: theme.transitions.create(['margin', 'width'], {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen
  //     }),
  //     marginRight: drawerWidth
  //   },
  //   title: {
  //     flexGrow: 1
  //   },
  //   hide: {
  //     display: 'none'
  //   },
  //   drawer: {
  //     width: drawerWidth,
  //     flexShrink: 0
  //   },
  //   drawerPaper: {
  //     width: drawerWidth
  //   },
  //   drawerHeader: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     padding: theme.spacing(0, 1),
  //     // necessary for content to be below app bar
  //     ...theme.mixins.toolbar,
  //     justifyContent: 'flex-start'
  //   },
  //   content: {
  //     flexGrow: 1,
  //     padding: theme.spacing(3),
  //     transition: theme.transitions.create('margin', {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.leavingScreen
  //     }),
  //     marginRight: -drawerWidth
  //   },
  //   contentShift: {
  //     transition: theme.transitions.create('margin', {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen
  //     }),
  //     marginRight: 0
  //   }
  // }));

  // const classes = useStyles();
  // const theme = useTheme();

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
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
          <Typography variant='h6' noWrap>
            Noted🗒️
          </Typography>
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

  // return (
  //   <div className={classes.root}>
  //     <CssBaseline />
  //     <AppBar
  //       position='fixed'
  //       className={clsx(classes.appBar, {
  //         [classes.appBarShift]: open
  //       })}
  //     >
  //       <Toolbar>
  //         <IconButton
  //           color='inherit'
  //           aria-label='open drawer'
  //           onClick={handleDrawerOpen}
  //           edge='start'
  //           className={clsx(classes.menuButton, open && classes.hide)}
  //         >
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography variant='h6' noWrap>
  //           Persistent drawer
  //         </Typography>
  //       </Toolbar>
  //     </AppBar>
  //     <MUIDrawer
  //       variant='persistent'
  //       anchor='right'
  //       open={open}
  //       className='drawer'
  //     >
  //       <div className={classes.drawerHeader}>
  //         <IconButton onClick={handleDrawerClose}>
  //           {theme.direction === 'ltr' ? (
  //             <ChevronLeftIcon />
  //           ) : (
  //             <ChevronRightIcon />
  //           )}
  //         </IconButton>
  //       </div>
  //       <Divider />
  //       <List>
  //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </MUIDrawer>
  //     <main
  //       className={clsx(classes.content, {
  //         [classes.contentShift]: open
  //       })}
  //     >
  //       <div className={classes.drawerHeader} />
  //       <Typography paragraph>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing
  //       </Typography>
  //       <Typography paragraph>
  //         Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
  //         ullamcor
  //       </Typography>
  //     </main>
  //   </div>
  // );
}

export default Drawer;
