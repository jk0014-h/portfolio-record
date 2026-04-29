/**
 * BS (Base System) 뷰 컴포넌트입니다.
 */
export default function BSView() {
  return (
    <div className="flex-1 relative flex flex-col p-10 pt-4">
      <div className="flex-1 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm flex items-center justify-center relative overflow-hidden group shadow-2xl">
        <div className="flex flex-col items-center gap-4 text-white/5 group-hover:text-white/20 transition-colors duration-500">
          <span className="text-8xl">🔋</span>
          <span className="text-sm font-bold tracking-[0.5em] uppercase">Core Infrastructure: Stable</span>
        </div>
      </div>
    </div>
  );
}
