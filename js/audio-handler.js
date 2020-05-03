let progressBar = document.getElementById("progressBar");
let playButton = document.getElementById("playButton");
let readyToPause = true;
let audioInterval;
let song;

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
    progressBar.value = song.seek();
}

playButton.onclick = function() {
    if (readyToPause) {
        song.pause();
        playButton.innerHTML = "play ";
        readyToPause = false;
    } else {
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