import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProjectHeader from './ProjectHeader';
import TimelineView from './TimelineView';

const PMSDashboard = () => {
  // 사이드바 접기/펼치기 상태
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // 현재 뷰 탭 (timeline / month / gantt)
  const [activeTab, setActiveTab] = useState('month');

  // 현재 표시 중인 연/월
  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth()); // 0-indexed

  // 새 프로젝트 추가 모달 상태
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  // 이전 달 이동
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(y => y - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };

  // 다음 달 이동
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(y => y + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  // Today 버튼: 현재 날짜로 돌아오기
  const handleToday = () => {
    const n = new Date();
    setCurrentYear(n.getFullYear());
    setCurrentMonth(n.getMonth());
  };

  // ADD 버튼 제출
  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProjectName.trim()) {
      alert(`"${newProjectName}" 프로젝트가 추가되었습니다!\n(실제 데이터 연동 시 여기에 API 호출을 추가하세요)`);
      setNewProjectName('');
      setShowAddModal(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans text-slate-800">

      {/* 사이드바 */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
      />

      {/* 오른쪽 메인 영역 */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">

        {/* 상단 글로벌 헤더 */}
        <div className="h-12 border-b border-slate-200 flex items-center justify-between px-4 bg-white shrink-0">
          <div className="flex items-center text-slate-500 text-sm">
            <button
              onClick={() => setSidebarCollapsed(prev => !prev)}
              className="p-1 hover:bg-slate-100 rounded mr-2 text-slate-400 hover:text-slate-700 transition-colors"
              title="사이드바 접기/펼치기"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
            <span className="flex items-center hover:text-slate-800 cursor-pointer">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Projects
            </span>
          </div>

          {/* ADD 버튼 */}
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white flex items-center px-3 py-1.5 rounded text-sm font-semibold shadow-sm transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            ADD
          </button>
        </div>

        {/* 프로젝트 헤더 (탭 & 월 컨트롤) */}
        <ProjectHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onToday={handleToday}
        />

        {/* 타임라인 메인 뷰 */}
        <TimelineView
          currentYear={currentYear}
          currentMonth={currentMonth}
        />
      </div>

      {/* ADD 프로젝트 모달 */}
      {showAddModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={(e) => { if (e.target === e.currentTarget) setShowAddModal(false); }}
        >
          <div className="bg-white rounded-xl shadow-2xl w-[400px] p-6 relative animate-fade-in">
            <h2 className="text-lg font-bold text-slate-800 mb-4">새 프로젝트 추가</h2>
            <form onSubmit={handleAddProject}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-600 mb-1">프로젝트 이름</label>
                <input
                  autoFocus
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="예: Kim Minjun - Kitchen Remodel"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  추가하기
                </button>
              </div>
            </form>
            {/* 모달 닫기 X 버튼 */}
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PMSDashboard;
