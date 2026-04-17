import { easeOut, type Variants } from "framer-motion";

export const listVariantsSubItemsAppearLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.25,
      ease: easeOut,
    },
  }),
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2, ease: easeOut },
  },
};


export const divListGrow: Variants = {
  initial: {  height: 0, opacity: 0  },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};