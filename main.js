function setup() {
  canvas = createCanvas(300, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("Mobilenet", modelLoaded);
}

function draw(){
  image(video, 0, 0, 300, 250);
  classifier.classify(video, gotResult);
}

function modelLoaded(){
  console.log("model is loaded");
}

function gotResult(error, results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("object").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}



