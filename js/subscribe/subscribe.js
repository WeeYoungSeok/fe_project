document.addEventListener("DOMContentLoaded", function () {
  function emailCheck(email_address) {
    email_regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,4}$/i;
    if (!email_regex.test(email_address)) {
      return false;
    } else {
      return true;
    }
  }

  const subscribeButton = document.querySelector(".subscribe_button");
  const thankBox = document.querySelector(".thank_box");
  const okHoduButton = document.querySelector(".thank_button");

  // Subscribe 버튼 클릭 시 .thank_box 나타나게 설정
  subscribeButton.addEventListener("click", function (event) {
    const email = document.getElementById("email");
    const emailValeu = email.value;
    if (!emailCheck(emailValeu)) {
      alert("올바른 이메일을 입력해주세요.");
      event.preventDefault(); // 기본 동작 방지
      return; // 함수 종료
    }
    event.preventDefault(); // 폼 제출을 막기 위해 기본 동작 방지
    thankBox.style.display = "flex"; // .thank_box를 화면에 표시
  });

  // 윈도우 클릭 시 .thank_box 외부 클릭 감지
  window.addEventListener("click", function (event) {
    // 클릭한 요소가 .thank_box 또는 그 자식 요소가 아니라면 .thank_box 숨기기
    if (
      !thankBox.contains(event.target) &&
      !subscribeButton.contains(event.target)
    ) {
      thankBox.style.display = "none"; // .thank_box 숨기기
    }
  });

  okHoduButton.addEventListener("click", () => {
    thankBox.style.display = "none";
    event.preventDefault();
    // 폼 제출을 하면 새로고침 되므로 새로고침을 하지 않고
    // 값을 전달하는 방법은 비동기뿐인 것 같다.

    // 새로고침을 원하지 않는다면 아래 코드 주석 풀기
    const email = document.getElementById("email");
    const email_value = email.value;
    console.log(email_value);
    
    

    fetch("./index.html?email=" + email_value, {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      }) // 통신이 성공했을 때!
      .catch((error) => {
        console.log(error);
      }); // 통신이 실패했을 때!
  });
});
