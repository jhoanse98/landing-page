import React, { useEffect, useState } from 'react';
import Routes from "./routes";
import { useHistory } from "react-router-dom";
import HeaderUser from './components/Header';
import './App.css'


function App() {

  return (
    <React.Fragment>
      <div>
        <header>
          <HeaderUser />
        </header>
      </div>
      <div id="MyContainer" className="container">
        <div className="row flex-xl-nowrap">
          <main className="bd-content" role="main">
            <Routes />
          </main>
        </div>
      </div>
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>LA GENÉTICA ES DE TODOS Y PARA TODOS</small>
        </div>
      </footer>

    </React.Fragment>
  );
}

export default App;