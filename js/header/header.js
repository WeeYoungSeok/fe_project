window.onscroll = function () {
  let header = document.querySelector(".header_box");
  let header_logo = document.querySelector(".header_logo");
  let sticky = header.offsetTop;

  header_logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });

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