/** @jsxImportSource theme-ui */
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const MotionFadeGrow = ({
    delay = 0,
    duration = 0.6,
    threshold = 0,
    children,
}) => {
    const animationControl = useAnimation();
    const { windowWidth } = useWindowDimensions();
    const { inView, entry, ref } = useInView({
        triggerOnce: true,
        threshold: windowWidth > 800 ? threshold : 0.8,
    });

    if (inView) {
        animationControl.start({
            scale: [1, 1.03, 1],
            opacity: 1,
            transition: {
                delay: windowWidth > 800 ? delay : 0,
                duration,
            },
        });
    }

    return (
        <div ref={ref} sx={{ display: 'grid' }}>
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
