import { useState } from 'react'
import { Editor } from 'reactjs-editor'
import BuyMeACoffeeBadge from '../components/BuyMeACoffeeBadge'

const quickPrompt = `Install reactjs-editor in my project and add the Editor component:

1. Run: npm i reactjs-editor --legacy-peer-deps
2. Ask me which file/component I want to add the Editor to
3. Import { Editor } from 'reactjs-editor' in that file
4. Add an <Editor /> component with htmlContent set to the existing JSX/HTML content (or a sample paragraph if none exists), and pass a colors prop with these 10 color objects:
   { name: 'hl-red', hex: '#fca5a5' }
   { name: 'hl-yellow', hex: '#fef08a' }
   { name: 'hl-green', hex: '#86efac' }
   { name: 'hl-blue', hex: '#93c5fd' }
   { name: 'hl-purple', hex: '#d8b4fe' }
   { name: 'hl-white', hex: '#ffffff' }
   { name: 'hl-orange', hex: '#fdba74' }
   { name: 'hl-cyan', hex: '#67e8f9' }
   { name: 'hl-rose', hex: '#fda4af' }
   { name: 'hl-indigo', hex: '#a5b4fc' }
5. Add these CSS classes to the project's stylesheet so highlighted text is readable on each background:
   .hl-red { background: rgba(252,165,165,0.55); color: #450a0a; border-radius: 3px; padding: 1px 2px; }
   .hl-yellow { background: rgba(254,240,138,0.55); color: #0c0a0a; border-radius: 3px; padding: 1px 2px; }
   .hl-green { background: rgba(134,239,172,0.5); color: #052e16; border-radius: 3px; padding: 1px 2px; }
   .hl-blue { background: rgba(147,197,253,0.5); color: #0f172a; border-radius: 3px; padding: 1px 2px; }
   .hl-purple { background: rgba(216,180,254,0.5); color: #3b0764; border-radius: 3px; padding: 1px 2px; }
   .hl-white { background: rgba(255,255,255,0.88); color: #09090b; border-radius: 3px; padding: 1px 2px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08); }
   .hl-orange { background: rgba(253,186,116,0.55); color: #431407; border-radius: 3px; padding: 1px 2px; }
   .hl-cyan { background: rgba(103,232,249,0.45); color: #083344; border-radius: 3px; padding: 1px 2px; }
   .hl-rose { background: rgba(253,164,175,0.55); color: #4c0519; border-radius: 3px; padding: 1px 2px; }
   .hl-indigo { background: rgba(165,180,252,0.5); color: #1e1b4b; border-radius: 3px; padding: 1px 2px; }`

