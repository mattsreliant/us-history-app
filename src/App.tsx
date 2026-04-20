import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModeProvider } from './lib/mode';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { HomePage } from './pages/Home';
import { TimelinePage } from './pages/Timeline';
import { DecadeDetailPage } from './pages/DecadeDetail';
import { EventDetailPage } from './pages/EventDetail';
import { PresidentsPage } from './pages/Presidents';
import { PresidentDetailPage } from './pages/PresidentDetail';
import { DiscoverPage } from './pages/Discover';
import { DiscoverDetailPage } from './pages/DiscoverDetail';
import { SearchDialog } from './components/shared/Search';

// Register all content JSON files
import './content/index';

import './index.css';

function App() {
  return (
    <ModeProvider>
      <BrowserRouter>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <SearchDialog />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/timeline/:decadeId" element={<DecadeDetailPage />} />
            <Route path="/timeline/:decadeId/:eventId" element={<EventDetailPage />} />
            <Route path="/presidents" element={<PresidentsPage />} />
            <Route path="/presidents/:id" element={<PresidentDetailPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/discover/:id" element={<DiscoverDetailPage />} />
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
