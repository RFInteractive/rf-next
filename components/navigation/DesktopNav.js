/** @jsxImportSource theme-ui */
import { Container, Grid, Button } from 'theme-ui';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { navLinks } from '../../lib/navData';
import NavItem from './NavItem';

import GeneralMultiStepFormPortal from '../portals/GeneralMultiStepFormPortal';
import GeneralMultiStep from '../../components/forms/GeneralMultiStep/GeneralMultiStep';
import { AnimatePresence } from 'framer-motion';

const DesktopNav = () => {
    const [formModalOpen, setFormModalOpen] = useState(false);

    return (
        <nav
            sx={{
                variant: 'navigation.desktopNavWrapper',
                display: ['none', 'none', 'block', 'block'],
                padding: '8px 30px',
                margin: '10px 0px -115px',
                zIndex: '100',
                position: 'relative',
            }}
            data-cy="DesktopNav">
            <Container sx={{ maxWidth: '1400px' }}>
                <Grid
                    gap={0}
                    columns={[
                        null,
                        null,
                        '.75fr 2.5fr .75fr',
                        '.75fr 2.5fr 1.75fr',
                    ]}
                    sx={{ alignItems: 'center', justifyItems: 'center' }}>
                    <DesktopNavLogo />
                    <Grid columns={'repeat(5, max-content)'} gap={'25px'}>
                        <SEODesktopLinks />
                        <ContentDesktopLinks />
                        <WebDevDesktopLinks />
                        <AdvertisingDesktopLinks />
                        <ResourceDesktopLinks />
                    </Grid>
                    <Button
                        id="navCTABtn"
                        onClick={() => setFormModalOpen(true)}
                        data-cy="navCTABtn">
                        Get Started
                    </Button>
                    <AnimatePresence exitBeforeEnter>
                        <GeneralMultiStepFormPortal
                            key="multiStepFormModal"
                            open={formModalOpen}
                            onClose={() => setFormModalOpen(false)}>
                            <GeneralMultiStep />
                        </GeneralMultiStepFormPortal>
                    </AnimatePresence>
                </Grid>
            </Container>
        </nav>
    );
};

export default DesktopNav;

const DesktopNavLogo = () => {
    return (
        <Link href="/">
            <a sx={{ justifySelf: 'start', cursor: 'pointer' }}>
                <Image
                    src="/images/RankFuse-logo-white.svg"
                    alt="Rank Fuse Digital Marketing Logo"
                    width={300}
                    height={90}
                />
            </a>
        </Link>
    );
};

const SEODesktopLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/seo-services">
                <a className="desktopNavLink">SEO</a>
            </Link>
            <div className="desktopNavDropdownContainer">
                {navLinks['SEO'].map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}>
                            {navLink.description}
                        </NavItem>
                    );
                })}
            </div>
        </div>
    );
};

const ContentDesktopLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/seo-content">
                <a className="desktopNavLink">Content</a>
            </Link>
            <div className="desktopNavDropdownContainer">
                {navLinks['Content'].map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}>
                            {navLink.description}
                        </NavItem>
                    );
                })}
            </div>
        </div>
    );
};

const WebDevDesktopLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/web-design-and-development">
                <a className="desktopNavLink">Design & Dev</a>
            </Link>
            <div className="desktopNavDropdownContainer">
                {navLinks['Web_Design_and_Dev'].map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}>
                            {navLink.description}
                        </NavItem>
                    );
                })}
            </div>
        </div>
    );
};

const AdvertisingDesktopLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/programmatic-advertising">
                <a className="desktopNavLink">Advertising</a>
            </Link>
            <div className="desktopNavDropdownContainer">
                {navLinks['Advertising'].map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}>
                            {navLink.description}
                        </NavItem>
                    );
                })}
            </div>
        </div>
    );
};

const ResourceDesktopLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/web-design-and-development">
                <a className="desktopNavLink">Resources</a>
            </Link>
            <div className="desktopNavDropdownContainer">
                {navLinks['Resources'].map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}>
                            {navLink.description}
                        </NavItem>
                    );
                })}
            </div>
        </div>
    );
};
