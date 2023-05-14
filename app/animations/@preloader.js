import gsap from "gsap/dist/gsap"
import Flip from "gsap/dist/Flip"
import { split } from "utils/text"
import SplitType from "split-type"

gsap.registerPlugin(Flip)

export default function preloaded(loader, logo, destroy) {
  gsap.fromTo(
    loader,
    { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
    {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      duration: 0.5,
      ease: "power2",
      delay: 1,
      onComplete: () => {
        const state = Flip.getState(logo)
        logo.classList.add("leave")
        Flip.from(state, {
          duration: 1,
          ease: "power1.inOut",
          absolute: true,
          onComplete: () => destroy(),
        })
        gsap.to(".home__hero__navDrop", {
          width: "30.1rem",
          delay: 1.5,
          onComplete: () =>
            gsap.to(".home__hero__navDrop", {
              color: "#1D1D1D",
            }),
        })
        new SplitType(".home__text__heading")
        gsap.fromTo(
          ".home__text__heading .char",
          {
            yPercent: 100,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          },
          {
            yPercent: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            delay: 1,
            ease: "back.out(1.4)",
            stagger: { amount: 0.75 },
          }
        )
        gsap.fromTo(
          ".home__text__body",
          {
            opacity: 0,
          },
          { opacity: 1, delay: 1.5 }
        )
        gsap.from(".home__hero__cards figure, #card", {
          opacity: 0,
          y: innerWidth < 768 ? "1rem" : "8rem",
          rotate: innerWidth < 768 ? "" : Math.PI * (Math.random() - 0.5),
          opacity: innerWidth < 768 ? 0.3 : 0.8,
          delay: 1,
          duration: innerWidth < 768 ? 2 : 1,
          ease: "power2",
          stagger: { amount: 0.25 },
          onComplete: () => {
            window.preloaded = true
            document.querySelectorAll(".home__hero__cards figure").forEach((el) => el.classList.add("leave"))
          },
        })
      },
    }
  )
}
