prediction = "";

Webcam.set({
    width: 350px,
    height: 350px,
    image_format: 'png',
    png_quaility: 90
});
 
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = '<img "id=capture_image" src="'+data_uri+'"</';
    });
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TxXcNerH_/model.json', modelLoaded);

function speak()
{
    var synth = window.SpeechSynthesis;
    speak_data = "Prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}