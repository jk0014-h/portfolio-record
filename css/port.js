document.querySelectorAll('.title_wrapper').forEach(function(box) {
    box.addEventListener('mousemove', function(e) {
      let x = e.pageX - box.offsetLeft;
      let y = e.pageY - box.offsetTop;
  
      document.querySelectorAll('span').forEach(function(span) {
        span.style.left = x + 'px';
        span.style.top = y + 'px';
      });
    });
  });