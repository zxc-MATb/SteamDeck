import { useState } from 'react'
import './App.css'
import {Background} from "./component/Background.jsx";
import {Console} from "./component/Console.jsx";

function App() {

  return (
      <div>
          <Console />
          <Background />

      </div>
  )
}

export default App
