import React, { Component } from 'react';
import Header from '../Home/header.js';
import {Link} from "react-router-dom";
import './episode.css';
    
class Episode extends Component{
  constructor (props) {
    super (props)
    this.state = {
     data: []
    }
  }

  componentDidMount () {
    this.setState({data: this.props.location.state, mounted:true})
  }

  render () {
      let data = this.state.data;

      let episodes = '';

      if(data.episode) {
      episodes = data.episode.map( (episode) => {
    
          const name = episode.TITLE;
          const sceneImage = './posters/episode/' + episode.SCENE_NAME;
          
          return (
            <Item key={episode.EPISODE_NO}
              eptitle={name}
              scenes={sceneImage}
              cast={episode.CAST}
              director={episode.DIRECTOR}
              duration={episode.DURATION}
              overview={episode.SYNOPSIS}
              number={episode.EPISODE_NO}
              path={episode.FILE_NAME}
              type="tv"
              />
          );
      });
    }
      return (
        <div className="DivUnderRoot" >
          <Header />
          <Details 
            poster={data.tvshowPoster}
            title={data.title}
            genre={data.genre}
            cast={data.cast}
            director={data.director}
            year={data.year}
            season={data.season}
            discription={data.overview}
          />
          <div ref="titlecategory" className="EpisodeList" data-loaded={this.state.mounted}>
            <div className="episodes-wrapper">
                {episodes}
            </div>
          </div>
          </div>
      )
  }
}

class Details extends Component {
  render() {
    return (
      <div className="Details" >
        <dl className="epName"> {this.props.title} </dl>
        <div className="Details-wrapper">
          <div className="epPoster" style={{ backgroundImage: 'url(' + this.props.poster + ')' }}></div>
          <div className="epSeason">
          <dt> Season :  {this.props.season} </dt> </div>
          <div className="epDiscription"> &ensp; {this.props.discription} </div>
          <div className="epCast"> 
          <dt> Starring :</dt> {this.props.cast} </div>
          <div className="epDirector"> 
          <dt> Director :</dt> {this.props.director} </div>
          <div className="epGenre"> Genre : {this.props.genre} </div>
          <div className="epYear"> Year : {this.props.year} </div>
        </div>
        </div>
    )
  }
}
 
class Item extends Component {

    playerRedirect= () => {
    sessionStorage.setItem("v", "/"+this.props.type+"/"+this.props.path);
    sessionStorage.setItem("f", this.props.eptitle);
    }

    render () {
    // const url="https://atlas.vuestream.tv/player";

    return (

      <div className="episodeDetails"> 
          <div className="Card" style={{ backgroundImage: 'url(' + this.props.scenes + ')' }}> 
            {/* <a href={url} target="_self" className="button" onClick={this.playerRedirect} > </a> */}
            <Link to="/player" className="playerbtn2"></Link>
          </div> 
            <ol className= "episodeOrder">
              <li className="epTitle"> {this.props.eptitle} </li>
              <li className="epNo"> Episode : {this.props.number} </li>
              <li className="epSynopsis"> &ensp; {this.props.overview} </li>
              <li className="epDuration"> Duration : {this.props.duration} mins </li>
            </ol>     
      </div>
    );
  }
}

export default Episode;

