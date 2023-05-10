import cardselect from "animations/@cardselect"

export default class Card {
  constructor() {
    this.create()
  }

  create() {
    this.createCard()
  }

  createCard() {
    const card = {
      get current() {
        return card.__current
      },
      set current(val) {
        cardselect(val)
        return (card.__current = val)
      },
    }
    card.current = 1
    window.Card = card
  }
}
