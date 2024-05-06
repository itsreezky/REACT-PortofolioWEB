// Desc: Main App Component
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// Import Pages
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Portofolio from './Pages/Portofolio'
import Home from './Pages/Home'

//Import Components
import Loader from './Components/Public/Loader'
import Header from './Components/Public/Header'
import Footer from './Components/Public/Footer'


function App() {
  return (
    <div>
    <Loader />
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/REACT-PortofolioWEB" element={<Home />} />
        <Route path="/REACT-PortofolioWEB/about" element={<About />} />
        <Route path="/REACT-PortofolioWEB/blog" element={<Blog />} />
        <Route path="/REACT-PortofolioWEB/contact" element={<Contact />} />
        <Route path="/REACT-PortofolioWEB/portofolio" element={<Portofolio />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App