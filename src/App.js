import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Pages/Contact/Contact";
import HomePage from "./components/Pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";

function App() {
	return (
		<>
			<Router basename="/project">
				<Navigation />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
