import React from 'react';
import { Mail, Activity } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Activity className="w-6 h-6 text-accent" />
              <span className="text-2xl font-bold">Shifo.AI</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Готовы к цифровой трансформации? Мы предлагаем партнерство в создании суверенного медицинского ИИ.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <button className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 mx-auto md:mx-0">
              <Mail className="w-4 h-4" />
              Связаться с командой
            </button>
            <p className="text-sm text-slate-500 mt-4">
              Техническая документация доступна по запросу.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Shifo.AI. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-mono text-xs">
            Developed with Next.js, GraphRAG & TensorFlow Federated technology stack.
          </p>
        </div>
      </div>
    </footer>
  );
};