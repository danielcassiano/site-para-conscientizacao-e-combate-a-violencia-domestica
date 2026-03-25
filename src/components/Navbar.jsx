import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <h2>ProtejaInfância</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  )
}