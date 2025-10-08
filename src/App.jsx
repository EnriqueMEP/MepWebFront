import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ThemeProvider from './design-system/foundations/ThemeContext.jsx'
import Home from './pages/Home.jsx'
import Servicios from './pages/Servicios.jsx'
import Proyectos from './pages/Proyectos.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App