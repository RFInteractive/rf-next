/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const MobileMenuPortal = ({ children, open, onClose }) => {
    useEffect(() => {
        if (open) {
            setTimeout(
                () =>
                    (document.querySelector('#body').style.overflow = 'hidden'),
                100
            );

            return;
        }
        document.querySelector('#body').style.overflow = 'initial';
    }, [open]);

    return (
        open &&
        createPortal(
            <motion.div
                key="mobileMenu"
                initial={{ opacity: 0, y: '-200px' }}
                animate={{
                    opacity: 1,
                    y: '0px',
                    position: 'fixed',
                    top: '0',
                    bottom: '0',
                    width: '100vw',
                    zIndex: '100000',
                }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.7,
                    type: 'spring',
                    stiffness: 100,
                }}
            >
                <div
                    sx={{
                        position: 'fixed',
                        top: '0px',
                        bottom: '0px',
                        height: '100vh',
                        width: '100%',
                        backgroundColor: 'muted',
                        zIndex: 100000,
                    }}
                >
                    <button onClick={() => onClose()}> close</button>
                    <div>{children}</div>
                </div>
            </motion.div>,
            document.getElementById('mobileMenu')
        )
    );
};

export default MobileMenuPortal;
