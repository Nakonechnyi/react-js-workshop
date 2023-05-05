import { useState } from 'react'
import './App.css'
import {PostDashboard} from './components/PostDashboard/PostDashboard.jsx'
import {PostForm} from './components/PostForm/PostForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return <PostDashboard />

}

export default App
