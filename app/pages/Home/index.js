import LongPage from "classes/LongPage"
import gsap from "gsap"

export default class Home extends LongPage {
  constructor() {
    super({
      element: ".home",
      id: "home",
      elements: {},
    })
  }

  /** Life Cycle */
  create() {
    super.create()
    this.reCalculate({ scroll: {} })
    gsap.to("feTurbulence", {
      duration: 3,
      repeat: 40,
      yoyo: true,
      ease: "none",
      attr: {
        baseFrequency: 0.005,
      },
    })
  }
  reCalculate() {
    super.reCalculate({ scroll: {} })
  }
}
