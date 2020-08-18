import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CustomerProfile from "./components/pages/CustomerProfile";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile" component={CustomerProfile} />
            </Switch>
        </Router>
    );
}
