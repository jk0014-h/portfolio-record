
export default function MenuItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      /* 
          [내비게이션 아이템 스타일 가이드] 
          - active: 흰색 배경에 푸른색 텍스트로 반전되며, 은은한 하이라이트 그림자(shadow)가 추가됩니다.
          - hover: 마우스를 올렸을 때 텍스트가 밝아지고 배경이 살짝 불투명해집니다.
      */
      className={`
        cursor-pointer px-5 py-2 rounded-lg transition-all duration-300
        text-[12px] tracking-widest font-bold uppercase select-none
        ${active
          ? "bg-white text-blue-600 shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105"
          : "text-gray-500 hover:text-gray-200 hover:bg-white/5"}
      `}
    >
      {label}
    </div>
  );
}
