import React from 'react';
import '../css/home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="home">
                <div className="title">Jacksonville Community Band</div>

<div className="covid">Due to Covid 19 band rehearsals are suspended until stated otherwise. Please email <a href="mailto:jkosar25@att.net">Jenny Kosar</a>, Band President for any questions.</div>

                <div className="home-image">
                    <img src="https://jacksonvillecommunityband.s3.us-east-2.amazonaws.com/20190702_200611.jpg" alt="img" height="100%" width="100%"/>
                </div>
                <div className="center-home">
                    <p>
                    The Jacksonville Community Band is currently recruiting musicians to join the band for ALL SECTIONS! 
                    </p>
                    <p>
                        WOODWINDS!
                        <br />
                        BRASS!
                        <br />
                        PERCUSSION!
                        <br />
                    </p>
                    <p>If you have the desire to "bring back that feeling" that came with playing in an ensemble, then now is
                    your opportunity! There are NO AUDITIONS and musicians of all skill levels are welcome! YOU can be a part of our
                    group! If you own a traditional band instrument, then come on out to our next rehearsal to get involved!
                    </p>
                    <p>Where: Terry Parker Baptist 7024 Merrill Rd, Jacksonville, FL 32277
                    <br />
                    When: Tuesday nights from 7:30pm to 9:00pm.
                    </p>

                    <h2>Bring your instrument and come join us on Tuesday night.</h2>
                    <br />
                </div>
            </div>
        )
    }
}

export default Home;
