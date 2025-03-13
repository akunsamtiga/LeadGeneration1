// utils/animations.js
export const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export const slideIn = {
  hidden: { x: "-100vw" },
  visible: { 
    x: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  },
};

export const zoomIn = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};
export const hoverEffect = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};