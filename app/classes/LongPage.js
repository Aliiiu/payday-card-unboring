import Page from "classes/Page";
import Prefix from "prefix";
import { clamp, lerp } from "utils/math";
import Reveal from "classes/Reveal";

export default class LongPage extends Page {
  constructor(params) {
    super(params);
  }

  /** Life Cycle */
  create() {
    super.create();
    this.reCalculate({ scroll: {} });
    this.transformPrefix = Prefix("transform");
  }
  update() {
  }
  destroy() {
  }

  reCalculate() {
    this.isMobile = innerWidth < 768;
    this.scroll = {
      current: 0,
      target: 0,
      last: { y: 0, clientY: 0 },
    };
  }

  onMousewheel(event) {

  }

  onTouchDown(event) {
    this.isDown = true;
    const clientY = event.clientY || event.touches[0]?.clientY;
    this.scroll.last.y = clientY;
  }

  onTouchMove(event) {
    if (!this.isDown) return;
    const clientY = event.clientY || event.touches[0]?.clientY;

    if (clientY === this.scroll.last.clientY) return;

    this.scroll.last.clientY = clientY;

    const client = this.scroll.last.y - clientY;
    const pixel = clamp(0, this.scroll.target + client, this.scroll.limit);
    this.scroll.target = pixel < 0 ? 0 : pixel;
  }

  onTouchUp() {
    this.isDown = false;
  }

  smoothScroll() {
    if (!this.elements.wrapper) return;
    const scrollTo = clamp(
      0,
      this.scroll.limit,
      lerp(this.scroll.current, this.scroll.target, 0.1)
    );
    this.scroll.current = scrollTo < 0.01 ? 0 : scrollTo;
    this.elements.wrapper.style[
      this.transformPrefix
    ] = `translateY(-${this.scroll.current}px)`;

    this.elements.parallexElements?.forEach((element) => {
      element.style[this.transformPrefix] = `translateY(-${
        this.scroll.current * element.getAttribute("data-parallax")
      }px)`;
    });
  }

  addEventListeners() {
    window.addEventListener("mousewheel", this.onMousewheel.bind(this));
    window.addEventListener("touchstart", this.onTouchDown.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this));
    window.addEventListener("touchend", this.onTouchUp.bind(this));
  }
  removeEventListeners() {
    window.removeEventListener("mousewheel", this.onMousewheel.bind(this));
    window.removeEventListener("touchstart", this.onTouchDown.bind(this));
    window.removeEventListener("touchmove", this.onTouchMove.bind(this));
    window.removeEventListener("touchend", this.onTouchUp.bind(this));
  }
}
