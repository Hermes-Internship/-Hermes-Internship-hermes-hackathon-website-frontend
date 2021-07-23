import React from 'react'
import './Timeline.css'
import {data} from './data'

function Timeline() {
    return (
        <article className={"timeline-container"}>
            {data.map( (data, key) => {
                return(
                    <div key={key} className={"timeline-item"}>
                        <span className={"timeline-event-bullet"}>
                            {data.event_date}
                            <br/>
                            {data.event_time}
                        </span>
                        <span className={"timeline-event-name"}>{data.event_name}</span>
                    </div>
                );
            })}
        </article>

)
}

export default Timeline;