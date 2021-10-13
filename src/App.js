import React from "react";
//global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetails";
//Router
import {Switch, Route, useLocation} from "react-router-dom";
//Animations
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle/>
        <Nav/>
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
          <Route path="/work" exact> 
            <OurWork/>
          </Route>
          <Route path="/work/:id">z
            <MovieDetail/>
          </Route>
          <Route path="/contact">
            <ContactUS/>
          </Route>
        </Switch>
        </AnimatePresence>
      </header>
    </div>
  );
}

export default App;
