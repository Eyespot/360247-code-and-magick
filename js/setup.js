'use strict';


var setup = document.querySelector('.setup');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarCharactersTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var similarCharacters = [];

function showSetup() {
  setup.classList.remove('hidden');
}

function getRandomInteger(min, max) {
  var random = min + Math.random() * (max + 1 - min);
  random = Math.floor(random);

  return random;
}

function getRandomName() {
  var i = getRandomInteger(0, names.length - 1);
  var j = getRandomInteger(0, surnames.length - 1);
  var k = getRandomInteger(0, 1);
  var name;
  name = (k === 0) ? names[i] + ' ' + surnames[j] : surnames[j] + ' ' + names[i];

  return name;
}

function getRandomCoatColor() {
  var i = getRandomInteger(0, coatColors.length - 1);
  var coatColor = coatColors[i];
  return coatColor;
}

function getRandomEyesColor() {
  var i = getRandomInteger(0, eyesColors.length - 1);
  var eyesColor = eyesColors[i];
  return eyesColor;
}

function getRandomCharacter() {
  var character = {
    'name': getRandomName(),
    'coatColor': getRandomCoatColor(),
    'eyesColor': getRandomEyesColor()
  };

  return character;
}

function getSimilarCharacters() {
  for (var i = 0; i < 4; i++) {
    similarCharacters[i] = getRandomCharacter();
  }

  return similarCharacters;
}

function implementCharacter(character) {
  var characterElement = similarCharactersTemplate.cloneNode(true);

  characterElement.querySelector('.setup-similar-label').textContent = character.name;
  characterElement.querySelector('.wizard-coat').style.fill = character.coatColor;
  characterElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;

  return characterElement;
}

function appendCharacters() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < similarCharacters.length; i++) {
    fragment.appendChild(implementCharacter(similarCharacters[i]));
  }
  similarListElement.appendChild(fragment);
}

getSimilarCharacters();
appendCharacters();
showSetup();
setup.querySelector('.setup-similar').classList.remove('hidden');
