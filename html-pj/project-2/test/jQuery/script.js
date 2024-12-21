// banner
/* 
$('#banner_close').on('click', () => {
  $('#banner').toggleClass('on');
}) 
*/

const banner = document.querySelector('#banner');
const bannerCloseBtn  = document.querySelector('#banner_close');

bannerCloseBtn.addEventListener('click', ()=> {
  banner.classList.toggle('on');
})

// tab slide
/*
const tabBtnLis = document.querySelectorAll('#tab_btn li');
const slideImg = document.querySelector('#slide_img');
tabBtnLis.forEach( (li, idx) => {
  li.addEventListener('click', ()=>{
    slideImg.style.transform = `translateX(${-70 * idx}vw)`;
  })
});
*/

$('#tab_btn li').on('click', function() {
  let index = $(this).index();
  $('#slide_img').animate({ marginLeft: `${-70 * index}vw`});
})


// sliding menu
$('#menu_open').on('click', () => {
  $('.nav_container').animate({ left:0 }, 300);
})
$('#menu_close').on('click', () => {
  $('.nav_container').animate({ left:-160 }, 300);
})