import Component from "classes/Component"
import { split } from "utils/text"
import gsap from "gsap/dist/gsap"
import Flip from "gsap/dist/Flip"
import SplitType from "split-type"

gsap.registerPlugin(Flip)

export default class Preloader extends Component {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        // text: "",
        // progress: "",
        loader: ".preloader__loader",
        logo: ".preloader figure",
      },
    })
    // split({ element: this.elements.text })
    this.length = 0
    this.limit = 100
    this.assets = preloadables
    this.create()
  }

  create() {
    const images = this.assets.images
    images.forEach((src) => {
      const image = new Image()
      image.src = src
      image.onload = () => this.onAssetLoaded()
    })
  }
  onAssetLoaded() {
    this.length += 1
    const percentage = Math.round(
      (this.length /
        (this.assets.images.length + Object.values(this.assets.textures).length + Object.values(this.assets.exports).length)) *
        this.limit
    )
    // this.elements.progress.innerText = `${Math.min(percentage, 301)} / 301`
    gsap.to(this.elements.loader, { scaleX: percentage / 100, duration: 1, ease: "power4" })
    if (percentage === this.limit) this.onCompleted()
  }

  async onCompleted() {
    gsap.fromTo(
      this.elements.loader,
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 0.5,
        ease: "power2",
        delay: 1,
        onComplete: () => {
          const state = Flip.getState(this.elements.logo)
          this.elements.logo.classList.add("leave")
          Flip.from(state, {
            duration: 1,
            ease: "power1.inOut",
            absolute: true,
            onComplete: () => this.destroy(),
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
            y: "8rem",
            rotate: Math.PI * (Math.random() - 0.5),
            delay: 1,
            duration: 0.5,
            ease: "power1",
            stagger: { amount: 0.25 },
            onComplete: () => {
              window.preloaded = true
            },
          })
        },
      }
    )
    const temp = setTimeout(() => {
      this.dispatchEvent({ type: "preloaded" })
      clearTimeout(temp)
    }, 2725)
  }

  destroy() {
    this.element.parentElement.removeChild(this.element)
  }
}
