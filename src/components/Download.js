import React, { Component } from 'react';
import { Col, Grid, Nav, Navbar, NavDropdown, NavItem, MenuItem, Row } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from "../img/logo.svg";
import Icon from "../img/icon.svg";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


/* import Januar from '../data/pdf/Sarajevo_Januar_2017.pdf';
import Februar from '../data/pdf/Sarajevo_Februar_2017.pdf';
import Mart from '../data/pdf/Sarajevo_Mart_2017.pdf';
import April from '../data/pdf/Sarajevo_April_2017.pdf';
import Maj from '../data/pdf/Sarajevo_Maj_2017.pdf';
import Juni from '../data/pdf/Sarajevo_Juni_2017.pdf';
import Juli from '../data/pdf/Sarajevo_Juli_2017.pdf';
import August from '../data/pdf/Sarajevo_August_2017.pdf';
import Septembar from '../data/pdf/Sarajevo_Septembar_2017.pdf';
import Oktobar from '../data/pdf/Sarajevo_Oktobar_2017.pdf';
import Novembar from '../data/pdf/Sarajevo_Novembar_2017.pdf';
import Decembar from '../data/pdf/Sarajevo_Decembar_2017.pdf'; */

class Download extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: cookies.get('myLocation'),
        };
        this.handleSelect = this
            .handleSelect
            .bind(this);
    }

    handleSelect(eventKey) {
        if (eventKey < 1000) {
            this.setState({ location: eventKey });
            cookies.set('myLocation', eventKey, { path: '/' });
        }
    }

    render() {
        let ime = [
            "Banovići",
            "Banja Luka",
            "Bihać",
            "Bijeljina",
            "Bileća",
            "Bos. Brod",
            "Bos. Dubica",
            "Bos. Gradiška",
            "Bos. Grahovo",
            "Bos. Krupa",
            "Bos. Novi",
            "Bos. Petrovac",
            "Bos. Šamac",
            "Bratunac",
            "Brčko",
            "Breza",
            "Bugojno",
            "Busovača",
            "Bužim",
            "Cazin",
            "Čajniče",
            "Čapljina",
            "Čelić",
            "Čelinac",
            "Čitluk",
            "Derventa",
            "Doboj",
            "Donji Vakuf",
            "Drvar",
            "Foča",
            "Fojnica",
            "Gacko",
            "Glamoč",
            "Goražde",
            "Gornji Vakuf",
            "Gračanica",
            "Gradačac",
            "Grude",
            "Hadžići",
            "Han-Pijesak",
            "Hlivno",
            "Ilijaš",
            "Jablanica",
            "Jajce",
            "Kakanj",
            "Kalesija",
            "Kalinovik",
            "Kiseljak",
            "Kladanj",
            "Ključ",
            "Konjic",
            "Kotor-Varoš",
            "Kreševo",
            "Kupres",
            "Laktaši",
            "Lopare",
            "Lukavac",
            "Ljubinje",
            "Ljubuški",
            "Maglaj",
            "Modriča",
            "Mostar",
            "Mrkonjić-Grad",
            "Neum",
            "Nevesinje",
            "Novi Travnik",
            "Odžak",
            "Olovo",
            "Orašje",
            "Pale",
            "Posušje",
            "Prijedor",
            "Prnjavor",
            "Prozor",
            "Rogatica",
            "Rudo",
            "Sanski Most",
            "Sarajevo",
            "Skender-Vakuf",
            "Sokolac",
            "Srbac",
            "Srebrenica",
            "Srebrenik",
            "Stolac",
            "Šekovići",
            "Šipovo",
            "Široki Brijeg",
            "Teslić",
            "Tešanj",
            "Tomislav-Grad",
            "Travnik",
            "Trebinje",
            "Trnovo",
            "Tuzla",
            "Ugljevik",
            "Vareš",
            "V.Kladuša",
            "Visoko",
            "Višegrad",
            "Vitez",
            "Vlasenica",
            "Zavidovići",
            "Zenica",
            "Zvornik",
            "Žepa",
            "Žepče",
            "Živinice",
            "Bijelo Polje",
            "Gusinje",
            "Nova Varoš",
            "Novi Pazar",
            "Plav",
            "Pljevlja",
            "Priboj",
            "Prijepolje",
            "Rožaje",
            "Sjenica",
            "Tutin"
        ];

        let location = isNaN(this.state.location) || this.state.location < 0 || this.state.location > 117 ? 77 : this.state.location;

        return (
            <div>
                <Navbar collapseOnSelect onSelect={this.handleSelect}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="/">
                                <a>
                                    <img className="hidden-xs hidden-sm" src={Logo} alt="vaktija.ba" height={48} />
                                    <img className="hidden-md hidden-lg" src={Icon} alt="vaktija.ba" height={32} />
                                </a>
                            </LinkContainer>
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
                                    ime.filter((elem, index, arr) => arr.indexOf(elem) < 107).map((locationItem, index) => (
                                        <MenuItem key={index} eventKey={index}>{locationItem}</MenuItem>
                                    ))
                                }
                                <MenuItem divider />
                                {
                                    ime.filter((elem, index, arr) => arr.indexOf(elem) >= 107).map((locationItem, index) => (
                                        <MenuItem key={index + 107} eventKey={index + 107}>{locationItem}</MenuItem>
                                    ))

                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Grid bsclass="container">
                    <Row bsclass="row" className="top1">
                        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                            <h1 className="lokacija-big">{ime[location]}</h1>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                            {/*                             <a className="month-dl" href={Januar}><p className="month-dl">jan</p></a>
                            <a className="month-dl" href={Februar}><p className="month-dl">feb</p></a>
                            <a className="month-dl" href={Mart}><p className="month-dl">mar</p></a>
                            <a className="month-dl" href={April}><p className="month-dl">apr</p></a>
                            <a className="month-dl" href={Maj}><p className="month-dl">maj</p></a>
                            <a className="month-dl" href={Juni}><p className="month-dl">jun</p></a>
                            <a className="month-dl" href={Juli}><p className="month-dl">jul</p></a>
                            <a className="month-dl" href={August}><p className="month-dl">aug</p></a>
                            <a className="month-dl" href={Septembar}><p className="month-dl">sep</p></a>
                            <a className="month-dl" href={Oktobar}><p className="month-dl">okt</p></a>
                            <a className="month-dl" href={Novembar}><p className="month-dl">nov</p></a>
                            <a className="month-dl" href={Decembar}><p className="month-dl">dec</p></a> */}
                        </Col>



                        <div className="container text-center">
                            <div className="row">
                                <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Januar_2017.pdf`}>
                                            <p className="month-dl">jan</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Februar_2017.pdf`}>
                                            <p className="month-dl">feb</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Mart_2017.pdf`}>
                                            <p className="month-dl">mar</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_April_2017.pdf`}>
                                            <p className="month-dl">apr</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Maj_2017.pdf`}>
                                            <p className="month-dl">maj</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Juni_2017.pdf`}>
                                            <p className="month-dl">jun</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Juli_2017.pdf`}>
                                            <p className="month-dl">jul</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_August_2017.pdf`}>
                                            <p className="month-dl">aug</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Septembar_2017.pdf`}>
                                            <p className="month-dl">sep</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Oktobar_2017.pdf`}>
                                            <p className="month-dl">okt</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Novembar_2017.pdf`}>
                                            <p className="month-dl">nov</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 month-dl">
                                        <a className="month-dl" href={`pdf/${ime[location]}_Decembar_2017.pdf`}>
                                            <p className="month-dl">dec</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Download;