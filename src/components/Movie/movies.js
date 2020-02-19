import React, { Component } from 'react';
import Header from '../Home/header.js';
import Modal1 from '../Modal/modal.js';
import './movies.css';
import '../css/style.css';

var moviedb = require("../../database/moviedb.json");

// Container//

class movies extends Component {

  render () {
    return (
      <div className="DivUnderRoot" >
        <div className="Header">
          <Header />
        </div>
        <TitleList url='moviedb' />
      </div>
    );
  }
}

// Title List //

class TitleList extends Component {

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
    this.setState({ data: moviedb });
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
    var titles = '';

    if (this.state.data.moviedb) {
      titles = this.state.data.moviedb.map( (title, i) => {
    
          var name = title.MOVIE_TITLE;
          var posters = './posters/movies/' + title.POSTER_NAME;
          
          return (
            <Item key={title.id}
              title={name}
              score={title.RATING}
              overview={title.SYNOPSIS}
              moviePoster={posters}
              cast={title.CAST}
              director={title.DIRECTOR}
              duration={title.DURATION}
              genre={title.GENRE}
              year={title.YEAR}
              path={title.FILE_NAME}
            />

          );
      });

    }

    return (
      <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titles}
          </div>
        </div>
      </div>
    );
  }
}

// Title List Item //
class Item extends Component {

  shorten (overview) {
    var result = overview;
    var resultArray = result.split(" ");
    if (resultArray.length > 10) {
      resultArray = resultArray.slice(0, 15);
      result = resultArray.join(" ") + " …";
    }
    return result;
  }

  render () {

    var shorten = this.shorten(this.props.overview);
    return (
      <div className="Item" style={{ backgroundImage: 'url(' + this.props.moviePoster + ')' }}>

        <Modal1 key={this.props.id}
          title={this.props.title}
          poster={this.props.moviePoster}
          plot={this.props.overview}
          cast={this.props.cast}
          director={this.props.director}
          genre={this.props.genre}
          year={this.props.year}
          duration={this.props.duration}
          score={this.props.score}
          path={this.props.path}
          type={"movie"}
        />

        <div className="overlay">
          <div className="title">{this.props.title}</div>
          <div className="rating">{this.props.score}</div>
          <div className="plot">{shorten}</div>
        </div>
      </div>
    );
  }
}

export default movies;

