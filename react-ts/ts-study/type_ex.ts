// 유니언 타입 - 여러 타입 중 하나를 선택
type MemberRole = "user" | "admin"

// 객체 정의
type User = {
    id: number,
    name: string,
    age?: number,
    role: MemberRole
}

// interface User{
//     id: number,
//     name: string,
//     age?: number,
// }

// 객체 생성
const user1: User = {
    id: 1,
    name: "WooYoungWoo",
    age: 48,
    role: 'admin'
}

const user2: User = {
    id: 2,
    name: "Monster",
    age: 1000000,
    role: 'user'
}

console.log('==== USER 1 =====');
console.log(`이름: ${user1.name}`);
console.log(`나이: ${user1.age}`);
console.log(`권한: ${user1.role}`);

console.log('==== USER 2 =====');
console.log(`이름: ${user2.name}`);
console.log(`나이: ${user2.age}`);
console.log(`권한: ${user2.role}`);

