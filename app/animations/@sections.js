import gsap from "gsap/dist/gsap"

export default [
  gsap.timeline({ paused: true }),
  gsap
    .timeline({ paused: true })
    .fromTo(
      ".home__mall__illustration svg:nth-of-type(1)",
      { opacity: 0, scaleY: 0.85, delay: 0, duration: 0.1 },
      {
        opacity: 1,
        scaleY: 1,
        delay: 1.1,
      }
    )
    .fromTo(
      ".layer__mall",
      { opacity: 0 },
      { opacity: 1, delay: 0.2, duration: 0.3, ease: "expo", onComplete: () => window.switch.play() },
      "<"
    ),
  gsap
    .timeline({ paused: true })
    .fromTo(
      ".home__hero__navDrop",
      {
        width: "30.1rem",
      },
      {
        width: "7.4rem",
      },
      "<"
    )
    .fromTo(
      ".home__hero__navDrop",
      {
        color: "#1D1D1D",
      },
      {
        color: "transparent",
        duration: 0.25,
      },
      "<"
    )
    .fromTo(
      ".home__super__illustration div",
      { rotate: "230deg" },
      { rotate: "0deg", duration: 1, delay: 0.85, ease: "power3.inout", onComplete: () => window.flap.play() },
      "<"
    )
    .fromTo(".home__super__illustration div svg", { opacity: 0, stagger: 0 }, { opacity: 1, duration: 0.2, stagger: 0.15 }, "<"),
  gsap.timeline({ paused: true }),
  gsap.timeline({ paused: true }),
  gsap.timeline({ paused: true }),
]
