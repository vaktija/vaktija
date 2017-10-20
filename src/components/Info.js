import React, { Component } from 'react';
import { Col, Grid, Nav, Navbar, NavDropdown, NavItem, MenuItem, Row } from "react-bootstrap";

// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from "../img/logo.svg";
import Icon from "../img/icon.svg";
import Basmala from "../img/basmala.svg";
// import Hadisi from './Hadisi';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Info extends Component {



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
        return (
            <div className="Info">
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
                                        <LinkContainer activeClassName="blaSamoDaNijeActive" key={index} to="/">
                                            <MenuItem eventKey={index}>{locationItem}</MenuItem>
                                        </LinkContainer>
                                    ))
                                }
                                <MenuItem divider />
                                {
                                    ime.filter((elem, index, arr) => arr.indexOf(elem) >= 107).map((locationItem, index) => (
                                        <LinkContainer activeClassName="blaSamoDaNijeActive" key={index + 107} to="/">
                                            <MenuItem eventKey={index + 107}>{locationItem}</MenuItem>
                                        </LinkContainer>
                                    ))

                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Grid bsClass="container">
                    <Row bsClass="row" className="top1">
                        <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
                            <img className="img-responsive center-block" src={Basmala} alt="basmala" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                            <strong>i koji molitve svoje na vrijeme obavljaju</strong>
                            <p> 23:9 (El-Mu’minūn – Vjernici, Mekka)</p>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                            <p>info@vaktija.ba</p>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Info;