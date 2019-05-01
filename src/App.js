import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Food from "./pages/Food";
import Shelter from "./pages/Shelter";
import Health from "./pages/Health";

class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/food" component={Food} />
          <Route path="/shelter" component={Shelter} />
          <Route path="/health" component={Health} />

        </div>
      </Router>
    );
  }
}

export default App;
