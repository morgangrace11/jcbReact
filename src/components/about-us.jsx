import React from 'react';
import '../css/about.css';

class About extends React.Component {
    render() {
        return (
            <div className="about-container"> 
                <div className="title">About Us</div>

                <div className="about-center">
                    <p>
                    The Jacksonville Community Band is an all-volunteer, non-profit organization created to share the gift of music with
                    the
                    entire community. The band’s musicians come from all walks of life and are drawn together by the common bond of
                    musical
                    appreciation and performance that only participation in a traditional Concert Band can provide.
                    </p>

                    <p>
                    Founded in 1998 by the late <a target="_blank" href="https://en.wikipedia.org/wiki/Bill_Moffit">Dr. William "Bill"
                        Moffit</a>, the
                    band continues to provide musical entertainment for the
                    Greater Jacksonville metropolitan and surrounding areas and gives amateur musicians an outlet through which to perform
                    and a fantastic place to make friends.
                    </p>

                    <p>
                    The band is under the direction of Mr. Jerry Carter. He is a well respected musician and
                    instructor in the Duval County School system, Mr. Carter is an  alumnus of <a target="_blank"
                        href="http://www.vandercook.edu/">Bethune-Cookman College of Music</a>. Mr. Carter earned his Master's degree in
                    Music Education from Jacksonville University. Mr. Carter's background in music has given the band the
                    opportunity to perform a vast repertoire of pieces that are both enjoyable and challenging to play. From marches to
                    patriotic arrangements to concert band adaptations of classic masterpieces, the musicians of the Jacksonville
                    Community Band have performed virtually every genre of music imaginable at venues all across the First Coast!
                    </p>
                </div>            
            </div>
        )
    }
}

export default About;
