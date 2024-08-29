document.addEventListener("DOMContentLoaded", function () {
  let thankBoxBool = false;
  if (thankBoxBool) {
    thankBox.style.display = "flex";
  }

  function isEmpty(email_address) {
    return !(email_address == null || email_address === "");

  }

  function emailCheck(email_address) {
    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(email_address);
  }

  const subscribeButton = document.querySelector(".subscribe_button");
  const thankBox = document.querySelector(".thank_box");
  const okHoduButton = document.querySelector(".thank_button");

  subscribeButton.addEventListener("click", function (event) {
    const email = document.getElementById("email");
    const emailValeu = email.value;
    if (!isEmpty(emailValeu)) {
      alert("이메일을 입력해주세요.");
      event.preventDefault(); 
      return; 
    }

    if (!emailCheck(emailValeu)) {
      alert("올바른 이메일을 입력해주세요.");
      event.preventDefault(); 
      return; 
    }
    event.preventDefault(); 
    thankBox.style.display = "flex"; 
    thankBoxBool = !thankBoxBool;
  });

  window.addEventListener("click", function (event) {
    if (
      !thankBox.contains(event.target) &&
      !subscribeButton.contains(event.target)
    ) {
      thankBox.style.display = "none";
    }
  });

  okHoduButton.addEventListener("click", (event) => {
    thankBox.style.display = "none";
    event.preventDefault();
    const email = document.getElementById("email");
    const email_value = email.value;

    // 폼 제출 이후 새로고침을 막고 데이터 제출을 위한 비동기 통신
    fetch("./index.html?email=" + email_value, {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      }) 
      .catch((error) => {
        console.log(error);
      });
  });
});
