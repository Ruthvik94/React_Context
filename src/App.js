import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container } from "@material-ui/core";

import Context from "./Components/Context";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ServicePage from "./Components/ServicePage";
import ContractPage from "./Components/ContractPage";
import NotFound from "./Components/NotFound";

import "./styles.css";

export default function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/Home" component={HomePage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Service" component={ServicePage} />
          <Route path="/Contract" component={ContractPage} />
          <Route path="/Not-Found" component={NotFound} />
          <Route path="/" exact component={Context} />
          <Redirect to="/Not-Found" />
        </Switch>
      </Router>
    </Container>
  );
}
