'use strict';
(function(){
    var setupPlayer = document.querySelector('.setup-player');
    var wizardCoat = setupPlayer.querySelector('.wizard-coat');
    var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
    var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');

    var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var WIZARD_EYECOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
    var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var setFillColor = function(element, color){
        element.style.fill =  color;
    }
    var setBackgroundColor = function(element, color){
        element.style.backgroundColor =  color;
    }
    
    window.wizard = {
        addColorChangerListeners: function(){
            window.colorChanger.changeItemColor(wizardCoat, WIZARD_COATCOLORS, setFillColor);
            window.colorChanger.changeItemColor(wizardEyes, WIZARD_EYECOLORS, setFillColor);
            window.colorChanger.changeItemColor(wizardFireball, FIREBALL_COLORS, setBackgroundColor);
        }
    }
})()