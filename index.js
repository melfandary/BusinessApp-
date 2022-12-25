function expandNavbar() {
  var nav_links = document.getElementById("nav_links");
  if (nav_links.style.display == "none") {
    nav_links.style.display = "block";
  } else {
    nav_links.style.display = "none";
  }
}

function display_info1() {
  var text = document.getElementById("section3_text");
  text.innerHTML =
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ullam, autem tempore quod.";
}

function display_info2() {
  var text = document.getElementById("section3_text");
  text.innerHTML = "text2";
}
