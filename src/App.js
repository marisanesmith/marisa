import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Photography from "./pages/Photography";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path={["/", "/marisa-nesmith/"]}><Home /></Route>
          <Route exact path="/portfolio"><Portfolio /></Route>
          <Route exact path="/contact"><Contact /></Route> 
          <Route exact path="/photography"><Photography /> </Route>
          <Footer />
        </Switch>
      
      </Router>
    </div>
  );

}

export default App;
