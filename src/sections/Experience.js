import React from 'react';
import { Box, Grid, Button, makeStyles } from '@material-ui/core';
import SectionHeading from '../component/SectionHeading';

const useStyles = makeStyles((theme) => ({
  experienceItem: {
    padding: `0 20px 10px 20px`,
    marginTop: `-2px`,
    borderLeft: `2px solid  ${theme.palette.primary.main}`,
    textAlign: 'justify',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '12px',
      height: '12px',
      borderRadius: '50px',
      left: '-7px',
      top: 0,
      background: '#fff',
      border: `2px solid ${theme.palette.primary.main}`,
    }
  }
}))

function Experience() {
  const classes = useStyles();
  return (
    <div id="experience">
      <Box py={5} />
      <SectionHeading headingName='Experience' />
      <section>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h2 className='experience-title'>Summary</h2>
            <div className={classes.experienceItem + ' pb-0'}>
              <h3>Kristen Woodward</h3>
              <p style={{ fontSize: '1rem' }}>
                I am innovative, hardworking, and focused Front-End
                Developer with experience designing and developing a
                dynamic web applications. I am a Team Treehouse Tech graduate and am learning new things every day.
              </p>
              <Button
                component='a'
                href='https://drive.google.com/file/d/113lOXxzQ18MertUKZVwWou28sPqJf-z6/view?usp=sharing'
                target='_blank'
                variant='outlined'
                color='primary'
              >
                See My Resume
              </Button>
            </div>

            <h2 className='experience-title'>Recent Job History</h2>
            <div className={classes.experienceItem}>
              <h3>Irvine Police Department - Police Officer</h3>
              <h4>
                March 2019 - January 2021
              </h4>
              <ul style={{ fontSize: '1rem' }}>
                <li>
                  Served as a patrol officer and was deeply committed to community-oriented policing and protecting citizens through rapid emergency response.
                </li>
                <li>
                 Academy graduate of Orange County Sheriff's Academy at the most challenging stress academy on the West Coast.
                 </li>
              </ul>
            </div>
            <div className={classes.experienceItem}>
              <h3>Stark - Personal Trainer/Nutrition Specialist</h3>
              <h4>March 2017 - Feb 2019</h4>
              <ul style={{ fontSize: '1rem' }}>
                <li>
                  Assisted clients with personalized training programs to maximize physical wellness. Educated clients about proper exercise technique as well as at home care to prevent injury. 
                </li>
                <li>
                 Created and provided all of Stark's clientele with individualized nutrition plans and adapted them accordingly. 
                 </li>
              </ul>
            </div>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={6} lg={6}>
            <h2 className='experience-title'>Internship Experience</h2>
            <div className={classes.experienceItem}>
              <h3>Mypad, Full-Stack Intern</h3>
              <h4>
                15<sup>th</sup> Oct 2019 - Feb 2020
              </h4>
              <p style={{ fontSize: '1rem' }}>
                <LocationOnRounded fontSize='small' color='primary' /> Bangalore
              </p>
              <ul style={{ fontSize: '1rem' }}>
                <li>
                  Developed real estate selling and searching app, optimizing
                  results based on pinned location. which are almost similar to{' '}
                  <a
                    href='https://www.zillow.com/los-angeles-ca/'
                    target='__blank'
                  >
                    Zillow
                  </a>
                  .
                </li>
                <li>
                  Worked on Mailer App to automate sending emails to their
                  clients with beautiful Templates.
                </li>
                <li>Worked on Trello and Twitter Data-miner App.</li>
                <li>
                  Majorly worked on Node.js, Meteor.js, and MongoDB. Learnt
                  Meteor.js, MapboxGl, Twilio, zapier, and many other things.
                </li>
              </ul>
              <Button
                component='a'
                href='https://drive.google.com/file/d/1Hm2v6R-5PlhW7IJ0H0WLST9WY3lFD4P6/view'
                target='_blank'
                variant='outlined'
                color='primary'
              >
                See Certificate
              </Button>
            </div>
            <div className={classes.experienceItem}>
              <h3>Cloudify Technologies, Full-Stack Intern</h3>
              <h4>
                22<sup>nd</sup> June 2020 - Oct 2020
              </h4>
              <p style={{ fontSize: '1rem' }}>
                <LocationOnRounded fontSize='small' color='primary' /> Bangalore
              </p>
              <ul style={{ fontSize: '1rem' }}>
                <li>
                  Worked on React.js, Redux, MaterialUI, Node.js, and MySQL.
                </li>
                <li>
                  Worked on FellowAPP which helps recruiters in hiring best
                  candidates.
                </li>
              </ul> */}
              {/* <Button
                component='a'
                href='https://drive.google.com/file/d/1MKmJpRZFoQbTdKSYvZcB2mHdPIZ1dhJr/view?usp=sharing'
                target='_blank'
                variant='outlined'
                color='primary'
              >
                See Certificate
              </Button> */}
            {/* </div>
            <h2 className='experience-title'>Open Source contributions</h2>
            <div className={classes.experienceItem}>
              <h3>
                <a
                  href='https://www.covid19india.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  covid19india.org
                </a>
              </h3>
              <p style={{ fontSize: '1rem' }}>
                <b>20+</b> merged PR in which I've Fixed Bugs, implemented new
                features, Fixed style-related issues, code reductions.
                <a
                  href='https://github.com/covid19india/covid19india-react/commits?author=Binu42'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  see my contribution
                </a>
              </p>

              <h3>
                <a
                  href='https://reactdatepicker.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  React Datepicker
                </a>
              </h3>
              <p style={{ fontSize: '1rem' }}>
                react-datepicker which has <b>3M+</b> of monthly downloads.
                Fixed Few critical Bugs in their Application.{' '}
                <a
                  href='https://github.com/Hacker0x01/react-datepicker/pull/2112'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  see my contribution
                </a>
              </p> 
            </div> 
          </Grid> */}
        </Grid> 
      </section> 
    </div>
  );
}

export default Experience;
