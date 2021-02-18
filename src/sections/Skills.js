import React from 'react';
import {
  Chip,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import skillsData from '../Data/skillsData';
import SectionHeading from '../component/SectionHeading';

const useStyles = makeStyles(theme => ({
  image: {
    '-webkit-filter': 'grayscale(30%)', /* Safari 6.0 - 9.0 */
    filter: 'grayscale(30%)',
    transition: 'all 0.3s cubic- bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      filter: 'grayscale(5%)'
    }
  }
}))

function Skills({ scrollPosition }) {
  const classes = useStyles();
  return (
    <div id='skills'>
      <Box py={5} />
      <SectionHeading headingName="SKILLS" />
      <Grid>
        {skillsData.map((Area, index) => (
          <Grid key={Area.topic} item xs={12}>
            <Card>
              <CardHeader title={Area.field} />
              <CardContent>
                <Grid container justify='center' alignItems='flex-end'>
                  {Area.value.map((skill, skillIndex) => (
                    <Grid
                      className={skill.name === 'Next JS' ? 'r-50' : ''}
                      item
                      key={skillIndex}
                      xs={5}
                      sm={4}
                      md={3}
                      lg={2}
                      style={{ textAlign: 'center' }}
                    >
                      <LazyLoadImage
                        alt={skill.name}
                        height={80}
                        src={skill.image}
                        effect='blur'
                        className={classes.image}
                        placeholderSrc="https://res.cloudinary.com/dykt1kcdk/image/upload/v1585215242/portfolio/skills/js/react_nnlcr6.png"
                        scrollPosition={scrollPosition}
                        wrapperClassName={
                          skill.name === 'Next JS' ||
                            skill.name === 'Electron JS' ||
                            skill.name === 'React JS' ||
                            skill.name === 'Postman' ||
                            skill.name === 'MySQL' ||
                            skill.name === 'Bulma' ||
                            skill.name === 'Handlebars' ||
                            skill.name === 'Java' ||
                            skill.name === 'Netlify'
                            ? 'p-10'
                            : ''
                        }
                      />
                      <br></br>
                      <Chip
                        label={skill.name}
                        color={index % 2 !== 0 ? 'primary' : 'default'}
                        style={{ opacity: '0.8' }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
            <Box py={1} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default trackWindowScroll(Skills);
