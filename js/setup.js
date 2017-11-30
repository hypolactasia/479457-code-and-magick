'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomName = function (names, surnames) {
  var randomName = getRandomElement(names);
  var randomSurname = getRandomElement(surnames);

  return Math.random() > 0.5 ? randomName + ' ' + randomSurname : randomSurname + ' ' + randomName;
};

var wizardName = getRandomName(WIZARD_NAMES, WIZARD_SURNAMES);

var createWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push({
      name: wizardName + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(WIZARD_COAT_COLORS),
      eyesColor: getRandomElement(WIZARD_EYES_COLOR)
    });
  }
  return wizards;
};

var generateWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = createWizards();
var fragment = document.createDocumentFragment();
for (var i = 0; i < renderWizards.length; i++) {
  fragment.appendChild(generateWizard(renderWizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

