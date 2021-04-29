function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    let hr = hour();
    let min = minute();
    let sec = second();
    let adjustedSec = sec
    let adjustedMin = min
    let adjustedHr = hr
    if (sec < 10) adjustedSec = '0' + sec
    if (min < 10) adjustedMin = '0' + min 
    if (hr < 10) adjustedHr = '0' + hr

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(36);
    text(`${adjustedHr}:${adjustedMin}:${adjustedSec}`, windowWidth / 2, windowHeight / 2);

    noFill()
    stroke('#9b68e9')
    strokeWeight(8);
    arc(windowWidth / 2, windowHeight / 2, 325, 325, -PI / 2, 2 * PI * sec / 60 - PI / 2)
    stroke('#e968b5')
    arc(windowWidth / 2, windowHeight / 2, 300, 300, -PI / 2, 2 * PI * min / 60 - PI / 2)
    stroke('#e99b68')
    arc(windowWidth / 2, windowHeight / 2, 275, 275, -PI / 2, 2 * PI * hr / 24 - PI / 2)
}