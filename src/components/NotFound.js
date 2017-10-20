import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Error404 from "../img/error-404.png";
import Logo from "../img/logo.svg";
// import Icon from "../img/icon.svg";

class NotFound extends Component {
    render() {
        return (
            <div className="four0four">
                {/* <img className="img-responsive" src={Error404} alt="error404.vaktija.ba" /> */}
                <img className="img-responsive center-block" src={Logo} alt="vaktija.ba" />

                <h1>Error 404</h1>
                <h2>This page does not exist</h2>

                <Link className="afour0four" to='/'>Home</Link>
            </div>

        );
    }
}

export default NotFound;