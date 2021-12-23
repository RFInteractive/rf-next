import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionFadeGrow = ({ delay = 0.3, lazy = false, children }) => {
    const { inView, entry, ref } = useInView();
    const animationControl = useAnimation();

    if (inView) {
        animationControl.start({
            scale: 1,
            opacity: 1,
            transition: {
                delay,
            },
        });
    }

    if (lazy) {
        return (
            <div ref={ref}>
                <motion.div
                    initial="hidden"
                    variants={{
                        hidden: {
                            scale: 0.8,
                            opacity: 0,
                        },
                    }}
                    animate={animationControl}
                >
                    {children}
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export default MotionFadeGrow;
