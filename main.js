prediction1 = ""
prediction2 = ""
Webcam.set({
    width: 350,
    height: 400,
    image_format: "png",
    png_quality: 100,
});

Webcam.attach("#webcamera")

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
});

}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Z_3hV9dgJ/model.json", modelLoaded) 


function modelLoaded()
{
console.log("Model has Loaded");
}

function speak() 
{
var synth = window.speechSynthesis
speak_data_1 = "the first prediction is" + prediction1;
speak_data_2 = "the second prediction is" + prediction2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}

function predictemotion()
{
img = document.getElementById("captured_image");

classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
if (error) {
console.log(error);
} else {
console.log(results);
document.getElementById("result1").innerHTML = results[0].label 
document.getElementById("result2").innerHTML = results[1].label
prediction1 = results[0].label
prediction2 = results[1].label
speak()
if(results[0].label == "Happy")
{
document.getElementById("emoji1").innerHTML = "&#128513"
}
if(results[0].label == "Sad")
{
document.getElementById("emoji1").innerHTML = "&#128546"
}
if(results[0].label == "Angry")
{
document.getElementById("emoji1").innerHTML = "&#128544"
}
if(results[0].label == "Suprised")
{
document.getElementById("emoji1").innerHTML = "&#128562"
}
if(results[0].label == "Sleepy")
{
document.getElementById("emoji1").innerHTML = "&#128564"
}


if(results[1].label == "Happy")
{
document.getElementById("emoji2").innerHTML = "&#128513"
}
if(results[1].label == "Sad")
{
document.getElementById("emoji2").innerHTML = "&#128546"
}
if(results[1].label == "Angry")
{
document.getElementById("emoji2").innerHTML = "&#128544"
}
if(results[1].label == "Suprised")
{
document.getElementById("emoji2").innerHTML = "&#128562"
}
if(results[1].label == "Sleepy")
{
document.getElementById("emoji2").innerHTML = "&#128564"
}












} 



}
















