import gsap from "gsap/dist/gsap"

gsap.config({ force3d: true })

export function show(card, cards, images, cardsMobile, imagesMobile) {
  gsap
    .timeline()
    .to(
      ".pad-1, .pad-3",
      {
        yPercent: -65,
        duration: 0.6,
      },
      0
    )
    .to(
      ".pad-2",
      {
        yPercent: 55,
        duration: 0.6,
      },
      0
    )
    .to([images[card - 1], imagesMobile[card - 1]], { opacity: 1, duration: 0.2, delay: 0.5 }, "<")
    .to(
      ".pad-1, .pad-3",
      {
        yPercent: 0,
        duration: 0.6,
        delay: 0.1,
      },
      "<"
    )
    .to(
      ".pad-2",
      {
        yPercent: 0,
        duration: 0.6,
        delay: 0.1,
      },
      "<"
    )
}

export function hide(card, cards, images, cardsMobile, imagesMobile) {
  gsap
    .timeline()
    .to(
      ".pad-1, .pad-3",
      {
        yPercent: -65,
        duration: 0.6,
      },
      0
    )
    .to(
      ".pad-2",
      {
        yPercent: 55,
        duration: 0.6,
      },
      0
    )
    .to([images, imagesMobile], { opacity: 0, duration: 0.2, delay: 0.5 }, "<")
    .to(
      ".pad-1, .pad-3",
      {
        yPercent: 0,
        duration: 0.6,
        delay: 0.1,
      },
      "<"
    )
    .to(
      ".pad-2",
      {
        yPercent: 0,
        duration: 0.6,
        delay: 0.1,
      },
      "<"
    )
}

export function showMobile(card, cards, images, cardsMobile, imagesMobile) {
  lockCard.value = true
  gsap
    .timeline()
    .to(
      ".pad-1, .pad-3",
      {
        yPercent: -50,
        xPercent: -50,
        duration: 0.6,
      },
      0
    )
    .to(
      ".pad-2",
      {
        yPercent: 50,
        xPercent: 50,
        duration: 0.6,
      },
      0
    )
    .to(
      ".pad-1, .pad-3",
      {
        yPercent: 0,
        xPercent: 0,
        duration: 0.6,
        delay: 0.1,
      },
      "<"
    )
    .to(
      ".pad-2",
      {
        yPercent: 0,
        xPercent: 0,
        duration: 0.6,
        delay: 0.1,
      },
      "<"
    )
}

export function hideMobile(card, cards, images, cardsMobile, imagesMobile) {
  lockCard.value = false
  gsap
    .timeline()
    .to(
      ".pad-1, .pad-3",
      {
        yPercent: -50,
        xPercent: -50,
        duration: 0.6,
      },
      0
    )
    .to(
      ".pad-2",
      {
        yPercent: 50,
        xPercent: 50,
        duration: 0.6,
      },
      0
    )
    .to(
      ".pad-1, .pad-3",
      {
        yPercent: 0,
        xPercent: 0,
        duration: 0.6,
        delay: 0.1,
      },
      "<"
    )
    .to(
      ".pad-2",
      {
        yPercent: 0,
        xPercent: 0,
        duration: 0.6,
        delay: 0.1,
      },
      "<"
    )
}
