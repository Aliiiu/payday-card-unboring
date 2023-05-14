import gsap from "gsap/dist/gsap"

const layerMallImagesLogo = ["images/mall/nike-logo.webp", "images/mall/ikea-logo.webp", "images/mall/sephora-logo.webp"]
const layerMallImagesUp = ["images/mall/nike-up.webp", "images/mall/ikea-up.webp", "images/mall/sephora-up.webp"]
const layerMallImagesRight = ["images/mall/nike-right.webp", "images/mall/ikea-right.webp", "images/mall/sephora-right.webp"]
const layerMallImagesDown = ["images/mall/nike-down.webp", "images/mall/ikea-down.webp", "images/mall/sephora-down.webp"]
const layerMallImagesLeft = ["images/mall/nike-left.webp", "images/mall/ikea-left.webp", "images/mall/sephora-left.webp"]
const layerMallImages = [layerMallImagesLogo, layerMallImagesUp, layerMallImagesRight, layerMallImagesDown, layerMallImagesLeft]

export default function switchMall() {
  return gsap
    .timeline({ paused: true, repeat: -1, yoyo: true })
    .to(".layer__mall img:nth-of-type(1)", {
      duration: 0.5,
      ease: "power3.in",
      opacity: 0,
      delay: 5,
    })
    .to(
      [
        ".layer__mall img:nth-of-type(2)",
        ".layer__mall img:nth-of-type(3)",
        ".layer__mall img:nth-of-type(4)",
        ".layer__mall img:nth-of-type(5)",
      ],
      {
        duration: 1,
        ease: "power3.in",
        rotateY: "-90deg",
        stagger: { amount: 0.25 },
      },
      "<"
    )
    .to(
      ".layer",
      {
        "--topB": "#FBD914",
        "--topW": "#0058A3",
        "--bottomW": "#003461",
        duration: 0.3,
        ease: "power3.inout",
      },
      "<2"
    )
    .set(".layer__mall img", {
      attr: {
        src: (i) => layerMallImages[i][1],
        "data-shop": "ikea",
      },
    })
    .to(
      [
        ".layer__mall img:nth-of-type(2)",
        ".layer__mall img:nth-of-type(3)",
        ".layer__mall img:nth-of-type(4)",
        ".layer__mall img:nth-of-type(5)",
      ],
      {
        duration: 1,
        ease: "power3.out",
        rotateY: "0deg",
        stagger: { amount: -0.5 },
      },
      "<"
    )
    .to(
      ".layer__mall img:nth-of-type(1)",
      {
        duration: 0.7,
        ease: "power3.out",
        opacity: 1,
        delay: 0.2,
      },
      "<"
    )

    .to(".layer__mall img:nth-of-type(1)", {
      duration: 0.3,
      ease: "power3.in",
      opacity: 0,
      delay: 4,
    })

    .to(
      [
        ".layer__mall img:nth-of-type(2)",
        ".layer__mall img:nth-of-type(3)",
        ".layer__mall img:nth-of-type(4)",
        ".layer__mall img:nth-of-type(5)",
      ],
      {
        duration: 1,
        ease: "power3.in",
        rotateY: "-90deg",
        stagger: { amount: 0.25 },
      },
      "<"
    )
    .to(
      ".layer",
      {
        "--topB": "#D82D35",
        "--topW": "#FBEEE5",
        "--bottomW": "#DCCABE",
        duration: 0.5,
        ease: "power3.inout",
      },
      "<2"
    )
    .set(".layer__mall img", {
      attr: {
        src: (i) => layerMallImages[i][2],
        "data-shop": "sephora",
      },
    })
    .to(
      [
        ".layer__mall img:nth-of-type(2)",
        ".layer__mall img:nth-of-type(3)",
        ".layer__mall img:nth-of-type(4)",
        ".layer__mall img:nth-of-type(5)",
      ],
      {
        duration: 0.5,
        ease: "power3.out",
        rotateY: "0deg",
        stagger: { amount: -0.5 },
      },
      "<"
    )
    .to(
      ".layer__mall img:nth-of-type(1)",
      {
        duration: 0.7,
        ease: "power3.out",
        opacity: 1,
        delay: 0.2,
      },
      "<"
    )
    .to(".layer__mall img:nth-of-type(1)", {
      duration: 0.5,
      ease: "power3.in",
      opacity: 1,
      delay: 4,
    })
}
