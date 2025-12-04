import { useState } from 'react';
import { performanceData, highlightProjects } from './data/performanceData';
import { Header } from './components/Header';
import { AnnualGoalsSection } from './components/AnnualGoalsSection';
import { HighlightProjectsPage } from './components/HighlightProjectsPage';
import { WorklistSection } from './components/WorklistSection';
import { StandardizationPage } from './components/StandardizationPage';
import { AIPerformanceSection } from './components/AIPerformanceSection';

type PageType = 'main' | 'highlight-projects' | 'standardization' | 'ai-performance';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('main');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 亮點專案頁面
  if (currentPage === 'highlight-projects') {
    return (
      <HighlightProjectsPage
        projects={highlightProjects}
        onBack={() => navigateTo('main')}
      />
    );
  }

  // 流程標準化頁面
  if (currentPage === 'standardization') {
    return (
      <StandardizationPage
        onBack={() => navigateTo('main')}
      />
    );
  }

  // AI績效報告頁面
  if (currentPage === 'ai-performance') {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <button
              onClick={() => navigateTo('main')}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg shadow-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回績效報告
            </button>
          </div>
          <AIPerformanceSection />
        </div>
      </div>
    );
  }

  // 主頁面
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with Personal Info */}
        <Header 
          personalInfo={performanceData.personalInfo} 
          summary={performanceData.summary} 
        />

        {/* Annual Goals Section */}
        {performanceData.annualGoals && (
          <AnnualGoalsSection 
            annualGoals={performanceData.annualGoals} 
            onNavigate={(page) => {
              if (page === 'ai-performance') {
                navigateTo('ai-performance');
              } else {
                navigateTo(page);
              }
            }}
          />
        )}

        {/* Worklist Section */}
        <WorklistSection />

        {/* Footer */}
        <footer className="glass-card p-6 text-center text-gray-600">
          <p className="mb-2">
            📅 報告產生日期：{new Date().toLocaleDateString('zh-TW')}
          </p>
          <p className="text-sm text-gray-500">
            此績效報告由系統自動產生，供主管審閱使用
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
