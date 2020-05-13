import React, { useEffect, useState } from 'react';
import Routes from "./routes";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {

  const history = useHistory();
  const [_, setPath] = useState("");

  window.addEventListener("load", () => {
    
    if(window.location.pathname === "/contact"){
      setPath(window.location.pathname);
    }
  });


  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }


  useEffect(() => {
    checkPath();
  }, []);

  return (
    <div className="App container">
      <Routes />
    </div>
  );
}

export default App;