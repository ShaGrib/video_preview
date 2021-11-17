var x = document.getElementById("mainvid");

function startAutoplay() { 
    x.autoplay = true;
    x.muted = true;
    x.load();
} 

function stopAutoplay() { 
    x.autoplay = false;
    x.load();
} 

function playAndPause() {
    if (x.paused) {
        x.play();
        x.muted = false;
    } else {
        x.pause();
    }
}