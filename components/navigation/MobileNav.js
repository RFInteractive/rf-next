/** @jsxImportSource theme-ui */
import { MenuButton } from 'theme-ui';
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
            {!open ? (
                <MobileMenu setOpen={setOpen} key="mobileMenu" />
            ) : (
                <MobileMenuModal setOpen={setOpen} key="mobileMenuModal" />
            )}
        </AnimatePresence>
    );
};

const MobileMenu = ({ setOpen }) => {
    return (
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
                    alignItems: 'center',
                    position: 'fixed',
                    width: '90%',
                    backgroundColor: '#fff',
                    padding: '10px 15px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1>Mobile Nav</h1>
                <MenuButton
                    aria-label="Toggle Mobile Menu"
                    color={'primaryDark'}
                    onClick={() => setOpen(true)}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                        },
                        '& svg': {
                            height: '32px',
                            width: '32px',
                        },
                    }}
                />
            </nav>
        </motion.div>
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
