import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Implementation from './pages/Implementation';
import Roadmap from './pages/Roadmap';
import OnboardingModal from './components/OnboardingModal';
import LoadingDemo from './components/__test__/LoadingDemo';
import LoadingTest from './components/__test__/LoadingTest';

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
          <Route path="/loading-demo" element={<LoadingDemo />} />
          <Route path="/loading-test" element={<LoadingTest />} />
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
