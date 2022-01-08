/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenuModal from './MobileMenuModal';

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        handleBodyOverflow(open);
    }, [open]);

    return (
        <AnimatePresence exitBeforeEnter>
            {open ? (
                <MobileMenuModal setOpen={setOpen} />
            ) : (
                <motion.div
                    key="mobileMenu"
                    initial={{ opacity: 0, y: '-500px' }}
                    animate={{
                        opacity: 1,
                        y: '0px',
                        position: 'fixed',
                        top: '20px',
                        width: '100vw',
                        zIndex: '100000',
                        display: 'flex',
                        justifyContent: 'center',
                        transition: {
                            duration: 0.2,
                        },
                    }}
                    exit={{ opacity: 0, y: '-100px' }}
                >
                    <nav
                        sx={{
                            display: ['flex', 'flex', 'none', 'none'],
                            justifyContent: 'space-between',
                            position: 'fixed',
                            width: '90%',
                            backgroundColor: '#fff',
                            padding: '10px 15px',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h1>Mobile Nav</h1>
                        <button onClick={() => setOpen(true)}>open</button>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const handleBodyOverflow = (open) => {
    if (open) {
        setTimeout(
            () => (document.querySelector('#body').style.overflow = 'hidden'),
            450
        );

        return;
    }
    document.querySelector('#body').style.overflow = 'initial';
};

export default MobileNav;
