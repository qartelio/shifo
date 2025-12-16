import React from 'react';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-secondary text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">
              Цифровой Суверенитет Здравоохранения Узбекистана
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Первая Национальная Система <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Поддержки Принятия Врачебных Решений</span>
          </h1>
          
          <div className="inline-block mb-8 bg-accent/10 border border-accent/20 px-4 py-1 rounded-md">
            <span className="text-accent font-bold text-lg">Клиническая точность 98%</span>
          </div>

          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Мы объединили фундаментальную медицину и генеративный ИИ, чтобы устранить врачебные ошибки и обеспечить равный доступ к качественной диагностике в каждом регионе Республики.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="group bg-primary hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center gap-3 text-lg">
              Запросить демо-доступ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-slate-400 max-w-md">
              Система разворачивается в закрытом контуре (On-Premise) и соответствует требованиям к защите персональных данных РУз.
            </p>
          </div>
        </div>
      </div>

      {/* Stats preview or visual element */}
      <div className="mt-16 container mx-auto px-6">
        <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 p-1 backdrop-blur-md max-w-5xl mx-auto shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/80 z-10 pointer-events-none"></div>
           <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700 bg-slate-900/40 rounded-xl p-6 md:p-10">
              <div className="p-4 text-center">
                 <div className="text-3xl font-bold text-white mb-1">24/7</div>
                 <div className="text-sm text-slate-400">Доступность</div>
              </div>
              <div className="p-4 text-center">
                 <div className="text-3xl font-bold text-white mb-1">On-Premise</div>
                 <div className="text-sm text-slate-400">Безопасность</div>
              </div>
              <div className="p-4 text-center">
                 <div className="text-3xl font-bold text-white mb-1">HL7 FHIR</div>
                 <div className="text-sm text-slate-400">Стандарт интеграции</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};