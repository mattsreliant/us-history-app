import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModeProvider } from './lib/mode';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { HomePage } from './pages/Home';
import './index.css';

function App() {
  return (
    <ModeProvider>
      <BrowserRouter>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<PlaceholderPage title="Timeline" />} />
            <Route path="/presidents" element={<PlaceholderPage title="Presidents" />} />
            <Route path="/discover" element={<PlaceholderPage title="Discover" />} />
            <Route path="/quizzes" element={<PlaceholderPage title="Quizzes" />} />
            <Route path="/about" element={<PlaceholderPage title="About & Sources" />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ModeProvider>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="page-content">
      <h1>{title}</h1>
      <p>Coming soon.</p>
    </div>
  );
}

export default App;
