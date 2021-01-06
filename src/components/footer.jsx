import React from 'react';
import '../css/footer.css';
import logo from '../jcb.png'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <li className="footer-item"><a href="https://www.facebook.com/jacksonvillecommunityband/">Like us on Facebook<img alt="jcb" src={logo}/></a></li>
            </div>
        )
    }
}

export default Footer;
