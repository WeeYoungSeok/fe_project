window.addEventListener("scroll", function () {
  const scrollTopBtn = document.querySelector(".scroll_top_box");
  const footer = document.querySelector(".footer_box");
  const scrollPosition = document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const footerTop = footer.offsetTop;

  if (scrollPosition === 0) {
    scrollTopBtn.style.display = "none"; 
  } else {
    scrollTopBtn.style.display = "flex"; 
  }

  const buttonBottomPosition = scrollPosition + windowHeight + 5;

  if (buttonBottomPosition > footerTop) {
    scrollTopBtn.style.position = "fixed";
    scrollTopBtn.style.bottom = `${
        windowHeight - (footerTop - scrollPosition) + 19
      }px`;
  } else {
    scrollTopBtn.style.position = "fixed";
    scrollTopBtn.style.bottom = "19px";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.querySelector(".scroll_top_box");
  const imgElement = scrollTopBtn.querySelector(".scroll_top_img");

  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollTopBtn.addEventListener("mouseover", () => {
    if (imgElement) {
      imgElement.src = "./img/scroll_top/keyboard_arrow_up_hover.svg";
    }
  });

  scrollTopBtn.addEventListener("mouseout", () => {
    if (imgElement) {
      imgElement.src = "./img/scroll_top/keyboard_arrow_up.svg";
    }
  });
});
