'use strict';
(function(){
    window.colorChanger = {
        changeItemColor: function(element, colors, callback){
            element.addEventListener('click', function () {
                var nextColor = getColorInOrder(colors, element);
                callback(element, nextColor);
            })
        }
    }
    var number = new Map([
        ['coat', 0,],
        ['eyes', 0,],
        ['fireball', 0]
    ]);    
    var getColorInOrder = function(array, element){
        let elementName;
        if ((typeof(element.className)) !== 'string'){
            elementName = element.className.baseVal;
            elementName = elementName.replace('wizard-', '');
        }
        else {
            elementName = element.className;
            if (elementName.indexOf('fireball') !== -1){
                elementName = 'fireball';
            }
        }
        number.set(elementName, number.get(elementName) + 1);
        if (number.get(elementName) > array.length - 1){
            number.set(elementName, 0);
        }
        let value = array[number.get(elementName)];
        return value;
    }
})()