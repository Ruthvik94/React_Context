import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Container } from "@material-ui/core";
import Dropdown from "./Components/Dropdown";
import Table from "./Components/Table";

import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ServicePage from "./Components/ServicePage";
import ContractPage from "./Components/ContractPage";
import NotFound from "./Components/NotFound";

import "./styles.css";

export default function App() {
  const [context, setContext] = useState("");
  const [index, setIndex] = useState("");

  const contextView = () => {
    return (
      <>
        <Dropdown update={setContext} addDropdown={index} />
        <br />
        <Table context={context} index={setIndex} />
      </>
    );
  };

  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/Home" component={HomePage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Service" component={ServicePage} />
          <Route path="/Contract" component={ContractPage} />
          <Route path="/Not-Found" component={NotFound} />
          <Route path="/" exact component={contextView} />
          <Redirect to="/Not-Found" />
        </Switch>
      </Container>
    </Router>
  );
}
