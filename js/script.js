'use strict';

function isPal (num){
    const numStr = num.toString();
    let left = 0;
    let right = numStr.length - 1;
    while(left < right){
        if(numStr[left] !== numStr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
function getPal (num, steps = 0){
    if(isPal(num)){
        return {
            result: num, steps: steps
        }
    } else{
        const reversedNumber = parseInt(num.toString().split('').reverse().join(''), 10);
        const sum = num + reversedNumber;
        return getPal(sum, steps + 1);
    }   
}
console.log(getPal(87));