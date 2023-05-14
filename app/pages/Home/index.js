import LongPage from "classes/LongPage"
import gsap from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import { Observer } from "gsap/dist/Observer"
import * as cardScroll from "animations/@cardscroll"
import animations from "animations/@sections"
import switchMall from "animations/@switchmall"
import { cardSelcectRaise, capeFlap } from "animations/@microinteractions"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer)

export default class Home extends LongPage {
  constructor() {
    super({
      element: ".home",
      id: "home",
      elements: { html: "html", marker4: ".marker4", cardSelect: ".home__card" },
    })
  }

  /** Life Cycle */
  create() {
    super.create()

    this.currentIndex = 0
    let animating
    this.animation = animations[this.currentIndex]
    this.scrollable = false

    const snapPoints = [0, 1380, 2470, 3800, 4402, 6499 - 184 - (innerHeight / innerWidth) * 1512]

    function gotoSection(index, direction) {
      if (!this.scrollable) {
        document.querySelector("html").style.overflow = "unset"
        this.scrollable = true
      }
      if (!window.preloaded) return
      window.flap?.pause()
      window.switch?.pause()
      this.animation.reverse()
      Drop.dropped = false
      this.currentIndex = gsap.utils.clamp(0, 5, index)
      animating = true
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => {
            gsap.delayedCall(0.5, () => {
              animating = false
            })
          },
        })
      if (this.currentIndex >= 0) {
        tl.to(window, {
          scrollTo: {
            y: (snapPoints[this.currentIndex] * innerWidth) / 1512,
            autoKill: false,
            ease: "Power4.easeInOut",
            duration: 2,
          },
        })
        tl.fromTo("#card", { ...cardScroll.pre[this.currentIndex] }, { ...cardScroll.points[this.currentIndex] }, 0)
        this.animation = animations[this.currentIndex]
        this.animation.restart()
      }
    }

    this.observer = ScrollTrigger.observe({
      target: window,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection.call(this, this.currentIndex - 1, -1),
      onUp: () => !animating && gotoSection.call(this, this.currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    })

    this.reCalculate({ scroll: {} })

    window.flap = capeFlap()
    window.flap.pause()

    window.switch = switchMall()

    window.flip = cardSelcectRaise()
  }
  addEventListeners() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowUp" || e.code === "Numpad8") {
        e.preventDefault()
      } else if (e.code === "ArrowDown" || e.code === "Numpad2") {
        e.preventDefault()
      }
    })
  }
  reCalculate() {
    super.reCalculate({ scroll: {} })
    this.observer?.enable()
    if (this.isMobile) {
      this.observer?.disable()
      window.flip?.scrollTrigger?.kill()
      if (!this.scrollable) {
        document.querySelector("html").style.overflow = "unset"
        this.scrollable = true
      }
    }
    this.currentIndex = 0
    if (this.isMobile) return
    gsap.set(window, {
      scrollTo: {
        y: 0,
        autoKill: false,
        ease: "Power4.easeInOut",
        duration: 2,
      },
    })
  }
}
