import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

import {BrowserRouter, Routes, Route, HashRouter as Router} from "react-router-dom"
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Home/>
  </Router>
)
