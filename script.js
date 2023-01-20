const scroll_div = document.querySelectorAll(".items");
const divScroll = document.querySelector(".container");
const scroll_con = document.querySelector(".about-page");
const about_div_scroll = document.querySelector(".about-title");

window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 481) {
    divScroll.scrollTo(0, 482);
  } else {
    divScroll.style.position = "static";
  }
});

//about_div_scroll;
function scroll_by_inner_div() {
about_div_scroll.addEventListener("mousewheel", (e) => {
  e.preventDefault();
  scroll_con.scrollTop += e.deltaY;

  if (
    scroll_con.scrollTop + scroll_con.clientHeight >=
    scroll_con.scrollHeight
  ) {
    window.scrollTo(0,800)
  }
});
}

scroll_by_inner_div();