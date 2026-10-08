import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import FloatingActions from './components/common/FloatingActions'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Career from './pages/Career'
import Chairman from './pages/Chairman'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import MD from './pages/MD'
import Projects from './pages/Projects'

export default function App() {
  const { pathname } = useLocation()

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chairman" element={<Chairman />} />
          <Route path="/md" element={<MD />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
