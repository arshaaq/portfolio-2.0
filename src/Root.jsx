import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
<App/>
);