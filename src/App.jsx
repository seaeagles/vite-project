import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DragonCard } from './components/dragonCard'
import { MyButton } from './components/button'


function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MyButton />
      <DragonCard clicks={0} type={'fire'} icon={'🐉'}/>
      <DragonCard clicks={0} type={'water'} icon={'🐉'}/>
      <DragonCard clicks={0} type={'air'} icon={'🐉'}/>
      <DragonCard clicks={0} type={'earth'} icon={'🐉'}/>
    </div>
  )
}

export default App
