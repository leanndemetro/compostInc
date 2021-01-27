import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import getInvolved from "./pages/getInvolved";
import howItWorks from "./pages/howItWorks";
import Donate from "./pages/Donate"
import NavbarPage from "./components/Nav/Nav"




function App() {
  return (
    <Router>
      <div>
          <NavbarPage />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/getInvolved" component={getInvolved} />
            <Route exact path="/howItWorks" component={howItWorks} />
            <Route exact path="/Donate" component={Donate} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;