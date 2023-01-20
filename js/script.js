const scroll_div = document.querySelectorAll(".items");
const divScroll = document.querySelector(".container");
const scroll_con = document.querySelector(".about-page");
const about_div_scroll = document.querySelector(".about-title");
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  window.pageYOffset > 100
   ? nav.classList.add("nav_fixed")
   : nav.classList.remove("nav_fixed");

  if (window.pageYOffset >= 481) {
    divScroll.scrollTo(0, 482);
  } else {
    divScroll.style.position = "static";
  }
});

//about_div_scroll;

  about_div_scroll.addEventListener("mousewheel", (e) => {
    e.preventDefault();
    scroll_con.scrollTop += e.deltaY;

    if (
      scroll_con.scrollTop + scroll_con.clientHeight >=
      scroll_con.scrollHeight
    ) {
      window.scrollTo(0, 800);
    }
  });
