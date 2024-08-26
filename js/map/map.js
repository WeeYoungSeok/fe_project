document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("map"); 
  let options = {
    center: new kakao.maps.LatLng(33.4423464, 126.5714548), 
    level: 4, 
  };

  let map = new kakao.maps.Map(container, options); 
  let marker = new kakao.maps.Marker({
    position: map.getCenter(),
  });

  let mapTypeControl = new kakao.maps.MapTypeControl();

  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  function zoomIn() {
    map.setLevel(map.getLevel() - 1, { animate: true }); 
  }

  function zoomOut() {
    map.setLevel(map.getLevel() + 1, { animate: true });
  }

  function resetMap() {
    map.setCenter(new kakao.maps.LatLng(33.4423464, 126.5714548)); 
  }

  document.getElementById("zoomInButton").onclick = zoomIn;
  document.getElementById("zoomOutButton").onclick = zoomOut;
  document.getElementById("resetButton").onclick = resetMap;

  let windowWidth = window.innerWidth;
  if (windowWidth >= 541) {
    map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMRIGHT, true);
  } else {
    map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMLEFT, true);
  }

  marker.setMap(map);

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

    function changeMapType(mapType) {
      if (mapType === "roadmap") {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        document.getElementById("roadmapButton").classList.add("active");
        document.getElementById("skyviewButton").classList.remove("active");
      } else if (mapType === "skyview") {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        document.getElementById("roadmapButton").classList.remove("active");
        document.getElementById("skyviewButton").classList.add("active");
      }
    }
  
    document.getElementById("roadmapButton").onclick = function () {
      changeMapType("roadmap");
    };
  
    document.getElementById("skyviewButton").onclick = function () {
      changeMapType("skyview");
    };
});
