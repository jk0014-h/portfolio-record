/**
 * 원형 대기질 지수(AQI) 게이지 컴포넌트입니다.
 * 수치(value)에 따라 게이지의 채워짐 정도와 색상이 동적으로 변합니다.
 */
export default function AQIGauge({ value = 98, label = "Excellent" }) {
  const radius = 60;
  const stroke = 8;
  const padding = 20; // 빛 번짐 효과가 잘리지 않도록 여백 추가
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // 퍼센트에 따른 오프셋 계산 (0일 때 전체 circumference, 100일 때 0)
  const strokeDashoffset = circumference - (value / 100) * circumference;

  // 수치에 따른 색상 결정 (디자인 수정 시 여기서 색상 코드를 바꾸세요)
  const getStatusColor = (val) => {
    if (val >= 90) return "#10b981"; // Excellent (초록색)
    if (val >= 70) return "#3b82f6"; // Good (파란색)
    if (val >= 40) return "#f59e0b"; // Fair (오렌지색)
    return "#ef4444";               // Poor (빨간색)
  };

  const statusColor = getStatusColor(value);

  return (
    <div className="flex flex-col items-center justify-center relative py-1">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* 바탕 원 (회색 트랙) */}
        <circle
          stroke="rgba(255, 255, 255, 0.05)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* 진행 원 (색상 게이지) - 글로우(번짐) 효과를 완벽히 제거하기 위해 filter: none 설정 */}
        <circle
          stroke={statusColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ 
            strokeDashoffset, 
            transition: 'stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s ease',
            filter: 'none',     // 빛 번짐 차단
            boxShadow: 'none'   // 그림자 차단
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-300"
        />
      </svg>

      {/* 중앙 수치 및 라벨 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter opacity-50">AQI</span>
        <span className="text-3xl font-black text-white leading-none my-0.5">{value}</span>
        <div 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.03)', 
            borderColor: 'rgba(255, 255, 255, 0.1)' 
          }} 
          className="px-2 py-0.5 rounded-full border"
        >
          <span style={{ color: statusColor }} className="text-[8px] font-bold uppercase tracking-widest leading-none">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
