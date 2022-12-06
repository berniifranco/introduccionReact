import logo from './logo.svg';
import ContenedorPublicidad from './components/ContenedorPubllicidad';
import './App.css';
import TiraPeliculas from './components/TiraPeliculas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <main>
          <ContenedorPublicidad>
            <h2>Wooow! Publicidad!</h2>
          </ContenedorPublicidad>
          <TiraPeliculas />
          <TiraPeliculas />
          <ContenedorPublicidad>
            <ul>
              <li>Public 1</li>
              <li>Public 2</li>
              <li>Public 3</li>
            </ul>
          </ContenedorPublicidad>
        </main>
      </header>
    </div>
  );
}

export default App;
