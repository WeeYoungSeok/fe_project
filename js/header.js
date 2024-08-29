window.onscroll = function () {
  const header_logo = document.querySelector(".header_logo");

  header_logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".m_navbar_box").addEventListener("click", () => {
    document.querySelector(".navbar_box").classList.toggle("active");
    document.querySelector(".m_overlay").classList.toggle("active");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";  // 추가된 부분
  });

  let removeActive = () => {
    document.querySelector(".navbar_box").classList.remove("active");
    document.querySelector(".m_overlay").classList.remove("active");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";  // 추가된 부분
  };

  document
    .querySelector(".m_arrow_rigth_img")
    .addEventListener("click", removeActive);
  document.querySelector(".m_overlay").addEventListener("click", removeActive);
});
