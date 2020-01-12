import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import DetailMovie from './Pages/DetailMovie';
import AddMovie from './Pages/AddMovie';
import ListStudio from './Pages/ListStudio';
import Seat from './Pages/Seat';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail_movie/:id" component = { DetailMovie }/>
          <Route path="/add_movie" component={AddMovie}/>
          <Route path="/list_studio/:id" component={ListStudio} />
          <Route path="/seat/:id" component={Seat} />
          {/* <Route path="/category/:id/event" component={Category} />
          <Route path="/event/:id" component={DetailEvent} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/payment/:id" component={Payment} />
          <Route path="/add_event" component={AddEvent}/>
          <Route path="/my_ticket" component={MyTicket}/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

