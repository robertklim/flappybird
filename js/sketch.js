// Flappy bird

let bird;
let pipes = [];
let mic;
let sliderTop;
let sliderBottom;
let clapping = false;

function setup() {
    createCanvas(600, 600);
    mic = new p5.AudioIn();
    mic.start();
    bird = new Bird();
    pipes.push(new Pipe());
    sliderTop = createSlider(0, 1, 0.3, 0.01);
    sliderBottom = createSlider(0, 1, 0.1, 0.01);
}

function draw() {
    background(0);

    let vol = mic.getLevel();

    for (let i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT!");
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.show();
    bird.update();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

    let thresholdTop = sliderTop.value();
    let thresholdBottom = sliderBottom.value();

    if (vol > thresholdTop && !clapping) {
        bird.up();
        clapping = true;
    }

    if (vol < thresholdBottom) {
        clapping = false;
    }

    noStroke();
    fill(0, 255, 0);
    let y = map(vol, 0, 1, height, 0);
    rect(width - 50, y, 50, height - y);

    let ty = map(thresholdTop, 0, 1, height, 0);
    stroke(255, 0, 0);
    strokeWeight(4);
    line(width - 50, ty, width, ty);

    let by = map(thresholdBottom, 0, 1, height, 0);
    stroke(0, 0, 255);
    strokeWeight(4);
    line(width - 50, by, width, by);

}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}
