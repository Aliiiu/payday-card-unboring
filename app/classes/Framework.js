import Router from "classes/Router"
import Preloader from "components/Preloader"
import Cards from "components/Cards"
import DropDown from "components/Drop"
import Carousel from "components/Carousel"
import Lock from "components/Lock"
import Footer from "components/Footer"

export default class Framework {
  constructor() {
    this.reCalculate({ scroll: {} })
    this.createCards()
    this.createDropDown()
    this.createCarousel()
    this.createLock()
    this.createFooter()
    this.createPreloader();
    this.createContent()
    this.addEventListeners()
    if (!this.preloader) this.onPreloaded()
  }

  reCalculate() {
    this.isMobile = innerWidth < 768
  }

  createPreloader() {
    this.preloader = new Preloader()
    this.preloader.addEventListener("preloaded", this.onPreloaded.bind(this))
  }
  onPreloaded() {
    this.createPages()
    this.page.create()
  }

  createNavigation() {
    if (!Navigation) return
    this.navigation = new Navigation(this.template)
    this.navigation.addEventListener("completed", this.onNavigate.bind(this))
    this.navigation.addEventListener("smoothScroll", (event) => {
      const scroll = event.scroll
      scroll.current = this.page.scroll?.target
      scroll.last = this.page.scroll?.last
      this.page.reCalculate({ scroll })
    })
  }
  async onNavigate({ event, push = true }) {
    const [html, template] = await this.router.go(event)
    this.page.destroy()
    this.content.innerHTML = html
    this.content.setAttribute("data-template", template)
    this.createContent()
    push && history.pushState({}, "", template)
    this.page = this.pages[this.template]
    this.page.create()
  }
  async onBack() {
    const params = { target: { href: window.location.pathname } }
    this.onNavigate({ event: params, push: false })
  }

  createCards() {
    this.cards = new Cards()
  }
  createDropDown() {
    this.dropdown = new DropDown()
  }

  createCarousel() {
    this.carousel = new Carousel()
  }

  createLock() {
    this.lock = new Lock()
  }

  createFooter(){
    this.footer = new Footer()
  }

  createContent() {
    this.content = document.querySelector(".content")
    this.template = this.content.getAttribute("data-template")
  }

  createRouter() {
    this.router = new Router()
  }

  onResize() {
    this.reCalculate && this.reCalculate({ scroll: {} })
    this.page?.reCalculate && this.page.reCalculate({ scroll: {} })
    this.router?.reCalculate && this.router.reCalculate({ scroll: {} })
    this.navigation?.reCalculate && this.navigation.reCalculate({ scroll: {} })
    this.carousel?.reCalculate && this.carousel.reCalculate({ scroll: {} })
    this.lock?.reCalculate && this.lock.reCalculate({ scroll: {} })
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this))
    window.addEventListener("popstate", this.onBack.bind(this))
  }
}
