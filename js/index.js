// Generate Star Background
$('#container').astral();

// Handles Music
var togglemusic = document.querySelector('#togglemusic');
// var audio = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2016/02/Meditation-music-free.mp3');
// var audio = new Audio('../audio/Meditation-music-free.mp3');
var audio = document.querySelector('#music');

// Handles LocalStorage
var data = localStorage.getItem("playMusic");
if (data !== null) {
  $("#togglemusic").attr("checked", "checked");
}

function toggleMusic() {
  var $this = $('label[for=togglemusic]');
  if (togglemusic.checked) {
    $this.addClass('fa-volume-off');
    $this.removeClass('fa-volume-up');
    audio.currentTime = 0;
    audio.pause();
    localStorage.setItem("playMusic", togglemusic.value);
  } else {
    audio.play();
    $this.addClass('fa-volume-up');
    $this.removeClass('fa-volume-off');
    localStorage.removeItem("playMusic");
  }
}
toggleMusic();
$('label[for=togglemusic]').click(function() {
  toggleMusic();
});