/**
 * 대시보드 위젯의 기본 틀이 되는 컴포넌트입니다.
 * 글래스모피즘 효과가 적용된 투명 카드를 렌더링합니다.
 */
export default function StatWidget({ title, children, className = "" }) {
  /* 
      [위젯 레이아웃 설정] 
      - glass: global.css에 정의된 유리 효과(blur 12px)를 사용합니다.
      - overflow-hidden: 내부 요소가 위젯의 둥근 모서리를 넘어가지 않게 합니다.
  */
  return (
    <div className={`glass rounded-xl overflow-hidden flex flex-col ${className}`}>
      {title && (
        <div className="px-4 py-2 border-b border-white/5 bg-white/5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {title}
          </span>
        </div>
      )}
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
}
