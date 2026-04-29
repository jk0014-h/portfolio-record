import React, { useState } from 'react';

const menuItems = [
  { name: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { name: "Time Tracking", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Task List", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { name: "Lead Pipeline", icon: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" },
  { name: "Estimates", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { name: "Invoices", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
  { name: "Projects", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { name: "Schedule", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Photos & Files", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Customers", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { name: "Map", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z;M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Reports", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
];

const Sidebar = ({ collapsed, onToggleCollapse }) => {
  const [activeMenu, setActiveMenu] = useState("Projects");

  return (
    <div
      className={`h-full bg-[#f8fafc] border-r border-[#e2e8f0] flex flex-col pt-4 transition-all duration-300 ${
        collapsed ? 'w-[60px]' : 'w-[240px]'
      }`}
    >
      {/* 로고 + 접기 버튼 */}
      <div className="px-3 mb-8 flex items-center space-x-2 overflow-hidden">
        <div className="w-8 h-8 bg-black rounded-lg text-white font-bold flex items-center justify-center shrink-0">
          H
        </div>
        {!collapsed && (
          <span className="text-xl font-bold text-slate-800 whitespace-nowrap">Halal</span>
        )}
        <button
          onClick={onToggleCollapse}
          className="ml-auto text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-200 transition-colors shrink-0"
          title={collapsed ? '펼치기' : '접기'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {collapsed
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            }
          </svg>
        </button>
      </div>

      {/* 상단 유틸 메뉴 */}
      {!collapsed && (
        <div className="px-5 mb-6">
          <div className="flex items-center text-slate-500 hover:text-slate-800 cursor-pointer mb-4">
            <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </div>
          <div className="flex items-center text-slate-500 hover:text-slate-800 cursor-pointer mb-4">
            <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Customizations
          </div>
          <div className="flex items-center text-slate-500 hover:text-slate-800 cursor-pointer">
            <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Templates
          </div>
        </div>
      )}

      {/* 접힌 상태일 때 아이콘만 표시 */}
      {collapsed && (
        <div className="px-3 mb-6 flex flex-col items-center space-y-4">
          <button className="p-2 rounded hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors" title="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="p-2 rounded hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors" title="Customizations">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
        </div>
      )}

      {!collapsed && (
        <div className="px-5 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Main Menu
        </div>
      )}

      {/* 메인 메뉴 */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveMenu(item.name)}
                title={collapsed ? item.name : ''}
                className={`w-full flex items-center py-2.5 text-sm font-medium transition-colors
                  ${collapsed ? 'px-3 justify-center' : 'px-5'}
                  ${activeMenu === item.name
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-l-4 border-transparent'
                  }
                `}
              >
                <svg
                  className={`w-5 h-5 shrink-0 ${collapsed ? '' : 'mr-3'} ${activeMenu === item.name ? 'text-blue-600' : 'text-slate-400'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon.split(';').map((d, i) => (
                    <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
                  ))}
                </svg>
                {!collapsed && item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
