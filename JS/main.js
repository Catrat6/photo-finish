// JavaScript code to handle navigation and content display

function showContent(event) {
  const targetId = event.target.getAttribute("data-target");

  document.querySelectorAll(".hero-box").forEach((div) => {
    div.classList.remove("active");
  });

  document.getElementById(targetId).classList.add("active");
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", showContent);
});
