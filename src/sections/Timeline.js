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
      <Box py={5} />
      <SectionHeading headingName="Academic Timeline" />
      <VerticalTimeline animate={window.innerWidth < "800" ? false : true}>
        <TimelineElement
          date='2011 - 2014'
          icon={<SchoolRounded />}
          title="California Polytechnic University"
          subtitle={<>San Luis Obispo, BA Political Science</>}
          description={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ipsum.<sup>th</sup>, 9<sup>th</sup>, and 10<sup>th</sup>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, facilis.</>}
        />
        <TimelineElement
          date='2016 - 2017'
          icon={<LocalLibraryRounded />}
          title="xavier Singh College, xyz, abc, India"
          subtitle={<>BSEB, 11<sup>th</sup> - 12<sup>th</sup></>}
          description={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum facere aliquam voluptatem perspiciatis asperiores unde suscipit, dicta commodi officiis dolore, quos reprehenderit velit libero aliquid a illum nesciunt totam.</>}
        />
        <TimelineElement
          date='2018 - 2019'
          icon={<SettingsRounded />}
          title="JEE Preparation"
          description={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum quasi totam sed tempora eveniet beatae quaerat veniam soluta odio, accusamus eum quis illo ut odit, impedit, eos fugit nesciunt?</>}
        />
        <TimelineElement
          date='1st Aug 2018 - present'
          icon={<NewReleasesRounded />}
          title="xxxxx yyyy college, abc, xxx, India"
          subtitle={<>Tustin, CA</>}
          description={<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto est, iusto voluptatem cupiditate harum autem magni iste. Molestiae autem voluptas labore ducimus! Eos magnam earum, numquam eligendi cupiditate laborum.</>}
        />
        <TimelineElement
          icon={<LocalLibraryRounded />}
          onlyIcon={true}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
