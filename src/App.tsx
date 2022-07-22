import React, { memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import Detail from './pages/detail'
import Source from './pages/source'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto p-2 lg:p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/source" element={<Source />} />
          <Route path="/v/:id" element={<Detail />} />
        </Routes>
      </main>
      <footer className="text-center">
        资源来自互联网
      </footer>
    </BrowserRouter>
  )
}

export default memo(App)
