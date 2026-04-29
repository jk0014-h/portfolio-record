import React from 'react';

const MONTHS = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

const ProjectHeader = ({ activeTab, onTabChange, currentMonth, currentYear, onPrevMonth, onNextMonth, onToday }) => {
  return (
    <div className="flex flex-col border-b border-[#e2e8f0] px-6 py-4 bg-white">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mr-4">Projects</h1>
        <button className="flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 uppercase tracking-wide">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Tutorial Video
        </button>
      </div>

      <div className="flex items-center justify-between">
        {/* 뷰 탭 전환 */}
        <div className="flex space-x-6">
          {[
            { key: 'timeline', label: 'TIMELINE VIEW', icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            { key: 'month', label: 'MONTH VIEW', icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
            { key: 'gantt', label: 'GANTT VIEW', icon: "M4 6h16M4 10h16M4 14h16M4 18h16", beta: true },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`flex items-center text-sm font-semibold pb-3 border-b-2 relative transition-colors
                ${activeTab === tab.key
                  ? 'text-blue-600 border-blue-600'
                  : 'text-slate-500 hover:text-slate-800 border-transparent'
                }`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon} />
              </svg>
              {tab.label}
              {tab.beta && (
                <span className="absolute -top-3 -right-8 bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                  BETA
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 오른쪽 컨트롤 */}
        <div className="flex items-center space-x-4 pb-3">
          {/* 월 이동 */}
          <div className="flex items-center space-x-2 text-slate-600">
            <button
              onClick={onPrevMonth}
              className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700 transition-colors"
              title="이전 달"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNextMonth}
              className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700 transition-colors"
              title="다음 달"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <span className="text-sm font-semibold uppercase ml-2 text-slate-700">
              {MONTHS[currentMonth]} {currentYear}
            </span>
          </div>

          {/* Today 버튼 */}
          <button
            onClick={onToday}
            className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded hover:bg-slate-200 uppercase tracking-wide transition-colors"
          >
            Today
          </button>

          <div className="w-px h-5 bg-slate-200 mx-2"></div>

          {/* Sort */}
          <button className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900">
            <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            SORT
          </button>

          {/* Filters */}
          <button className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900">
            <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            FILTERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
