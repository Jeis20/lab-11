'use strict';

// array holding all picture names
var allPictureNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var totalClicks = 0;

// generates random picture
function showRandomPicture () {
  return Math.floor(Math.random() * allPictureNames.length);
}

showRandomPicture();
imageEl.addEventListener('click', function(event) {
  showRandomPicture(event);
  console.log(event);

});

