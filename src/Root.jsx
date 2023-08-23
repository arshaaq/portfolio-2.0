import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/portfolio-2.0" element={<Home/>} />
      <Route path="/portfolio-2.0/about" element={<About/>} />
      <Route path="/portfolio-2.0/projects" element={<Projects/>} />
      <Route path="/portfolio-2.0/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
)
