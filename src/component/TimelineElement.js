import { useTheme } from '@material-ui/core';
import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

const TimelineElement = ({ title, subtitle, description, icon, date, onlyIcon }) => {
  const bgColor = window.localStorage.getItem("theme") === "dark" ? "#333" : "#fff";
  const theme = useTheme();
  return (
    <>
      {onlyIcon ? <VerticalTimelineElement
        icon={icon}
        iconStyle={{
          background: theme.palette.secondary.main,
          color: '#333030141',
          boxShadow:
            '0 0 0 3px #2c2020, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
        }}
      /> : <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date={date}
        contentStyle={{
          boxShadow: `rgba(163, 177, 198, 0.227) 1px 1px 6px 2px, rgba(124, 123, 123, 0.1) -9px -9px 16px`,
          background: `${bgColor}`
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${bgColor}` }}
        iconStyle={{
          background: '#f0f0f0',
          color: '#3a3838',
          boxShadow:
            '0 0 0 3px #2c2020, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
        }}
        icon={icon}
      >
          <h3 className='vertical-timeline-element-title'>
            {title}
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            {subtitle}
          </h4>
          <p style={{ textAlign: 'justify' }}>
            {description}
          </p>
        </VerticalTimelineElement>}
    </>
  )
}

export default TimelineElement
