const navbar = document.querySelector('nav');
const dark_mode = document.querySelector(".dark-mode");

window.addEventListener("scroll", () => {
  window.pageYOffset >= 60
    ? navbar.classList.add("nav_fixed")
    : navbar.classList.remove("nav_fixed");

     window.pageYOffset >= 60 ? footer() : navbar.classList.remove("nav_fixed");
     window.pageYOffset >= 150
       ? document.querySelector(".scroll-top").style.bottom = "10%"
       : document.querySelector(".scroll-top").style.bottom = "-10%";
 
});

window.onload = () => {
 const imgCon = document.querySelector(".imgBox");
 imgCon.style.right = "0px";
}


document.querySelector(".scroll-top").addEventListener('click',e=>{
  e.preventDefault();
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
});


const footer = () => {
  const getYear = new Date().getFullYear();
  document.querySelector("footer").innerHTML = `
  <p>&copy; ${getYear} create by vishal chaudhari</p>
  `;
}

const dark_classes = ".dark, .dark-mode, body , .nav_fixed";
const dark_mode_classes = document.querySelectorAll(dark_classes);
dark_mode.addEventListener('click',()=>dark_mode_classes.forEach(items=>items.classList.toggle("active")));