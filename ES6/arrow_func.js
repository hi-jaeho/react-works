// 제곱수 계산
let square = function(x){
    return x * x;
}

let square2 = (x) => {
    return x * x;
}

// 코드가 한 줄일 때 {}블럭과 return 생략, 매개변수가 1개일 때만 해당, 2개 이상은 (,)로!
let square3 = x => x * x;

console.log(square(3));
console.log(square2(3));

// 매개변수가 없는 함수 - 소괄호 생략 불가
let message = () => console.log("Good luck!");

message(); // 함수 호출