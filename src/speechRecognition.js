// SpeechRecognition
// -----------------
//
// The replacement or stand-in for HTML5's SpeechRecognition
// interface.
//
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#api_description
//
var SpeechRecognition = function(){

  var sr = this;

  // An object to hold pocketsphinx internals
  sr._sphinx_ = {};
  // Create a callback manager
  sr._sphinx_.callbackManager = new CallbackManager();
  // Create a recognizer worker
  sr._sphinx_.recognizer = new Worker("../pocketsphinx/recognizer.js");

  sr._sphinx_.recognizer.onmessage = function(e) {
    console.log(e);
    if (e.data.hasOwnProperty('id')) {
      // If the message has an id field, it
      // means that we might have a callback associated
      var clb = sr.callbackManager.get(e.data['id']);
      var data = {};
      // As mentinned previously, additional data can be passed to the callback
      // such as the id of a newly added grammar
      if(e.data.hasOwnProperty('data')) data = e.data.data;
      if(clb) clb(data);
    }
  };

  sr._sphinx_.status = 'preinit';

};

// Indicate that this is a shim
SpeechRecognition.isShim = true;

// Start
// -----
//
// Instructs the object to begin recognition
SpeechRecognition.prototype.start = function(){

  if(this._sphinx_.status === 'preinit'){
    this._sphinx_.recognizer.postMessage({command: 'initialize', id: this._sphinx_.callbackManager.add(function(){
      console.log('in');
    })});
  }

}

// Override any existing SpeechRecognition class.
window.SpeechRecognition = SpeechRecognition;
