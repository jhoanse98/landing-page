import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Main from "./components/Main";
import Contact from "./components/Contact";
import New from "./components/New";
import Ask from "./components/Ask";
import About from "./components/About";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/new/:id" component={New} />
        <Route exact path="/ask" component={Ask} />
        <Route exact path="/about" component={About} />
    </Switch>
);

export default Routes;
