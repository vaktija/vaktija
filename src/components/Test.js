import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>ovo je test1 {this.props.test1}, a ovo test2 {this.props.test2}</div>
        );
    }
}

export default Test;