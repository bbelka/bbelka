import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Portfolio from "./pages/Portfolio";
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from './pages/AddProject';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Jumbotron} />
          <Route exact path={"/portfolio"} component={Portfolio} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/add"} component={AddProject} />
          <Route exact path={"/login"} component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
