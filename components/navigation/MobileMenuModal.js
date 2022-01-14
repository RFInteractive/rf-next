/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui';
import { motion } from 'framer-motion';

import { navLinks } from '../../lib/navData';
import NavItem from './NavItem';

const MobileMenuModal = ({ setOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: '-1200px' }}
            animate={{
                opacity: 1,
                y: '0px',
                position: 'fixed',
                top: '0',
                bottom: '0',
                width: '100vw',
                height: '100vh',
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
                    paddingBottom: '50px',
                    backgroundColor: 'muted',
                    zIndex: 100000,
                    overflowY: 'scroll',
                }}
            >
                <p>Hello dere</p>
                <button onClick={() => setOpen(false)}>close de modal</button>

                <Container sx={{ width: '80%', maxWidth: '400px' }}>
                    {Object.keys(navLinks).map((group) => {
                        return (
                            <div sx={{ mb: '25px' }} key={group}>
                                <h4 sx={{ mb: '15px' }}>
                                    {group.split('_').join(' ')}
                                </h4>
                                <hr
                                    sx={{
                                        borderTop: '1px solid',
                                        borderTopColor: 'secondary',
                                        opacity: '0.3',
                                    }}
                                ></hr>
                                <MobileLinkGroup
                                    linkGroup={group}
                                    setOpen={setOpen}
                                />
                            </div>
                        );
                    })}
                </Container>
            </div>
        </motion.div>
    );
};

export default MobileMenuModal;

const MobileLinkGroup = ({ linkGroup, setOpen }) => {
    const closeModal = () => {
        document.querySelector('#body').style.overflow = 'initial';
        setTimeout(() => setOpen(false), 200);
    };

    return navLinks[linkGroup].map((navLink, index, array) => {
        return (
            <div sx={{ my: '10px' }} key={navLink.link} onClick={closeModal}>
                <NavItem
                    link={navLink.link}
                    icon={navLink.icon}
                    heading={navLink.heading}
                    size={'52px'}
                >
                    {navLink.description}
                </NavItem>
                {index < array.length - 1 && (
                    <hr
                        sx={{
                            borderTop: '1px solid',
                            borderTopColor: 'secondary',
                            opacity: '0.3',
                        }}
                    ></hr>
                )}
            </div>
        );
    });
};
