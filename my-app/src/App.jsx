
import './App.css'
// import Clock from './Clock';
// import User from './User';
import SignUp from './users/SignUp';
import SignIn from './users/SignIn';


{/* JSX에서는 className 속성 사용 
    태그를 병렬로 사용할 수 없음(div) 태그로 감싼다
    데이터의 값(변수)을 표현식: {} 중괄호 사용
    컴포넌트는 함수 형식으로 만들고 첫글자 대문자이고
    태그 처럼 사용 <MyButton />
*/}
// 내부 컴포넌트 정의
function MyButton(){
  return(
    <button>목록보기</button>
  )
}

function App() {
  const season = "가을";

  return (
    <div className='app'>
      {/* <Clock /> */}
      {/* <SignUp /> */}
      <SignIn />
    </div>
  )
}

export default App
