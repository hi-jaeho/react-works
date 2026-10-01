// 스프레드 연산자 - ...사용
// 배열에서 사용
let arr1 = [1,2,3];
let arr2 = [4,5];

// 배열을 펼쳐서 새로운 배열을 만듦
let arr3 = [...arr1, ...arr2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// 객체에서 사용
let obj1 = { product: "무선마우스", price: 28000};
let obj2 = {spec: "M200 무선마우스 그레이"};

let obj3 = { ...obj1, ...obj2};

console.log(obj3);
