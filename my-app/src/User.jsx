import { useEffect, useState } from "react";

const User = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(1);
    
    // 이름 변경 함수(=핸들러)
    // onChange일 때는 항상 e가 들어가야 함
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    
    // 나이 변경 함수
    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    // [] - 처음 한 번 만 실행
    // [name] - name이 변경될 때마다 실행
    useEffect(() => {
        console.log("랜더링");
        console.log(`이름: ${name}, 나이: ${age}`);
    }, [age]);

    return (
        <div>
            <h2>사용자 정보</h2>
            <input 
                type="text"
                value={name}
                onChange={onChangeName}
                placeholder="이름 입력"
            />
            <input 
                type="number"
                value={age}
                onChange={onChangeAge}
                placeholder="나이 입력"
            />
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </div>
    )   
}

export default User;