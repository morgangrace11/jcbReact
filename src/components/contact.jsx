import React from 'react';
import '../css/contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="title">Contact</div>
                <div className="contact-info">
                    <div className="heading">Anyone, of any age, who owns a traditional band instrument and is looking for an outlet to perform, is welcome to join! To let us know you're coming or to receive more information, email <a href="mailto:jkosar25@att.net">Jenny Kosar</a>, Band President.</div>
                </div>
                <div className="info"><b>When:</b> Tuesday nights from 7:30-9:00pm</div>
                <div className="info"><b>Where:</b> Terry Parker Baptist 7024 Merrill Rd, Jacksonville, FL 32277</div>
                <div className="info"><b>Email: </b><a href="mailto:jkosar25@att.net">jkosar25@att.net</a> or <a href="mailto:jacksonvillecommunityband@gmail.com">jacksonvillecommunityband@gmail.com</a></div>
                <div className="heading-cta"><b>Bring your instrument and music stand, and come join us on Tuesday nights all year-round!</b></div>
            </div>
        )
    }
}

export default Contact;
