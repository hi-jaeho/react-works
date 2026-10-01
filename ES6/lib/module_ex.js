// 두 수의 합 계산 함수
let add = (x, y) => x + y;

// 절댓값
let myAbs = (x) => {
    if(x < 0)
        return -x;
    else
        return x;
}

// 외부로 내보내기(예전 방식)
// module.exports = {add, myAbs}

// 외부로 내보내기
export {add, myAbs};