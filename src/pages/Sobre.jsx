import Navbar from "../components/Navbar"

export default function Sobre() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Sobre o Projeto</h1>

        <div className="about-grid">
          <div>
            <h2>Objetivo</h2>

            <p>
              Este projeto tem como objetivo informar a população sobre o
              Conselho Tutelar e os direitos garantidos pelo ECA.
            </p>

            <ul>
              <li>Divulgar direitos das crianças</li>
              <li>Conscientizar a sociedade</li>
              <li>Facilitar o acesso à informação</li>
            </ul>
          </div>

          <div className="image-box">📷</div>
        </div>
      </div>
    </>
  )
}