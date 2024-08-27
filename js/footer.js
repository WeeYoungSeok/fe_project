document.addEventListener("DOMContentLoaded", function () {
  const footer_img_container = document.querySelector(".footer_icon");

  let img_src_prefix = "./img/footer/";
  let img_src_subfix = ".png";
  for (let i = 0; i < 4; i++) {
    let footer_img_box = document.createElement("div");
    footer_img_box.className = "footer_img_box";
    let img = document.createElement("img");
    img.className = "footer_icon_img";
    switch (i) {
      case 0:
        img.src = img_src_prefix + "blog" + img_src_subfix;
        break;
      case 1:
        img.src = img_src_prefix + "instagram" + img_src_subfix;
        break;
      case 2:
        img.src = img_src_prefix + "facebook" + img_src_subfix;
        break;
      case 3:
        img.src = img_src_prefix + "youtube" + img_src_subfix;
        break;
    }
    footer_img_box.appendChild(img);
    footer_img_container.appendChild(footer_img_box);
  }
});
