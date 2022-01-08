/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';

const MobileMenuModal = ({ setOpen }) => {
    return (
        <motion.div
            key="mobileMenuModal"
            initial={{ opacity: 0, y: '-1200px' }}
            animate={{
                opacity: 1,
                y: '0px',
                position: 'fixed',
                top: '0',
                bottom: '0',
                width: '100vw',
                zIndex: '100000',
                transition: {
                    duration: 0.3,
                },
            }}
            exit={{ opacity: 0, y: '-1200px', transition: { duration: 0.3 } }}
        >
            <div
                sx={{
                    position: 'fixed',
                    top: '0px',
                    bottom: '0px',
                    width: '100vw',
                    backgroundColor: 'muted',
                    zIndex: 100000,
                }}
            >
                <p>Hello dere</p>
                <button onClick={() => setOpen(false)}>close de modal</button>
            </div>
        </motion.div>
    );
};

export default MobileMenuModal;
