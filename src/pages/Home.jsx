import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Proteção à Infância</h1>

        <div className="home-grid">
          <div className="image-box">📷</div>

          <div>
            <h2>Conselho Tutelar</h2>
            <p>
              O Conselho Tutelar é responsável por garantir os direitos das
              crianças e adolescentes, atuando em casos de negligência,
              abuso e violação de direitos.
            </p>

            <ul>
              <li>Proteção infantil</li>
              <li>Atendimento à comunidade</li>
              <li>Encaminhamento de casos</li>
            </ul>
          </div>

          <div className="side-box">
            <h3>Funções</h3>
            <ul>
              <li>Receber denúncias</li>
              <li>Acompanhar famílias</li>
              <li>Aplicar medidas</li>
            </ul>
          </div>
        </div>

        <p className="text">
          O Conselho Tutelar atua diretamente na defesa dos direitos previstos
          no Estatuto da Criança e do Adolescente (ECA), garantindo proteção
          integral à infância.
        </p>
      </div>
    </>
  )
}