import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import "emoji-picker-element";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useParams } from "react-router-dom";
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Post from './components/Post'
function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path="/router-crud/" element={<Home />} />
      <Route path="/router-crud/posts/new" element={<CreatePost />} />
      <Route path="/router-crud/posts/:id" element={<Post />} />
    </Routes>
    
    </Router>
    </>
  );
}

export default App
