import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import About from "./pages/OurTeam/OurTeam"
import NavbarPage from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CartContext from "./components/cart/context";
import useCart from './hooks/use-cart';
import ProductsPage from './pages/products';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';

const stripePromise = loadStripe('pk_test_HD6UokLebmhghEj5W00db1lw');





function App() {
  return (
    <CartContext.Provider value={useCart([])}>
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
          <Route path='/products'>
              <ProductsPage />
            </Route>
          <Route path='/cart'>
              <CartPage />
            </Route>
            <Route path='/checkout'>
              <CheckoutPage />
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
    </CartContext.Provider>
  );
}

export default App;