import React, { Component } from 'react';
import { Label } from "react-bootstrap";
import moment from 'moment';
import 'moment-duration-format';

class RemainingTime extends Component {
    render() {

        let vakat_date = moment()
            .hours(moment.duration(this.props.vakat, 'seconds').get('hours'))
            .minutes(moment.duration(this.props.vakat, 'seconds').get('minutes'))
            .seconds(moment.duration(this.props.vakat, 'seconds').get('seconds'));

        let vakatDiffTime = vakat_date.diff(this.props.date);
        let vakatDuration = moment.duration(vakatDiffTime);
        let vakatHrs = vakatDuration.hours(),
            vakatMins = vakatDuration.minutes(),
            vakatSecs = vakatDuration.seconds();

        return (
            <div>
                {moment(this.props.date).isBefore(vakat_date) &&
                    <Label bsStyle="default">{vakatHrs}h {vakatMins}m {vakatSecs}s</Label>
                }
                {/* <span className="remaining-time">{vakatHrs}h {vakatMins}m {vakatSecs}s</span> */}
            </div>
        );
    }
}

export default RemainingTime;
