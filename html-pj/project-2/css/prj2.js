console.log("JavaScript 파일이 연결되었습니다!");

// sliding menu
$('#menu_open').on('click', () => {
  $('.nav_container').animate({ left:0 }, 300);
})
$('#menu_close').on('click', () => {
  $('.nav_container').animate({ left:-160 }, 300);
})


$('#tab_btn li').on('click', function() {
  let index = $(this).index();
  $('#slide_img').animate({ marginLeft: `${-70 * index}vw`});
})



// sliding menu
$('#menu_open img').on('click', () => {
  $('.nav_container').animate({ left:0 }, 300);
})
$('#menu_close').on('click', () => {
  $('.nav_container').animate({ left:-160 }, 300);
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤
  });
}
