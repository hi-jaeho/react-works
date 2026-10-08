import mainPhoto from '../assets/hero.png'

// 첫 페이지 보여주는 컴포넌트
const Main = () => {
    return (
        <div>
            <h2>Welcome. Main Pages.</h2>
            <img src={mainPhoto} alt="mainImg" />
        </div>
    )
}

export default Main;