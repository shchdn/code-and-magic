'use strict';
(function(){
    const ESC_KEYCODE = 27;
    const ENTER_KEYCODE = 13;
    window.setup = {
        isEscPress: function(evt){
            return evt.keyCode === ESC_KEYCODE;
        },
        isEnterPress: function(evt){
            return evt.keyCode === ENTER_KEYCODE;
        },
        renderSimilarWizardList: function(parameters){
            let numberOfWizards = 4;
            while (similarListElement.hasChildNodes()) {
                similarListElement.removeChild(similarListElement.lastChild);
            }
            let wizardsOrder = window.lib.getRandomUniqueNumbersSequence(0, parameters.length - 1, numberOfWizards);
            for (let i = 0; i < numberOfWizards; i++){
                var setupWizardTemplate = wizardTemplate.cloneNode(true);
                similarListElement.appendChild(setupWizardTemplate);
                setupWizardTemplate.querySelector('.setup-similar-label').textContent = parameters[wizardsOrder[i]].name;
                setupWizardTemplate.querySelector('.wizard-coat').style.fill = parameters[wizardsOrder[i]].colorCoat;
                setupWizardTemplate.querySelector('.wizard-eyes').style.fill = parameters[wizardsOrder[i]].colorEyes;
            }
            setupSimilar.classList.remove('hidden');
        },
    }
    var setupDialog = document.querySelector('.setup');
    var setupSimilar = setupDialog.querySelector('.setup-similar');
    var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var similarListElement = setupDialog.querySelector('.setup-similar-list');
    var setupDialogForm = setupDialog.querySelector('.setup-wizard-form');
    var setupDialogClose = setupDialog.querySelector('.setup-close');
    var setupDialogSubmit = setupDialog.querySelector('.setup-submit');
    var setupDialogUsername = setupDialog.querySelector('input[name="username"]');
    var setupAvatar = document.querySelector('.setup-open-icon');
    var dialogHandle = setupDialog.querySelector('.upload');
    var closesetupDialog = function(){
        setupDialog.classList.add('hidden');
        setupAvatar.addEventListener('keydown', onSetupAvatarEnterPress)
        setupAvatar.addEventListener('click', onSetupAvatarClick);
        setupDialogClose.removeEventListener('click', onSetupDialogClick);
        setupDialogClose.removeEventListener('keydown', onSetupDialogEnterPress);
        document.removeEventListener('keydown', onSetupDialogEscPress);
        setupDialogSubmit.removeEventListener('click', onSetupDialogSubmitClick);
        setupDialogSubmit.removeEventListener('keydown', onSetupDialogSubmitEnterPress);
        setupDialogUsername.removeEventListener('keydown', onSetupDialogUsernameEscPress)
    }
    var opensetupDialog = function(){
        setupAvatar.removeEventListener('keydown', onSetupAvatarEnterPress)
        setupAvatar.removeEventListener('click', onSetupAvatarClick);
        window.backend.load(window.setup.renderSimilarWizardList, onRenderSimilarListError);
        setupDialog.classList.remove('hidden');
        setupDialogClose.addEventListener('click', onSetupDialogClick);
        setupDialogClose.addEventListener('keydown', onSetupDialogEnterPress);
        document.addEventListener('keydown', onSetupDialogEscPress);
        setupDialogSubmit.addEventListener('click', onSetupDialogSubmitClick);
        setupDialogSubmit.addEventListener('keydown', onSetupDialogSubmitEnterPress);
        setupDialogUsername.addEventListener('keydown', onSetupDialogUsernameEscPress);
        dialogHandle.addEventListener('mousedown', onDialogHandleMousedown);
        window.wizard.addColorChangerListeners();
    }
    var onRenderSimilarListError = function (message){
        console.log(message);
    }
    var onDialogHandleMousedown = function (evt){
        evt.preventDefault();
        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };
        var dragged = false;
        var onSetupDialogMouseMove = function(moveEvt){
            moveEvt.preventDefault();
            dragged = true;
            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            }
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            }
            setupDialog.style.top = (setupDialog.offsetTop - shift.y) + 'px';
            setupDialog.style.left = (setupDialog.offsetLeft - shift.x) + 'px';
        }
        var onSetupDialogMouseUp = function(){
            document.removeEventListener('mousemove', onSetupDialogMouseMove);
            document.removeEventListener('mouseup', onSetupDialogMouseUp);
            if (dragged) {
                var onClickPreventDefault = function(evt) {
                    evt.preventDefault();
                    dialogHandle.removeEventListener('click', onClickPreventDefault);
                }
                dialogHandle.addEventListener('click', onClickPreventDefault);
            }
        }
        document.addEventListener('mousemove', onSetupDialogMouseMove);
        document.addEventListener('mouseup', onSetupDialogMouseUp);
    }
    var onSetupDialogUsernameEscPress = function(evt){
        if (window.setup.isEscPress(evt)){
            evt.stopPropagation();
        }
    }
    var onSetupDialogClick = function(){
        closesetupDialog();
    }
    var onSetupAvatarClick = function(){
        opensetupDialog();
    }
    var submitSetupDialog = function(evt){
        window.backend.save(new FormData(setupDialogForm), function (response) {
            closesetupDialog();
        })
        evt.preventDefault();
    }
    var onSetupAvatarEnterPress = function(evt){
        if (window.setup.isEnterPress(evt)){
            opensetupDialog();
        }
    }
    var onSetupDialogSubmitClick = function(evt){
        submitSetupDialog(evt);
    }
    var onSetupDialogSubmitEnterPress = function(evt){
        if (window.setup.isEnterPress(evt)){
            opensetupDialog();
        }
    }
    var onSetupDialogEnterPress = function(evt){
        if (window.setup.isEnterPress(evt)){
            closesetupDialog();
        }
    }
    var onSetupDialogEscPress = function(evt){
    if (window.setup.isEscPress(evt)){
            closesetupDialog();
        }
    }
    setupAvatar.addEventListener('keydown', onSetupAvatarEnterPress)
    setupAvatar.addEventListener('click', onSetupAvatarClick);

})()