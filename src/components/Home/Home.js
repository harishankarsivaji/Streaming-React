import React, { Component } from "react";
import './Home.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import { NavLink } from "react-router-dom";
import { Logo } from './header.js';

const obj = require("../../database/homedb.json");

// Home //
class Home extends Component {

  render () {
    return (
      <div className="DivUnderRoot" >
        <div className="Header">
          <Logo />
        </div>
        <Front url={"homedb"} />
      </div>
    );
  }
}

// Front //
class Front extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  getInitialState () {
    return { data: [], mounted: false };
  }
  loadContent () {
    this.setState({ data: obj });

  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        this.loadContent();
      });

    }
  }
  componentDidMount () {
    if (this.props.url !== '') {
      this.loadContent();
      this.setState({ mounted: true });
    }
  
  }
  render () {
    // eslint-disable-next-line
    const titles = new Array();

    if (this.state.data.homedb) {
      // eslint-disable-next-line
      this.state.data.homedb.map( (title, i) => {
        titles.push(title);
      }
      );
    }

    return (
      <div className="home-content">
        <Slider
          autoplay={4000}
          touchDisabled="false"
          className="slider-wrapper"
        >
          {titles.map((title, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ backgroundImage: 'url(' + title.image + ')' }}	>
              <div className="inner">
                <h1 className="homeh1">{title.title}</h1>
                <div className="vl">
                  <h4 className="homeh4">{title.head}</h4>
                  <p className="homep">{title.description}</p>
                </div><div>
                <NavLink to={title.button} className="changeit" id="navanchor" >
                <button className="homebutton">
                  ENJOY
                </button></NavLink></div>
              </div>
            </div>))}
        </Slider>
      </div>

    );
  }
}

export default Home;