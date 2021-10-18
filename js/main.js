$(document).ready(function () {
  $(".card-1 .fa-chevron-right").click(function () {
    $(".card-1 .card-text").css("display", "block");
    // $(".card-1 .card-text").show(20000);
    $(".card-1 .fa-chevron-right").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-1 .fa-chevron-down").css("display", "inline");
    $(".card-1 .card h5").css("border-bottom", "1px solid #E5E5E5");
  });
});

$(document).ready(function () {
  $(".card-1 .fa-chevron-down").click(function () {
    $(".card-1 .card-text").css("display", "none");
    $(".card-1 .fa-chevron-down").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-1 .fa-chevron-right").css("display", "inline");
    $(".card-1 .card h5").css("border-bottom", "1px solid #E5E5E5 !impotrant");
  });
});

$(document).ready(function () {
  $(".card-2 .fa-chevron-right").click(function () {
    $(".card-2 .card-text").css("display", "block");
    $(".card-2 .fa-chevron-right").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-2 .fa-chevron-down").css("display", "inline");
    $(".card-2 .card h5").css("border-bottom", "1px solid #E5E5E5");
  });
});

$(document).ready(function () {
  $(".card-2 .fa-chevron-down").click(function () {
    $(".card-2 .card-text").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-2 .fa-chevron-down").css("display", "none");
    $(".card-2 .fa-chevron-right").css("display", "inline");
    $(".card-2 .card h5").css("border-bottom", "none");
  });
});

$(document).ready(function () {
  $(".card-3 .fa-chevron-right").click(function () {
    $(".card-3 .card-text").css("display", "block");
    $(".card-3 .fa-chevron-right").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-3 .fa-chevron-down").css("display", "inline");
    $(".card-3 .card h5").css("border-bottom", "1px solid #E5E5E5");
  });
});

$(document).ready(function () {
  $(".card-3 .fa-chevron-down").click(function () {
    $(".card-3 .card-text").css("display", "none");
    $(".card-3 .fa-chevron-down").css("display", "none");
    $(".card-2 .card-text").css("transition", "ease-in-out .3s");
    $(".card-3 .fa-chevron-right").css("display", "inline");
    $(".card-3 .card h5").css("border-bottom", "none");
  });
});

// Animation on Scroll
$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});

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