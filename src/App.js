import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Portfolio from "./pages/Portfolio";
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { isCompositeComponent } from 'react-dom/test-utils';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        </Switch>
        {/* <Route exact path ="/" component={HomePage}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
