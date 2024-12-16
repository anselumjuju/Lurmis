import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/en' element={<App />} />
        <Route path='/es' element={<App />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
