import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop"
import HowItWorks from "./pages/HowItWorks";
import Donate from "./pages/Donate"
import About from "./pages/About"
import NavbarPage from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"





function App() {
  return (
    <Router>
      <div>
          <NavbarPage />
          <Switch>
          <Route exact path={["/"]}>
            <Dashboard />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Donate">
            <Donate />
          </Route>
          <Route exact path="/Shop">
            <Shop />
          </Route>
          <Route exact path="/HowItWorks">
            <HowItWorks />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;