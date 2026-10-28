// 객체 정의
interface Member{
    name: string, // ? 없으면 필수 속성
    age?: number // 변수 뒤에 ? 붙이면 선택 속성이 됨
}

const member1: Member = {
    name: "human",
    age: 21
}
const member2: Member = {
    name: "zombie",
    // age: 2000
}

console.log("==== Member1 ====");
console.log(member1.name);
console.log(member1.age);

console.log("==== Member2 ====");
console.log(member2.name);
console.log(member2.age);
