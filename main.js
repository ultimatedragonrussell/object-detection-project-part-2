img="";
status="";
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function preload(){
    img=loadImage('urmom.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("tv",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#0022ff");
    text("cabinets",320,120);
    noFill();
    stroke("#0022ff");
    rect(300,90,270,320);
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}