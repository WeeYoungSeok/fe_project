window.onscroll = function () {
  let header = document.querySelector(".header_box");
  let sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header_box');
  header.style.left = -window.pageXOffset + 'px';
});