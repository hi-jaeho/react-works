import './App.css'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {

  return (
    <>
      <section className="app">
        <h2>React Router</h2>
        <BrowserRouter>
          <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/signup'>SignUp</Link>
            <Link to='/signin'>SignIn</Link>
          </div>

          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
