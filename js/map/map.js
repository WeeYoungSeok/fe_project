document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  var options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.4423464, 126.5714548), //지도의 중심좌표.
    level: 4, //지도의 레벨(확대, 축소 정도)
  };

  var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  // 지도를 클릭한 위치에 표출할 마커입니다
  var marker = new kakao.maps.Marker({
    // 지도 중심좌표에 마커를 생성합니다
    position: map.getCenter(),
  });

  var mapTypeControl = new kakao.maps.MapTypeControl();

  // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
  // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  function zoomIn() {
    map.setLevel(map.getLevel() - 1, { animate: true }); // 애니메이션 활성화
  }

  function zoomOut() {
    map.setLevel(map.getLevel() + 1, { animate: true }); // 애니메이션 활성화
  }

  function resetMap() {
    map.setCenter(new kakao.maps.LatLng(33.4423464, 126.5714548)); // 초기 중심 좌표로 이동
    // map.setLevel(4, {animate: true}); // 초기 확대 레벨로 설정
  }

  document.getElementById("zoomInButton").onclick = zoomIn;
  document.getElementById("zoomOutButton").onclick = zoomOut;
  document.getElementById("resetButton").onclick = resetMap;

  map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMRIGHT, true);

  marker.setMap(map);

  // 풀스크린 기능 추가
  document.getElementById("full_screen_button").onclick = function () {
    toggleFullscreen(container);
  };

  function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }

});
