function preload(){

}

function setup() {
    canvas=createCanvas(400,400);
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FyRbnI9-3/model.json",ModelLoaded)
}
function ModelLoaded() {
 console.log("The model has been loaded")       
}
function draw() {
    image(video,0,0,400,400)
    classifier.classify(video,getresults)
}
function getresults(error,results){
if (error) {
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("object_result").innerHTML=results[0].label
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)
}
}