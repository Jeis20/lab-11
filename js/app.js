'use strict';

var imageEl = document.getElementById('served-images');

var allPictures = [];

function Pictures(name) {
  this.name = name;
  this.timesShown = 0;
  this.path = `images/${name}.jpg`;
  allPictures.push(this);
}

var allPictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

allPictureNames.forEach(function(pictureName) {
  newPicture(pictureName);
});

function showRandomPicture () {
  var rando = Math.floor(allPictureNames.length * Math.random());
  imageEl.src = allPictures[rando].path;
  imageEl.title = allPictures[rando].name;
  allPictures[rando].timesShown++;
}

showRandomPicture();
imageEl.addEventListener('click', function(event) {
  showRandomPicture(event);
  console.log(event);

});

