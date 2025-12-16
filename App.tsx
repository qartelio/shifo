import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { TechStack } from './components/TechStack';
import { Security } from './components/Security';
import { Features } from './components/Features';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Problem />
        <TechStack />
        <Security />
        <Features />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default App;