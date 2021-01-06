import React from 'react';
import '../css/App.css';
import Navbar from './nav-bar.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Navbar />
            </div>
        )
    }
}

export default App;
