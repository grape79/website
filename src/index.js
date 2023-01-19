let btn = document.getElementById("btn");

btn.onclick = function () {
  console.log("clicked");
  document.body.classList.toggle("dark-theme");
};
