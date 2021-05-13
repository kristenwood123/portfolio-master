import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Avatar,
  Box,
  useMediaQuery,
  Typography,
  Button,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  IconButton,
  Hidden,
  Drawer,
  CssBaseline,
  AppBar,
  Tooltip,
} from '@material-ui/core';
import {
  HomeRounded,
  LinkedIn,
  GitHub,
  AccountCircleRounded,
  ContactsRounded,
  AccountTreeRounded,
  ExploreRounded,
  DoubleArrow,
  TimelineRounded,
  Brightness2,
  Cancel,
  WbSunny,
} from '@material-ui/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../App.css';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
      minHeight: '100vh',
    },
  },
  appBar: {
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.type === 'dark' ? "#2c061f" : "#070d59"
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  name: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: theme.palette.type === 'dark' ? "#2c061f" : "#070d59",
    backgroundAttachment: 'fixed',
    color: '#fff',
    width: drawerWidth,
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  whiteColor: {
    color: '#fff'
  },
  socialIcons: {
    color: '#f3f3f3',
    '&:hover': {
      color: '#d6d6d6',
    },
  },
  listItemText: {
    textTransform: 'capitalize',
  },
  lightmodeIcon: {
    color: '#ffcc29',
    transform: "rotate(180deg)"
  },
  darkmodeIcon: {
    transform: `rotate(20deg)`,
    color: '#f5f4f0'
  },
  themeChangeBtn: {
    background: "transparent",
    boxShadow: "none",
    textTransform: "capitalize",
    '&:hover': {
      background: "transparent"
    }
  },
  withLove: {
    textAlign: 'center',
    marginTop: '1rem'
  },
  drawerContainer: {
    minHeight: '100vh',
  },
  sideNavbar: {
    minHeight: '85vh'
  },
  pulse: {
    boxShadow: `0 0 0 0 ${theme.palette.type === 'dark' ? "#555555" : "#0a043c"}`,
    background: 'linear-gradient(90deg,#f8faff 19px,transparent 1%) 50%,linear-gradient(#f8faff 19px,transparent 1%) 50%,#6c8eef',
    backgroundSize: '22px 22px',
    animation: `$pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1)`,
  },
  "@keyframes pulse": {
    to: {
      boxShadow: `0 0 0 20px rgba(232, 76, 61, 0)`,
    }
  }
}));

function SideNavbar(props) {
  const { container, changeTheme, darkState } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = (theme) => {
    if (!matches) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleSetActive = function (to) {
    setActive(to);
  };

  const navLinkItems = [
    {
      name: 'home',
      icon: <HomeRounded />,
    },
    {
      name: 'about',
      icon: <AccountCircleRounded />,
    },
    {
      name: 'projects',
      icon: <AccountTreeRounded />,
    },
    {
      name: 'experience',
      icon: <ExploreRounded />,
    },
    {
      name: 'skills',
      icon: <DoubleArrow />,
    },
    {
      name: 'academic',
      icon: <TimelineRounded />,
    },
    {
      name: 'contact',
      icon: <ContactsRounded />,
    },
  ];

  const drawer = (
    <div className={'navbar-margin ' + classes.drawerContainer}>
      <Hidden smDown implementation="css">
        <Grid
          container
          justify={'flex-end'}
          className={classes.paper}
        >
          <Tooltip placement="right-end" title='Toggle light/dark theme'>
            <Button
              variant="contained"
              color="secondary"
              className={classes.themeChangeBtn}
              endIcon={darkState ? <WbSunny className={classes.lightmodeIcon} /> : <Brightness2 className={classes.darkmodeIcon} />}
              onClick={e => changeTheme()}
            >
              {darkState ? "Light" : "Dark"}
            </Button>
          </Tooltip>
        </Grid>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Grid
          container
          justify={'flex-end'}
          className={classes.paper}
        >
          <IconButton onClick={e => handleDrawerToggle()}>
            <Cancel color='secondary' />
          </IconButton>
        </Grid>
      </Hidden>
      <div className={classes.sideNavbar}>
        <Grid container justify={'center'} className={classes.paper}>
          <Avatar
            component='a'
            href='https://github.com/kristenwood123'
            target='_blank'
            className={classes.large + ' ' + classes.pulse}
          >
            <LazyLoadImage
              alt={'kristen was here'}
              src={
                'https://avatars.githubusercontent.com/u/64042155?s=460&u=0b4cd1fdb8ada63be369e9d1335866cbf405c22f&v=4'
              }
              effect='blur'
              width={theme.spacing(18)}
              height={theme.spacing(18)}
            />
          </Avatar>
        </Grid>
        <Box my={1} />
        <Grid
          container
          justify={'center'}
          className={classes.paper}
          style={{ padding: '0 30px' }}
        >
          <a href='https://github.com/Kristenwood123' target='__blank'>
            <IconButton className={classes.socialIcons}>
              <GitHub />
            </IconButton>
          </a>
          <a href='https://www.linkedin.com/in/kristenwoodward1/' target='__blank'>
            <IconButton className={classes.socialIcons}>
              <LinkedIn />
            </IconButton>
          </a>
        </Grid>
        <Box my={1} />
        <List>
          {navLinkItems.map((link) => {
            const { name, icon } = link;
            return (
              <Link
                activeClass='active'
                to={name}
                spy={true}
                key={name}
                smooth={true}
                offset={30}
                duration={800}
                onSetActive={handleSetActive}
              >
                <ListItem
                  selected={active === name}
                  button
                  onClick={handleClick}
                >
                  <ListItemIcon className={classes.whiteColor}>{icon}</ListItemIcon>
                  <ListItemText
                    primary={name}
                    className={classes.listItemText}
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <Hidden mdUp implementation='css'>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar variant='dense'>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.name} noWrap>
              kristen woodward
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: "auto" }}
              className={classes.themeChangeBtn}
              endIcon={darkState ? <WbSunny className={classes.lightmodeIcon} /> : <Brightness2 className={classes.darkmodeIcon} />}
              onClick={e => changeTheme()}
            >
              {darkState ? "Light" : "Dark"}
            </Button>
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden mdUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

SideNavbar.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === 'undefined' ? Object : Element
  ),
};

export default SideNavbar;
