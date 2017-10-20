import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import moment from 'moment';
import 'moment-duration-format';
import RemainingTime from './RemainingTime';

class DnevnaVaktija extends Component {

    render() {

        let zora = moment.duration(this.props.dailyPrayerTimes[0], 'seconds').format("h:mm");
        let izlazakSunca = moment.duration(this.props.dailyPrayerTimes[1], 'seconds').format("h:mm");
        let podne = moment.duration(this.props.dailyPrayerTimes[2], 'seconds').format("h:mm");
        let ikindija = moment.duration(this.props.dailyPrayerTimes[3], 'seconds').format("h:mm");
        let aksam = moment.duration(this.props.dailyPrayerTimes[4], 'seconds').format("h:mm");
        let jacija = moment.duration(this.props.dailyPrayerTimes[5], 'seconds').format("h:mm");

        return (
            <Row bsClass="row text-center">
                <Col xs={12} sm={2} md={2} lg={2}>
                    <h4>zora</h4>
                    <h2>{zora}</h2>
                    <RemainingTime vakat={this.props.dailyPrayerTimes[0]} date={this.props.date} />
                </Col>
                <Col xs={12} sm={2} md={2} lg={2}>
                    <h4>izlazak sunca</h4>
                    <h2>{izlazakSunca}</h2>
                    <RemainingTime vakat={this.props.dailyPrayerTimes[1]} date={this.props.date} />
                </Col>
                <Col xs={12} sm={2} md={2} lg={2}>
                    <h4>podne</h4>
                    <h2>{podne}</h2>
                    <RemainingTime vakat={this.props.dailyPrayerTimes[2]} date={this.props.date} />
                </Col>
                <Col xs={12} sm={2} md={2} lg={2}>
                    <h4>ikindija</h4>
                    <h2>{ikindija}</h2>
                    <RemainingTime vakat={this.props.dailyPrayerTimes[3]} date={this.props.date} />
                </Col>
                <Col xs={12} sm={2} md={2} lg={2}>
                    <h4>akšam</h4>
                    <h2>{aksam}</h2>
                    <RemainingTime vakat={this.props.dailyPrayerTimes[4]} date={this.props.date} />
                </Col>
                <Col xs={12} sm={2} md={2} lg={2}>
                    <h4>jacija</h4>
                    <h2>{jacija}</h2>
                    <RemainingTime vakat={this.props.dailyPrayerTimes[5]} date={this.props.date} />
                </Col>
            </Row>
        );
    }
}

export default DnevnaVaktija