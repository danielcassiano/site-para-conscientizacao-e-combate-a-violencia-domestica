import Navbar from "../components/Navbar"

export default function Denuncia() {
  return (
    <>
      <Navbar />

      <h1>Como Denunciar</h1>

      <p>Ligue 180 ou 190 em casos de emergência.</p>

      <form>
        <input placeholder="Descreva o caso (anônimo)" />
        <button>Enviar</button>
      </form>
    </>
  )
}