'use strict';

// array to pass images from constructor function
var allPicturesArray = [];

// array holding all picture names
var allPictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var leftPicture = document.getElementById('left-picture');
var centerPicture = document.getElementById('center-picture');
var rightPicture = document.getElementById('right-picture');
var resultsList = document.getElementById('results-list');

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
// console.log(allPicturesArray);

// constructor function with name and path parameters for pictures
function Picture(name) {
  this.name = name;
  this.path = `img/${name}.jpg`;
  this.tally = 0;
  this.views = 0;
  this.previous = false;
}

for(var i = 0; i < allPictureNames.length; i++) {
  allPicturesArray.push(new Picture(allPictureNames[i]));
}

// function and logic to randomly pull in 3 pictures
function generatePictures () {
  if(totalClicks < 26) {
    var rand1 = randomPicture();
    var rand2 = randomPicture();
    var rand3 = randomPicture();
    console.log('rand1', rand1);
    console.log('rand2', rand2);
    console.log('rand3', rand3);
    while (rand1 === rand2 || rand1 === rand3 || rand1.previous) {
      rand1 = randomPicture();
      console.log('blah');
    }
    // console.log('first image', rand1);

    while (rand2 === rand1 || rand2 === rand3 || rand2.previous) {
      rand2 = randomPicture();
      console.log('and');
    }
    while (rand3 === rand1 || rand3 === rand2 || rand3.previous) {
      rand3 = randomPicture();
      console.log('lifting');
    }
    rand1.views += 1;
    rand2.views += 1;
    rand3.views += 1;
    for (var i = 0; i < allPicturesArray.length; i++){
      allPicturesArray[i].previous = false;
    }
    rand1.previous = true;
    rand2.previous = true;
    rand3.previous = true;
    leftPicture = document.getElementById('left-picture');
    centerPicture = document.getElementById('center-picture');
    rightPicture = document.getElementById('right-picture');
    leftPicture.src = rand1.path;
    leftPicture.alt = rand1.name;
    centerPicture.src = rand2.path;
    centerPicture.alt = rand2.name;
    rightPicture.src = rand3.path;
    rightPicture.alt = rand3.name;
  }
}

function imageClick(event) {
  // console.log(event.target.alt);
  for(var i = 0; i < allPicturesArray.length; i++) {
    if(event.target.alt === allPicturesArray[i].name) {
      allPicturesArray[i].tally += 1;
    }
  }
  if (totalClicks >= 25) {
    displayClicks();
    divIdPicture.removeEventListener('click', imageClick, false);
  }
  else {
    generatePictures();
    totalClicks++;
    // console.log(totalClicks);
  }
}

// adds event listener to all pictures
var divIdPicture = document.getElementById('pictures');
divIdPicture.addEventListener('click', imageClick);

// store click information
// totalClicks >= 1;
// if(totalClicks < 26) {
//   generatePictures();
// } else {
//   var imgs = document.querySelectorAll(randomPicture);
//   document.removeEventListener('click', imgs);
//   document.getElementById('results-button').style.visibility = 'visible';
// }

// function to increment click count
// function increaseClickCount(pictureName) {
//   for(var i = 0; i < allPicturesArray.length; i++) {
//     if(allPicturesArray[i].name === pictureName) {
//       allPicturesArray[i].count++;
//       break;
//     }
//   }
// }

// increaseClickCount();
generatePictures();
// removes event listener once totalClicks is greater than 25
document.addEventListener('click', function() {
  if(totalClicks > 25) {
    for(var i = 0; i < allPicturesArray.length; i++) {
      allPicturesArray[i].removeEventListener('click', imageClick);
    }
  }
});

// function to display totalClicks when user clicks show results
function displayClicks () {

  // var countOfClicks = [];
  for(var i = 0; i < allPicturesArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allPicturesArray[i].tally} votes for the ${allPicturesArray[i].name}`;
    resultsList.appendChild(liEl);
    // countOfClicks.push(allPicturesArray[i].count);
  }
}