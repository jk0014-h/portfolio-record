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
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>아코디언 메뉴 예제</title>

<style>
/* --- 기본 메뉴 구조 --- */
.menu {
  width: 250px;
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  border-bottom: 1px solid #ddd;
}

/* --- 상위 메뉴 --- */
.menu-title {
  display: block;
  padding: 12px 16px;
  background: #f5f5f5;
  cursor: pointer;
  transition: background 0.3s;
}

.menu-title:hover {
  background: #eaeaea;
}

/* --- 하위 메뉴 --- */
.submenu {
  max-height: 0;
  overflow: hidden;
  background: #fafafa;
  transition: max-height 0.4s ease;
}

.submenu li {
  padding: 10px 20px;
  border-top: 1px solid #eee;
  cursor: pointer;
  transition: background 0.3s;
}

.submenu li:hover {
  background: #f0f0f0;
}

/* --- 클릭 시 활성화 상태 --- */
.menu-item.active > .submenu {
  max-height: 300px; /* 펼쳐질 최대 높이 */
}
</style>
</head>

<body>
  <div class="menu">
    <ul>
      <li class="menu-item">
        <span class="menu-title">서울</span>
        <ul class="submenu">
          <li>물류현황</li>
          <li>재고정보</li>
          <li>배송상태</li>
        </ul>
      </li>
      <li class="menu-item">
        <span class="menu-title">부산</span>
        <ul class="submenu">
          <li>물류현황</li>
          <li>재고정보</li>
        </ul>
      </li>
      <li class="menu-item">
        <span class="menu-title">대전</span>
        <ul class="submenu">
          <li>배송상태</li>
        </ul>
      </li>
    </ul>
  </div>

  <script>
  // ✅ JS : 클릭 시 하위 메뉴 열기/닫기
  document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".menu-title");

    titles.forEach(title => {
      title.addEventListener("click", () => {
        const parent = title.parentElement;

        // 이미 열려 있으면 닫기
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        } else {
          // 다른 메뉴 닫기
          document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
          // 클릭한 메뉴만 열기
          parent.classList.add("active");
        }
      });
    });
  });
  </script>
</body>
</html>
