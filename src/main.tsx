import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/welcome'
import Course from './pages/course/course'

import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} /> 
        <Route path="/course/first" element={<Course />} /> 
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
