import dropdown from "animations/@dropdown"
import Component from "classes/Component"


export default class DropDown extends Component {
  constructor() {
    super({ element: ".home__hero__navText" })
    this.create()
  }

  create() {
    this.createDropDown()
  }

  createDropDown() {
    const drop = {
      get dropped() {
        return drop.__current
      },
      set dropped(val) {
        dropdown(val)
        return (drop.__current = val)
      },
    }
    drop.dropped = false
    window.Drop = drop
  }

  addEventListeners() {
    this.element.onclick = () => (Drop.dropped = !Drop.dropped)
  }
}
