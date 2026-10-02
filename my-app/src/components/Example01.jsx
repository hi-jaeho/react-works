// 외부 컴포넌트 생성
// 조건부 랜더링

const Example01 = () => {
    const isLoggedIn = false;

    let result = "";
    if(isLoggedIn){
        result = "로그인 상태입니다.";
    }else{
        result = "로그아웃 상태입니다."
    }
    return (
        <div>
            <button onClick={isLoggedIn => !isLoggedIn}>버튼</button>
            <h2>조건부 랜더링</h2>
            <p>{result}</p> 
            {isLoggedIn ? <p>isLogin</p> :
            <p>isNotLogin</p>}
        </div>
    );
}

export default Example01;