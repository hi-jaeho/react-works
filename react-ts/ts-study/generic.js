"use strict";
// generic array
const scores = [80, 90, 100];
console.log(scores);
console.log(scores[0] + scores[1]);
// generic function
function getFirst(arr) {
    return arr[0];
}
const num = getFirst([10, 20, 30]);
const str = getFirst(['apple', 'banana', 'strawberry']);
console.log(num);
console.log(str);
