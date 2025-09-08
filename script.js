function homePageAnimation() {
  gsap.set(".marquee", { scale: 5 });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      markers: false,
      scrub: 2,
    },
  });

  tl.to(".vid", { "--clip": "0%", ease: "power4" }, "a")
    .to(".marquee", { scale: 1, ease: "power4" }, "a")
    .to(".heading", { opacity: 1, ease: "power4", y: -15 }, "b")
    .to(".lft", { xPercent: -10, ease: "power4" }, "b")
    .to(".rgt", { xPercent: 10, ease: "power4" }, "b");
}

function realSectionAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      markers: false,
      scrub: 1,
    },
    xPercent: -300,
    ease: "power4",
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

//loco();
homePageAnimation();
realSectionAnimation();
//teamPageAnimation();
