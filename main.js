img = "";
nosex = 0;
nosey = 0;
mariox = 325;
marioy = 325;

function preload() {
    world_start = loadSound("world_start.wav");
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240, 336);
    canvas.parent("canvas1");
    instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent("game_console")
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotresults);
}

function modelloaded() {
    console.log("Model Loaded");
}

function gotresults(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

    }
}

function draw() {
    game()
}