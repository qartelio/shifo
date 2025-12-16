import React from 'react';
import { Network, Users, Eye, BrainCircuit } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
       {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Deep Tech</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Как мы достигли точности 98%?</h2>
          <p className="text-slate-300 text-lg max-w-3xl">
            Мы не используем стандартный ChatGPT, который склонен к галлюцинациям. Мы используем гибридную архитектуру, где логика преобладает над генерацией текста.
          </p>
        </div>

        <div className="space-y-12">
          {/* Tech 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors">
            <div className="bg-blue-500/20 p-4 rounded-xl text-blue-400">
              <Network className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                1. GraphRAG: Логика вместо фантазий
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30">Core</span>
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                В основе системы лежит не просто языковая модель, а <strong>Граф Знаний (Knowledge Graph)</strong>, построенный на базе SNOMED CT и протоколов Минздрава РУз.
              </p>
              <div className="bg-slate-900/80 p-4 rounded-lg border-l-4 border-blue-500 text-sm text-slate-300">
                <strong className="text-white block mb-1">Как это работает:</strong>
                Если пациент жалуется на «боль в груди», система проверяет жесткие связи в графе (Кардиология, Гастроэнтерология), исключая невозможные сценарии. Это устраняет галлюцинации.
              </div>
            </div>
          </div>

          {/* Tech 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-accent/50 transition-colors">
            <div className="bg-emerald-500/20 p-4 rounded-xl text-emerald-400">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">2. Мультиагентная система «Консилиум»</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Ваш диагноз ставит не одна нейросеть, а каскад из трех специализированных AI-агентов (Agentic Workflow).
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <BrainCircuit className="w-5 h-5 text-purple-400" />
                  <span><strong>Agent-Diagnostician:</strong> Выдвигает гипотезы на основе симптомов.</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <BrainCircuit className="w-5 h-5 text-red-400" />
                  <span><strong>Agent-Critic (Adversarial AI):</strong> Ищет противоречия (например, «Нет температуры для гриппа»).</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <BrainCircuit className="w-5 h-5 text-emerald-400" />
                  <span><strong>Agent-Verifier:</strong> Сверяет вердикт с базой утвержденных лекарств РУз.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors">
            <div className="bg-purple-500/20 p-4 rounded-xl text-purple-400">
              <Eye className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">3. Мультимодальный анализ (Computer Vision)</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Ансамбль моделей на базе Google Med-PaLM 2 и кастомных CNN. Система «видит» загруженные файлы: рентген легких, фото кожных высыпаний, ЭКГ в PDF.
              </p>
              <div className="text-sm text-purple-300 italic">
                Эффект: Выявление патологий, которые пациент не может описать словами.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};