import SampleControls from './controls.js'
import SampleControlsfp from './controlsfp.js'
import DOER from './doer.js'
const doer= new DOER();


// IE 9 fires DOMContentLoaded, and enters the "interactive"
// readyState, before document.body has been initialized, so wait
// for window.load.

function InitPlayer(){
  var player = doer;
  
  player.load().then(
    function(p){
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
          var controls = new SampleControlsfp(p);

        }else{
          var controls = new SampleControls(p);}
    }
    
  );
}

if (document.readyState == 'loading' ||
    document.readyState == 'interactive') {
  if (window.attachEvent) {
    // IE8
    window.attachEvent('onload', InitPlayer);
  } else {
    window.addEventListener('load', InitPlayer);
  }
} else {
  InitPlayer();
}





