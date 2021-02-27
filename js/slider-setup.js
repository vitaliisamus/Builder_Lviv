const commentsSlider = tns({
  container: '.comments',
  items: 1,
  slideBy: 1,
  autoplay: false,
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  controls: false,
  nav: true,
  navContainer: '#comments-navcontainer'
});

document.getElementById('comments_prev').onclick = function () {
  commentsSlider.goTo('prev');
};

document.getElementById('comments_next').onclick = function () {
  commentsSlider.goTo('next');
};