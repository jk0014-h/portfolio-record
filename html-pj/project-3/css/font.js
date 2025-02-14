(function(d) {
    var config = {
      kitId: 'can2viw',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

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
