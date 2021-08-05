import React from 'react'
import styles from './Timeline.module.css'
import {data} from './data'
function Timeline() {
    return (
        <article className={`${styles.timeline_container}`}>
            {data.map( (data, key) => {
                return(
                    <div key={key} className={`${styles.timeline_item}`}>
                        <span className={`${styles.timeline_event_bullet}`}>
                            {data.event_date}
                            <br/>
                            {data.event_time}
                        </span>
                        <span className={`${styles.timeline_event_name}`}>{data.event_name}</span>
                    </div>
                );
            })}
        </article>
)
}
export default Timeline;