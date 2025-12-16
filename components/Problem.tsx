import React from 'react';
import { UserX, MapPinOff, Database } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <UserX className="w-10 h-10 text-red-500" />,
      title: "Человеческий фактор",
      desc: "Врач в конце смены пропускает неочевидные симптомы. Средняя точность диагностики в первичном звене — 80-85%."
    },
    {
      icon: <MapPinOff className="w-10 h-10 text-orange-500" />,
      title: "Региональный дисбаланс",
      desc: "Житель отдаленного района не имеет доступа к профессорам из Ташкента. Неравенство в качестве медицинской помощи."
    },
    {
      icon: <Database className="w-10 h-10 text-purple-500" />,
      title: "Изолированность данных",
      desc: "Анализы, снимки и анамнез разбросаны по разным системам, что затрудняет создание единой картины здоровья пациента."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Почему традиционные подходы <br className="hidden md:block"/> больше не работают?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Медицина сталкивается с «трилеммой»: Доступность, Качество и Стоимость.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
              <div className="mb-6 p-4 rounded-xl bg-white shadow-sm inline-block group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
          <p className="text-xl md:text-2xl font-medium text-slate-800">
            <span className="text-primary font-bold">Наше решение:</span> Не замена врача, а создание «цифрового ассистента» с коллективным разумом миллионов клинических случаев.
          </p>
        </div>
      </div>
    </section>
  );
};