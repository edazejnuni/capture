import React from "react";
//global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle/>
        <AboutUs/>
      </header>
    </div>
  );
}

export default App;
