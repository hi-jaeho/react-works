
// generic array
const scores: Array<number> = [80, 90, 100];
console.log(scores);
console.log(scores[0] + scores[1]);

// generic function
function getFirst<T>(arr: T[]){
    return arr[0];
}

const num = getFirst<number>([10, 20, 30]);
const str = getFirst<string>(['apple', 'banana', 'strawberry']);

console.log(num);
console.log(str);

