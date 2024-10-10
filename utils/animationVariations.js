export const previewParentVariation = {
  rest: {
    x: 0,
    y: 0
  },
  hover: {
    x: 0,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

export const imgVariation1 = {
  rest: {
    x: 0,
    y: 0,
    border: "2px solid #ffffff00",
    filter: "blur(2px)"
  },
  hover: {
    x: "-10px",
    y: "-10px",
    border: "2px solid #fab638",
    filter: "blur(0)"
  }
};

export const imgVariation2 = {
  rest: {
    x: "-40px",
    y: "25px",
    border: "2px solid #ffffff00",
    filter: "blur(2px)"
  },
  hover: {
    x: "10px",
    y: "-10px",
    border: "2px solid #0b84f3",
    filter: "blur(0)"
  }
};

export const imgVariation3 = {
  rest: {
    x: "20px",
    y: "-20px",
    border: "2px solid #ffffff00",
    filter: "blur(2px)"
  },
  hover: {
    x: "-10px",
    y: "10px",
    border: "2px solid #fd764a",
    filter: "blur(0)"
  }
};

export const imgVariation4 = {
  rest: {
    x: "-20px",
    y: "10px",
    border: "2px solid #ffffff00",
    filter: "blur(2px)"
  },
  hover: {
    x: "10px",
    y: "10px",
    border: "2px solid #6741d9",
    filter: "blur(0)"
  }
};

export const topBtnVariant = {
  default: { scale: 1 },
  hover: {
    scale: 1.05
  }
};
