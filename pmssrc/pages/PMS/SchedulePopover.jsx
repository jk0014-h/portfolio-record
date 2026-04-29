import React from 'react';

const scheduleDetails = [
  { id: 1, title: 'Shower Installation', name: 'Masum Parvej', time: '8:00am for 5hrs', initial: 'MP', bg: 'bg-slate-200' },
  { id: 2, title: 'Master Bathroom Tiles Install', name: 'Faruk Ahmad', time: '8:00am for 5hrs', initial: 'FA', bg: 'bg-emerald-200', active: true },
  { id: 3, title: 'Countertop Template', name: 'Yeasin Arafat', time: '8:00am for 5hrs', initial: 'YA', bg: 'bg-red-200' },
  { id: 4, title: 'Glass Template', name: 'Jamal Hossain', time: '8:00am for 5hrs', initial: 'JH', bg: 'bg-blue-200' },
  { id: 5, title: 'Shower Installation', name: 'Masum Parvej', time: '8:00am for 5hrs', initial: 'MP', bg: 'bg-slate-200' }
];

const SchedulePopover = ({ isOpen, onClose, taskInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[160px] left-[55%] z-50 w-[320px] bg-white rounded-lg shadow-2xl border border-slate-200 transform -translate-x-1/2 flex flex-col">
      
      {/* 헤더 */}
      <div className="p-4 border-b border-slate-100 flex justify-between items-start">
        <div>
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            {taskInfo?.date || 'APR 14, 2023'} - {taskInfo?.hours || '9 HRS'}
          </div>
          <button className="flex items-center text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            SLIDE PROJECT SCHEDULE
          </button>
        </div>
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition-colors"
          title="닫기"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* 스케줄 목록 */}
      <div className="p-2 space-y-1">
        {scheduleDetails.map((item) => (
          <div
            key={item.id}
            className={`flex items-start p-2.5 rounded-md cursor-pointer transition-colors
              ${item.active
                ? 'bg-slate-100 border border-slate-200 shadow-sm relative'
                : 'hover:bg-slate-50 border border-transparent'
              }
            `}
          >
            <div className="mt-0.5 mr-2 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            </div>
            <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center text-xs font-bold text-slate-700 mr-3 shrink-0`}>
              <img
                src={`https://ui-avatars.com/api/?name=${item.initial}&background=random&color=fff&size=32`}
                alt={item.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-slate-800 truncate flex items-center">
                <svg className="w-3.5 h-3.5 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.829-2.829m5.657 5.657L9 19M5 5l14 14" />
                </svg>
                {item.title}
              </div>
              <div className="text-xs text-slate-600 truncate mt-0.5">{item.name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{item.time}</div>
            </div>

            {item.active && (
              <div className="absolute top-1/2 -right-10 w-10 border-t border-dashed border-slate-400 -translate-y-1/2 hidden md:block">
                <div className="absolute right-0 -top-1.5 w-3 h-3 border-2 border-slate-600 rounded-full bg-white"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePopover;
