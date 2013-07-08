describe('SpeechRecognition', function(){
  it('exists in the global scope', function(){
    expect(window.SpeechRecognition).to.be.ok();
  });
  it('indicates that it is a shim', function(){
    expect(window.SpeechRecognition.isShim).to.be.ok();
  });
});

describe('SpeechRecognition#start', function(){

  it('initializes the recognizer in a preinit object', function(){

    var sr = new SpeechRecognition();

    expect(sr._sphinx_.status).to.eql('preinit');

    sr.start();

  });
});
