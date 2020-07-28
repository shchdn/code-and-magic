'use strict';
(function(){
window.lib = {
    getRandomUniqueNumbersSequence: function(minNumber, maxNumber, quantity){
        let usedNumbers = [];
        let getNumber = function(minNumber, maxNumber){
            return Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));
        }
        let option = (maxNumber - minNumber + 1);
        if (quantity){
            option = quantity;
            if ((maxNumber - minNumber) < (quantity - 1)){
                console.log('Error: input data is impossible to generate');
                return NaN
            }
        }
        while(usedNumbers.length < option){
            let nextNumber = getNumber(minNumber, maxNumber);
            if (usedNumbers.length === 0){
                usedNumbers.push(nextNumber);
            }
            else {
                while(true){
                    let check = true;
                    let nextNumber = getNumber(minNumber, maxNumber);
                    for(let i = 0; i < usedNumbers.length; i ++){
                        if (nextNumber === usedNumbers[i]){
                            check = false;
                        }
                    }
                    if (check){
                        usedNumbers.push(nextNumber);
                        break;
                    }
                }
            }
        }
        return usedNumbers;
    },
    getRandomArrayValue: function(array){
        return array[Math.floor(Math.random() * array.length)];
    }
}
})()