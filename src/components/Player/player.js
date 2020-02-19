// import './jquery-ui.js';
// import './jquery-3.2.1.min.js';
// // import './DRM.min.js';

// import './main.js';
import './main.css';
import './controls.css';
import './jquery-ui.css';
import React, { Component } from 'react';

/// PLAYER //

// ES6 //
class Player extends Component{
	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this); 
	}
	 
	goBack() {
		this.props.history.goBack();
	}

  render () {
    return (
		<div id="container" width="100%" height="100%">
			
			{/* <!-- Widevine Content for Chrome --> */} 
			<div id="customAsset" style={{display:'none'}}>
				<div className="flex" >
					<label htmlFor="manifestInput">Content URL:</label>
					<input id="manifestInput" type="text" className="flex-grow" />
				</div>
			</div>

			<div id="videoContainer" className="overlay-parent">

				<div id="errorDisplay"></div>

				<video id="video"  autoPlay loop playsInline ></video>
				{/* <!--loop muted --> */}

				<div id="displaySpace" className="overlay">

				    <div id="backBrowse"> <button className="backBtn" onClick={this.goBack}> </button> 
				  	</div>
	
					<div id="titleName" > <h2 id="movieName"> </h2> 
					</div>

				</div>

				{/* <!--Giant buttons bar--> */}
				<div id="giantPlayButtonContainer" className="overlay">
					<button id="rewindButton" aria-label="Rewind 10 seconds"></button>
					<button id="giantPlayButton" aria-label="Play"></button>
					<button id="fastforwardButton" aria-label="Fast forward 10 seconds"></button>
				</div>

				{/* <!-- Subtitles container --> */}
				<div id="subtitlesContainer" className="inplayoverlay">
					<div id="subs_0_props" style={{padding: "2px"}}>
						<p id="subs_0" className="in_captions" style={{display:"Inline-block", marginBottom: "1px"}}></p>
					</div>
					<div id="subs_1_props" style={{padding: "2px"}}>
						<p id="subs_1" className="in_captions" style={{display:"InlineBblock", marginTop: "0px"}}></p>
					</div>
				</div>

				{/* Bottom controls bar */}
				<div id="controlsContainer" className="overlay">
					<div id="controls">
						<input id="seekBar" type="range" step="any" min="0" max="1" defaultValue="0"/>
						<div id="currentTime">0:00</div>
						<button id="muteButton" className="material-icons">volume_up</button>
						<input id="volumeBar" type="range" step="any" min="0" max="1" defaultValue="0"/>
						<button id="audioButton" className="material-icons">language</button>
						<button id="subtitleButton" className="material-icons">closed_caption</button>
						<button id="fullscreenButton" className="material-icons">fullscreen</button>
						{/* <!-- <button id="accessibilityButton" aria-label="Configure accessibility" className="material-icons"></button> --> */}
					</div>
				</div>
			</div>
		</div>
    );
  }
};

export default Player;