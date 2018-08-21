'use strict';

// array to pass images from constructor function
var allPicturesArray = [];

// array holding all picture names
var allPictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// var imageEl = document.getElementById('served-images');

var totalClicks = 0;

// displays random picture
function showRandomPicture() {
  return Math.floor(Math.random() * allPictureNames.length);
//   var random = Math.floor(allPictureNames.length * Math.random());
//   imageEl.src = allPicturesArray[random].path;
//   imageEl.title = allPicturesArray[random].name;
//   allPicturesArray[random].timesShown++;
}

// display 3 images only for displayThreeImages function
function randomPicture() {
  var a = showRandomPicture();
  return allPicturesArray[a];
}

// constructor object with name and path parameters for pictures
function Picture(name) {
  this.name = name.split('.')[0];
  this.path = `img/${name}.jpg`;
  this.tally = 0;
  this.views = 0;
}

for(var i = 0; i < allPictureNames.length; i++) {
  allPicturesArray.push(new Picture(allPictureNames[i]));
}

// function and logic to randomly pull in 3 pictures
function generatePicture () {
  if(totalClicks < 25) {
    var rand1 = randomPicture();
    var rand2 = randomPicture();
    var rand3 = randomPicture();
    while (rand1 === rand2 || rand1 === rand3) {
      rand1 = randomPicture();
    }
    while (rand2 === rand1 || rand2 === rand3) {
      rand2 = randomPicture();
    }
    while (rand3 === rand1 || rand3 === rand2) {
      rand3 = randomPicture();
    }
    rand1.views += 1;
    rand2.views += 1;
    rand3.views += 1;
    var pictureOne = document.getElementById('picture-one');
    var pictureTwo = document.getElementById('picture-two');
    var pictureThree = document.getElementById('picture-three');
    pictureOne.src = rand1.path;
    pictureOne.name = rand1.name;
    pictureTwo.src = rand2.path;
    pictureTwo.src = rand2.name;
    pictureThree.src = rand3.path;
    pictureThree.src = rand3.name;
  }
}

function formClick(event) {
  for(var i = 0; i < allPicturesArray.length; i++)
    if(event.target.name === allPicturesArray[i].name) {
      allPicturesArray[i].tally += 1;
    }
}

// store click information
totalClicks += 1;
if(totalClicks < 25) {
  generatePicture();
} else {
  var imgs = document.querySelectorAll('.random-picture');
  document.removeEventListener('click', imgs);
  document.getElementById('display-button').style.visibility = 'visible';
}

var thePictures = document.getElementsByClassName('random-picture');
for(var k = 0; i < thePictures.length; i++) {
  thePictures[k].addEventListener('click', formClick);
}

function increaseClickCount(pictureName) {
  for(var i = 0; i < allPicturesArray.length; i++) {

    if(allPicturesArray[i].name === pictureName) {
      allPicturesArray[i].count += 1;
      break;
    }
  }
}
generatePicture();
increaseClickCount();

document.addEventListener('click', function() {
  if(totalClicks > 25) {
    for(var i = 0; i < thePictures.length; i++) {
      thePictures[i].removeEventListener('click', formClick);
    }
  }
});

function displayClicks () {
  var countOfClicks = [];
  for(var i = 0; i < allPicturesArray.length; i++) {
    countOfClicks.push(allPicturesArray[i].count);
  }
  localStorage.busMall = JSON.stringify(allPicturesArray);
  return countOfClicks;
}

displayClicks();