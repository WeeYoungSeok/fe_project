### 🌏 사이트

<hr>

- 주소
  - https://weeyoungseok.github.io/fe_project/
- 설명
  - 고양이 사진을 올려서 사용자들에게 공유하고 구독을 받는 사이트

- 메인화면

  ![화면 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fw0zld%2FbtsJemsP6Ir%2F4cBrsJGus9coxasdcN9yT1%2Fimg.png)
- 사용된 기술
    - javsscript
    - html/css

<br>

### 📁 패키지 구조

```
📁fe_project
├─ 📁css
│  ├─————————————— 🥄contents.css
│  ├─————————————— 📚footer.css
│  ├─————————————— 🥩gallery.css
│  ├─————————————— 🥘header.css
│  ├─————————————— 🎟️index.css
│  ├─————————————— ⭕️map.css
│  ├─————————————— ⭐️scroll_top.css
│  └─————————————— 🤽subscribe.css
├─ 📁img
│  ├─ 📁contents 
│  ├─ 📁footer 
│  ├─ 📁gallery 
│  ├─ 📁header 
│  ├─ 📁map 
│  ├─ 📁scroll_top 
│  └— 📁subscribe 
├─ 📁js
│  ├─ 📁footer
│  │  ├─————————————— 🎈footer.js
│  ├─ 📁gallery 
│  │  ├─————————————— 🎈gallery.js
│  ├─ 📁header 
│  │  ├─————————————— 🎈header.js
│  ├─ 📁map 
│  │  ├─————————————— 🎈map.js
│  ├─ 📁scroll_top 
│  │  ├─————————————— 🎈scroll_top.js
│  └— 📁subscribe 
│     └—————————————— 🎈subscribe.js
└─————————————— 🖥index.html
```

<br>

### 📘 배운점 및 느낀점

```plaintext
html, css를 구성하거나 코드를 짤 때 항상 스트레스를 받아왔다.
이스트소프트에서 좋은 강사님들의 강의를 들으면서 많이 발전해서 뿌듯하다.

피그마라는 좋은 사이트를 통해 퍼블리셔, 디자이너, 프론트 파트가 
서로 충돌할 일이 적어지는 장점이 있을 것 같고 픽셀 단위로 사이트의 구성을 알려줘서 너무 좋았다.

또한 javascript 코드를 짜면서 DOM이 먼저 랜더링 된 후에 코드가 적용되는 이슈도 많이 경험했고
프론트에서 api key값 이슈도 경험해 많은 도움이 됐다.
```

<br>

### 🎢 요구사항

<hr>

- 🍋 구현 설명
    - https://www.figma.com/design/s9RCnA6dSi3QHHeMDFHKE6/EST-오르미(BE)_HTML%2FCSS%2FJS?node-id=104924-12&t=DkHqKMa1PBxYw4n3-0
    - 해당 피그마 사이트를 요구사항 명세에 맞게 구현
<br>
<br>

- 📄 요구사항 명세
    - 피그마를 참고하여 페이지 구현을 합니다.
    - 모바일 화면도 고려하여 페이지 구현을 합니다.
    - 스크롤시 헤더가 고정되게 합니다. (단, 처음에는 고정된 상태가 아닙니다.)
    - 스크롤 탑 버튼을 구현합니다.
        - 스크롤 탑 버튼은 스크롤시 나타납니다.
        - 스크롤 탑 버튼은 푸터 아래로 내려가지 않습니다.
        - 스크롤 탑 버튼을 누르면 스크롤이 최상단으로 올라갑니다. (단, 부드럽게 올라가야 합니다.)
    - 구독하기 모달창
        - 이메일을 입력하고 `Subscribe` 버튼을 클릭하면 모달창이 나타납니다.
        - 이메일 유효성 검사를 진행해야 합니다. (값이 들어가지 않거나 이메일 형식이 유효하지 않으면 alert 창으로 경고 문구가 떠야합니다.)
        - 이메일이 잘 입력되었다면 모달창이 뜹니다. 이때 모달창의 `OK! I love HODU` 버튼을 클릭하면 form이 제출되고 모달창이 닫힙니다.