import React, { Component } from 'react';
import Header from '../Home/header.js';
import '../Movie/movies.css';
import '../css/style.css';

import { Link } from 'react-router-dom';

const tvshowdb = require("../../database/tvshowdb.json");

// Container //
class tvshows extends Component{

  render () {
    return (
      <div className="DivUnderRoot" >
        <div className="Header">
          <Header />
        </div>
        <TitleList url='tvshowdb' /> 
      </div>
    );
  }
}

// Title List //
// Title List Container //

class TitleList extends Component{
  state = {
      data: []
    };

  getInitialState () {
    return {data: [], mounted: false};
  }

  loadContent () {
    this.setState({ data: tvshowdb });
  }

  UNSAFE_componentWillReceiveProps (nextProps){
    if(nextProps.url !== this.props.url && nextProps.url !== ''){
      this.setState({mounted:true,url:nextProps.url},()=>{
        this.loadContent();
      });
      
    }
  }

  componentDidMount () {
    if(this.props.url !== ''){
      this.loadContent();
      this.setState({mounted:true});
    }
    
  }
  render () {
    let titles ='';

    if(this.state.data.tvshowdb) {
      titles = this.state.data.tvshowdb.map((title, i) => {

          const name = title.SERIES;
          const posters = './posters/tvshows/' + title.POSTER_NAME;
          return (
            <Item key={title.id} 
            title={name} 
            tvshowPoster={posters}
            season={title.SEASON}
            episode={title.EPISODE}
            genre={title.GENRE}
            director={title.DIRECTOR}
            overview={title.SYNOPSIS}
            cast={title.CAST}
            year={title.YEAR}
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
class Item extends Component{
  constructor(props){
    super(props);
    
    this.state = {...props};

    //  episode: this.props.episode,
    //  title: this.props.title,
    //  poster: this.props.tvshowPoster,
    //  genre: this.props.genre
    
  } 

render () {
  
    return (  
      
      <Link to={{
        pathname: "/episode",
        state: this.state
        }} >

      <div className="Item" style={{backgroundImage: 'url('+ this.props.tvshowPoster +')'}}>
        <div className="overlay">
          <div className="title">{this.props.title}</div>
        </div>
      </div>
      </Link>
      
    );
  }
}

export default tvshows;
