document.addEventListener("DOMContentLoaded", function () {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            } else {
                entry.target.style.opacity = "0"; 
            }
        });
    }, { threshold: 0.1 }); // 더 부드럽게 동작하도록 0.1로 유지

    let boxes = document.querySelectorAll('.sec-2-2-box');
    boxes.forEach((box) => {
        observer.observe(box);
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".menu-title");

  titles.forEach(title => {
    title.addEventListener("click", () => {
      const parent = title.parentElement;

      // 이미 열려 있으면 닫기
      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
      } else {
        // 다른 메뉴는 닫기
        document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
        parent.classList.add("active");
      }
    });
  });
});
