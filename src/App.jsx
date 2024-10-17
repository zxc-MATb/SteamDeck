import { useState } from 'react'
import './App.css'
import './index.css'
import {Background} from "./component/Background.jsx";
import {Console} from "./component/Console.jsx";
import {ConsoleProvider} from "./component/ConsoleContext.jsx";

function App() {

  return (
      <ConsoleProvider>
          <div>
              <Background />
          </div>
      </ConsoleProvider>
  )
}

export default App
