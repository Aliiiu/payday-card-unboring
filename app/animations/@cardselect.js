import gsap from "gsap/dist/gsap"

export default function cardselect(val) {
  gsap.to(".home__card__nav svg:nth-of-type(1)", {
    autoAlpha: val === 1 ? 0 : val === 2 ? 1 : 1,
    ease: "power2",
    duration: 0.2,
    delay: val === 1 ? 0 : val === 2 ? 0.5 : 0.5,
  })
  gsap.to(".home__card__nav svg:nth-of-type(2)", {
    autoAlpha: val === 1 ? 1 : val === 2 ? 1 : 0,
    ease: "power2",
    duration: 0.2,
    delay: val === 1 ? 0.5 : val === 2 ? 0.5 : 0,
  })
  gsap.to(".home__footer__card:nth-of-type(1)", {
    background: val === 1 ? "#F9F9F9" : val === 2 ? "#0D0D0D" : "#442BDF",
    ease: "power2",
    duration: 1,
  })
  gsap.to(".home__footer__card:nth-of-type(2)", {
    background: val === 1 ? "#442BDF" : val === 2 ? "#3ABB5E" : "#F9F9F9",
    ease: "power2",
    duration: 1,
  })

  if (innerWidth < 768) return

  gsap.to(".home__hero__cards figure:nth-of-type(1)", {
    autoAlpha: val === 1 ? 1 : val === 2 ? 0 : 1,
    ease: "power2",
    duration: 0.2,
  })
  gsap.to(".home__hero__cards figure:nth-of-type(2)", {
    autoAlpha: val === 1 ? 0 : val === 2 ? 1 : 1,
    ease: "power2",
    duration: 0.2,
  })
  gsap.to(".home__hero__cards figure:nth-of-type(3)", {
    autoAlpha: val === 1 ? 1 : val === 2 ? 1 : 0,
    ease: "power2",
    duration: 0.2,
  })
}
