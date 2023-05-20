export const homeVariant = {
  heading: {
    init: {
      y: -70,
      opacity: 0,
    },
    snimate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: 0.4 },
    },
  },
  paragraph: {
    init: {
      y: 60,
      opacity: 0,
    },
    snimate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.6 },
    },
  },
  buttons: {
    init: {
      scale: 0,
      opacity: 0,
    },
    snimate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
  },
}
