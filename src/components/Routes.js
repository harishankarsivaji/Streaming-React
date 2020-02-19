import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

// React - Router // 
import Home from "./Home/Home";
import movies from "./Movie/movies";
import tvshows from "./Tvshow/tvshows";
import Episode from "./Episode/Episode";
import Player from "./Player/player";

class Routes extends Component{
  render () {
    return(
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/movies" component={movies}/>
          <Route exact path="/tvshows" component={tvshows}/>
          <Route exact path="/episode" component={Episode}/>
          <Route exact path="/player" component={Player}/>
        </Switch>
    );
  }
}

export default Routes;
