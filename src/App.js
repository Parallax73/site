import React from "react";
import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaPython,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaJira,
  FaBlender,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiAngular,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNotion,
  SiObsidian,
} from "react-icons/si";

function App() {
  return (
    <section>
      <h1 id="thelinuxcast">Gabriel Leite</h1>
      <pre>
        <code>Software Engineer | Tech Afficionado</code>
      </pre>
      <p>
        São Paulo-SP | gabrielsantos0210@gmail.com
      </p>
      <p>
        Desenvolvedor de software com experiência em Front-End e Back-End, apaixonado por tecnologia, 3D e inovação.
      </p>

      <div className="menu">
        <ul className="menu">
          <li>
            <a href="https://github.com/Parallax73" target="_blank" rel="noreferrer">
              <FaGithub style={{ height: 17, width: 26, position: "relative", top: "2px" }} />
            </a>{" "}
            |
          </li>
          <li>
            <a href="https://linkedin.com/in/gabriel-santos-leite" target="_blank" rel="noreferrer">
              <FaLinkedin style={{ height: 25, width: 30, position: "relative", top: "6px" }} />
            </a>
          </li>
        </ul>
      </div>

      <h2>Habilidades</h2>
      <div className="skills">
        <p>
          <SiSpringboot /> <SiAngular /> <SiTypescript /> <FaJava /> <FaPython /> <SiHtml5 /> <SiCss3 /> <SiSass /> <FaGitAlt /> <FaDocker /> <FaDatabase /> <SiMysql /> <SiPostgresql /> <SiMongodb /> <FaFigma /> <FaJira /> <SiNotion /> <SiObsidian /> <FaBlender />
        </p>
      </div>

      <h2>Educação</h2>
      <ul>
        <li>
          Faculdades Metropolitanas Unidas - Bacharelado em Ciência da Computação (2022 - 2025)
        </li>
        <li>
          ETEC Carapicuíba - Habilitação Técnica Profissional em Jogos Digitais (2019 - 2021)
        </li>
        <li>
          Cultura Inglesa - Curso de Língua Inglesa (2019 - 2021)
        </li>
      </ul>

      <h2>Projetos</h2>
      <ul>
        <li>
          <strong>Mozukai</strong>: Loja virtual com pipeline de fotogrametria 3D<br />
          <em>Tecnologias:</em> React, FastAPI, ThreeJs, PostgreSQL, AliceVision
        </li>
        <li>
          <strong>Realtour</strong>: Marketplace e CRM para corretores<br />
          <em>Tecnologias:</em> Spring Boot, Angular, PrimeNG, MongoDB
        </li>
        <li>
          <strong>Soundle</strong>: Jogo de adivinhação musical<br />
          <em>Tecnologias:</em> Spring Boot, Angular, Angular Material
        </li>
      </ul>


      <h2>Extra-curriculares</h2>
      <ul>
        <li>
          <strong>Hackathon 2025 FMU</strong>: Extração de dados de exames veterinários<br />
          <em>Tecnologias:</em> Python, Pandas, Fitz
        </li>
        <li>
          <strong>Alura</strong>:Spring Framework<br />
        </li>
        <li>
          <strong>Oracle</strong>: Oracle Cloud Infrastructure Security Professional<br />
        </li>
        <li>
          <strong>AWS</strong>: Cloud 101<br />
        </li>
      </ul>

    </section>


  );
}

export default App;
