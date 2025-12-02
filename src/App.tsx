import { useState } from 'react';
import { performanceData, highlightProjects } from './data/performanceData';
import { Header } from './components/Header';
import { AnnualGoalsSection } from './components/AnnualGoalsSection';
import { HighlightProjectsPage } from './components/HighlightProjectsPage';
import { WorklistSection } from './components/WorklistSection';

type PageType = 'main' | 'highlight-projects';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('main');

  const handlePrint = () => {
    window.print();
  };

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

  // 主頁面
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Print Button */}
        <div className="flex justify-end mb-4 no-print">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg shadow-md transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            列印報告
          </button>
        </div>

        {/* Header with Personal Info */}
        <Header 
          personalInfo={performanceData.personalInfo} 
          summary={performanceData.summary} 
        />

        {/* Annual Goals Section */}
        {performanceData.annualGoals && (
          <AnnualGoalsSection 
            annualGoals={performanceData.annualGoals} 
            onNavigate={navigateTo}
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
