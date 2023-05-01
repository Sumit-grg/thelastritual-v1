const info = document.getElementById("info");
const castCrew = document.getElementById("castcrew");
const home = document.getElementById("home");

const mainHome = document.getElementsByClassName("main-home")[0];

window.onload = ()=>{
  home.style.borderBottom = "2px solid rgb(149, 149, 149)";
}

home.addEventListener("click", ()=>{
  home.style.borderBottom = "2px solid rgb(149, 149, 149)";
  castCrew.style.removeProperty("border-bottom");
  info.style.removeProperty("border-bottom");

  mainHome.style.display = "flex";
  console.log("home click");
})

info.addEventListener("click", ()=>{
  info.style.borderBottom = "2px solid rgb(149, 149, 149)";
  castCrew.style.removeProperty("border-bottom");
  home.style.removeProperty("border-bottom");

  mainHome.style.display = "none";
  console.log("info click");

})

// mainHome.addEventListener("click", ()=>{
//   console.log("mainhome");
// })

castCrew.addEventListener("click", ()=>{
  castCrew.style.borderBottom = "2px solid rgb(149, 149, 149)";
  info.style.removeProperty("border-bottom");
  home.style.removeProperty("border-bottom");
  console.log("castcrew click");
})