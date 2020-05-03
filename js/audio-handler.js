let progressBar = document.getElementById("progressBar");
let playButton = document.getElementById("playButton");
let readyToPause = true;
let audioInterval;
let song;
let lastPosition;

var els = new Howl({
    src: ['music/els.mp3']
});

let songs = { "els":els };

function playSong(sn) {
    if (progressBar == null) {
        progressBar = document.getElementById("progressBar");
    }
    if (song != null) {
        song.stop();
    }
    // TODO: Change Later
    song = songs[sn];

    progressBar.min = 0;
    progressBar.max = song.duration();
    progressBar.value = 0;
    audioInterval = setInterval(updateProgressBar, 1000);
    song.play();
}

function updateProgressBar() {
    if (readyToPause) {
        progressBar.value = song.seek();
    } else {
        progressBar.value = lastPosition;
    }
}

playButton.onclick = function() {
    if (readyToPause) {
        lastPosition = song.seek();
        song.stop();
        playButton.innerHTML = "play ";
        readyToPause = false;
    } else {
        song.seek(lastPosition);
        song.play();
        playButton.innerHTML = "pause";
        readyToPause = true;
    }
}

progressBar.onchange = function() {
    song.stop();
    song.seek(progressBar.value);
    song.play();
}