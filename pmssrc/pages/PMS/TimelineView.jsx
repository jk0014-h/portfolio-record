import React, { useState } from 'react';
import SchedulePopover from './SchedulePopover';

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const getDayName = (year, month, day) => {
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[new Date(year, month, day).getDay()];
};

const getTodayDay = (year, month) => {
  const now = new Date();
  if (now.getFullYear() === year && now.getMonth() === month) return now.getDate();
  return null;
};

// 프로젝트 더미 데이터 (colors 통일)
const projects = [
  {
    id: 1,
    title: "Erin Hannon - Bathroom Remodel",
    tasks: [
      { id: 101, start: 1, duration: 6, color: "bg-blue-100 border-blue-200 text-blue-800", label: "9hrs", icon: true },
      { id: 102, start: 8, duration: 5, color: "bg-blue-200 border-blue-300 text-blue-900", label: "8hrs", status: "Today", isHover: true, date: "APR 8, 2023", hours: "8 HRS" },
      { id: 103, start: 23, duration: 7, color: "bg-blue-100 border-blue-200 text-blue-800", label: "10hrs End" },
    ]
  },
  {
    id: 2,
    title: "Ferris Bueller - Bathroom Remodel",
    tasks: [
      { id: 201, start: 2, duration: 5, color: "bg-red-100 border-red-200 text-red-800", label: "Start 9hrs" },
      { id: 202, start: 9, duration: 4, color: "bg-red-100 border-red-200 text-red-800", label: "8hrs" },
      { id: 203, start: 23, duration: 6, color: "bg-red-100 border-red-200 text-red-800", label: "10hrs End" },
    ]
  },
  {
    id: 3,
    title: "Bob Vance (Vance Refrigeration)",
    tasks: [
      { id: 301, start: 4, duration: 4, color: "bg-purple-100 border-purple-200 text-purple-800", label: "9hrs" },
      { id: 302, start: 9, duration: 4, color: "bg-purple-200 border-purple-300 text-purple-900", label: "12hrs" },
    ]
  },
  {
    id: 4,
    title: "Bif Tannen - Tile Service",
    tasks: [
      { id: 401, start: 1, duration: 8, color: "bg-green-100 border-green-200 text-green-800", label: "9hrs" },
      { id: 402, start: 23, duration: 7, color: "bg-green-100 border-green-200 text-green-800", label: "9hrs" },
    ]
  },
  {
    id: 5,
    title: "Mike Ehrtermtua - Tile Service",
    tasks: [
      { id: 501, start: 2, duration: 6, color: "bg-cyan-100 border-cyan-200 text-cyan-800", label: "Start 9hrs" },
      { id: 502, start: 15, duration: 5, color: "bg-cyan-100 border-cyan-200 text-cyan-800", label: "9hrs" },
      { id: 503, start: 23, duration: 6, color: "bg-cyan-100 border-cyan-200 text-cyan-800", label: "10hrs End" },
    ]
  }
];

const TimelineView = ({ currentYear, currentMonth }) => {
  const [popoverTask, setPopoverTask] = useState(null);

  const totalDays = getDaysInMonth(currentYear, currentMonth);
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
  const todayDay = getTodayDay(currentYear, currentMonth);

  const handleTaskClick = (task) => {
    if (task.isHover) {
      // 같은 태스크 클릭 시 토글
      setPopoverTask(prev => (prev?.id === task.id ? null : task));
    }
  };

  const handleClosePopover = () => setPopoverTask(null);

  return (
    <div className="flex-1 overflow-auto bg-white p-6 relative">
      <div className="space-y-6 min-w-[1200px]">
        {projects.map((project) => (
          <div key={project.id} className="border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden flex flex-col">

            {/* 프로젝트 헤더 */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-sm font-bold text-slate-800">{project.title}</h2>
              <div className="flex space-x-2 text-slate-400">
                {[
                  "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z|M15 13a3 3 0 11-6 0 3 3 0 016 0z",
                  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                  "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                  "M4 6h16M4 12h16M4 18h16",
                ].map((icon, i) => (
                  <button key={i} className="p-1 hover:text-slate-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {icon.split('|').map((d, j) => (
                        <path key={j} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
                      ))}
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* 날짜 헤더 */}
            <div className="relative border-b border-slate-100 flex pb-2 pt-3 px-4 text-[10px] items-end shrink-0">
              <span className="w-12 font-bold text-slate-400 uppercase tracking-widest self-center shrink-0">
                {new Date(currentYear, currentMonth).toLocaleString('en-US', { month: 'long' })}
              </span>
              <div className="flex-1" style={{ display: 'grid', gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))` }}>
                {daysArray.map(day => (
                  <div key={day} className={`text-center flex flex-col items-center ${day === todayDay ? 'text-blue-600 font-bold' : 'text-slate-500'}`}>
                    {day === todayDay && (
                      <div className="bg-[#1f2937] text-white text-[10px] py-0.5 px-1.5 rounded mb-1 whitespace-nowrap z-10 shadow-lg relative -top-1">
                        Today
                        <div className="absolute w-2 h-2 bg-[#1f2937] transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                      </div>
                    )}
                    <span className="leading-tight">{day}</span>
                    <span className="text-[8px] font-semibold leading-tight">{getDayName(currentYear, currentMonth, day)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 스케줄 Row */}
            <div className="relative h-16 flex px-4">
              <div className="w-12 shrink-0"></div>
              <div className="flex-1 relative" style={{ display: 'grid', gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))` }}>
                {/* 배경 눈금선 */}
                {daysArray.map(day => (
                  <div
                    key={`grid-${day}`}
                    className={`border-r border-slate-100/50 h-full w-full flex justify-center items-center
                      ${day === todayDay ? 'border-l border-blue-200 bg-blue-50/20' : ''}`}
                  >
                    <span className="text-slate-200 text-lg">+</span>
                  </div>
                ))}

                {/* 태스크 렌더링 */}
                {project.tasks.map(task => {
                  const leftPct = ((task.start - 1) / totalDays) * 100;
                  const widthPct = (task.duration / totalDays) * 100;
                  const isActive = popoverTask?.id === task.id;

                  return (
                    <div
                      key={task.id}
                      className={`absolute top-1/2 -translate-y-1/2 h-7 rounded-sm border ${task.color} text-[10px] font-semibold flex items-center px-2 cursor-pointer transition-all
                        ${task.isHover ? 'ring-2 ring-blue-400 ring-offset-1 z-20 shadow-md' : 'z-10 opacity-90 hover:opacity-100'}
                        ${isActive ? 'ring-2 ring-blue-500' : ''}
                      `}
                      style={{
                        left: `${leftPct}%`,
                        width: `calc(${widthPct}% - 8px)`,
                        marginLeft: '4px'
                      }}
                      onClick={() => handleTaskClick(task)}
                      onMouseEnter={(e) => {
                        if (task.isHover) e.currentTarget.style.cursor = 'pointer';
                      }}
                    >
                      {task.status && <div className="absolute -left-1 w-0.5 h-full bg-[#1f2937]"></div>}
                      {task.icon && (
                        <svg className="w-3 h-3 mr-1 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="truncate">{task.label}</span>

                      {task.isHover && (
                        <svg className="absolute -bottom-3 left-2 w-4 h-4 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 21l3-18 10 12h-6l2 4-2 1-2-4-3 3v-8" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ))}

        {/* 팝오버: 특정 태스크 클릭 시만 표시 */}
        <SchedulePopover
          isOpen={popoverTask !== null}
          onClose={handleClosePopover}
          taskInfo={popoverTask}
        />
      </div>
    </div>
  );
};

export default TimelineView;
