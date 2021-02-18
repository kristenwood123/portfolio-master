import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '45px!important',
    color: theme.palette.primary.main,
    fontWeight: '600!important'
  }
}));

const SectionHeading = ({ headingName }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.heading} variant='h2' gutterBottom>
      {headingName}
    </Typography>
  )
}

export default SectionHeading
