import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function History(props) {
  return (
    <VerticalTimeline animate={ false }>
      <TimelineElements />
    </VerticalTimeline>
  );

  function TimelineElements() {
    return props.timeline.map((item) => {
      return (
        <VerticalTimelineElement
          className='vertical-timeline-element'
          date={ item.month + ' ' + item.year }
        >
          <h1 className='vertical-timeline-element-title'>{ item.title }</h1>
          <h2 className='vertical-timeline-element-subtitle'>{ item.location }</h2>
          <p>{ item.info }</p>
        </VerticalTimelineElement>
      );
    });
  }
}

export default History;