import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MotionFadeGrow = ({ delay = 0.3, duration = 0.6, children }) => {
    const { inView, entry, ref } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const animationControl = useAnimation();

    useEffect(() => {
        animationControl.start({
            scale: 0.8,
            opacity: 0,
        });
    }, [animationControl]);

    if (inView) {
        animationControl.start({
            scale: [1, 1.03, 1],
            opacity: [0, 1],
            transition: {
                delay,
                duration,
            },
        });
    }

    return (
        <div ref={ref}>
            <motion.div animate={animationControl}>{children}</motion.div>
        </div>
    );
};

export default MotionFadeGrow;
