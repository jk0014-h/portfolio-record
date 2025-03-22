document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const indicator = document.querySelector(".menu-indicator");

    // 초기 위치를 첫 번째 메뉴 아래에 배치
    let activeItem = document.querySelector(".menu-item.active");
    if (activeItem) {
        indicator.style.left = activeItem.offsetLeft + "px";
        indicator.style.width = activeItem.offsetWidth + "px";
    }

    // 메뉴 항목에 마우스를 올리면 애니메이션 실행
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            indicator.style.left = item.offsetLeft + "px";
            indicator.style.width = item.offsetWidth + "px";
        });
    });

    // 마우스를 떼면 원래 위치로 돌아가기
    menuItems.forEach(item => {
        item.addEventListener("mouseleave", function () {
            if (activeItem) {
                indicator.style.left = activeItem.offsetLeft + "px";
                indicator.style.width = activeItem.offsetWidth + "px";
            }
        });

        // 클릭 시 활성화 변경
        item.addEventListener("click", function () {
            activeItem.classList.remove("active");
            item.classList.add("active");
            activeItem = item;
        });
    });
});




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
    }, { threshold: 0.6 }); // 요소의 50% 이상이 보일 때 감지

    // 모든 .sec-2-2-box 요소 관찰
    boxes.forEach((box) => {
        observer.observe(box);
    });
});

    // ✅ 추가: sticky 해제 로직
    window.addEventListener(
        "scroll",
        function () {
            let sec2 = document.querySelector(".sec-2-2");
            let sec3 = document.querySelector(".sec-3");
    
            let sec2Bottom = sec2.getBoundingClientRect().bottom;
            if (sec2Bottom <= window.innerHeight) {
                sec2.classList.remove("sticky");
                sec3.scrollIntoView({ behavior: "smooth" });
    
                // ✅ 이벤트 리스너를 한 번만 실행하고 제거
                window.removeEventListener("scroll", arguments.callee);
            }
        },
        { once: true }
    );
    

    
    let currentMode = 1;

    function toggleImage(mode = null) {
        const front1Default = document.querySelectorAll(".front-2-1-fr-1");
        const front1Hidden = document.querySelectorAll(".front-2-2-fr-1");
        const front2Default = document.querySelectorAll(".front-2-1-fr-2");
        const front2Hidden = document.querySelectorAll(".front-2-2-fr-2");
        const textOne = document.querySelector(".text-one");
        const textTwo = document.querySelector(".text-two");
        const buttons = document.querySelectorAll(".switch-btn");
    
        if (mode === null) {
            currentMode = currentMode === 1 ? 2 : 1;
        } else {
            currentMode = mode;
        }
    
        // 모든 요소를 숨김 (opacity 0)
        [...front1Default, ...front1Hidden, ...front2Default, ...front2Hidden, textOne, textTwo].forEach(item => {
            item.classList.add("hidden");
        });
    
        // 새로운 요소 표시 (opacity 1)
        setTimeout(() => {
            if (currentMode === 1) {
                front1Default.forEach(img => img.classList.remove("hidden"));
                front2Default.forEach(img => img.classList.remove("hidden"));
                textOne.classList.remove("hidden");
            } else {
                front1Hidden.forEach(img => img.classList.remove("hidden"));
                front2Hidden.forEach(img => img.classList.remove("hidden"));
                textTwo.classList.remove("hidden");
            }
        }, 500); // 애니메이션이 부드럽게 적용되도록 약간의 지연 추가
    
        // 버튼 스타일 변경
        buttons[0].style.backgroundColor = currentMode === 1 ? "red" : "gray";
        buttons[1].style.backgroundColor = currentMode === 2 ? "red" : "gray";
    }
    
    // 첫 화면에서 첫 번째 버튼이 빨간색이 되도록 설정
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".switch-btn:first-child").style.backgroundColor = "red";
    });
    
    // 5초마다 자동 변경
    setInterval(() => toggleImage(), 5000);
    
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(".sec-2-2-box");
    
        function handleScroll() {
            let scrollY = window.scrollY;
    
            sections.forEach((section, index) => {
                let sectionTop = section.offsetTop;
                let sectionHeight = section.offsetHeight;
    
                if (scrollY + window.innerHeight >= sectionTop + sectionHeight / 3) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        }
    
        window.addEventListener("scroll", handleScroll);
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll(".sec-2-2-box"); // 감지할 섹션들
        const menuItems = document.querySelectorAll(".section-controll li"); // 메뉴 아이템들
    
        const observerOptions = {
            root: null, // 뷰포트 기준
            threshold: 0.5, // 50% 이상 보일 때 감지
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    menuItems.forEach((item) => item.style.backgroundColor = ""); // 초기화
    
                    if (entry.target.classList.contains("sec-2-2-1")) {
                        menuItems[0].style.backgroundColor = "red"; // Display 활성화
                    } else if (entry.target.classList.contains("sec-2-2-2")) {
                        menuItems[1].style.backgroundColor = "red"; // Controller 활성화
                    } else if (entry.target.classList.contains("sec-2-2-3")) {
                        menuItems[2].style.backgroundColor = "red"; // Others 활성화
                    }
                }
            });
        }, observerOptions);
    
        sections.forEach((section) => observer.observe(section));
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.querySelector(".item-list-container");
        const leftBtn = document.querySelector(".scroll-btn.left");
        const rightBtn = document.querySelector(".scroll-btn.right");
        const scrollAmount = 420; // 한번에 이동할 거리 (아이템 크기)
    
        leftBtn.addEventListener("click", () => {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    
        rightBtn.addEventListener("click", () => {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    