import React from 'react';

export const Roadmap: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          План пилотного внедрения (3 месяца)
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          {/* Month 1 */}
          <div className="relative flex flex-col md:flex-row items-center mb-12">
            <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0 pl-20 md:pl-0">
              <h3 className="text-xl font-bold text-primary">Месяц 1</h3>
              <h4 className="text-lg font-semibold text-slate-800">Развертывание</h4>
              <p className="text-slate-600 text-sm mt-2">
                Установка в защищенный контур Минздрава. Адаптация под узбекский язык. Загрузка национальных протоколов.
              </p>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow transform -translate-x-2 md:-translate-x-1/2"></div>
            <div className="flex-1 md:pl-12"></div>
          </div>

          {/* Month 2 */}
          <div className="relative flex flex-col md:flex-row items-center mb-12">
            <div className="flex-1 md:pr-12 hidden md:block"></div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow transform -translate-x-2 md:-translate-x-1/2"></div>
            <div className="flex-1 md:pl-12 pl-20 mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-accent">Месяц 2</h3>
              <h4 className="text-lg font-semibold text-slate-800">Пилотный запуск</h4>
              <p className="text-slate-600 text-sm mt-2">
                Запуск в поликлинике (например, Бухара). Режим «Второе мнение»: врач принимает решение, ИИ подсказывает.
              </p>
            </div>
          </div>

          {/* Month 3 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0 pl-20 md:pl-0">
              <h3 className="text-xl font-bold text-purple-600">Месяц 3</h3>
              <h4 className="text-lg font-semibold text-slate-800">Аудит результатов</h4>
              <p className="text-slate-600 text-sm mt-2">
                Сравнение диагнозов ИИ и врачебных консилиумов. Подтверждение точности 98%.
              </p>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow transform -translate-x-2 md:-translate-x-1/2"></div>
            <div className="flex-1 md:pl-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};