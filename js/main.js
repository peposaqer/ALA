// $(document).ready(function () {
//   $(".card-1 .fa-chevron-right").click(function () {
//     $(".card-1 .card-text").css("display", "block");
//     // $(".card-1 .card-text").show(20000);
//     $(".card-1 .fa-chevron-right").css("display", "none");
//     $(".card-2 .card-text").css("transition", "ease-in-out .3s");
//     $(".card-1 .fa-chevron-down").css("display", "inline");
//     $(".card-1 .card h5").css("border-bottom", "1px solid #E5E5E5");
//   });
// });

$(document).ready(function () {
  $(".card-1 .fa-chevron-down").click(function () {
    $(".card-1 .card-text").slideUp(500);
    // $(".card-1 .card-text").css("display", "none");
    $(".card-1 .fa-chevron-down").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-1 .fa-chevron-right").css("display", "inline");
    $(".card-1 .card h5").css("border-bottom", "1px solid #E5E5E5 !impotrant");
  });
});

// $(document).ready(function () {
//   $(".card-3 .fa-chevron-right").click(function () {
//     $(".card-3 .card-text").css("display", "block");
//     $(".card-3 .fa-chevron-right").css("display", "none");
//     $(".card-2 .card-text").css("transition", "ease-in-out .3s");
//     $(".card-3 .fa-chevron-down").css("display", "inline");
//     $(".card-3 .card h5").css("border-bottom", "1px solid #E5E5E5");
//   });
// });

$(document).ready(function () {
  $(".card-3 .fa-chevron-down").click(function () {
    $(".card-3 .card-text").slideUp(500);
    $(".card-3 .fa-chevron-down").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-3 .fa-chevron-right").css("display", "inline");
    $(".card-3 .card h5").css("border-bottom", "none");
  });
});

// $(document).ready(function () {
//   $(".card-4 .fa-chevron-right").click(function () {
//     $(".card-4 .card-text").css("display", "block");
//     $(".card-4 .fa-chevron-right").css("display", "none");
//     $(".card-2 .card-text").css("transition", "ease-in-out .3s");
//     $(".card-4 .fa-chevron-down").css("display", "inline");
//     $(".card-4 .card h5").css("border-bottom", "1px solid #E5E5E5");
//   });
// });

$(document).ready(function () {
  $(".card-4 .fa-chevron-down").click(function () {
    $(".card-4 .card-text").slideUp(500);
    $(".card-4 .fa-chevron-down").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-4 .fa-chevron-right").css("display", "inline");
    $(".card-4 .card h5").css("border-bottom", "none");
  });
});

// Animation on Scroll
// $(document).ready(function () {
//   AOS.init({
//     // Global settings:
//     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
//     initClassName: "aos-init", // class applied after initialization
//     animatedClassName: "aos-animate", // class applied on animation
//     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     offset: 120, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 1500, // values from 0 to 3000, with step 50ms
//     easing: "ease", // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
//   });
// });

$(".flex-img img").hover(
  function () {
    $(".flex-img .img-1").css("box-shadow", "none");
    $(".flex-img .img-1").css("bottom", "0");
    $(".flex-img .img-1").css("border-radius", "0");
    $(".flex-img img").css("transition", "ease-in-out .3s");
  },
  function () {
    $(".flex-img .img-1").css("box-shadow", "2px 5px 20px #000000");
    $(".flex-img .img-1").css("bottom", "3rem");
    $(".flex-img .img-1").css("border-radius", "28px");
    $(".flex-img img").css("transition", "ease-in-out .3s");
  }
);

$(".card-1 ").on("mouseenter", function () {
  $(".card-1 .card-text").slideDown(500);
  $(".card-1 .fa-chevron-right").css("display", "none");
  $(".card-1 .fa-chevron-down").css("display", "block");
});

$(".card-3 ").on("mouseenter", function () {
  $(".card-3 .card-text").slideDown(500);
  $(".card-3 .fa-chevron-right").css("display", "none");
  $(".card-3 .fa-chevron-down").css("display", "block");
});

$(".card-4 ").on("mouseenter", function () {
  $(".card-4 .card-text").slideDown(500);
  $(".card-4 .fa-chevron-right").css("display", "none");
  $(".card-4 .fa-chevron-down").css("display", "block");
});

let Nav = document.querySelector("nav");
let btnNav = document.querySelector(".btn-nav");

window.onscroll = function () {
  if (this.scrollY > 80) {
    Nav.classList.add("active");
    btnNav.classList.add("active");

    if (this.scrollY > 0) {
      navHome.classList.add("active");
      navReview.classList.remove("active");
      navServies.classList.remove("active");
      navAbout.classList.remove("active");
      navContant.classList.remove("active");
    }

    if (this.scrollY > 1200) {
      navAbout.classList.add("active");
      navHome.classList.remove("active");
    }

    if (this.scrollY > 1700) {
      navServies.classList.add("active");
      navAbout.classList.remove("active");
      navHome.classList.remove("active");
    }

    if (this.scrollY > 2050) {
      navReview.classList.add("active");
      navServies.classList.remove("active");
      navAbout.classList.remove("active");
      navHome.classList.remove("active");
    }

    if (this.scrollY > 2600) {
      navContant.classList.add("active");
      navReview.classList.remove("active");
      navServies.classList.remove("active");
      navAbout.classList.remove("active");
      navHome.classList.remove("active");
    }
  } else {
    Nav.classList.remove("active");
    btnNav.classList.remove("active");
  }
};

var swiper = new Swiper(".mySwiper", {
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  freeMode: true,

  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    426: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

$(".small-c2").hover(
  function () {
    $(this).css("background-color", "#1B92EC");
    $(".fa-book-open").css("color", "white");
    $(".title1").css("color", "white");
  },
  function () {
    $(this).css("background-color", "white");
    $(".fa-book-open").css("color", "#FF7A01");
    $(".title1").css("color", "#1B92EC");
  }
);
$(".small-c3").hover(
  function () {
    $(this).css("background-color", "#1B92EC");
    $(".fa-university").css("color", "white");
    $(".title2").css("color", "white");
  },
  function () {
    $(this).css("background-color", "white");
    $(".fa-university").css("color", "#FF7A01");
    $(".title2").css("color", "#1B92EC");
  }
);
$(".small-c4").hover(
  function () {
    $(this).css("background-color", "#1B92EC");
    $(".fa-graduation-cap").css("color", "white");
    $(".tittle3").css("color", "white");
  },
  function () {
    $(this).css("background-color", "white");
    $(".fa-graduation-cap").css("color", "#FF7A01");
    $(".tittle3").css("color", "#1B92EC");
  }
);
$(".small-c11").hover(
  function () {
    $(this).css("background-color", "#1B92EC");
    $(".fa-trophy").css("color", "white");
    $(".tittle0").css("color", "white");
  },
  function () {
    $(this).css("background-color", "white");
    $(".fa-trophy").css("color", "#FF7A01");
    $(".tittle0").css("color", "#1B92EC");
  }
);
$(".small-c5").hover(
  function () {
    $(".internal-circle").css("background-color", "#FF7A01");
  },
  function () {
    $(".internal-circle").css("background-color", "#1B92EC");
  }
);

let navHome = document.querySelector(".nav-home");
let navAbout = document.querySelector(".nav-about");
let navServies = document.querySelector(".nav-servies");
let navReview = document.querySelector(".nav-review");
let navContant = document.querySelector(".nav-contant");

// window.onscroll = function () {
//   if (this.scrollY < 1300) {
//     navAbout.classList.add("active");
//   }
// };
