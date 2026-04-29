import { useState } from "react";
import { MenuItem } from "../ui";
import { useClock } from "../../hooks/useClock";
import { NAV_ITEMS } from "../../constants/navigation";

const PlaceholderIcon = ({ text }) => (
  <div className="w-5 h-5 flex items-center justify-center text-xs text-gray-400 hover:text-white transition-colors">
    {text}
  </div>
);

export default function Header({ activeIdx, setActiveIdx, isConnected, setIsConnected }) {
  const { date, time } = useClock();

  return (
    <header className="flex w-full h-[60px] items-center justify-between px-6 relative z-50 glass-dark border-b border-white/5">
      {/* Left Area (flex-1) */}
      <div className="flex-1 flex items-center gap-3">
        {/* 서비스명 및 로고 섹션 */}
        <div className="flex items-center gap-1.5 cursor-pointer group" onClick={() => setActiveIdx(0)}>
          <div className="w-6 h-6 bg-white/10 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:border-blue-500/50">
            <div className={`w-2 h-2.5 rounded-full shadow-lg transition-all duration-500 ${isConnected ? 'bg-blue-500 shadow-blue-500/50 scale-110' : 'bg-gray-600'}`} />
          </div>
          <span className="font-black text-sm tracking-tighter text-white uppercase italic group-hover:text-blue-400 transition-colors">Sentinel_Insight</span>
        </div>
        
        {/* 
            [시스템 실시간 상태 표시등]
            - bg-green-500/10: 배경 투명도 10% 설정으로 은은한 분위기를 냅니다.
            - shadow-[0_0_10px_...]: 상태에 따른 발광 효과의 크기와 투명도를 조절합니다.
        */}
        <div 
          onClick={() => setIsConnected(!isConnected)}
          className={`
            flex items-center gap-1.5 ml-4 px-2.5 py-1 rounded-full border transition-all duration-500 cursor-pointer select-none
            ${isConnected 
              ? "bg-green-500/10 border-green-500/20 text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.1)]" 
              : "bg-red-500/10 border-red-500/20 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]"}
          `}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
          <span className="text-[9px] font-bold uppercase tracking-widest">
            {isConnected ? "System_Active" : "System_Error"}
          </span>
        </div>
      </div>

      {/* Center Area (flex-none) */}
      <nav className="hidden lg:flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
        {NAV_ITEMS.map((item, index) => (
          <MenuItem
            key={index}
            label={item}
            active={activeIdx === index}
            onClick={() => setActiveIdx(index)}
          />
        ))}
      </nav>

      {/* Right Area (flex-1) */}
      <div className="flex-1 flex items-center justify-end gap-6">
        {/* Date/Time */}
        <div className="flex flex-col items-end text-[10px] tabular-nums font-bold tracking-widest">
          <span className="text-gray-500">{date}</span>
          <span className="text-white leading-none mt-1 opacity-90">{time}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1 border-l border-white/10 pl-4">
          <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all text-white/50 hover:text-white hover:scale-105 active:scale-95">
            <PlaceholderIcon text="🔔" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all text-white/50 hover:text-white hover:scale-105 active:scale-95">
            <PlaceholderIcon text="⚙️" />
          </button>
        </div>
      </div>
    </header>
  );
}
