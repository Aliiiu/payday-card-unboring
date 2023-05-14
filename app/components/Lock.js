import gsap from "gsap/dist/gsap"
import Component from "classes/Component"
import * as lock from "../animations/@lockclick"
const rive = require("@rive-app/canvas")

export default class Lock extends Component {
  constructor() {
    super({
      element: ".home__lock__button",
      elements: {
        cards: ".card svg",
        images: ".card__lock svg",
        cardMobile: ".home__lock__cards svg",
        imagesMobile: ".home__locked__cards svg",
      },
    })
    this.animate = true
    this.locked = false
    window.__Lock = this
    this.reCalculate()
    this.create()
  }
  
  create(){
    this.rive = new rive.Rive({
      src: "payday.riv",
      layout: new rive.Layout({
        fit: rive.Fit.Contain,
        alignment: rive.Alignment.Center,
      }),
      canvas: document.getElementById("rive"),
      autoplay: true,
      stateMachines: "tl",
      onLoad: (_) => {
        const stateMachineInputs = this.rive.stateMachineInputs("tl")
        window.lockCard = stateMachineInputs[0]
        lockCard.value = false
      },
    })
  }

  reCalculate() {
    this.isMobile = innerWidth < 768
  }

  onClick(index) {
    if (this.animate === false) return
    this.animate = false
    const card = Card.current
    const cards = this.elements.cards
    const images = this.elements.images
    const cardMobile = this.elements.cardMobile
    const imagesMobile = this.elements.imagesMobile
    if (this.locked === true) {
      this.isMobile
        ? lock.hideMobile(card, cards, images, cardMobile, imagesMobile)
        : lock.hide(card, cards, images, cardMobile, imagesMobile)
      this.locked = false
      this.element.innerText = "Lock Card"
    } else {
      this.isMobile
        ? lock.showMobile(card, cards, images, cardMobile, imagesMobile)
        : lock.show(card, cards, images, cardMobile, imagesMobile)
      this.locked = true
      this.element.innerText = "Unlock Card"
    }
    gsap.delayedCall(0.5, () => {
      this.animate = true
    })
  }

  addEventListeners() {
    this.element.onclick = () => this.onClick()
  }
}
