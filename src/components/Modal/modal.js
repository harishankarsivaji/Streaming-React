import React from 'react';
import Modal from 'react-responsive-modal';
import {Link} from "react-router-dom";
import './modal.css';

export default class Modal1 extends React.Component {

  state = {
    open: false,
  };
  
  onOpenModal = () => {
    this.setState({ open: true });
    sessionStorage.setItem("v", "/"+this.props.type+"/"+this.props.path);
    sessionStorage.setItem("f", this.props.title);
  };
  
  onCloseModal = () => {
    this.setState({ open: false });
    sessionStorage.setItem("v", "");
    sessionStorage.setItem("f", "");
  };
  render() {
    const { open } = this.state;

    // const url="https://atlas.vuestream.tv/player";

    let red='';
    let blue='';

    if(this.props.score){
    
    red=  <div className="score">{this.props.score}</div>
    blue= <div className="year"> {this.props.year} </div>

    }
    else{
      red=  <div className="episode"> 
                      Season: {this.props.season}  &nbsp;&nbsp;
                      Episode: {this.props.episode} </div>
      blue= <div className="eptitle"> Episode Title: {this.props.eptitle} </div>
    }
      /* padding-top: 20px;
      padding-left: 10px;
      justify-items: center; */
    return (
      <div>
        <button id="blowup" className="button" onClick={this.onOpenModal}></button>

        <Modal open={open} onClose={this.onCloseModal} center classNames={{ modal : 'custom-modal', overlay : 'overlay', closeIcon: 'close'}}>
          <div id="modal-container" className="modal">
            <div className="modal-content" >
              <div className="moviename"> {this.props.title} </div>
              {red}              
              {blue}
              <div className="synopsis"> {this.props.plot} </div>
              <div className="director"> Director: {this.props.director} </div>
              <div className="cast"> Starring: {this.props.cast} </div>
              <div className="genre"> Genre: {this.props.genre} </div>
              <div className="duration"> Duration: {this.props.duration} mins</div>
              <div className="poster" style={{ backgroundImage: 'url(' + this.props.poster + ')' }}>
                {/* <a href={url} target="_self" className="playerbtn" onClick={this.onRedirect} > </a> */}
                <Link to="/player" className="playerbtn"></Link>
              </div>
            </div>
            
          </div>
        </Modal>
      </div>
    );
  }
}


