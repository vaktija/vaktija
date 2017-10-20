import React, { Component } from "react";
import { Button, Col, Collapse, Glyphicon, Row } from "react-bootstrap";
import moment from 'moment';


class MjesecnaVaktija extends Component {
    constructor(...args) {
        super(...args);
        // this.state = {};
        this.state = { open: true };

    }

    render() {
        let mjesecnaVaktija = this.props.mjesecnaVaktija;
        // console.log('mjesecnaVaktija', mjesecnaVaktija);

        let mjesecnaRazlika = this.props.mjesecnaRazlika;
        // console.log('mjesecnaRazlika', mjesecnaRazlika);

        return (

            <Row bsClass="row">

                <Col className="text-center" xsHidden sm={12} md={12} lg={12}>
                    <Button onClick={() => this.setState({ open: !this.state.open })} bsSize="large">
                        <Glyphicon glyph="calendar" />
                    </Button>
                </Col>

                <Col className="text-center" xsHidden sm={12} md={12} lg={10} lgOffset={1}>
                    <Collapse in={this.state.open}>
                        <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                            <h1 className="bottom3">{this.props.date.format('MMMM YYYY')}</h1>

                            <table id="vaktija-tabela" className="table table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th className="text-center">dan</th>
                                        <th className="text-center">zora</th>
                                        <th className="text-center">izlazak sunca</th>
                                        <th className="text-center">podne</th>
                                        <th className="text-center">ikindija</th>
                                        <th className="text-center">akšam</th>
                                        <th className="text-center">jacija</th>
                                    </tr>
                                </thead>
                                <tbody id="vaktija-mjesec">
                                    {mjesecnaVaktija.map((dnevnaVaktija, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{moment.duration((dnevnaVaktija.vakat[0] + mjesecnaRazlika.vakat[0]), 'seconds').format("h:mm")}</td>
                                            <td>{moment.duration((dnevnaVaktija.vakat[1] + mjesecnaRazlika.vakat[0]), 'seconds').format("h:mm")}</td>
                                            <td>{moment.duration((dnevnaVaktija.vakat[2] + mjesecnaRazlika.vakat[1]), 'seconds').format("h:mm")}</td>
                                            <td>{moment.duration((dnevnaVaktija.vakat[3] + mjesecnaRazlika.vakat[2]), 'seconds').format("h:mm")}</td>
                                            <td>{moment.duration((dnevnaVaktija.vakat[4] + mjesecnaRazlika.vakat[2]), 'seconds').format("h:mm")}</td>
                                            <td>{moment.duration((dnevnaVaktija.vakat[5] + mjesecnaRazlika.vakat[2]), 'seconds').format("h:mm")}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>

                            {/*<MjesecnaTabela mjesecnaVaktija={this.props.mjesecnaVaktija} mjesecnaRazlika={this.props.mjesecnaRazlika}/>*/}
                        </Col>
                    </Collapse>
                </Col>
            </Row>
        );
    }
}

export default MjesecnaVaktija