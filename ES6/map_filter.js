// map() - 배열의 각 요소에 대해 새로운 배열로 반환
const arr = [1, 2, 3];
console.log(arr);
// newArr = [2, 4, 6]

const newArr = arr.map((x) => { return x * 2});

console.log(newArr[0]);
console.log(newArr);


// 객체가 요소인 배열
const users = [
    {name: "A", age: 25},
    {name: "B", age: 22},
    {name: "C", age: 23},
    {name: "D",age:34}
]

// name
console.log(users[0].name);

// age
console.log(users[1].age);

// 배열에서 이름만
const names = users.map((user) => user.name)
console.log(names);

// filter() - 배열의 각 요소 중 조건이 참인 요소만 모아 새로운 배열
// 새로운 배열을 반환하는 함수
const nums = [1, 2, 3, 4, 5];


// 짝수만 출력
const evens = nums.filter((num) => num % 2 == 0);
console.log(evens);

// users에서 나이가 30이상인 회원의 이름 출력
const over30 = users.filter((users) => { return users.age >= 30})
console.log(over30[0].name);

const n1 = users.filter((users) => { return users.age >= 30})
    .map((user) => user.name)

console.log(n1);

console.log("==================================")
// forEach()
const userNames = []
users.forEach(user => {
    userNames.push(user);
})

console.log(userNames);