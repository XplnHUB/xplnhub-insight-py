import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Implementation from './pages/Implementation';
import Roadmap from './pages/Roadmap';
import OnboardingModal from './components/OnboardingModal';
function App() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home onOpenOnboarding={() => setIsOnboardingOpen(true)} />} />
          <Route path="/features" element={<Features />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </Layout>
      
      <OnboardingModal 
        isOpen={isOnboardingOpen} 
        onClose={() => setIsOnboardingOpen(false)} 
      />
    </>
  );
}

export default App;
