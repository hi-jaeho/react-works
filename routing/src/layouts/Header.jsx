import { Link } from 'react-router-dom';

// 상단 메뉴가  있는 컴포넌트
const Header = () => {
  return (
    <div>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/board">Board</Link>
      </div>
    </div>
  );
};

export default Header;
