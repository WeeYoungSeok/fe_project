window.addEventListener("scroll", function () {
  const scrollTopBtn = document.querySelector(".scroll_top_box");
  // 스크롤 탑 버튼과 푸터 요소를 선택
  const footer = document.querySelector(".footer_box");

  // 현재 스크롤 위치 (페이지 최상단으로부터 얼마나 스크롤되었는지)
  const scrollPosition = document.documentElement.scrollTop;

  // 현재 창의 높이 (뷰포트의 높이)
  const windowHeight = window.innerHeight;

  // 푸터가 최상단으로부터 얼마나 떨어져 있는지 계산
  const footerTop = footer.offsetTop;

  // 스크롤이 최상단에 있을 경우 버튼을 숨김
  if (scrollPosition === 0) {
    scrollTopBtn.style.display = "none"; // 버튼 숨기기
  } else {
    scrollTopBtn.style.display = "flex"; // 스크롤이 되면 버튼을 표시 (flex 레이아웃)
  }

  // 버튼이 화면 하단에서 얼마나 떨어져 있는지 계산
  // 현재 스크롤 위치 + 창 높이
  // +5는 자연스러움 떄문에 추가
  const buttonBottomPosition = scrollPosition + windowHeight + 5;

  // 푸터가 보였다면
  if (buttonBottomPosition > footerTop) {
    scrollTopBtn.style.position = "sticky";
    if (buttonBottomPosition < 4217) {
      scrollTopBtn.style.bottom = `${
        windowHeight - (footerTop - scrollPosition) + 19
      }px`;
    } else {
      scrollTopBtn.style.bottom = `${
        windowHeight - (footerTop - scrollPosition) + 19 - 17
      }px`;
    }
  } else {
    // 푸터가 보이지 않는다면
    scrollTopBtn.style.position = "sticky";
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
