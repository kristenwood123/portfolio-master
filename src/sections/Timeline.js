import React from 'react';
import { Box } from '@material-ui/core';
import {
  SchoolRounded,
  NewReleasesRounded,
  LocalLibraryRounded,
  SettingsRounded,
} from '@material-ui/icons';
import {
  VerticalTimeline
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from '../component/SectionHeading';
import TimelineElement from '../component/TimelineElement';

function Timeline() {
  return (
    <div id='academic'>
      {/* <Box py={5} />
      <SectionHeading headingName="Academic Timeline" />
      <VerticalTimeline animate={window.innerWidth < "800" ? false : true}>
        <TimelineElement
          date='2011 - 2014'
          icon={<SchoolRounded />}
          title="California Polytechnic University"
          subtitle={<>San Luis Obispo, BA Political Science</>}
          
        />
        <TimelineElement
          date='2016 - 2017'
          icon={<LocalLibraryRounded />}
          title="Moorpark Community College"
          subtitle={<>BSEB, 11<sup>th</sup> - 12<sup>th</sup></>}
        />
      </VerticalTimeline> */}
    </div>
  );
}

export default Timeline;
