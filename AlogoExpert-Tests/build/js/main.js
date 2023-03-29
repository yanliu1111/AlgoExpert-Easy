"use strict";
//remove export
function sortedSquaredArray(array) {
    let start = 0;
    let end = array.length - 1;
    let squareNums = [];
    let numbersToBeSquaredCount = array.length;
    while (numbersToBeSquaredCount > 0) {
        if (Math.abs(array[start]) > Math.abs(array[end])) {
            const square = Math.pow(array[start], 2);
            squareNums.unshift(square);
            start++;
            console.log("!!", squareNums);
        }
        else {
            const square = Math.pow(array[end], 2);
            squareNums.unshift(square);
            end--;
            console.log("??", squareNums);
        }
        numbersToBeSquaredCount--;
    }
    return squareNums;
}
console.log(sortedSquaredArray([-1, 0, 2]));
