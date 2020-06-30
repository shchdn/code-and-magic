var setupDialog = document.querySelector('.setup');
var setupSimilar = setupDialog.querySelector('.setup-similar');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = setupDialog.querySelector('.setup-similar-list');
var setupDialogForm = setupDialog.querySelector('.setup-wizard-form');
var setupDialogClose = setupDialog.querySelector('.setup-close');
var setupDialogSubmit = setupDialog.querySelector('.setup-submit');
var setupDialogUsername = setupDialog.querySelector('input[name="username"]');
var setupAvatar = document.querySelector('.setup-open-icon');
var setupPlayer = setupDialog.querySelector('.setup-player');
var wizardCoatSetup = setupPlayer.querySelector('.wizard-coat');
var wizardEyesSetup = setupPlayer.querySelector('.wizard-eyes');
var wizardFireballSetup = setupPlayer.querySelector('.setup-fireball-wrap');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYECOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var getRandomDictionaryValue =  function(dictionary){
    return dictionary[Math.floor(Math.random() * dictionary.length)];
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
var renderSimilarWizardList = function(){
    for (var i = 0; i < wizardParameters.length; i++){
        var setupWizardTemplate = wizardTemplate.cloneNode(true);
        similarListElement.appendChild(setupWizardTemplate);
        setupWizardTemplate.querySelector('.setup-similar-label').textContent = wizardParameters[i].name;
        setupWizardTemplate.querySelector('.wizard-coat').style.fill = wizardParameters[i].coatColor;
        setupWizardTemplate.querySelector('.wizard-eyes').style.fill = wizardParameters[i].eyeColor;    
    }
}
var closesetupDialog = function(){
    setupDialog.classList.add('hidden');
    setupDialogClose.removeEventListener('click', onSetupDialogClick);
    setupDialogClose.removeEventListener('keydown', onSetupDialogEnterPress);
    document.removeEventListener('keydown', onSetupDialogEscPress);
    // setupDialogSubmit.removeEventListener('click', onSetupDialogSubmitClick);
    setupDialogSubmit.removeEventListener('keydown', onSetupDialogSubmitEnterPress);
    wizardFireballSetup.removeEventListener('click', onWizardFireballClick);
    wizardCoatSetup.removeEventListener('click', onWizardCoatClick);
    wizardEyesSetup.removeEventListener('click', onWizardEyesClick);
    setupDialogUsername.removeEventListener('keydown', onSetupDialogUsernameEscPress)
}
var opensetupDialog = function(){
    setupDialog.classList.remove('hidden');
    setupDialogClose.addEventListener('click', onSetupDialogClick);
    setupDialogClose.addEventListener('keydown', onSetupDialogEnterPress);
    document.addEventListener('keydown', onSetupDialogEscPress);
    // setupDialogSubmit.addEventListener('click', onSetupDialogSubmitClick);
    setupDialogSubmit.addEventListener('keydown', onSetupDialogSubmitEnterPress);
    wizardFireballSetup.addEventListener('click', onWizardFireballClick);
    wizardCoatSetup.addEventListener('click', onWizardCoatClick);
    wizardEyesSetup.addEventListener('click', onWizardEyesClick);
    setupDialogUsername.addEventListener('keydown', onSetupDialogUsernameEscPress)
}
var onSetupDialogUsernameEscPress = function(evt){
    if (evt.keyCode === 27){
        evt.stopPropagation();
    }
}
var onSetupDialogClick = function(){
    closesetupDialog();
}
var onSetupAvatarClick = function(){
    opensetupDialog();
}
var submitSetupDialog = function(){
    setupDialogForm.submit();
}
var onSetupAvatarEnterPress = function(evt){
    if (evt.keyCode === 13){
        opensetupDialog();
    }
}
var onSetupDialogSubmitClick = function(evt){
    submitSetupDialog();
}
var onSetupDialogSubmitEnterPress = function(evt){
    if (evt.keyCode === 13){
        opensetupDialog();
    }
}
var onSetupDialogEnterPress = function(evt){
    if (evt.keyCode === 13){
        closesetupDialog();
    }
}
var onSetupDialogEscPress = function(evt){
if (evt.keyCode === 27){
        closesetupDialog();
    }
}
var onWizardFireballClick = function (){
    if (nextFireballColorNumber === FIREBALL_COLORS.length){
        nextFireballColorNumber = 0;
    }
    changeFireballColor();
    nextFireballColorNumber++;
}
var onWizardCoatClick = function (){
    if (nextCoatColorNumber === WIZARD_COATCOLORS.length){
        nextCoatColorNumber = 0;
    }
    changeCoatColor();
    nextCoatColorNumber++;
}
var onWizardEyesClick = function (){
    if (nextEyesColorNumber === WIZARD_EYECOLORS.length){
        nextEyesColorNumber = 0;
    }
    changeEyesColor();
    nextEyesColorNumber++;
}
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var nextFireballColorNumber = 1;
var nextCoatColorNumber = 1;
var nextEyesColorNumber = 1;
var changeFireballColor = function(){
    wizardFireballSetup.style.background = FIREBALL_COLORS[nextFireballColorNumber];
}
var changeCoatColor = function(){
    wizardCoatSetup.style.fill = WIZARD_COATCOLORS[nextCoatColorNumber];
}
var changeEyesColor = function(){
    wizardEyesSetup.style.fill = WIZARD_EYECOLORS[nextEyesColorNumber];
}
setupSimilar.classList.remove('hidden');
setupAvatar.addEventListener('keydown', onSetupAvatarEnterPress)
setupAvatar.addEventListener('click', onSetupAvatarClick);
renderSimilarWizardList();