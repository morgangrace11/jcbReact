import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../css/navbar.css';
import logo from '../jcb.png'
import Home from './home.jsx';
import About from './about-us.jsx';
import Contact from './contact.jsx';
import Events from './events.jsx';
import Gallery from './gallery.jsx';
import People from './people.jsx';
import Footer from './footer.jsx';

class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div id="nav">
                        <li className="nav-item-home"><Link to="/"><img alt="jcb" src={logo}/></Link></li>
                        <li className="nav-item"><Link to="/about">About Us</Link></li>
                        <li className="nav-item"><Link to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link to="/events">Events</Link></li>
                        <li className="nav-item"><Link to="/gallery">Gallery</Link></li>
                        <li className="nav-item"><Link to="/people">People</Link></li>
                    </div>
                    <Switch>
                        <Route path="/contact">
                            <Contact />
                            <Footer />
                        </Route>
                        <Route path="/events">
                            <Events />
                            <Footer />
                        </Route>
                        <Route path="/gallery">
                            <Gallery />
                            <Footer />
                        </Route>
                        <Route path="/about">
                            <About />
                            <Footer />
                        </Route>
                        <Route path="/people">
                            <People />
                            <Footer />
                        </Route>
                        <Route path="/">
                            <Home />
                            <Footer />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navbar;
