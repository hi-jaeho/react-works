import { useState, useRef } from "react";

const UseRefEx = () => {
    const [count, setCount] = useState(0);

    // 참조 객체를 생성, 0으로 초기화
    const countRef = useRef(0);

    console.log("렌더링...");
    console.log(countRef); // {current: 0}
    
    // 1증가 시키는 함수(state-상태 증가)
    const increaseCount = () => {
        setCount(count + 1);
    }

    // 참조 증가(기억 기능을 함)
    const increaeCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref:", countRef.current);  
    }

    return(
        <div>
            <h2>useRef() 실습</h2>
            <p>State: {count} </p>
            <p>Ref: {countRef.current}</p>

            <button onClick={increaseCount}>State 증가</button>
            <button onClick={increaeCountRef}>Ref 증가</button>
        </div>
    )
}

export default UseRefEx;