import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>Counter</h2>
            <p>현재 값: {count}</p>
            <button onClick={() => setCount(count+1)}>❤ 좋아요</button>
            <button onClick={() => setCount(count-1)}>감소</button>
            <button onClick={() => setCount(0)}>초기화</button>
        </div>
    )
}

export default Counter;