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
    do { 
        progressBar.value = 0;
    } while(progressBar.value != 0);
    if (audioInterval != null) {
        clearInterval(audioInterval);
    }
    audioInterval = setInterval(updateProgressBar, 1000);
    lastPosition = 0;
    readyToPause = true;
    setStatePlaying();
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
        setStatePaused();
    } else {
        setStatePlaying();
    }
}

var setStatePlaying = function() {
    song.seek(lastPosition);
        song.play();
        playButton.innerHTML = "pause";
        readyToPause = true;
}

var setStatePaused = function() {
    lastPosition = song.seek();
    song.stop();
    playButton.innerHTML = "play ";
    readyToPause = false;
}

progressBar.onchange = function() {
    song.stop();
    song.seek(progressBar.value);
    lastPosition = progressBar.value;
    if (readyToPause == true) {
        song.play();
    }
}