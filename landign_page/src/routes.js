import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Services";
import Test from "./components/Test";
import Why from "./components/Why";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/why" component={Why} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/about" component={About} />
    </Switch>
);

export default Routes;
