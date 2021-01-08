import React from "react";
import Nav from "./components/Nav/Nav";
import Dashboard from "./pages/dashboard/dashboard";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div>
      <Nav />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;