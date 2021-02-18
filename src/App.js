import React, { useState } from 'react'
import { useScrollTrigger, makeStyles, Zoom, Fab } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SideNavLayout from './layout/SideNavLayout';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import TimeLine from './sections/Timeline';
import Contact from './sections/Contact';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}


function App(props) {
  const [darkState, setDarkState] = useState(window.localStorage.getItem("theme") === "dark");
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#00adb5" : '#0a043c';
  const mainSecondaryColor = darkState ? "#c70039" : "#f40552";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const handleThemeChange = () => {
    if (!darkState)
      window.localStorage.setItem("theme", "dark");
    else
      window.localStorage.removeItem("theme");
    setDarkState(!darkState);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div id="back-to-top-anchor" ></div>
      <SideNavLayout darkState={darkState} changeTheme={handleThemeChange}>
        <>
          <Home darkState={darkState} />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <TimeLine />
          <Contact />
        </>
      </SideNavLayout>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  )
}

export default App