const blogHTML = `<article>
  <div style="max-width:100%;">

    <div style="margin-bottom:48px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
        <img src="https://raw.githubusercontent.com/vivekneupane11/qanuny/main/REACT.png" alt="reactjs-editor" style="width:48px;height:48px;border-radius:12px;" />
        <div>
          <div style="font-size:13px;color:#7c3aed;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Tutorial</div>
          <div style="font-size:13px;color:#71717a;">April 23, 2026 &middot; 8 min read</div>
        </div>
      </div>
      <h1 style="font-size:2.8rem;font-weight:800;line-height:1.1;letter-spacing:-1.5px;margin:0 0 20px;color:inherit;">Building Interactive Documents with reactjs-editor</h1>
      <p style="font-size:1.2rem;line-height:1.8;color:inherit;opacity:0.7;">A comprehensive guide to adding text highlighting, bold formatting, and sticky-note comments to any React application. Select any text on this page to try it live.</p>
    </div>

    <figure style="margin:0 0 48px;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.06);">
      <img src="https://raw.githubusercontent.com/vivekneupane11/demo/main/Screenshot%202024-02-10%20at%2000.35.34.png" alt="reactjs-editor screenshot" style="width:100%;display:block;" />
      <figcaption style="padding:12px 16px;font-size:13px;color:inherit;opacity:0.5;text-align:center;">The reactjs-editor floating toolbar in action</figcaption>
    </figure>

    <h2 style="font-size:1.6rem;font-weight:700;letter-spacing:-0.5px;margin:0 0 16px;color:inherit;">What is reactjs-editor?</h2>
        <div style="background:rgba(124,58,237,0.08);border:1px solid rgba(124,58,237,0.15);border-radius:12px;padding:24px 28px;margin:0 0 40px;">
      <div style="font-size:14px;font-weight:700;color:#a78bfa;margin-bottom:8px;">TRY IT NOW</div>
      <p style="font-size:1rem;line-height:1.7;margin:0;color:inherit;">Select any text on this page with your mouse. A floating toolbar will appear letting you highlight, bold, or add comments. Go ahead — try selecting this paragraph!</p>
    </div>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 24px;color:inherit;">
      <strong>reactjs-editor</strong> is a lightweight React library that transforms any HTML content into an interactive editing surface. Users can select text and instantly highlight it with custom colors, toggle bold formatting, or attach sticky-note style comments — all without any complex configuration.
    </p>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 32px;color:inherit;">
      Under the hood it uses <strong>XPath-based range tracking</strong> to precisely locate selections within deeply nested DOM trees, and <strong>Zustand</strong> for persistent state management so modifications survive re-renders.
    </p>



    <h2 style="font-size:1.6rem;font-weight:700;letter-spacing:-0.5px;margin:0 0 16px;color:inherit;">Getting Started</h2>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 16px;color:inherit;">
      Installation is straightforward via npm:
    </p>
    <pre style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px 24px;font-family:monospace;font-size:14px;line-height:1.7;overflow-x:auto;margin:0 0 16px;color:#e4e4ed;"><code>npm install reactjs-editor</code></pre>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 16px;color:inherit;">
      Then import and use the <code style="background:rgba(124,58,237,0.15);padding:2px 8px;border-radius:6px;font-size:0.9em;color:#c4b5fd;">Editor</code> component with any HTML string:
    </p>
    <pre style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px 24px;font-family:monospace;font-size:14px;line-height:1.7;overflow-x:auto;margin:0 0 32px;color:#e4e4ed;"><code>import { Editor } from 'reactjs-editor';<br />
function App() {<br />
return (<br />
&lt;Editor<br />
htmlContent={\`&lt;div&gt;Your content here&lt;/div&gt;\`}<br />
colors={["yellow", "green", "blue"]} /&gt;<br />
);<br />
}</code></pre>

    <h2 style="font-size:1.6rem;font-weight:700;letter-spacing:-0.5px;margin:0 0 16px;color:inherit;">Core Features</h2>

    <h3 style="font-size:1.2rem;font-weight:600;margin:0 0 10px;color:inherit;">1. Text Highlighting</h3>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 24px;color:inherit;">
      Select any text and choose from custom color options in the floating toolbar. The library applies a CSS class to the selected range, so you have full control over how highlights look. You can pass an array of color class names via the <code style="background:rgba(124,58,237,0.15);padding:2px 8px;border-radius:6px;font-size:0.9em;color:#c4b5fd;">colors</code> prop and define matching CSS styles.
    </p>

    <h3 style="font-size:1.2rem;font-weight:600;margin:0 0 10px;color:inherit;">2. Bold Formatting</h3>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 24px;color:inherit;">
      One-click bold toggling for any text selection. Perfect for emphasizing key phrases in documents, articles, or collaborative notes. The formatting wraps the selected range in a standard <code style="background:rgba(124,58,237,0.15);padding:2px 8px;border-radius:6px;font-size:0.9em;color:#c4b5fd;">&lt;strong&gt;</code> tag.
    </p>

    <h3 style="font-size:1.2rem;font-weight:600;margin:0 0 10px;color:inherit;">3. Sticky Note Comments</h3>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 32px;color:inherit;">
      Attach comments to any text selection. Comments appear as sticky notes anchored to the highlighted region. This is ideal for document review, peer editing, academic annotation, and collaborative workflows where inline feedback is essential.
    </p>

    <h2 style="font-size:1.6rem;font-weight:700;letter-spacing:-0.5px;margin:0 0 16px;color:inherit;">State Management with Zustand</h2>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 16px;color:inherit;">
      The library exposes a <code style="background:rgba(124,58,237,0.15);padding:2px 8px;border-radius:6px;font-size:0.9em;color:#c4b5fd;">useDomValue</code> hook that gives you access to the current DOM state:
    </p>
    <pre style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px 24px;font-family:monospace;font-size:14px;line-height:1.7;overflow-x:auto;margin:0 0 16px;color:#e4e4ed;"><code>import { useDomValue } from 'reactjs-editor';<br />
<br />
const { dom, setDom } = useDomValue(); // Save the current state<br />
<br />
const savedState = { key: dom?.key, props: dom?.props, ref: dom?.ref, type: dom?.type, };<br />
// Restore it later<br />
useEffect(() =&gt; { setDom(savedState); }, []);</code></pre>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 40px;color:inherit;">
      This means you can serialize the editor state, store it in a database, and restore it later — enabling full persistence of user annotations across sessions.
    </p>

    <h2 style="font-size:1.6rem;font-weight:700;letter-spacing:-0.5px;margin:0 0 16px;color:inherit;">Use Cases</h2>
    <ul style="font-size:1.05rem;line-height:2.2;padding-left:24px;margin:0 0 40px;color:inherit;">
      <li><strong>Document Review</strong> — Annotate contracts, proposals, or reports with highlights and comments</li>
      <li><strong>Education</strong> — Students can highlight textbook passages and add study notes</li>
      <li><strong>Content Editing</strong> — Writers and editors can mark up drafts collaboratively</li>
      <li><strong>Research</strong> — Highlight and comment on papers, articles, and data sources</li>
      <li><strong>Legal</strong> — Mark important clauses and attach notes for review</li>
      <li><strong>Knowledge Management</strong> — Build internal wikis with user annotations</li>
    </ul>

    <blockquote style="border-left:4px solid #7c3aed;padding:20px 24px;margin:0 0 40px;border-radius:0 12px 12px 0;background:rgba(124,58,237,0.05);font-style:italic;font-size:1.1rem;line-height:1.8;color:inherit;">
      "reactjs-editor turns static HTML into a living, annotatable document. It's the missing piece for any app that needs inline text interaction."
    </blockquote>

    <h2 style="font-size:1.6rem;font-weight:700;letter-spacing:-0.5px;margin:0 0 16px;color:inherit;">Custom Styling</h2>
    <p style="font-size:1.05rem;line-height:1.9;margin:0 0 16px;color:inherit;">
      You can customize the highlight colors by passing CSS class names and defining styles. The floating toolbar UI can also be styled by inspecting and overriding the library's default classes from your own stylesheet.
    </p>
    <pre style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px 24px;font-family:monospace;font-size:14px;line-height:1.7;overflow-x:auto;margin:0 0 40px;color:#e4e4ed;"><code>.my-yellow  { background: rgba(254,240,138,0.4); }
.my-green   { background: rgba(187,247,208,0.4); }
.my-blue    { background: rgba(191,219,254,0.4); }
.my-pink    { background: rgba(251,207,232,0.4); }

&lt;Editor
  colors={["my-yellow","my-green","my-blue","my-pink"]}
  htmlContent={content}
/&gt;</code></pre>

    <div style="background:linear-gradient(135deg,rgba(124,58,237,0.12),rgba(6,182,212,0.08));border:1px solid rgba(124,58,237,0.2);border-radius:16px;padding:32px;text-align:center;margin:0 0 40px;">
      <div style="font-size:2rem;margin-bottom:8px;">&#9749;</div>
      <h3 style="font-size:1.3rem;font-weight:700;margin:0 0 8px;color:inherit;">Enjoying this project?</h3>
      <p style="font-size:1rem;line-height:1.7;margin:0 0 16px;color:inherit;opacity:0.7;">If reactjs-editor helped you, consider supporting the author with a coffee!</p>
      <a href="https://www.buymeacoffee.com/vivekneupaw" target="_blank" style="display:inline-block;padding:12px 28px;background:#7c3aed;color:#fff;border-radius:10px;text-decoration:none;font-weight:600;font-size:15px;">Buy Me a Coffee &rarr;</a>
    </div>

    <h2 style="font-size:1.6rem;font-weight:700;letter-spacing:-0.5px;margin:0 0 16px;color:inherit;">Resources</h2>
    <ul style="font-size:1.05rem;line-height:2.4;padding-left:24px;margin:0 0 20px;color:inherit;">
      <li><a href="https://www.npmjs.com/package/reactjs-editor" target="_blank" style="color:#a78bfa;">npm Package</a></li>
      <li><a href="https://github.com/vivekneupane11/reactjs-editor" target="_blank" style="color:#a78bfa;">GitHub Repository</a></li>
      <li><a href="https://www.youtube.com/watch?v=iR4xtbGtoU0" target="_blank" style="color:#a78bfa;">Video Tutorial on YouTube</a></li>
      <li><a href="https://reactjs-editor-demo.vercel.app/" target="_blank" style="color:#a78bfa;">Official Live Demo</a></li>
      <li><a href="https://www.buymeacoffee.com/vivekneupaw" target="_blank" style="color:#a78bfa;">Support the Author</a></li>
    </ul>

  </div>
</article>`

