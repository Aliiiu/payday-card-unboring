export const pre = []
export const points = [
  {
    transform: () =>
      Card.current === 2 ? "rotate(calc(180deg - 146.699deg))" : Card.current === 1 ? "rotate(342.2deg)" : "rotate(40.2003deg)",
    left: () => (Card.current === 2 ? "-19.5rem" : Card.current === 1 ? "72.5rem" : "110.5rem"),
    top: () => (Card.current === 2 ? "36.4rem" : Card.current === 1 ? "74.4rem" : "20.5rem"),
    width: () => (Card.current === 2 ? "52.94rem" : Card.current === 1 ? "67.94rem" : "67.94rem"),
    height: () => (Card.current === 2 ? "30.62rem" : Card.current === 1 ? "36rem" : "32rem"),
    duration: 1,
  },
  {
    left: "85.86rem",
    top: "35rem",
    width: "55.81rem",
    height: "30.7rem",
    transform: "rotate(90deg)",
    duration: 1,
  },
  {
    width: "33.95rem",
    height: "22.72rem",
    top: "25rem",
    left: "92.94rem",
    transform: "rotate(270deg)",
    duration: 1,
  },
  {
    width: "55.4rem",
    height: "30.04rem",
    top: "25rem",
    left: "80.87rem",
    rotate: "28.58",
    duration: 1,
  },
  {
    height: "20.3585rem",
    width: "51.3844rem",
    top: "28.3455rem",
    left: "54.9211rem",
    rotate: "55deg",
    duration: 1,
    delay: 0.5,
  },
  {
    left: "57.57rem",
    top: "calc(100vh - 13.5rem - 17rem)",
    height: "19.44rem",
    width: "35.9rem",
    rotate: "0deg",
    duration: 1.5,
  },
]
