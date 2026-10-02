import './App.css'
import heroImg from './assets/hero.png'
import Example01 from './components/Example01';
import Example02 from './components/Example02';

{/* JSX에서는 className 속성 사용 
    태그를 병렬로 사용할 수 없음
    데이터의 값(변수)의 표현식: {} 중괄호 사용
    컴포넌트는 함수 형식으로 만들고, 첫글자는 대문자,
    태그 처럼 사용함! ex: <MyButton />

*/}

function MyButton() {
  return(
    <button> 목록보기 </button>
  );
}
function App() {
  const season = "가을";

  return (
    <div>
      <h2>React 시작하기</h2>

      <h3 className="welcome">홈페이지 방문을 환영합니다.</h3>
      {/* <section>
        <p>현재 계절은 {season} 입니다.</p>
        <img 
          src={heroImg}
          alt="main Image"
          width={200}
        />
      </section> */}
      <MyButton />
      <Example01 />
      <Example02 />
    </div>
  );
}

// 반드시 export를 해줘야 함!
export default App
