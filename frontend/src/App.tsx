import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

// Pages
import { ApplicationsPage } from './pages/ApplicationsPage';
import { NewApplicationPage } from './pages/NewApplicationPage';
import { EditApplicationPage } from './pages/EditApplicationPage';

// Components
import { Landing } from './components/Landing/Landing';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Navbar } from './components/ui/Navbar';

const AppContent = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-brand-light">
      {!isLandingPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/applications/new" element={<NewApplicationPage />} />
        <Route path="/applications/:id" element={<ApplicationsPage />} />
        <Route path="/applications/:id/edit" element={<EditApplicationPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App
