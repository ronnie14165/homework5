// Add js here.
var videoSpeed = [0.5, 1, 2];
var speed = 1;

var video = document.getElementById("videoplayer");

var volumeText = document.getElementById("volume");

var volumeBar = document.getElementById("slider");

window.addEventListener("load", function () {
  video.load();
  video.autoplay = false;
  video.loop = false;
  volumeText.innerText = volumeBar.value;
});

var playButton = document.getElementById("play");
playButton.addEventListener("click", function (event) {
  video.play();
});

var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function (event) {
  video.pause();
});

var slowerButton = document.getElementById("slower");
slowerButton.addEventListener("click", function (event) {
  if (speed <= 0) {
    alert("Video is at slowest speed!");
  } else {
    speed--;
    video.playbackRate = videoSpeed[speed];
  }
});
var fasterButton = document.getElementById("faster");
fasterButton.addEventListener("click", function (event) {
  if (speed >= 2) {
    alert("Video is at fastest speed!");
  } else {
    speed++;
    video.playbackRate = videoSpeed[speed];
  }
});

var skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function (event) {
  if (video.duration - video.currentTime < 15) {
    video.load();
  } else {
    video.currentTime += 15;
  }
});

var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function (event) {
  isMute = video.muted;
  if (isMute == true) {
    video.muted = false;
    muteButton.innerText = "Mute";
    volumeText.innerText = volumeBar.value;
  } else {
    video.muted = true;
    muteButton.innerText = "Unmute";
    volumeText.innerText = 0;
  }
});

volumeBar.addEventListener("click", function (event) {
  video.volume = volumeBar.value / 100;
  isMute = video.muted;
  if (isMute == false) {
    volumeText.innerText = volumeBar.value;
  }
});
