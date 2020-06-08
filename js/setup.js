var setupDialog = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');
setupDialog.classList.remove('hidden');
setupSimilar.classList.remove('hidden');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYECOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var getRandomDictionaryValue =  function(dictionaryName){
    return dictionaryName[Math.floor(Math.random() * dictionaryName.length)];
}
var getWizardRandomName = function(names, surnames){
    return getRandomDictionaryValue(names) + ' ' + getRandomDictionaryValue(surnames);
}
var wizardParameters = [    
    {
        name: getWizardRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: getRandomDictionaryValue(WIZARD_COATCOLORS),
        eyeColor: getRandomDictionaryValue(WIZARD_EYECOLORS)
    },
    {
        name: getWizardRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: getRandomDictionaryValue(WIZARD_COATCOLORS),
        eyeColor: getRandomDictionaryValue(WIZARD_EYECOLORS)
    },
    {
        name: getWizardRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: getRandomDictionaryValue(WIZARD_COATCOLORS),
        eyeColor: getRandomDictionaryValue(WIZARD_EYECOLORS)
    },
    {
        name: getWizardRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: getRandomDictionaryValue(WIZARD_COATCOLORS),
        eyeColor: getRandomDictionaryValue(WIZARD_EYECOLORS)
    }
]
for (var i = 0; i < wizardParameters.length; i++){
    var setupWizardTemplate = wizardTemplate.cloneNode(true);
    similarListElement.appendChild(setupWizardTemplate);
    setupWizardTemplate.querySelector('.setup-similar-label').textContent = wizardParameters[i].name;
    setupWizardTemplate.querySelector('.wizard-coat').style.fill = wizardParameters[i].coatColor;
    setupWizardTemplate.querySelector('.wizard-eyes').style.fill = wizardParameters[i].eyeColor;    
}