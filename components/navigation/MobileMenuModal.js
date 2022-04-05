/** @jsxImportSource theme-ui */
import { Container, Close, Grid } from 'theme-ui';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { navLinks } from '../../lib/navData';
import NavItem from './NavItem';

const MobileMenuModal = ({ setOpen }) => {
    const closeModal = () => {
        document.querySelector('#body').style.overflow = 'initial';
        setTimeout(() => setOpen(false), 200);
    };

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
            exit={{ opacity: 0, y: '-1200px', transition: { duration: 0.3 } }}>
            <div
                sx={{
                    position: 'fixed',
                    top: '0px',
                    bottom: '0px',
                    width: '100vw',
                    padding: '100px 0px 50px',
                    backgroundColor: 'muted',
                    zIndex: 100000,
                    overflowY: 'scroll',
                }}>
                <Close
                    onClick={() => setOpen(false)}
                    size={50}
                    sx={{
                        position: 'absolute',
                        right: '15px',
                        top: '25px',
                    }}
                />
                <ModalNavLogo />
                <Container
                    sx={{ width: '85%', maxWidth: '400px', marginTop: '40px' }}>
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
                                    }}></hr>
                                <MobileLinkGroup
                                    linkGroup={group}
                                    closeModal={closeModal}
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

const MobileLinkGroup = ({ linkGroup, closeModal }) => {
    return navLinks[linkGroup].map((navLink, index, array) => {
        return (
            <div sx={{ my: '10px' }} key={navLink.link} onClick={closeModal}>
                <NavItem
                    link={navLink.link}
                    icon={navLink.icon}
                    heading={navLink.heading}
                    size={'60px'}>
                    {navLink.description}
                </NavItem>
                {index < array.length - 1 && (
                    <hr
                        sx={{
                            borderTop: '1px solid',
                            borderTopColor: 'secondary',
                            opacity: '0.3',
                        }}></hr>
                )}
            </div>
        );
    });
};

const ModalNavLogo = () => {
    return (
        <Link href="/">
            <a
                sx={{
                    position: 'absolute',
                    left: '15px',
                    top: '15px',
                }}>
                <Image
                    src="/images/RankFuse-logo-colored.svg"
                    alt="Rank Fuse Digital Marketing Logo"
                    width={200}
                    height={90}
                />
            </a>
        </Link>
    );
};
