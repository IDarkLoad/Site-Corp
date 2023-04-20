import Logo from '../src/assets/logo.png';
import Brand from '../src/assets/brand.png';
import Team from '../src/assets/team.jpg';

function App() {
  return (
    <div>
      <header>
        <div className="navegation">
          <img src={Logo} />
          <nav>
            <a href="/">Serviços</a>
            <a href="/">Conteúdos</a>
            <a href="/">Sobre</a>
            <button>Quero saber mais!</button>
          </nav>
        </div>
        <div className='body'>
          <div>
            <h1>O Recurso mais completo em gestão de avanço</h1>
            <h5>Da administração ao Open Innovation</h5>
            <button>Quero conhecer</button>
          </div>
          <div>
            <img src={Brand} />
          </div>
        </div>
        <div className='body'>
          <div>
            <img src={Team} />
          </div>
          <div className='text'>
            <h4>Completo para sua empresa</h4>
            <h4>Totalmente white-label e customizável</h4>
            <h4>Completa, da administração ao Open Innovation</h4>
          </div>
        </div>
      </header>
      <div className='head-content'>
        <h1>Como mesclar tecnologia e trabalho?</h1>
        <h4>"A tecnologia aproxima pessoas e empresas,
           mas é preciso usá-la de forma consciente e eficaz para 
           impulsionar o crescimento das empresas e melhorar as relações comerciais.
            Bem utilizada, a tecnologia se torna uma parceria frutífera."</h4>
      </div>
    </div>
  );
}

export default App;
