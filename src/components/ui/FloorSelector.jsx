/**
 * 구역(Block)과 층(Floor)을 그룹화하여 시각적으로 보여주는 계층형 선택기입니다.
 */
export default function FloorSelector({ activeFloor, onFloorChange }) {
  // 구역별 층수 데이터 구조 (층수를 추가하거나 이름을 바꾸고 싶을 때 여기를 수정하세요)
  const sectors = [
    { id: "1B", floors: ["1F", "2F", "3F"] },
    { id: "3B", floors: ["1F", "2F", "3F"] },
    { id: "5B", floors: ["1F", "2F", "3F"] },
  ];

  return (
    <div className="flex flex-col gap-6">
      {sectors.map((sector) => (
        <div key={sector.id} className="flex flex-col gap-2">
          {/* 구역 레이블 (1B, 3B, 5B) */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1 h-3 bg-blue-500 rounded-full" />
            <span className="text-[10px] font-black text-gray-500 tracking-widest uppercase">
              Section {sector.id}
            </span>
          </div>

          {/* 해당 구역의 층수 버튼들 */}
          <div className="flex flex-col gap-1.5 pl-3 border-l border-white/5">
            {sector.floors.map((floor) => {
              const locationId = `${sector.id}${floor}`; // 예: "1B1F"
              const isActive = activeFloor === locationId;

              return (
                <button
                  key={locationId}
                  onClick={() => onFloorChange(locationId)}
                  className={`
                    w-16 h-9 flex items-center justify-center rounded-lg transition-all duration-300
                    text-[11px] font-bold tracking-tighter select-none
                    ${isActive
                      ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/50 scale-105 z-10" // 선택된 상태: 블루 강조 및 그림자
                      : "glass-dark text-gray-400 hover:text-gray-200 border border-white/5 hover:border-white/10"} // 일반 상태: 유리 효과 및 흐린 텍스트
                  `}
                >
                  {floor}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
