import gsap from "gsap/dist/gsap"

export default function cardselect(val) {
  gsap.to(".home__hero__navOptions", {
    autoAlpha: val === true ? 1 : 0,
    ease: "power2",
    duration: 0.2,
  })
  gsap.to(".home__hero__navIcon svg", {
    rotate: val === true ? "180deg" : "0deg",
    ease: "expo",
    duration: 0.5,
  })
}
