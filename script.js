

const modal = document.getElementById("howdyModalid");
const span = document.getElementsByClassName("close")[0];

setTimeout(function () {

  modal.style.display = "block"}

,1000);

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    setTimeout
  if (event.target == modal) {
    modal.style.display = "none";
  }
}