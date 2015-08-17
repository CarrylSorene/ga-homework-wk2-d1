var playSound = playSound || {} //namespacing to fix clash of names used by other libraries eg setup, play, initialize - when file loads, create variable and if there's already an object with that name then use it, or create a new object for it/us to use

//grid of scifi icons - click to play sound
//listen for event of click to play

soundManager.setup({
  url: '/swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    // Ready to use; soundManager.createSound() etc. can now be called.
  }
});
















//stop each previous if a new one is clicked