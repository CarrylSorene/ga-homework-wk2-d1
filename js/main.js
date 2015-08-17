var playSound = playSound || {} 

// playSound.setup = function(){
//   document.getElementById('1').addEventListener('click', playSound)

window.onload = function(){

soundManager.setup({
  url: '/swf/',
  onready: function() {
    //playSound('./sounds/spaceshiphum.mp3') - not necessary to keep playing once it passed test.
    addEventListeners()
    }
  });
}

function addEventListeners() {

  document.getElementById('sound-1').addEventListener('click', function() {
      playSound('spaceshiphum.mp3')
      console.log('hello')
  });

  document.getElementById('sound-2').addEventListener('click', function() {
      playSound('blaster.mp3')
      console.log('hello')
  });

  document.getElementById('sound-3').addEventListener('click', function() {
      playSound('crazytalk.mp3')
      console.log('hello')
  });

  document.getElementById('sound-4').addEventListener('click', function() {
      playSound('cutinout.mp3')
      console.log('hello')
  });

  document.getElementById('sound-5').addEventListener('click', function() {
      playSound('system_shutdown.mp3')
      console.log('hello')
  });

  document.getElementById('sound-6').addEventListener('click', function() {
      playSound('laserblast.mp3')
      console.log('hello')
  });

  document.getElementById('sound-7').addEventListener('click', function() {
      playSound('lasers.mp3')
      console.log('hello')
  });

  document.getElementById('sound-8').addEventListener('click', function() {
      playSound('lightbeam.mp3')
      console.log('hello')
  });

  document.getElementById('sound-9').addEventListener('click', function() {
      playSound('shutdown.mp3')
      console.log('hello')
  });

  document.getElementById('sound-10').addEventListener('click', function() {
      playSound('static.mp3')
      console.log('hello')
  });

  document.getElementById('sound-11').addEventListener('click', function() {
      playSound('teleport.mp3')
      console.log('hello')
  });

  document.getElementById('sound-12').addEventListener('click', function() {
      playSound('timemachine.mp3')
      console.log('hello')
  });
}
function playSound(sound) {
  console.log('hi again')
  var mySound = soundManager.createSound({
    id: mySound,
    url: 'sounds/' + mySound,
    //onload: function() { 
     // console.log('sound loaded!', this);
  // }
  });
  mySound.play();

}