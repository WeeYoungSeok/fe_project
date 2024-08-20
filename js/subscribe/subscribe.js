document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.querySelector('.subscribe_button');
    const thankBox = document.querySelector('.thank_box');
    const okHoduButton = document.querySelector('.thank_button');
  
    // Subscribe 버튼 클릭 시 .thank_box 나타나게 설정
    subscribeButton.addEventListener('click', function (event) {
      event.preventDefault(); // 폼 제출을 막기 위해 기본 동작 방지
      thankBox.style.display = 'flex'; // .thank_box를 화면에 표시
    });
  
    // 윈도우 클릭 시 .thank_box 외부 클릭 감지
    window.addEventListener('click', function (event) {
      // 클릭한 요소가 .thank_box 또는 그 자식 요소가 아니라면 .thank_box 숨기기
      if (!thankBox.contains(event.target) && !subscribeButton.contains(event.target)) {
        thankBox.style.display = 'none'; // .thank_box 숨기기
      }
    });

    okHoduButton.addEventListener('click', () => {
        thankBox.style.display = 'none';
    })
  });