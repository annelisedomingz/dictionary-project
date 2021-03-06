import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/annelisedomingz/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Coded by Annelise Dominguez | view my github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
