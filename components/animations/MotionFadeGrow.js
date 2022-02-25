import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionFadeGrow = ({
    delay = 0,
    duration = 0.6,
    threshold = 0,
    children,
}) => {
    const { inView, entry, ref } = useInView({ triggerOnce: true, threshold });
    const animationControl = useAnimation();

    if (inView) {
        animationControl.start({
            scale: [1, 1.03, 1],
            opacity: 1,
            transition: {
                delay,
                duration,
            },
        });
    }

    return (
        <div ref={ref}>
            <AnimatePresence>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={animationControl}>
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MotionFadeGrow;
