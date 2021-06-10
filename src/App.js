import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import Donate from "./components/Donate/Donate"
import About from "./pages/OurTeam/OurTeam"
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
            
          </Route>
          <Route exact path="/WhatWeDo">
            <WhatWeDo />
          </Route>
          <Route exact path="/OurTeam">
            <About />
          </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;