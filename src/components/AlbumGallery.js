import React from 'react';
import { DaySlot } from "./"

const Sliding = (props)  => {
    const { data } = props
    let days = data.filter((day) => {
        return day.active
    }).map((day) => (
        <DaySlot data={day} key={`${day.date.month}-${day.date.day}-${day.date.year}`} />
    ))
    return (
        <>
            {days}
        </>
    )
}

export default (props) => (
    <div className="d-flex flex-column align-items-center">
        <div className="instructions">scroll &#8594;</div>
        <div className="slider">
            <Sliding data={props.data} />
        </div>
    </div>
);