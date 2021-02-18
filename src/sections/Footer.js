import { Box, Chip, Grid, IconButton, Snackbar, Button, Tooltip, Typography, makeStyles } from '@material-ui/core'
import { CallRounded, CloseRounded, LinkRounded, MailRounded } from '@material-ui/icons'
import BgImage from '../assets/hireMe_bg.webp'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
  hireMe: {
    position: 'relative',
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  content: {
    padding: '2rem',
    textAlign: 'center',
    color: '#fff'
  },
  internalContent: {
    zIndex: 10,
    padding: 10
  },
  hireMeBtn: {
    textTransform: "capitalize",
    minWidth: '150px',
    fontWeight: 'bold',
    color: theme.palette.type === 'dark' ? "#2c061f" : "#070d59"
  },
  after: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    background: theme.palette.type === 'dark' ? `linear-gradient(132deg,#2c061fe8 0%, #2c061fe6 12%, #0d0109e0 100%, #2c061fdb 100%)` : `linear-gradient(180deg,#00318be8 0%, #002b7ae3 12%, #001d51 100%, #001946 100%)`,
  }
}
))

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const handleClick = (data) => {
    setOpen(true);
    setMessage('Copied SuccessFully!');
    navigator.clipboard.writeText(data);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  function Copyright() {
    return (
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
      MIT {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const classes = useStyles();
  return (
    <>
      <Grid container justify='center'>
        <Grid className='mt-3' container>
          {/* <Tooltip title='click to copy mobile No.'>
            <Grid item xs={12} sm={4} md={4} lg={4} className='contacts-link'>
              <Chip
                icon={<CallRounded />}
                label='789-4546-458'
                clickable
                color='primary'
                onClick={() => handleClick('789-4546-458')}
              />
            </Grid>
          </Tooltip> */}
          <Tooltip title='click to copy email'>
            <Grid item xs={12} sm={4} md={4} lg={4} className='contacts-link'>
              <Chip
                icon={<MailRounded />}
                label='kristenwood123@gmail.com'
                clickable
                color='primary'
                onClick={() => handleClick('kristenwood123@gmail.com')}
              />
            </Grid>
          </Tooltip>
          {/* <Grid item xs={12} sm={4} md={4} lg={4} className='contacts-link'>
            <Button
              variant='contained'
              color='primary'
              component='a'
              style={{ borderRadius: '20px', textTransform: 'none' }}
              target='_blank'
              rel='noreferrer'
              href='https://linktr.ee/binu__42'
              startIcon={<LinkRounded />}
            >
              connect me
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
      <Box my={1} />
      <div className={classes.hireMe}>
        <div className={classes.content}>
          <Grid container justify="center" alignItems="center">
            <Grid className={classes.internalContent} item xs={12} md={9}>
              <Typography>
                If you'd like to get to know me more. Click the link! 
            </Typography>
            </Grid>
            <Grid className={classes.internalContent} item xs={12} md={3}>
              <Button
                className={classes.hireMeBtn}
                variant="contained"
                target='_blank'
                rel='noreferrer'
                href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=kristenwood123@gmail.com&body=Hi kristen, 
                I had a chance to go through your profile.
                Are you looking for a career opportunity?'
              >
                Hire me
            </Button>
            </Grid>
          </Grid>
        </div>
        <div className={classes.after}></div>
      </div>
      <Box my={1}>
        <Copyright />
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseRounded fontSize='small' />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  )
}

export default Footer
