function draw(){
image(video, 0, 0, 300, 300)
Classifier.classify(video, result)
}
function setup(){
canvas = createCanvas(300,300)
canvas.center() 
video = createCapture(VIDEO); 
video.hide();
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/px1zwLsaS/model.json",ModelLoaded)  
} 
function ModelLoaded(){
console.log("Model Loaded");
}

function result(error,R){
if (error){
console.error(error)    
}    
else{
console.log(R)    
document.getElementById("Result_Object_Name").innerHTML = R[0].label
document.getElementById("Result_Object_Accuracy").innerHTML = R[0].confidence.toFixed(2);     
}
}
