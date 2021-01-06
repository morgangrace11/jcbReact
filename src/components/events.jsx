import React from 'react';
import '../css/events.css';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="events">
                <div className="title">Events</div>
                <div className="event-covid">Due to Covid 19 there are no events scheduled.</div>
            </div>
        )
    }
}

export default Events;
