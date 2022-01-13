/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui';
import { motion } from 'framer-motion';

import { navLinks } from '../../lib/navData';
import NavItem from './NavItem';

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
                    overflow: 'scroll',
                }}
            >
                <p>Hello dere</p>
                <button onClick={() => setOpen(false)}>close de modal</button>

                <Container sx={{ width: '90%', maxWidth: '400px' }}>
                    {navLinks.seoNavLinks.map((navLink) => {
                        return (
                            <div sx={{ my: '10px' }} key={navLink.link}>
                                <NavItem
                                    link={navLink.link}
                                    icon={navLink.icon}
                                    heading={navLink.heading}
                                >
                                    {navLink.description}
                                </NavItem>
                                <hr></hr>
                            </div>
                        );
                    })}
                </Container>
            </div>
        </motion.div>
    );
};

export default MobileMenuModal;
