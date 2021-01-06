import React from 'react';
import '../css/people.css';

class People extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="people-container">
                <div className="title">People of the Band</div>
                <div className="section-container">
                    <div className="section">
                        <div className="people-heading">Conductors</div>
                        <div>Jerry Carter</div>
                    </div>
                    <div className="section">
                        <div className="people-heading">Board of Directors</div>
                        <div className="sub-section">
                            <div className="name">Jenny Kosar</div>
                            <div className="band-title">President</div>
                        </div>
                        <div className="sub-section">
                            <div className="name">Blimp Davis</div>
                            <div className="band-title">Vice President</div>
                        </div>
                        <div className="sub-section">
                            <div className="name">Bruce Schwartz</div>
                            <div className="band-title">Secretary</div>
                        </div>
                        <div className="sub-section">
                            <div className="name">Dave Suk</div>
                            <div className="band-title">Treasurer</div>
                        </div>
                        <div className="sub-section">
                            <div className="name">Paul Jones</div>
                            <div className="band-title">Librarian</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default People;
