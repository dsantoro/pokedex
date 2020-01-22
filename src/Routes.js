import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Home';
import Info from './pages/Info';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/info/:name" component={Info} />
            </Switch>
        </BrowserRouter>
    );
}