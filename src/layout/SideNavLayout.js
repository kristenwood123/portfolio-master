import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideNavbar from '../component/SideNavbar';
import Footer from '../sections/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    userSelect: 'none', // remove if you want user to copy text
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
}));

function SideNavLayout({ changeTheme, darkState, children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideNavbar darkState={darkState} changeTheme={changeTheme} />
      <main>
        <div className={classes.content}>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default SideNavLayout;
