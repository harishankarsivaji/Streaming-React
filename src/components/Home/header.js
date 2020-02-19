import React, { Component } from 'react';
import '../css/style.css';
import '../Movie/movies.css';
import { NavLink } from "react-router-dom";

// HEADER //

class Header extends Component{

  render () {
    return (
        <div className="Header">
          <Logo />
          <Navigation />
        </div>
    );
  }
}

export class Logo extends Component{
	render () {
		return (
		<NavLink to="/">
		  <div id="logo" className="Logo"
		    style={{backgroundImage: 'url(logo_atlas-air_main_v2.png)'}}> 
		  </div>
		</NavLink>
		);
	}
}

// Navigation //

export class Navigation extends Component{
    render () {
      return (
        <div id="navigation" className="Navigation">
          <nav>
            <ul>
                <li> <NavLink  to="/movies" className="changeit" >Movies</NavLink> </li>
                <li> <NavLink to="/tvshows" className="changeit" > Tv Series </NavLink> </li>
            </ul>
          </nav>
        </div>
      );
    }
  }

  export default Header;
 

  