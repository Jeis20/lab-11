'use strict';

// array to pass images from constructor function
var allPicturesArray = [];

// array holding all picture names
var allPictureNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var totalClicks = 0;

// displays random picture
function showRandomPicture() {
  return Math.floor(Math.random() * allPictureNames.length);
}

// display 3 images only for displayThreeImages function
function randomPicture() {
  var a = showRandomPicture();
  return allPicturesArray[a];
}

// constructor object with name and path parameters for pictures
function Picture(name) {
  this.name = name.split('.')[0];
  this.path = 'imgs/' + name;
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
      allPicturesArray[i].tally += 1;
      break;
    }
  }
}
generatePicture();

document.addEventListener('click', function() {
  if(totalClicks > 25) {
    for(var i = 0; i < thePictures.length; i++) {
      thePictures[i].removeEventListener('click', formClick);
    }
  }
});