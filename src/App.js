import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Switch, Route } from 'react-router-dom';

import Vaktija from "./components/Vaktija";
import Download from "./components/Download";
import Info from "./components/Info";
import Test from "./components/Test";
import NotFound from "./components/NotFound";


class App extends Component {

    render() {
        return (
                <Switch>
                    <Route exact path='/' component={Vaktija} />
                    <Route path='/download' component={Download} />
                    <Route path='/info' component={Info} />
                    <Route path="/test" render={()=><Test test1="1" test2={2}/>}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
        );
    }
}

export default App;