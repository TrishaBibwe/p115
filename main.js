placeX=0;
placeY=0;

function preload(){}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(270,270);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("posenet is initiallised")
}

function draw(){
   image(video,0,0,400,400);
   image(clown_nose,placeX,placeY,50,20);
   
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        placeX=results[0].pose.nose.x-25;
        placeY=results[0].pose.nose.y+15;
        console.log("placeX ="+placeX);
        console.log("placeY ="+placeY);
    }
}

function take_snapshot(){
    save('avatar.png');
}