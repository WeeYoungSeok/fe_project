document.addEventListener("DOMContentLoaded", function () {
  let img_container = document.querySelector(".gallery_img_container");

  for (let i = 0; i < 2; i++) {
    let img_box = document.createElement("div");
    img_box.className = "gallery_img_box";
    img_container.appendChild(img_box);
    for (let j = i * 3; j < (i + 1) * 3; j++) {
      let img = document.createElement("img");
      img.src = "./img/gallery/cat_" + j + ".jpeg";
      img.className = "gallery_img";
      img_box.appendChild(img);
    }
  }
});
