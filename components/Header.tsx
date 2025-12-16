import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-md border-b border-slate-700 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-primary to-accent w-8 h-8 rounded-lg flex items-center justify-center">
            <Activity className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Shifo.AI</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Технологии</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Безопасность</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Эффект</a>
        </nav>

        <button className={`text-sm font-bold px-5 py-2 rounded-full border transition-all ${scrolled ? 'bg-white text-secondary border-white hover:bg-slate-100' : 'bg-transparent text-white border-white/30 hover:bg-white/10'}`}>
          Вход для врачей
        </button>
      </div>
    </header>
  );
};