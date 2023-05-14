import gsap from "gsap/dist/gsap"

export function cardSelcectRaise() {
  return gsap.timeline({
    scrollTrigger: {
      trigger: "nav:nth-of-type(5)",
      start: "0% 0%",
      endTrigger: "nav:nth-of-type(5)",
      end: "100% 70%",
      onEnter: () => {
        if (innerWidth < 768) return
        gsap.set(".home__hero__nav", { autoAlpha: 0, delay: 0.3 })
        gsap.to(".home__card, .layer__cards", { y: 0, duration: 0.8, ease: "ease" })
      },
      onLeaveBack: () => {
        if (innerWidth < 768) return
        gsap.set(".home__hero__nav", { autoAlpha: 1, delay: 0.3 })
        gsap.to(".home__card, .layer__cards", { y: "33rem", duration: 0.8, ease: "ease" })
      },
    },
  })
}

export function capeFlap() {
  return gsap.to("feTurbulence", {
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "none",
    attr: {
      baseFrequency: 0.005,
    },
  })
}
