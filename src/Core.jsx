import Head from "./shared/Header"
import Footer from "./shared/Footer"
import LateralBar from "./shared/LateralBar"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Index from "./pages/Index"
import Services from "./pages/Services"
import Galery from "./pages/Galery"
import Clients from "./pages/Clients"


export default function Core() {
  return (
    <div className="lg:flex flex-wrap">
      <BrowserRouter>
      <Head />
      <LateralBar />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/servicios" element={<Services />}></Route>
        <Route path="/galeria" element={<Galery />}></Route>
        <Route path="/testimnios-de-los-clientes" element={<Clients />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
