import Home from "pages/Home";
import Framework from "classes/Framework";

class App extends Framework {
  constructor() {
    super();
    requestAnimationFrame(this.update.bind(this));
    window.onunload = () => {
      scrollTo(0, 0);
    };
  }

  createPages() {
    this.pages = {
      home: new Home(),
    };
    this.page = this.pages[this.template];
    this.createRouter();
  }

  update() {
    this.page?.update && this.page.update();
    this.footer?.update()
    this.canvas?.update();
    requestAnimationFrame(this.update.bind(this));
  }
}

new App();
