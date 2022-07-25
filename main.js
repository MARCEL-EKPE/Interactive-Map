"use strit";
const detailsBox = document.getElementById("details-box");
document.addEventListener("mouseover", function (e) {
  if (e.target.tagName === "path") {
    let content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  } else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  detailsBox.style.top = y + 20 + "px";
  detailsBox.style.left = x + "px";
};
