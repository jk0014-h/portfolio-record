import { useState } from "react";
import { StatWidget, AQIGauge } from "../ui";

/**
 * 대시보드 우측의 분석 위젯들을 모아놓은 사이이드바 컴포넌트입니다.
 */
export default function AnalyticsSidebar() {
  // 테스트를 위한 AQI 수치 상태 관리
  const [aqiValue, setAqiValue] = useState(98);

  return (
    <aside className="w-[320px] p-6 flex flex-col gap-5 overflow-y-auto pt-8 custom-scrollbar">
      
      {/* Thermal Gradient Widget */}
      <StatWidget title="Thermal Gradient">
        <div className="flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white tracking-tighter">24°C</span>
              <span className="text-[10px] text-gray-500 font-bold tracking-widest mt-1">
                TARGET: <span className="text-blue-400">22.5°C</span>
              </span>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                <div 
                  key={i} 
                  style={{ height: `${h}%` }} 
                  /* 
                     [막대 차트 스타일 가이드] 
                     - i === 5: 특정 데이터(현재 시점 등)를 강조하기 위한 조건문입니다.
                     - bg-blue-500: 강조 시 표시될 색상입니다.
                     - shadow-[0_0_10px_...]: 강조 막대에 부여되는 푸른색 발광 효과입니다.
                  */
                  className={`w-1.5 rounded-full transition-all duration-500 ${i === 5 ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-white/10'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </StatWidget>

      {/* Atmospheric Index Widget */}
      <StatWidget title="Atmospheric Index">
        <div className="flex flex-col items-center py-2 gap-4">
          <AQIGauge value={aqiValue} label={aqiValue >= 90 ? "Excellent" : aqiValue >= 70 ? "Good" : aqiValue >= 40 ? "Fair" : "Poor"} />
          
          {/* 
              [테스트 컨트롤 슬라이더] 
              - accent-blue-500: 슬라이더 손잡이의 색상을 결정합니다.
          */}
          <div className="w-full px-2 flex flex-col gap-2">
            <div className="flex justify-between text-[8px] font-bold text-gray-500 uppercase tracking-widest">
              <span>Test Control</span>
              <span className="text-blue-400">{aqiValue}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={aqiValue} 
              onChange={(e) => setAqiValue(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>
      </StatWidget>

      {/* Environmental Detail Widgets */}
      <div className="grid grid-cols-2 gap-4">
        <StatWidget title="CO2 Level">
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white">412</span>
              <span className="text-[9px] text-gray-500 font-bold">PPM</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="w-[40%] h-full bg-blue-500 rounded-full" />
            </div>
          </div>
        </StatWidget>
        <StatWidget title="Humidity">
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white">45</span>
              <span className="text-[9px] text-gray-500 font-bold">%</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="w-[45%] h-full bg-blue-500 rounded-full" />
            </div>
          </div>
        </StatWidget>
      </div>

      {/* Particulate Matter */}
      <StatWidget title="Particulate Matter">
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">12</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">µg/m³</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-1.5 bg-white/5 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-red-500 opacity-20" />
              <div className="w-[12%] h-full bg-white shadow-[0_0_8px_white] rounded-full" />
            </div>
            <div className="flex justify-between text-[7px] font-bold text-gray-600 uppercase tracking-widest px-0.5">
              <span>Safe</span>
              <span>Moderate</span>
              <span>Critical</span>
            </div>
          </div>
        </div>
      </StatWidget>

    </aside>
  );
}
