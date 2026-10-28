// 이름 있는 함수
// function sub(x: number, y: number){
//     return x - y;
// }


// arrow function
const sub = (x: number, y: number) => {    
    return (x - y);
}

const result = sub(15, 10);
console.log(result);

// 반환 자료형 없는 함수: void
const greet = (name: string) => (console.log(`${name}~ Hi~ Hello~`));

greet("jaeho");