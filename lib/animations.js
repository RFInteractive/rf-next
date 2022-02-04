export const simpleFadeInitial = { opacity: 0 };
export const simpleFadeExit = { opacity: 0 };
export const simpleFadeAnimate = { opacity: 1 };

export const fadeGrowInitial = { opacity: 0, height: '0px' };

export const fadeGrowAnimate = {
    opacity: 1,
    height: 'auto',
    transition: {
        duration: 0.5,
    },
};

export const fadeShrinkExit = {
    opacity: 0,
    height: '0px',
    transition: {
        duration: 0.5,
    },
};
