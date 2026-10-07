import { useEffect, useState } from "react";

const Clock = () => {
    // 시간 상태 관리
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // 1초씩 증가
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000); // 1sec = 1000ms 
        console.log("렌더링...");       
    }, [])

    // [] = 의존성 관리 -> 1번만 실행!!!
    // 
    
    return (
        <div>
            <h2>디지털 시계 만들기</h2>
            <h3>현재 시간: {time}</h3>
        </div>

    );
}

// 내보내기
export default Clock;