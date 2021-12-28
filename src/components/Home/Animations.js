export const rightAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 ,
        transition:{ duration:1.2,  type: "tween" }
    },
  };
  
  export const leftAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0,opacity: 1 ,
        transition:{ duration:1.2, type: "tween" }
    },
    
  };
  
  export const reveal = {
    hidden: { x: -700 },
    visible: { x: 0 },
  };
  
  export const textAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  
  export const cardAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };
  
  export const fromUp = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  export const fromDown = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  
  export const topContainerAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  export const videoAnimation = {
    hidden: { x: -800, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  export const reasonsAnimation = {
    hidden: { x: 800, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  
  export const navbarAnimation = {
      hidden:{y:-100},
      visible:{y:0}
  }