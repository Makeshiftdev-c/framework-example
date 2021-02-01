function splitScroll() {
  let width = window.innerWidth;
  const controller = new ScrollMagic.Controller();
  console.log(width);
  if (width >= 1200) {
    new ScrollMagic.Scene({
      offset: 0,
      duration: 200,
      triggerElement: "#scroll-magic-target",

      triggerHook: -1,
    })
      .setPin(".section_1-contents")
      .addIndicators()
      .addTo(controller);
    /*.removeIndicators();*/
  }
}

splitScroll();
