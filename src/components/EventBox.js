import React from 'react'

function EventBox(props) {
  const { id, timer, events } = props
  return (
    <React.Fragment>
      <h4>Events</h4>
      <ul id="event_box" className="list-group">
        <li className="list-group-item">
          Game {id} will start in {timer} sec
        </li>
        {events.map((item, index) => {
          return <li key={index} className="list-group-item">{item}</li>
        })}
      </ul>
    </React.Fragment>
  )
}

export default EventBox
