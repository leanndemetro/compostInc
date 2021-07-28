import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import OurTeam from "./pages/OurTeam/OurTeam";
import NavbarPage from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import CheckoutForm from "./pages/Donate";
import Success from "./pages/success";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe("pk_test_HD6UokLebmhghEj5W00db1lw");

function App() {
  return (
    <Elements stripe={stripePromise}>
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
              <CheckoutForm />
            </Route>
          <Route exact path="/WhatWeDo">
            <WhatWeDo />
          </Route>
          <Route exact path="/OurTeam">
            <OurTeam />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
    </Elements>
  );
}

export default App;