import React from 'react';
import { Lock, Server, Share2 } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Безопасность и Суверенитет Данных
          </h2>
          <p className="text-lg text-slate-600">
            Данные граждан Узбекистана остаются в Узбекистане. Архитектура Privacy-First.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <Share2 className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Федеративное обучение (Federated Learning)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ИИ учится на новых случаях без передачи данных пациентов в центр. Модель «путешествует» по серверам клиник, обучается локально и возвращает только математические веса.
                  <br/>
                  <span className="font-semibold text-slate-800 mt-2 block">Гарантия: ПИНФЛ, имена и адреса никогда не покидают периметр клиники.</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <Server className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">On-Premise Инфраструктура</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Мы не требуем подключения к зарубежным облакам (AWS/Azure). Вся система разворачивается на серверах UZINFOCOM или в ЦОД Минздрава. Полный контроль над кодом со стороны государства.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
             <div className="flex items-center justify-center mb-6">
                <Lock className="w-16 h-16 text-primary" />
             </div>
             <h4 className="text-center font-bold text-lg mb-4">Схема защиты данных</h4>
             <div className="space-y-3">
                <div className="flex items-center justify-between text-sm bg-slate-50 p-3 rounded border border-slate-100">
                   <span className="text-slate-500">Персональные данные</span>
                   <span className="flex items-center gap-1 text-green-600 font-medium"><Lock className="w-3 h-3"/> Локально</span>
                </div>
                <div className="flex items-center justify-between text-sm bg-slate-50 p-3 rounded border border-slate-100">
                   <span className="text-slate-500">Медицинские записи</span>
                   <span className="flex items-center gap-1 text-green-600 font-medium"><Lock className="w-3 h-3"/> Локально</span>
                </div>
                <div className="flex items-center justify-between text-sm bg-blue-50 p-3 rounded border border-blue-100">
                   <span className="text-slate-700">Веса нейросети</span>
                   <span className="flex items-center gap-1 text-blue-600 font-medium"><Share2 className="w-3 h-3"/> Синхронизация</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};