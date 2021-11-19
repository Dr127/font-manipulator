function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 500);
    canvas.position(660, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function draw(){
    background('#969A7');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log(noseX = results.pose.nose.x);
    }
}