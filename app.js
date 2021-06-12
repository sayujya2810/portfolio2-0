//smooth scrolling

const links = document.querySelectorAll("nav ol a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

//end Smooth scrolling

var darkModeToggle = document.querySelector("#dark");
var main = document.querySelector("#mainDiv");
var nav = document.querySelector("nav");

darkModeToggle.checked = false;


darkModeToggle.addEventListener("click", ()=>{
  
  if(darkModeToggle.checked == true)
  {
    nav.classList.toggle("shadowEffect");  
  }
  else
  {
    nav.classList.remove("shadowEffect");
  }
  
  main.classList.toggle("dark-mode");
})

// responsive Nav Hamburger