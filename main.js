Status = "";
objectName = "";
object = [];


function setup() {
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

if (object[i].label == object_name) {
    for(i = 0 ; i < objects.length ; i++) {
        video_webcamLiveView.stop();
        objectDetector.detect(gotResults);
        document.getElementById("status").innerHTML = objectName + "Found";
        var xoxo = window.SpeechSynthesis();
        var utterthis = new SpeechSynthesisUtterance( objectName + "Found");
    }
}
else{
    document.getElementById("status").innerHTML = objectName + "Not Found"
}

function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);

    document.getElementById('status').innerHTML = "Status : Detecting Objects";
    objectName = document.getElementById('object_name_input');
}

function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
}

function gotResults (error , results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw() {
    results = object;
    image(video , 0 , 0 , 400 , 400);

    if(Status != "") {
        objectDetector.detect(video , gotResults);

        for(i = 0 ; i < objects.length ; i++) {

            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = " Number of Detected Objects are : " + objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%" , objects[i].x , objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}