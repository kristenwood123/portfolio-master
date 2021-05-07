import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  CssBaseline,
  TextField,
  Container,
  CircularProgress,
  Snackbar,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  CloseRounded,
  MessageRounded,
  Telegram,
} from '@material-ui/icons';
import SectionHeading from '../component/SectionHeading';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },

  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important',
    },
    '& textarea:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& textarea:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
  },
  circularProgress: {
    marginLeft: theme.spacing(3),
    color: 'black',
  },
}));

function Contact() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('kristenwood123@gmail.com');
  const [name, setName] = useState('d');
  const [msg, setMsg] = useState(10);
  const [status, setStatus] = useState(false);
  const classes = useStyles();

  const submitForm = (ev) => {
    ev.preventDefault();
    setStatus(true);
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setOpen(true);
        setMessage('Thanks, contact you soon!');
      } else {
        setOpen(true);
        setMessage('Oops! some Error occured');
      }
      setStatus(false);
    };
    xhr.send(data);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div id='contact'>
      <Box py={5} />
      <SectionHeading headingName="Contact" />
      <Grid container justify='center'>
        <Grid item xs={12} sm={6} md={6} lg={7}>
          <Typography
            variant='subtitle1'
            align='center'
            style={{ maxWidth: '80%', margin: 'auto' }}
          >
            Ping me, nothing gives me more happiness than being able to connect
            with new people and helping each other.
          </Typography>
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <MessageRounded />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Message
              </Typography>
              <form
                className={classes.root}
                onSubmit={submitForm}
                action='https://formspree.io/f/xyylkavr'
                method='POST'
                noValidate={false}
              >
                <TextField
                  variant='outlined'
                  margin='dense'
                  required
                  onBlur={(e) => setName(e.target.value)}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  error={name === ''}
                  helperText={name === '' ? 'Name is Required.' : ' '}
                  id='name'
                  label='Enter Name'
                  name='name'
                  autoComplete='email'
                />
                <TextField
                  variant='outlined'
                  margin='dense'
                  required
                  type='email'
                  error={
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
                  }
                  helperText={
                    email === ''
                      ? 'Email is Required.'
                      : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
                        ? 'Invalid Email address'
                        : ''
                  }
                  fullWidth
                  onBlur={(e) => setEmail(e.target.value)}
                  onChange={(e) => setEmail(e.target.value)}
                  name='email'
                  label='Enter Email'
                  id='email'
                />
                <Box py={1} />
                <TextField
                  id='msg'
                  variant='outlined'
                  required
                  error={msg < 10}
                  helperText={
                    msg === 0
                      ? 'Message is Required.'
                      : msg < 10
                        ? 'Please send Meaningful message'
                        : ' '
                  }
                  name='message'
                  onBlur={(e) => setMsg(e.target.value.length)}
                  onChange={(e) => setMsg(e.target.value.length)}
                  fullWidth
                  label='Enter Message'
                  multiline
                  rows='3'
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='secondary'
                  className={classes.submit}
                >
                  Send &emsp; <Telegram />
                  {status ? (
                    <CircularProgress
                      className={classes.circularProgress}
                      size={20}
                    />
                  ) : (
                      ''
                    )}
                </Button>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
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
    </div>
  );
}

export default Contact;
