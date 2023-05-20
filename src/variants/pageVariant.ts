export const pageVariant = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  exit: {
    opacity: 0,
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
}
