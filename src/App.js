import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import OurTeam from "./pages/OurTeam/OurTeam";
import NavbarPage from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Donate from "./pages/Donate";





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
            <Route path='/Donate'>
              <Donate />
            </Route>
          <Route exact path="/WhatWeDo">
            <WhatWeDo />
          </Route>
          <Route exact path="/OurTeam">
            <OurTeam />
          </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;