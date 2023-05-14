import gsap from "gsap/dist/gsap"
import Component from "classes/Component"
import * as carousel from "../animations/@carouselclick"

export default class Carousel extends Component {
  constructor() {
    super({
      element: ".home__card__nav",
      elements: {
        buttons: ".home__card__nav svg",
        images: ".home__card__variants img",
        layer: ".layer__cards img",
        mobileLockCards: ".home__lock__cards svg",
        mobileLockedCards: ".home__locked__cards svg",
      },
    })
    this.animate = true
    this.reCalculate()
  }

  onClick(index) {
    if (this.animate === false) return
    this.animate = false
    const card = Card.current
    const images = this.elements.images
    const layer = this.elements.layer
    const mobileLockCards = this.elements.mobileLockCards
    const mobileLockedCards = this.elements.mobileLockedCards
    if ((card === 1 && index === 0) || (card === 3 && index === 1)) return
    flip.invalidate()
    if (index === 0) {
      Card.current = card === 3 ? 2 : 1
      carousel.leftClick(card, images, layer, mobileLockCards, mobileLockedCards)
    }
    if (index === 1) {
      Card.current = card === 1 ? 2 : 3
      carousel.rightClick(card, images, layer, mobileLockCards, mobileLockedCards)
    }
    gsap.delayedCall(1, () => {
      this.animate = true
    })
  }

  reCalculate() {
    this.isMobile = innerWidth < 768

    this.elements.images[0].src = this.isMobile ? "images/master__back__m.webp" : "images/master__back.webp"
    this.elements.images[1].src = this.isMobile ? "images/visa__back__m.webp" : "images/visa__back.webp"
    this.elements.images[2].src = this.isMobile ? "images/verve__back__m.webp" : "images/verve__back.webp"

    this.elements.layer[0].src = this.isMobile ? "images/master__front__m.webp" : "images/master__front.webp"
    this.elements.layer[1].src = this.isMobile ? "images/visa__front__m.webp" : "images/visa__front.webp"
    this.elements.layer[2].src = this.isMobile ? "images/verve__front__m.webp" : "images/verve__front.webp"
  }

  addEventListeners() {
    this.elements.buttons[0].onclick = () => this.onClick(0)

    this.elements.buttons[1].onclick = () => this.onClick(1)
  }
}
