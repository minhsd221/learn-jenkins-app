import logo from './app_icon_no_bg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          the8seven
        </a>
      </header>
      <p>
          Application version: {process.env.REACT_APP_VERSION}
      </p>
    </div>
  );
}

export default App;
