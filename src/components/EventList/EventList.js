import React from 'react'
import EventItem from './../EvenItem/EventItem';
import shortid from 'shortid'

import classes from './EventList.module.css'


const EventList = (props) => {
  const mapEvents = props.events.map(event => <EventItem key={shortid.generate()} title={event.title} time={event.timestamp}/>)

  return (
    <div className={classes.EventList}>
      {mapEvents}
    </div>
  )
}

export default EventList
