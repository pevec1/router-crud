//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import "emoji-picker-element";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Routes>
      <Route path="/router-crud/" element={<Home />} />
      <Route path="/router-crud/posts/new" element={<CreatePost />} />
    </Routes>
    
    </Router>
    </>
  );
}

export default App
