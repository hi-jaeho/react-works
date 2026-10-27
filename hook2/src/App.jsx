import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UseRefEx from './components/UseRefEx'
import InputFocus from './components/InputFocus'
import Counter from './components/Counter'
import CountReducer from './hooks/CountReducer'
import BankReducer from './hooks/BankReducer'
import UserParent from './use_context/UserParent'
import CounterReducer from './apps/CounterReducer'
function App() {

  return (
    <>
      <section className="app">
        {/* <UseRefEx /> */}
        {/* <InputFocus /> */}
        {/* <Counter /> */}
        {/* <CountReducer /> */}
        {/* <BankReducer /> */}
        {/* <UserParent /> */}
        <CounterReducer />
      </section>
    </>
  )
}

export default App
