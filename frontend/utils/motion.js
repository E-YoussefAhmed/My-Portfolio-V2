export const homeVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    scale: 0,
    rotate: 180,
    transition: {
      duration: 0.5,
    },
  },
};

export const aboutVariants = {
  hide: {
    opacity: 0,
    x: "100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.5,
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

export const worksVariants = {
  hide: {
    opacity: 0,
    y: "100vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 1,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.5,
    },
  },
};

export const testimonialsVariants = {
  hide: {
    opacity: 0,
    y: -1000,
    x: -200,
  },
  show: {
    opacity: 1,
    y: [-1000, 0, 0],
    x: [-200, -200, 0],
    transition: {
      type: "tween",
      duration: 1,
    },
  },
  exit: {
    y: "100vh",
    transition: {
      duration: 0.5,
    },
  },
};

export const contactVariants = {
  hide: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

export const formVariants = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};

export const skillsVariants = {
  hide: {
    opacity: 0,
    rotate: -180,
    x: "-100vw",
  },
  show: {
    opacity: 1,
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 1.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: "100vw",
    rotate: 180,
    transition: {
      duration: 0.5,
    },
  },
};

export const experienceVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const firstVariant = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: [0, 1, 1],
    x: [-250, -180, 0],
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const secondVariant = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: [0, 1, 1],
    x: [250, 180, 0],
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const cardVariants = {
  hide: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

export const circleVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    scale: [1, 2, 2, 3, 1],
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
    transition: {
      duration: 2.5,
    },
  },
};

export const paginationVariants = {
  hover: {
    scale: 1.2,
    transition: {
      type: "tween",
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
