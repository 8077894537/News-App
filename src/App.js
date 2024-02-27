import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './News'
import Menu from './Menu'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<News category="All" />} />
          <Route path="/cricket" element={<News category="cricket" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/technology" element={<News category="technology" />} />
          <Route path="/international" element={<News category="international" />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App