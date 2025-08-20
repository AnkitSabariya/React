import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logos">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="title">React Learning Introduction 🚀</h1>
        <p className="intro">
          React is a front-end <strong>JavaScript library</strong>.<br/>
          Created internally at <strong>Facebook</strong> in <strong>2011</strong> by <strong>Jordan Walke</strong>.<br/>
          Public release: <strong>May 2013</strong>.<br/>
          Designed to simplify complex UI rendering and build <strong>SPA (Single Page Applications)</strong> with reusable components.<br/>
          Fast UI updates using <strong>Virtual DOM</strong>.<br/>
          Widely used by <strong>companies and developers worldwide</strong>.
        </p>
      </header>

      <main className="cards-grid">
        {/* Commands Card */}
        <div className="card glass glass-color1">
          <h2>Basic Commands</h2>
          <ul>
            <li><code>npm create vite@latest</code> → create new project</li>
            <li><code>npm install</code> → install dependencies</li>
            <li><code>npm run dev</code> → start dev server</li>
            <li><code>npm run build</code> → build production</li>
          </ul>
        </div>

        {/* Why & When React */}
        <div className="card glass glass-color2">
          <h2>Why & When to Use React?</h2>
          <ul>
            <li>Reusable Components → build UI in small blocks</li>
            <li>Fast UI updates → Virtual DOM efficiently renders changes</li>
            <li>Declarative → easier to read & maintain</li>
            <li>SPA → smooth user experience</li>
            <li>Large ecosystem → libraries & community support</li>
          </ul>
        </div>

       


        {/* Folder Structure */}
        <div className="card glass glass-color4">
          <h2>React Folder Structure</h2>
          <ul className="folder-list">
            <li>
              <span className="folder-icon">📂</span> <code>src/</code> → Main source folder
            </li>
            <li>
              <span className="folder-icon">📁</span> <code>components/</code> → Reusable UI components
            </li>
            <li>
              <span className="folder-icon">📁</span> <code>pages/</code> → Page-level components
            </li>
            <li>
              <span className="folder-icon">🖼️</span> <code>assets/</code> → Images, icons, CSS files
            </li>
            <li>
              <span className="file-icon">📝</span> <code>App.jsx</code> → Main app container
            </li>
            <li>
              <span className="file-icon">📝</span> <code>main.jsx</code> → React entry point
            </li>
            <li>
              <span className="file-icon">📄</span> <code>package.json</code> → Project metadata & dependencies
            </li>
          </ul>
        </div>
      </main>

    
    </div>
  );
}

export default App;
