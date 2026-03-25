import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Informacoes from "../pages/Informacoes"
import Leis from "../pages/Leis"
import Denuncia from "../pages/Denuncia"
import Apoio from "../pages/Apoio"
import Contato from "../pages/Contato"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacoes" element={<Informacoes />} />
        <Route path="/leis" element={<Leis />} />
        <Route path="/denuncia" element={<Denuncia />} />
        <Route path="/apoio" element={<Apoio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}