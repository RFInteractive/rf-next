import { motion } from 'framer-motion';

const Step = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            {children}
        </motion.div>
    );
};

export default Step;