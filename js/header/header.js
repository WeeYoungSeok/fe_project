window.onscroll = function () {
  let header_logo = document.querySelector(".header_logo");

  header_logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
};