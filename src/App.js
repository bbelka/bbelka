import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Landing from './pages/Landing';
import Portfolio from "./pages/Portfolio";
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login'
import addUser from './pages/AddUser'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from './pages/AddProject';
import PrivateRoute from './components/PrivateRoute/index';
import GuestRoute from './components/GuestRoute/index';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Landing} />
          <Route exact path={"/portfolio"} component={Portfolio} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/contact"} component={Contact} />
          <PrivateRoute exact path={"/add"} component={AddProject} redirectTo={"/"}/>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/addUser"} component={addUser} redirectTo={"/"}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
