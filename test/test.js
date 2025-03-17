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
