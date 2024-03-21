import React from 'react';
import "./Styles/style.css";

import Routeindex from  "./Routes/Route.jsx";
import {BrowserRouter} from 'react-router-dom';

// importation des composants routs et footer
import Header from "./Components/Header/Header.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routeindex />
      <Footer />
      </BrowserRouter>
  </div>
  );
}

export default App;
