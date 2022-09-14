import React from "react"
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import Navbar from "./Component/inc/Nabar";

import { BrowserRouter as Routes, Route, } from "react-router-dom";



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <div>
          <Navbar />

          <Route path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

        </div>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
