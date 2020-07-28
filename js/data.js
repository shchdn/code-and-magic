'use strict';
(function(){
    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var getWizardRandomName = function(names, surnames){
        return window.lib.getRandomArrayValue(names) + ' ' + window.lib.getRandomArrayValue(surnames);
    }
    var wizardParameters = [    
        {
            name: getWizardRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
            colorCoat: window.lib.getRandomDictionaryValue(WIZARD_COATCOLORS),
            colorEyes: window.lib.getRandomDictionaryValue(WIZARD_EYECOLORS)
        },
        {
            name: getWizardRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
            colorCoat: window.lib.getRandomDictionaryValue(WIZARD_COATCOLORS),
            colorEyes: window.lib.getRandomDictionaryValue(WIZARD_EYECOLORS)
        },
        {
            name: getWizardRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
            colorCoat: window.lib.getRandomDictionaryValue(WIZARD_COATCOLORS),
            colorEyes: window.lib.getRandomDictionaryValue(WIZARD_EYECOLORS)
        },
        {
            name: getWizardRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
            colorCoat: window.lib.getRandomDictionaryValue(WIZARD_COATCOLORS),
            colorEyes: window.lib.getRandomDictionaryValue(WIZARD_EYECOLORS)
        }
    ]
})()