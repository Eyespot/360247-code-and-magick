'use strict';


var setup = document.querySelector('.setup');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarCharactersTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
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
  var order = getRandomInteger(0, 1);
  var name = (order === 0) ? NAMES[getRandomInteger(0, NAMES.length - 1)] + ' ' + SURNAMES[getRandomInteger(0, SURNAMES.length - 1)] : SURNAMES[getRandomInteger(0, SURNAMES.length - 1)] + ' ' + NAMES[getRandomInteger(0, NAMES.length - 1)];

  return name;
}

function getRandomCoatColor() {
  var coatColor = COAT_COLORS[getRandomInteger(0, COAT_COLORS.length - 1)];
  return coatColor;
}

function getRandomEyesColor() {
  var eyesColor = EYES_COLORS[getRandomInteger(0, EYES_COLORS.length - 1)];
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
