import React from "react";
//global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
//Router
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle/>
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
          <Route path="/work">
            <OurWork/>
          </Route>
          <Route path="/contact">
            <ContactUS/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
