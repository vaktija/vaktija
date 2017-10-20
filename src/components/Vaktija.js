import React, { Component } from "react";
import { Alert, Col, Grid, MenuItem, Nav, Navbar, NavDropdown, NavItem, Row } from "react-bootstrap";
import Logo from "../img/logo.svg";
import Icon from "../img/icon.svg";
import Google from "../img/google-badge.png";
import Apple from "../img/apple-badge.svg";
import Microsoft from "../img/microsoft-badge.png";
import data from "../data/vaktija.json";
import "bootstrap/dist/css/bootstrap.css";
import DnevnaVaktija from "./DnevnaVaktija";
import MjesecnaVaktija from './MjesecnaVaktija';
import moment from 'moment';
import momenth from 'moment-hijri';
import 'moment/locale/bs';
import 'moment-duration-format';
import Cookies from 'universal-cookie';
import Hadisi from './Hadisi';

import { LinkContainer } from 'react-router-bootstrap';


const cookies = new Cookies();

class Vaktija extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: cookies.get('myLocation'),
            date: moment().locale('bs'),
            alertVisible: true
            // alertVisible: false
        };
        this.handleSelect = this
            .handleSelect
            .bind(this);
        this.handleAlertDismiss = this
            .handleAlertDismiss
            .bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: moment().locale('bs')
        });
    }

    handleSelect(eventKey) {
        if (eventKey < 1000) {
            this.setState({ location: eventKey });
            cookies.set('myLocation', eventKey, { path: '/' });
        }
    }

    handleAlertDismiss() {
        this.setState({ alertVisible: false });
    }

    render() {

        let vaktija = JSON.stringify(data);
        let vaktijaObj = JSON.parse(vaktija);
        let location = isNaN(this.state.location) || this.state.location < 0 || this.state.location > 117 ? 77 : this.state.location;
        // let location = isNaN(this.state.location) || this.state.location < 0 || this.state.location > vaktijaObj.ime.length - 1 ? 77 : this.state.location;
        // let location = isNaN(this.state.location) ? 77 : this.state.location;
        // let location = this.state.location;

        let date = this.state.date;
        let month = date.format('M');
        let day = date.format('D');

        // TODO

        /*
        console.log('isDST', moment().isDST());
        console.log('add 36', moment().add(36, 'd').isDST());
        console.log('isLeapYear', moment().isLeapYear());
        */

        let dailyPrayerTimes0 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[0] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[0];
        let dailyPrayerTimes1 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[1] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[0];
        let dailyPrayerTimes2 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[2] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[1];
        let dailyPrayerTimes3 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[3] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[2];
        let dailyPrayerTimes4 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[4] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[2];
        let dailyPrayerTimes5 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[5] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[2];

        let dailyPrayerTimes = [];
        dailyPrayerTimes.push(dailyPrayerTimes0);
        dailyPrayerTimes.push(dailyPrayerTimes1);
        dailyPrayerTimes.push(dailyPrayerTimes2);
        dailyPrayerTimes.push(dailyPrayerTimes3);
        dailyPrayerTimes.push(dailyPrayerTimes4);
        dailyPrayerTimes.push(dailyPrayerTimes5);

        return (
            <div className="Vaktija">
                <Navbar collapseOnSelect onSelect={this.handleSelect}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">
                                <img className="hidden-xs hidden-sm" src={Logo} alt="vaktija.ba" height={48} />
                                <img className="hidden-md hidden-lg" src={Icon} alt="vaktija.ba" height={32} /></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/download">
                                <NavItem eventKey={1000}>download</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/info">
                                <NavItem eventKey={2000}>info</NavItem>
                            </LinkContainer>
                            <NavDropdown eventKey={3000} title="lokacija" id="basic-nav-dropdown">
                                {
                                    vaktijaObj.ime.filter((elem, index, arr) => arr.indexOf(elem) < 107).map((locationItem, index) => (
                                        <MenuItem key={index} eventKey={index}>{locationItem}</MenuItem>
                                    ))
                                }
                                <MenuItem divider />
                                {
                                    vaktijaObj.ime.filter((elem, index, arr) => arr.indexOf(elem) >= 107).map((locationItem, index) => (
                                        <MenuItem key={index + 107} eventKey={index + 107}>{locationItem}</MenuItem>
                                    ))

                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/*                 <div>
                    <h1>Vaktija</h1>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/download'>download</Link></li>
                            <li><Link to='/info'>info</Link></li>
                        </ul>
                    </nav>
                </div> */}

                <Grid bsClass="container">
                    <Row bsClass="row" className="top1">

                        {this.state.alertVisible && <Col xs={12} sm={12} md={12} lg={12}>
                            <Alert bsStyle="info" onDismiss={this.handleAlertDismiss}>
                                <Hadisi />
                            </Alert>
                        </Col>
                        }
                        <Col xs={12} sm={12} md={8} lg={9}>
                            <blockquote>
                                <Hadisi />
                            </blockquote>
                        </Col>

                        <Col xs={12} sm={12} md={4} lg={3} className="text-center text-right-md text-right-lg">
                            <h1 id="lokacija" className="text-lowercase">{vaktijaObj.ime[location].toLowerCase()}</h1>
                            <h5 id="datum">
                                <span id="gregorian"
                                    className="text-lowercase">{date.format('dddd, Do MMMM YYYY')}</span>
                                <span id="hijri" className="text-lowercase"> / {momenth().format('iD.iM.iYYYY')}</span>
                            </h5>
                        </Col>
                    </Row>
                    <DnevnaVaktija
                        dailyPrayerTimes={dailyPrayerTimes}
                        date={this.state.date}
                    />

                    <MjesecnaVaktija mjesecnaVaktija={vaktijaObj.sarajevo.mjesec[month - 1].dan}
                        mjesecnaRazlika={vaktijaObj.lokacija[location].mjesec[month - 1]}
                        date={date}
                    />

                    <Row bsClass="row" className="top5 bottom5">
                        <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                            <a href="https://play.google.com/store/apps/details?id=ba.vaktija.android">
                                <img className="img-rounded margin1" alt="Google" src={Google} height={45} /></a>
                            <a href="https://itunes.apple.com/us/app/vaktija.ba/id1095343967?ls=1&amp;mt=8">
                                <img className="img-rounded margin1" alt="Apple" src={Apple} height={45} /></a>
                            <a href="https://www.microsoft.com/en-us/store/apps/vaktijaba/9nblggh5lc4p">
                                <img className="img-rounded margin1" alt="Microsoft" src={Microsoft} height={45} /></a>
                        </Col>
                    </Row>

                </Grid>

                <footer className="footer top3">
                    <div className="container">
                        <p className="text-muted text-center">copyleft vaktija.ba 2008 - 2017</p>
                    </div>
                </footer>


                {/*
                <footer className="footer">
                    <div className="container">
                        <p className="text-muted text-center">Place sticky footer content here.</p>
                    </div>
                </footer>
                */}

            </div>
        );
    }
}

export default Vaktija;
