import { useState } from 'react'
import './App.css'
import DemoPage from './pages/DemoPage'
import LandingPage from './pages/LandingPage'

function App() {
  const [page, setPage] = useState('demo')

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="topnav">
        <div className="topnav-inner">
          <a href="#" className="brand" onClick={(e) => { e.preventDefault(); setPage('demo') }}>
            <span className="brand-mark">E</span>
            <span className="brand-name">reactjs-editor</span>
          </a>

          <div className="nav-tabs">
            <button
              className={`nav-tab ${page === 'demo' ? 'active' : ''}`}
              onClick={() => setPage('demo')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z"/></svg>
              Demo
            </button>
            <button
              className={`nav-tab ${page === 'landing' ? 'active' : ''}`}
              onClick={() => setPage('landing')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              About
            </button>
          </div>

          <a
            href="https://www.buymeacoffee.com/vivekneupaw"
            target="_blank"
            rel="noreferrer"
            className="nav-coffee-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            Buy me a Coffee
          </a>
        </div>
      </nav>

      {/* Pages */}
      {page === 'demo' ? <DemoPage /> : <LandingPage onGoDemo={() => setPage('demo')} />}
    </div>
  )
}

export default App
