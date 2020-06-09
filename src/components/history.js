import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './history.css';

function History(props) {
  function TimelineElements() {
    return props.timeline.map((item) => {
      return (
        <VerticalTimelineElement
          date={ item.month + ' ' + item.year }
          iconStyle={{ backgroundColor:'white',}}
          >
          <h1 className='vertical-timeline-element-title'>{ item.title }</h1>
          <h2 className='vertical-timeline-element-subtitle'>{ item.location }</h2>
          <p>{ item.info }</p>
        </VerticalTimelineElement>
      );
    });
  }
 
  return (
    <VerticalTimeline>
      <TimelineElements />
    </VerticalTimeline>
  );
}

export default History;