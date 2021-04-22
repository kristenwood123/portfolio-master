import React from 'react';
import {
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Button,
  Avatar,
  ListItemAvatar,
} from '@material-ui/core';
import {
  SpeedRounded,
  DevicesRounded,
  EmojiObjectsRounded,
  Visibility,
  TrendingUpRounded,
  SchoolTwoTone,
  TodayRounded,
  LanguageRounded,
  LocationOffRounded,
  LocationOnRounded,
  BlurOnRounded,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import './svgAnim.css';
import SectionHeading from '../component/SectionHeading';

const useStyles = makeStyles((theme) => ({
  icons: {
    display: 'inline-block',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    background: theme.palette.primary.main,
    color: '#fff',
    padding: '12px',
    position: 'relative',
    '-webkit-transform': 'translateZ(0)',
    transform: 'translateZ(0)',
    '-webkit-transition': 'color 1000ms',
    transition: 'color 1000ms',
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.secondary.main,
      '-webkit-transform': 'scaleY(0)',
      transform: 'scaleY(0)',
      '-webkit-transform-origin': '50% 100%',
      transformOrigin: '50% 100%',
      '-webkit-transition-property': 'transform',
      transitionProperty: 'transform',
      '-webkit-transition': '300ms ease-out',
      transition: '300ms ease-out',
    },
    '&:hover': {
      '&::before': {
        '-webkit-transform': 'scaleY(1)',
        transform: 'scaleY(1)'
      }
    }
  },
  listItemAvatar: {
    backgroundColor: theme.palette.primary.main,
    transition: '400ms all ease-in-out',
    '&:hover': {
      opacity: 0.8
    }
  },
  secondaryText: {
    color: theme.palette.secondary.main
  },
  anchor: {
    color: '#dc004e',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

function About() {
  const classes = useStyles();
  return (
    <div id='about'>
      <Box py={5} />
      <SectionHeading headingName="ABOUT" />
      <Typography variant='subtitle1' style={{ textAlign: 'justify' }}>
        {/* I am currently a {" "}
        <b className={classes.secondaryText}>
          final year Computer Science
         </b> {" "}
         undergraduate at{' '}
        <b>
          <a
            href='https://jssstuniv.in/'
            target='_blank'
            rel='noopener noreferrer'
            className={classes.anchor}
          >
            JSS Science and Technology University
          </a>
        </b> */}
        I am currently..... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam sunt accusantium reiciendis mollitia voluptate eaque fugit vel ullam, laboriosam veritatis pariatur quibusdam, impedit quo quidem! Delectus debitis est distinctio. Necessitatibus provident dolorum dolore laudantium, optio, cum perspiciatis quas ullam consequatur qui omnis nesciunt culpa magnam quibusdam perferendis architecto placeat!
      </Typography>
      <br />
      <Box my={2} />
      <Grid container justify='center' style={{ textAlign: 'center' }}>
        <Grid item xs={6} sm={6} md={3} style={{ padding: '5px' }}>
          <div className={classes.icons}>
            <SpeedRounded style={{ fontSize: '42px' }} />
          </div>
          <br />
          <Typography variant='h5'>Fast</Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, distinctio.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={3} style={{ padding: '5px' }}>
          <div className={classes.icons}>
            <DevicesRounded style={{ fontSize: '42px' }} />
          </div>
          <Typography variant='h5'>Responsive</Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, est.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={3} style={{ padding: '5px' }}>
          <div className={classes.icons}>
            <EmojiObjectsRounded style={{ fontSize: '42px' }} />
          </div>
          <Typography variant='h5'>User Centered</Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta!
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={3} style={{ padding: '5px' }}>
          <div className={classes.icons}>
            <TrendingUpRounded style={{ fontSize: '42px' }} />
          </div>
          <Typography variant='h5'>lorem51</Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto.
          </Typography>
        </Grid>
      </Grid>
      <Box my={3} />
      <Grid container justify='center' id='basic-details'>
        <Grid item xs={12} sm={6} lg={5}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.listItemAvatar}>
                  <SchoolTwoTone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Degree' secondary='BA, Political Science' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.listItemAvatar}>
                  <LocationOnRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Currently lives in'
                secondary='Orange County, CA'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.listItemAvatar}>
                  <BlurOnRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Interests'
                secondary='Coding, Working Out,
                Reading'
              />
            </ListItem>
          </List>
        </Grid>
        {/* <Grid item xs={12} sm={6} lg={5}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.listItemAvatar}>
                  <TodayRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Age' secondary='22' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.listItemAvatar}>
                  <LocationOffRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Native place'
                secondary='abc, xyz, India'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.listItemAvatar}>
                  <LanguageRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Langauges'
                secondary='English, Hindi'
              />
            </ListItem>
          </List>
        </Grid> */}
      </Grid>
      <Box my={3} />
      <Grid container justify='center'>
        <Button
          component='a'
          href='https://drive.google.com/file/d/1ImUewQl93bIlUAVJmQ5wjhvxM5bdeFRa/view?usp=sharing'
          target='_blank'
          variant='outlined'
          color='primary'
          startIcon={<Visibility />}
        >
          See My Resume
        </Button>
      </Grid>
      <Box my={3} />
      <Hidden xsDown implementation='css'>
        <GitHubCalendar username='kristenwood123' fontSize={16} blockSize={18}>
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Hidden>
    </div>
  );
}

export default About;
