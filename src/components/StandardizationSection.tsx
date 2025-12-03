import { standardizationData } from '../data/standardizationData';

interface StandardizationSectionProps {
  onNavigate: (page: 'standardization') => void;
}

export function StandardizationSection({ onNavigate }: StandardizationSectionProps) {
  const data = standardizationData;
  const goals = [
    { ...data.goals.dotNet9, color: 'from-purple-500 to-indigo-600' },
    { ...data.goals.restfulAPI, color: 'from-blue-500 to-cyan-600' },
    { ...data.goals.newLayout, color: 'from-pink-500 to-rose-600' },
    { ...data.goals.kendoVue, color: 'from-amber-500 to-orange-600' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
            ✅ 已完成
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
            ⏳ 進行中
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
            📋 待開始
          </span>
        );
    }
  };

  return (
    <section id="standardization" className="glass-card p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      {/* 標題區 */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="section-title flex items-center gap-2">
            📐 {data.title}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              (權重 {data.weight}%)
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {data.description} - 目標日期：{data.targetDate}
          </p>
        </div>
        <button
          onClick={() => onNavigate('standardization')}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
        >
          <span>查看詳細</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 四大目標卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* 卡片標題 */}
            <div className={`bg-gradient-to-r ${goal.color} px-4 py-3`}>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <span className="text-xl">{goal.icon}</span>
                  {goal.name}
                </h3>
                {goal.milestones[0] && getStatusBadge(goal.milestones[0].status)}
              </div>
              {goal.milestones[0] && (
                <p className="text-white/80 text-sm mt-1">
                  期限：{goal.milestones[0].date}
                </p>
              )}
            </div>

            {/* 卡片內容 */}
            <div className="p-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {goal.description}
              </p>

              {/* 摘要指標 */}
              <div className="grid grid-cols-2 gap-2">
                {goal.summary.slice(0, 4).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2 text-center"
                  >
                    <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 績效總覽 */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
          📊 績效總覽
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.performanceSummary.map((category, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {category.category}
              </h4>
              <ul className="space-y-1">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{item.label}：</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
