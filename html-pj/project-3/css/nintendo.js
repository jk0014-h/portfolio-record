document.addEventListener("DOMContentLoaded", function () {
    // 모든 .sec-2-2-box 요소 선택
    const boxes = document.querySelectorAll('.sec-2-2-box');

    // IntersectionObserver 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"; // 요소가 보이면 opacity를 1로 설정
            } else {
                entry.target.style.opacity = "0"; // 요소가 보이지 않으면 opacity를 0으로 설정
            }
        });
    }, { threshold: 0.5 }); // 요소의 50% 이상이 보일 때 감지

    // 모든 .sec-2-2-box 요소 관찰
    boxes.forEach((box) => {
        observer.observe(box);
    });
});

    // ✅ 추가: sticky 해제 로직
    window.addEventListener("scroll", function () {
        let sec2 = document.querySelector(".sec-2-2");
        let sec3 = document.querySelector(".sec-3"); // 다음 섹션

        let sec2Bottom = sec2.getBoundingClientRect().bottom;
        if (sec2Bottom <= window.innerHeight) {
            sec2.classList.remove("sticky");
            sec3.scrollIntoView({ behavior: "smooth" });
        }
    });

    
    let currentMode = 1; // 1: Joy-Con, 2: Pro Controller

    function toggleImage(mode = null) {
        // 요소 선택
        const front1Default = document.querySelectorAll(".front-2-1-fr-1"); // Joy-Con 기본 이미지
        const front1Hidden = document.querySelectorAll(".front-2-2-fr-1");  // Joy-Con 숨겨진 이미지
        const front2Default = document.querySelectorAll(".front-2-1-fr-2"); // Pro Controller 기본 이미지
        const front2Hidden = document.querySelectorAll(".front-2-2-fr-2");  // Pro Controller 숨겨진 이미지
        const textOne = document.querySelector(".text-one"); // Joy-Con 텍스트
        const textTwo = document.querySelector(".text-two"); // Pro Controller 텍스트
    
        // mode가 null이면 자동으로 전환, 아니면 버튼으로 전달된 mode 사용
        if (mode === null) {
            currentMode = currentMode === 1 ? 2 : 1;
        } else {
            currentMode = mode;
        }
    
        // 🔹 모든 요소 초기화 (Pro Controller가 고정되지 않도록 수정)
        front1Default.forEach(img => img.classList.add("hidden"));
        front1Hidden.forEach(img => img.classList.add("hidden"));
        front2Default.forEach(img => img.classList.add("hidden"));
        front2Hidden.forEach(img => img.classList.add("hidden"));
        textOne.classList.add("hidden");
        textTwo.classList.add("hidden");
    
        // 🔹 모드에 따라 이미지와 텍스트를 올바르게 표시
        if (currentMode === 1) {
            // Joy-Con 모드
            front1Default.forEach(img => img.classList.remove("hidden"));
            front2Default.forEach(img => img.classList.remove("hidden"));
            textOne.classList.remove("hidden");
        } else {
            // Pro Controller 모드
            front1Hidden.forEach(img => img.classList.remove("hidden"));
            front2Hidden.forEach(img => img.classList.remove("hidden"));
            textTwo.classList.remove("hidden");
        }
    }
    
    // 버튼 클릭 이벤트 추가 (1번, 2번 버튼에 클릭 이벤트 연결)
    document.querySelectorAll(".switch-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => toggleImage(index + 1));
    });
    
    // 5초마다 자동 변경
    setInterval(() => toggleImage(), 5000);
    