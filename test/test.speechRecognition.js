describe('SpeechRecognition', function(){
  it('exists in the global scope', function(){
    expect(window.SpeechRecognition).to.be.ok();
  });
  it('indicates that it is a shim', function(){
    expect(window.SpeechRecognition.isShim).to.be.ok();
  });
});
