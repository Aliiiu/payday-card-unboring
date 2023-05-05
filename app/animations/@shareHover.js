import gsap from "gsap"

export default function shareHover() {
  const tl = gsap.timeline({ paused: true })

  tl.fromTo(".home__footer__line", { scaleX: 0, duration: 0.3 }, { scaleX: 1, duration: 0.3 })

  return tl
}
