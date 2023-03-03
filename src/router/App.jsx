import Home from "../pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../containers/Layout"
import QuienesSomos from "../pages/QuienesSomos"
import Eventos from "../pages/Eventos"
import Blog from "../pages/Blog"
import Contacto from "../pages/Contacto"
import LoginAdmin from "../pages/LoginAdmin"
import { EventosProvider } from "../context/EventosContext"

// import redux toolkit
// import { store } from "../app/store"
// import { Provider } from 'react-redux'

function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>


  )
}

export default App
