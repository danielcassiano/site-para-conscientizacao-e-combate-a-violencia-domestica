import Navbar from "../components/Navbar"

export default function Contato() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Contatos</h1>

        <div className="image-banner">📷</div>

        <div className="contact-box">
          <h2>Contatos úteis</h2>
          <p>190 - Polícia</p>
          <p>Disque 100 - Direitos Humanos</p>
        </div>

        <div className="contact-box">
          <h2>Conselho Tutelar</h2>
          <p>Procure o Conselho Tutelar da sua cidade</p>
          <p>Atendimento presencial</p>
        </div>
      </div>
    </>
  )
}