import gsap from "gsap/dist/gsap"
import Component from "classes/Component"
import preloaded from "animations/@preloader"

export default class Preloader extends Component {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        loader: ".preloader__loader",
        logo: ".preloader figure",
      },
    })
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
    gsap.to(this.elements.loader, { scaleX: percentage / 100, duration: 1, ease: "power4" })
    if (percentage === this.limit) this.onCompleted()
  }

  async onCompleted() {
    preloaded(this.elements.loader, this.elements.logo, this.destroy.bind(this))
    const temp = setTimeout(() => {
      this.dispatchEvent({ type: "preloaded" })
      clearTimeout(temp)
    }, 2725)
  }

  destroy() {
    this.element.parentElement.removeChild(this.element)
  }
}
