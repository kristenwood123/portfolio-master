import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Button,
  Divider,
} from '@material-ui/core';
import { CodeRounded, CallMadeRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ProjectsData from '../Data/projectsData';
import SectionHeading from '../component/SectionHeading';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderBottom: '3px solid blue',
    margin: '10px auto',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  heading: {
    fontSize: '45px!important',
    color: theme.palette.primary.main,
    fontWeight: '600!important'
  },
  media: {
    height: 300,
  },
  mtop: {
    marginTop: 'auto',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '0.6rem',
    fontSize: '0.85rem',
    padding: '0.2rem',
    boxShadow: '9px 9px 16px rgba(54, 54, 54, 0.15), -9px -9px 16px rgba(70, 70, 70, 0.15)',
    transform: 'rotate(45deg) translateX(3rem) translateY(-2rem)',
    width: '10rem',
    textAlign: 'center',
  },
  recommended: {
    color: '#fff',
    background: '#383e56'
  },
  new: {
    background: '#e84a5f',
    color: '#fff'
  }
}));

function Projects({ scrollPosition }) {
  const classes = useStyles();
  return (
    <div id='projects'>
      <Box py={3} />
      <SectionHeading headingName="Projects" />
      <Grid container justify='center' spacing={2}>
        {ProjectsData.map((data, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sm={6}
            md={6}
            lg={4}
          >
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
              >
                <LazyLoadImage
                  alt={data.name}
                  src={data.image}
                  placeholderSrc="https://res.cloudinary.com/dykt1kcdk/image/upload/v1590418576/portfolio/Screenshot_from_2020-05-25_20-23-49_zwm3ik.png"
                  width={'100%'}
                  scrollPosition={scrollPosition}
                  height={300}
                  threshold={200}
                  effect='blur'
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {data.name}
                </Typography>
                {data.recommended && (
                  <Typography className={`${classes.badge} ${classes.recommended}`} variant='subtitle1'>
                    SUGGESTED
                  </Typography>
                )}
                {data.new && (
                  <Typography className={`${classes.badge} ${classes.new}`} variant='subtitle1'>
                    NEW
                  </Typography>
                )}
                <Typography
                  variant='subtitle1'
                  color='textSecondary'
                  align='justify'
                >
                  {data.description}
                </Typography>
                <Grid container justify='space-evenly'>
                  {data.tech.map((tech, index) => (
                    <Chip
                      key={tech}
                      label={tech}
                      style={{ opacity: '0.8', marginTop: '10px' }}
                      color={index % 2 !== 0 ? 'primary' : 'default'}
                    />
                  ))}
                </Grid>
              </CardContent>
              <Divider className={classes.mtop} />
              <CardActions style={{ justifyContent: 'space-around' }}>
                <Button
                  target='_blank'
                  rel='noreferrer'
                  size='medium'
                  color='primary'
                  href={data.code}
                  endIcon={<CodeRounded />}
                >
                  Source Code
                </Button>
                <Button
                  target='_blank'
                  rel='noreferrer'
                  size='medium'
                  color='primary'
                  href={data.site}
                  endIcon={<CallMadeRounded />}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default trackWindowScroll(Projects);
