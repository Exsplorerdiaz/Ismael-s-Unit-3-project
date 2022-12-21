/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector('.story-opening');

let optionOne = document.querySelector('.option-one')
let optionTwo = document.querySelector('.option-two');
let optionOneScreen = document.querySelector('.screen-one');
let optionTwoScreen = document.querySelector('.screen-two');
let optionOneEnd = document.querySelector('.option-one-end');
let optionTwoEnd = document.querySelector('.option-two-end');
let button = document.querySelector('.buttons');
let buttontwo = document.querySelector('.button-two');
let buttonFour = document.querySelector('.button-four');
let buttonThree = document.querySelector('.button-three');
let HOneOne = document.querySelector('.h11');
let HOneTwo = document.querySelector('.h12');







optionOne.onclick = function() {

  storyOpening.style.display = 'none';
  optionOneScreen.style.display = 'block';
  button.style.display = 'none';
  buttonThree.style.display = 'block';
}

optionTwo.onclick = function() {

  storyOpening.style.display = 'none';
  optionTwo.style.display = 'none';
  optionTwoScreen.style.display = 'block';
  button.style.display = 'none';
  buttonFour.style.display = 'block';
}

buttonFour.onclick = function() {
  HOneTwo.innerHTML = "YOUR DEAD!!!"
};


buttonThree.onclick = function() {
  HOneOne.innerHTML = "YOUR DEAD!!!"
};

