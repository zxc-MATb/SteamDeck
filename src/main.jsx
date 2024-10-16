import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnimatedButton from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedButton />
  </StrictMode>,
)
