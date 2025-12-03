import { AnnualGoals } from '../types/performance';

type PageType = 'main' | 'highlight-projects' | 'standardization';

interface AnnualGoalsSectionProps {
  annualGoals: AnnualGoals;
  onNavigate?: (page: PageType) => void;
}

export function AnnualGoalsSection({ annualGoals, onNavigate }: AnnualGoalsSectionProps) {
  const { workGoals, coreCompetencies } = annualGoals;

  const handleLinkClick = (linkTo?: string) => {
    if (linkTo && onNavigate) {
      onNavigate(linkTo as PageType);
    }
  };

  return (
    <section className="glass-card p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <h2 className="section-title">🎯 2025 年度績效目標</h2>

      {/* 工作目標 (KPI) */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">工作目標</span>
        </h3>
        <div className="space-y-8">
          {workGoals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white rounded-xl p-6 border border-gray-200 transition-all"
            >
              {/* 目標標題 */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {goal.id}
                    </span>
                    <h4 className="text-xl font-bold text-gray-800">{goal.name}</h4>
                  </div>
                  <p className="text-gray-600 font-medium">{goal.target}</p>
                </div>
                <span className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full ml-4">
                  {goal.weight}%
                </span>
              </div>

              {/* 詳細說明 */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">{goal.description}</p>
              </div>

              {/* 衡量標準 */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-blue-500">📋</span> 衡量標準
                </h5>
                <ul className="space-y-2">
                  {goal.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-400 font-semibold mt-0.5">{idx + 1}.</span>
                      <span className="leading-relaxed">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 完成情況 */}
              <div className={goal.linkTo ? 'mb-4' : ''}>
                <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-green-500">✅</span> 完成情況
                </h5>
                <ul className="space-y-2">
                  {goal.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 查看詳情按鈕 */}
              {goal.linkTo && (
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => handleLinkClick(goal.linkTo)}
                    className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    {goal.linkTo === 'standardization' ? '📐 查看流程標準化詳細內容' : '🏆 查看年度重點亮點專案'}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 核心職能 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">核心職能</span>
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <th className="px-4 py-3 text-left font-semibold w-12 whitespace-nowrap">序號</th>
                <th className="px-4 py-3 text-left font-semibold w-32 whitespace-nowrap">項目</th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">關鍵行為</th>
                <th className="px-4 py-3 text-center font-semibold w-20 whitespace-nowrap">佔比</th>
              </tr>
            </thead>
            <tbody>
              {coreCompetencies.map((competency, index) => (
                <tr
                  key={competency.id}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-indigo-50/50' : 'bg-white'
                  } hover:bg-indigo-100/50 transition-colors`}
                >
                  <td className="px-4 py-4 text-center font-medium text-gray-700">{competency.id}</td>
                  <td className="px-4 py-4 font-medium text-gray-800">{competency.name}</td>
                  <td className="px-4 py-4">
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {competency.behaviors.map((behavior, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>{behavior}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 rounded-full">
                      {competency.weight}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
