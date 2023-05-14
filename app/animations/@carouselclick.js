import gsap from "gsap/dist/gsap"

export function leftClick(card, images, layer, mobileLockCards, mobileLockedCards) {
  gsap
    .timeline()
    .to("#card svg", { rotateX: "90deg", ease: "power2.in" })
    .set("#card svg", { opacity: 0 })
    .set(`.card svg:nth-of-type(${card === 3 ? 2 : 1})`, { opacity: 1 })
    .set(`.card__lock svg:nth-of-type(${card - 1})`, { opacity: window.__Lock.locked && !innerWidth < 768 ? 1 : 0 })
    .set(`.card svg:nth-of-type(${card - 1})`, { opacity: 1 })
    .to("#card svg", { rotateX: "0deg", ease: "power2" })
    .set(layer, { opacity: 0 }, 0)
    .fromTo(
      layer[card - 1],
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        zIndex: 2,
        opacity: 1,
      },
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        zIndex: 2,
        opacity: 1,
        duration: 1,
        ease: "power.inout",
      },
      0
    )
    .set([images, layer], { zIndex: 0 }, 0)
    .set([mobileLockCards, mobileLockedCards], { opacity: 0 }, 0)
    .set([images[card - 1], layer[card - 1]], { zIndex: 1 }, 0)
    .set(
      !window.__Lock.locked ? mobileLockCards[card - 2] : [mobileLockCards[card - 2], mobileLockedCards[card - 2]],
      { opacity: 1 },
      0
    )
    .fromTo(
      [images[card - 2], layer[card - 2]],
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        zIndex: 2,
        opacity: 1,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        zIndex: 2,
        opacity: 1,
        duration: 1,
        ease: "power.inout",
      },
      0
    )
    .set("body", {
      "--cardColor": Card.current === 1 ? "#000000" : Card.current === 2 ? "#442BDF" : "#3ABB5E",
    })
    .to(
      "body",
      {
        "--navColor": Card.current === 1 ? "#F79E1B" : Card.current === 2 ? "#442BDF" : "#F42203",
        duration: 0.4,
      },
      0.3
    )
    .set(".variants svg", { opacity: 0 })
    .set(`.variants svg:nth-of-type(${Card.current})`, { opacity: 1 })
}

export function rightClick(card, images, layer, mobileLockCards, mobileLockedCards) {
  gsap
    .timeline()
    .to("#card svg", { rotateX: "-90deg", ease: "power2.in" })
    .set(`.card svg:nth-of-type(${card === 1 ? 2 : 3})`, { opacity: 1 })
    .set("#card svg", { opacity: 0 })
    .set(`.card__lock svg:nth-of-type(${card + 1})`, { opacity: window.__Lock.locked && !innerWidth < 768 ? 1 : 0 })
    .set(`.card svg:nth-of-type(${card + 1})`, { opacity: 1 })
    .to("#card svg", { rotateX: "0deg", ease: "power2" })
    .set(layer, { opacity: 0 }, 0)
    .fromTo(
      layer[card - 1],
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        zIndex: 2,
        opacity: 1,
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        zIndex: 2,
        opacity: 1,
        duration: 1,
        ease: "power.inout",
      },
      0
    )
    .set([images, layer], { zIndex: 0 }, 0)
    .set([mobileLockCards, mobileLockedCards], { opacity: 0 }, 0)
    .set([images[card - 1], layer[card - 1]], { zIndex: 1 }, 0)
    .set(!window.__Lock.locked ? mobileLockCards[card] : [mobileLockCards[card], mobileLockedCards[card]], { opacity: 1 }, 0)
    .fromTo(
      [images[card], layer[card]],
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        zIndex: 2,
        opacity: 1,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        zIndex: 2,
        opacity: 1,
        duration: 1,
        ease: "power.inout",
      },
      0
    )
    .set("body", {
      "--cardColor": Card.current === 1 ? "#000000" : Card.current === 2 ? "#442BDF" : "#3ABB5E",
    })
    .set(".variants svg", { opacity: 0 })
    .set(`.variants svg:nth-of-type(${Card.current})`, { opacity: 1 })
    .to(
      "body",
      {
        "--navColor": Card.current === 1 ? "#F79E1B" : Card.current === 2 ? "#442BDF" : "#F42203",
        duration: 0.4,
      },
      0.3
    )
}
