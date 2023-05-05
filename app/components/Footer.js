import gsap from "gsap"
import Component from "classes/Component"
import animation from "animations/@shareHover"

export default class Footer extends Component {
  constructor() {
    super({
      element: ".home__footer",
      elements: {
        clock: ".home__footer__time",
        shareLink: "a.home__footer__text"
      },
    })
    this.animate = true
    this.animation = animation()
  }

  update() {
    if (this.animate === false) return
    this.animate = false
    this.elements.clock.innerText = new Date().toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: false })
    gsap.delayedCall(5, () => {
      this.animate = true
    })
  }

  addEventListeners(){
    this.elements.shareLink.onmouseenter = () => this.animation.play()
    this.elements.shareLink.onmouseleave = () => this.animation.reverse()
  }
}
