const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}

function vidconAnimation() {
  var vidcon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");

  vidcon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  vidcon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  vidcon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 30,
      top: dets.y - 70,
    });
  });
}

function h1loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 1,
  });

  gsap.from("#video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 2,
    duration: 1.5,
  });
}
cursorAnimation();
h1loadingAnimation();
vidconAnimation();
