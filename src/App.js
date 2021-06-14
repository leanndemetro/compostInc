import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import About from "./pages/OurTeam/OurTeam"
import NavbarPage from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import CheckoutForm from "./components/CheckoutForm";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_HD6UokLebmhghEj5W00db1lw');





function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
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
            <CheckoutForm />
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
      </Elements>
    </Router>
  );
}

export default App;