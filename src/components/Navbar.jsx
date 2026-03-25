import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "20px" }}>
      <h2>Proteja+</h2>

      <Link to="/">Home</Link>
      <Link to="/informacoes">Informações</Link>
      <Link to="/leis">Leis</Link>
      <Link to="/denuncia">Denúncia</Link>
      <Link to="/apoio">Apoio</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  )
}