const colors = [
  { name: 'hl-yellow', hex: '#fef08a' },
  { name: 'hl-lime', hex: '#bef264' },
  { name: 'hl-green', hex: '#86efac' },
  { name: 'hl-teal', hex: '#5eead4' },
  { name: 'hl-cyan', hex: '#67e8f9' },
  { name: 'hl-blue', hex: '#93c5fd' },
  { name: 'hl-indigo', hex: '#a5b4fc' },
  { name: 'hl-purple', hex: '#d8b4fe' },
  { name: 'hl-white', hex: '#fff' },
  { name: 'hl-rose', hex: '#fda4af' },
  { name: 'hl-red', hex: '#fca5a5' },
  { name: 'hl-orange', hex: '#fdba74' },
]

export default function DemoPage() {
  const [copied, setCopied] = useState(false)
  const [quickSetupOpen, setQuickSetupOpen] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(quickPrompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="demo-page-wrapper">
      {/* Quick Setup Prompt — accordion (code hidden until expanded) */}
      <div className={`prompt-banner${quickSetupOpen ? ' prompt-banner--open' : ''}`}>
        <div className="prompt-banner-inner">
          <div className="prompt-banner-header">
            <button
              type="button"
              className="prompt-banner-trigger"
              id="quick-setup-trigger"
              aria-expanded={quickSetupOpen}
              aria-controls="quick-setup-panel"
              onClick={() => setQuickSetupOpen((o) => !o)}
            >
              <span className="prompt-banner-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
              </span>
              <span className="prompt-banner-trigger-main">
                <span className="prompt-banner-title-row">
                  <h2 className="prompt-banner-title">Quick Setup Prompt</h2>
                  <span className="prompt-banner-chevron" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </span>
                <p className="prompt-banner-sub">Copy this prompt into your AI coding assistant &mdash; it installs the package, asks where to place the component, and sets up 10 highlight colors with readable text. No need to read the demo.</p>
              </span>
            </button>
            <button type="button" className="prompt-copy-btn" onClick={handleCopy}>
              {copied ? (
                <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Copied!</>
              ) : (
                <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg> Copy Prompt</>
              )}
            </button>
          </div>
          {quickSetupOpen && (
            <div
              id="quick-setup-panel"
              className="prompt-banner-panel"
              role="region"
              aria-labelledby="quick-setup-trigger"
            >
              <pre className="prompt-banner-code">{quickPrompt}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="demo-page">
      {/* Sidebar hint */}
      <aside className="demo-sidebar">
        <div className="sidebar-sticky">
          <div className="sidebar-label">How to use</div>
          <ol className="sidebar-steps">
            <li>Select any text in this article</li>
            <li>A toolbar will appear</li>
            <li>Highlight, bold, or comment</li>
          </ol>
          <div className="sidebar-colors">
            <div className="sidebar-label">Highlight Colors</div>
            <div className="color-swatches">
              <span className="swatch" style={{ background: '#fef08a' }} title="Yellow" />
              <span className="swatch" style={{ background: '#bef264' }} title="Lime" />
              <span className="swatch" style={{ background: '#86efac' }} title="Green" />
              <span className="swatch" style={{ background: '#5eead4' }} title="Teal" />
              <span className="swatch" style={{ background: '#67e8f9' }} title="Cyan" />
              <span className="swatch" style={{ background: '#93c5fd' }} title="Blue" />
              <span className="swatch" style={{ background: '#a5b4fc' }} title="Indigo" />
              <span className="swatch" style={{ background: '#d8b4fe' }} title="Purple" />
              <span className="swatch" style={{ background: '#e4e4ed' }} title="White" />
              <span className="swatch" style={{ background: '#fda4af' }} title="Rose" />
              <span className="swatch" style={{ background: '#fca5a5' }} title="Red" />
              <span className="swatch" style={{ background: '#fdba74' }} title="Orange" />
            </div>
          </div>

          <a
            href="https://www.buymeacoffee.com/vivekneupaw"
            target="_blank"
            rel="noreferrer"
            className="sidebar-coffee"
            aria-label="Buy me a coffee (opens buymeacoffee.com)"
          >
            <BuyMeACoffeeBadge variant="sidebar" />
          </a>
        </div>
      </aside>

      {/* Article */}
      <main className="demo-content">
        <div className="editor-surface">
          <Editor htmlContent={blogHTML} colors={colors} />
        </div>
      </main>
    </div>
    </div>
  )
}
