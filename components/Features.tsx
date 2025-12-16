import React from 'react';
import { Zap, Activity, Clock, TrendingUp, Smile } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Integration Section */}
      <section className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                 <h2 className="text-3xl font-bold mb-6 text-slate-900">Интеграция и Интерфейс</h2>
                 <p className="text-lg text-slate-600 mb-8">
                    Скорость и удобство для врачей на местах. Мы говорим на языке мировой медицины.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                       <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                          <Activity className="w-5 h-5 text-primary" /> Стандарт HL7 FHIR
                       </h3>
                       <p className="text-slate-600 text-sm">
                          Мгновенное подключение к любой современной МИС. Автоматический забор анализов — нет ручного ввода и опечаток.
                       </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                       <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-yellow-500" /> Frontend на Next.js (SSR)
                       </h3>
                       <p className="text-slate-600 text-sm">
                          Оптимизировано для слабых компьютеров в регионах. Сложные вычисления на сервере. Streaming UI для мгновенного ответа без ожидания.
                       </p>
                    </div>
                 </div>
              </div>
              <div className="flex-1 bg-slate-900 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                 {/* Mock Interface Code */}
                 <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="font-mono text-xs md:text-sm text-slate-300 space-y-2">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">diagnosis</span> = <span className="text-purple-400">await</span> shifoAI.<span className="text-yellow-300">analyze</span>(patientData);</p>
                    <p className="pl-4 text-slate-500">// Processing via GraphRAG...</p>
                    <p><span className="text-purple-400">if</span> (diagnosis.<span className="text-blue-400">confidence</span> > <span className="text-orange-400">0.98</span>) {'{'}</p>
                    <p className="pl-4"><span className="text-yellow-300">return</span> diagnosis.<span className="text-blue-400">treatmentProtocol</span>;</p>
                    <p>{'}'}</p>
                    <div className="mt-4 p-3 bg-slate-800 rounded border border-slate-700">
                       <p className="text-green-400">✓ Patient ID: 893021</p>
                       <p className="text-green-400">✓ Protocols loaded: UZ-MOH-2024</p>
                       <p className="text-white animate-pulse">Generating insights...</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold text-center mb-12">Экономический и Социальный Эффект</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                 <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6">
                    <Clock className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Снижение нагрузки</h3>
                 <p className="text-slate-600">
                    Экономия 5-7 минут на приеме. +4 пациента в смену для одного врача.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                 <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <TrendingUp className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Ранняя диагностика</h3>
                 <p className="text-slate-600">
                    Снижение стоимости лечения онкологии и ССЗ в 10-15 раз за счет раннего выявления.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                 <div className="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-purple-500 mb-6">
                    <Smile className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Качество жизни</h3>
                 <p className="text-slate-600">
                    Диагностика уровня столичной клиники для жителей отдаленных районов.
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};