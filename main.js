function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xvNuGNEZs/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var arcanine = 0;
var glameow = 0;
var gogoat = 0;
var miltank = 0;
var pyroar = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Arcanine - '+arcanine+ ' Detected Glameow - '+glameow + 'Detected Gogoat - '+gogoat + 'Detected Miltank - '+miltank + 'Detected Pyroar - '+pyroar;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Arcanine") {
      img.src = '9.gif';
      arcanine = arcanine+1;
    }if (results[0].label == "Glameow") {
      img.src = '8.gif';
      glameow = glameow + 1;
    } 
    if (results[0].label == "Gogoat") {
      img.src = 'goat.webp';
      gogoat = gogoat + 1;
    } 
    if (results[0].label == "Miltank") {
      img.src = 'cow.gif';
      miltank = miltank + 1;
    } 
    if (results[0].label == "Pyroar") {
      img.src = 'lion.webp';
      pyroar = pyroar + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}
