/**
 * SJ (Sentinel Junction) 관제 뷰 컴포넌트입니다.
 * 건물 층별 상태와 메인 맵 뷰를 제공합니다.
 */
export default function SJView({ activeFloor }) {
  return (
    <div className="flex-1 relative flex flex-col p-10 pt-4">
      {/* Main Map/3D View Placeholder Container */}
      <div className="flex-1 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm relative overflow-hidden group shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-white/10 group-hover:text-white/40 transition-colors duration-500">
            <span className="text-8xl">🏢</span>
            <span className="text-sm font-bold tracking-[0.5em] uppercase">3D Digital Twin View - Floor {activeFloor}</span>
          </div>
        </div>
        
        {/* Decorative Corner Borders */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-white/10 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-white/10 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-white/10 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-white/10 rounded-br-3xl" />
      </div>
    </div>
  );
}
