const toggleMenu = () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

let Logo = document.getElementById("logo")
// console.log(Logo)


window.addEventListener("resize", function() {
  if (window.innerWidth > 768) nav.classList.remove("active");
});