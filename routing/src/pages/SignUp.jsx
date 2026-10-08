import { useState } from "react";

const SignUp = () => {
    // 폼 데이터 상태 관리
    // name, age, job, name 전체 관리
    const [formData, setFormData] = useState({
        name: "",
        job: "wizard", // select
        gender: "male", // radioButton
        memo: "" // 자기소개
    }) 

    // 모든 필드 입력값 변경 함수
    const handlerInputChange = (e) => {
        const {name, value} = e.target; // 서버와 통신하기 때문에 e.target.value, e.target.name이 필요

        setFormData({...formData, [name]: value}); // 기존 배열에 [name]: value 추가
    }
    
    // 폼 제출 처리 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 동작을 막아줌
        console.log("제출 데이터: ", formData)
    }
    return (
        
        // 서버는 name 속성과 통신
        <div className="sign-up">
            <h2>회원 가입</h2>
            <form type="submit">
                <ul>
                    <li>
                        <label >이름</label>
                        <input type="text"
                        name="name"
                        value={formData.name} 
                        onChange={handlerInputChange}/>
                    </li>
                    <li>
                        <label >직업</label>
                        <select 
                        name="job"
                        value={formData.job} 
                        onChange={handlerInputChange}>
                            <option value="wizard">마법사</option>
                            <option value="warrior">전사</option>
                            <option value="archer">궁수</option>
                            <option value="killer">암살자</option>
                            <option value="sniper">저격수</option>
                        </select>
                    </li>
                    <li>
                        <label>성별</label>
                        <label>
                            <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handlerInputChange}
                            />남자</label>
                            <label>
                            <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handlerInputChange}
                            />여자
                        </label>
                    </li>
                    {/* 라디오 태그에서는 각 선택지를 lable로 감싸면 글씨를 눌러도 그 선택지가 선택됨! */}
                    <li>
                        <label>자기소개</label>
                        <textarea
                            name="memo"
                            rows={5}
                            cols={10}
                            value={formData.memo}
                            onChange={handlerInputChange}>
                        </textarea>
                    </li>
                    <li>
                        {/* 서버에 전송되기 때문에 "submit" 필수 */}
                        <button type="submit"
                        onClick={handleSubmit}>가입</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default SignUp;