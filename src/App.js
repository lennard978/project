import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Pages/Contact/Contact";
import HomePage from "./components/Pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
