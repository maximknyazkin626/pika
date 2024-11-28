let tapObject = document.getElementById("sandshrew");
let counter = Number(document.getElementById("counter").textContent);

function changeSize() {
  let currentWidth = parseInt(tapObject.style.width);
  if (counter % 2 !== 0) {
    tapObject.style.width + "10px";
  } else {
    tapObject.style.width - "10px";
  }
}

function tap() {
  counter++;
  document.getElementById("counter").textContent = counter;
  changeSize();
}

tapObject.onclick = tap;

// while (clickerCounter > 0) {
//   if (clickerCounter % 2 !== 0) {
//       return cookie.width += 20;
//   } else {
//       return cookie.width -= 20;
