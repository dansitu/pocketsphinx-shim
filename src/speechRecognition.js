// SpeechRecognition
// -----------------
//
// The replacement or stand-in for HTML5's SpeechRecognition
// interface.
//
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#api_description
//
var SpeechRecognition = function(){

};

// Indicate that this is a shim
SpeechRecognition.isShim = true;

// Start
// -----
//
// Instructs the object to begin recognition
SpeechRecognition.prototype.start = function(){

}

// Override any existing SpeechRecognition class.
window.SpeechRecognition = SpeechRecognition;
