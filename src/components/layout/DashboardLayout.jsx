import { useState } from "react";
import { AnalyticsSidebar } from "./";
import { FloorSelector } from "../ui";
import { NAV_ITEMS } from "../../constants/navigation";

/**
 * 대시보드의 공통 UI 구조를 정의하는 레이아웃 컴포넌트입니다.
 */
export default function DashboardLayout({ children, bgImage, activeIndex, activeFloor, onFloorChange }) {
  const [isFloorOpen, setIsFloorOpen] = useState(false);
  const currentMenu = NAV_ITEMS[activeIndex] || "SJ";
  const floorId = activeFloor;

  // 층수 변경 시 메뉴를 자동으로 닫는 래퍼 함수
  const handleFloorChange = (newFloor) => {
    onFloorChange(newFloor);
    setIsFloorOpen(false);
  };

  return (
    <div className="relative flex w-full h-full overflow-hidden bg-[#0A0B10]">
      {/* 
          [배경 이미지 레이어]
          - blur-[2px]: 배경 선명도, opacity-40: 투명도(40%)입니다. 
          - 내부망에서 분위기를 바꿀 때 이 수치를 조절하세요.
      */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-40 scale-105 blur-[2px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* [패턴 오버레이] 레이어의 질감을 살려주는 미세한 패턴 위로 배경이 깔립니다. */}
      <div className="absolute inset-0 z-1 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex w-full h-full">
        
        {/* Left Side: Global Floor Selector with Sliding Animation */}
        <div className={`
          absolute top-1/2 -translate-y-1/2 left-10 z-30 transition-all duration-500 ease-in-out transform
          ${isFloorOpen ? "translate-x-0 opacity-100 scale-100" : "-translate-x-[150%] opacity-0 scale-90 pointer-events-none"}
        `}>
          <FloorSelector
            activeFloor={activeFloor}
            onFloorChange={handleFloorChange}
          />
        </div>

        {/* Center Canvas Area */}
        <div className="flex-1 relative flex flex-col overflow-hidden">
          {/* Top Title Section: 18px from header, 5px gap between lines */}
          <div className="flex flex-col gap-[5px] px-10 pt-[18px] select-none">
            {/* Breadcrumb: Gray SJ > Blue Floor */}
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase">
              <span className="text-gray-500">SJ</span>
              <span className="text-gray-700 font-normal opacity-50">&gt;</span>
              <span className="text-blue-500 font-black">{floorId}</span>
            </div>

            {/* Main ID Title: Extra Bold & Precise Spacing */}
            <h1 className="text-5xl font-black text-white/90 tracking-tighter uppercase leading-none">
              {currentMenu}_{floorId}
            </h1>
          </div>

          {/* Page Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>

        {/* Right Sidebar */}
        <AnalyticsSidebar />
      </div>

      {/* 
          [하단 플로팅 툴바] 
          - 📍(핀) 아이콘: 첫 번째 버튼으로, 클릭 시 층수 선택기를 토글합니다.
          - glass-dark: 검은색 배경의 진한 유리 효과를 적용합니다.
      */}
      <div className="absolute bottom-10 left-10 z-20 flex items-center gap-3">
        {['📍', '🗺️', '🔍'].map((icon, i) => (
          <button
            key={i}
            onClick={i === 0 ? () => setIsFloorOpen(!isFloorOpen) : undefined}
            className={`
              w-12 h-12 rounded-xl glass-dark border flex items-center justify-center text-xl transition-all hover:-translate-y-1 active:scale-95 group shadow-lg
              ${(i === 0 && isFloorOpen) 
                ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                : "border-white/10 text-white/60 hover:text-white hover:bg-white/10"}
            `}
          >
            <span className="group-hover:scale-110 transition-transform">{icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
