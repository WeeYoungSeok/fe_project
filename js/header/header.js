window.onscroll = function () {
  var header = document.querySelector(".header_box");
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};