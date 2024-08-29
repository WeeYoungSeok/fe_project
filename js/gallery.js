document.addEventListener("DOMContentLoaded", function () {
  const img_container = document.querySelector(".gallery_img_container");
  const show_more_button = document.querySelector(".more_button");

  for (let i = 0; i < 2; i++) {
    // let img_box = document.createElement("div");
    // img_box.className = "gallery_img_box";
    // img_container.appendChild(img_box);
    for (let j = i * 3; j < (i + 1) * 3; j++) {
      let img_box = document.createElement("div");
    img_box.className = "gallery_img_box";
      const img = document.createElement("img");
      img.src = "./img/gallery/cat_" + j + ".jpeg";
      img.className = "gallery_img";
      img_container.appendChild(img_box);
      img_box.appendChild(img);
    }
  }

  let k = 6
  show_more_button.addEventListener("click", () => {
    // const img_box = document.createElement("div");
      // img_box.className = "gallery_img_box";
      // img_container.appendChild(img_box);
      for (let i = k; i < k + 3; i++) {
        const img_box = document.createElement("div");
      img_box.className = "gallery_img_box";
      img_container.appendChild(img_box);
        let img = document.createElement("img");
        img.src = "./img/gallery/cat_" + i + ".jpeg";
        img.className = "gallery_img";
        img_container.appendChild(img_box);
      img_box.appendChild(img);
      }
      k += 3
      if (k == 15) {
        k = 6
      }
  })
});
