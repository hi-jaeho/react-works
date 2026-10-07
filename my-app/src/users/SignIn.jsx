import { useState } from "react";
import users from '../data/users.js'

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: "", // id
        password: "" // password
    })

    // 로그인 결과 상태 관리
    // 객체 초기화 - null
    const [result, setResult] = useState(null);

    // 입력값 변경 함수
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // 폼 제출
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제출 데이터: ", formData);

        // 로그인 결과 처리
        const {username, password} = formData;

        //데이터 일치 여부 - find 함수
        const matched = users.find((user) =>
            user.username === username && user.password === password);
        setResult(matched ? "success" : "fail");
    }

    return (
        <div className="sign-in">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <input 
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="아이디 입력" />
                    </li>
                    <li>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="비밀번호 입력" />
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                    </li>
                </ul>
            </form>
            {/* 결과 메시지 출력 */}
            {result === "success" && (<p style={{color: "blue"}}>환영합니다.</p>)}
            {result === "fail" && (<p style={{color: "red"}}>아이디 또는 비밀번호가 일치하지 않습니다.</p>)}
        </div>
    )
}

export default SignIn;