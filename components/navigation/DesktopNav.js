/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '../../lib/navData';
import NavItem from './NavItem';

const DesktopNav = () => {
    return (
        <nav
            sx={{
                variant: 'navigation.desktopNavWrapper',
                display: ['none', 'none', 'block', 'block'],
                padding: '8px 30px',
                margin: '10px 0px -95px',
                zIndex: '100',
                position: 'relative',
            }}
        >
            <Container sx={{ maxWidth: '1400px' }}>
                <Grid
                    gap={0}
                    columns={[
                        null,
                        null,
                        '.75fr 2.5fr .75fr',
                        '.75fr 2.5fr 1.75fr',
                    ]}
                    sx={{ alignItems: 'center', justifyItems: 'center' }}
                >
                    <DesktopNavLogo />
                    <Grid columns={'repeat(5, max-content)'} gap={'25px'}>
                        <SEODesktopLinks />
                        <ContentDesktopLinks />
                        <WebDevDesktopLinks />
                        <AdvertisingDesktopLinks />
                        <ResourceDesktopLinks />
                    </Grid>
                    <Link href="/">
                        <a id="navCTABtn">Get Started</a>
                    </Link>
                </Grid>
            </Container>
        </nav>
    );
};

const DesktopNavLogo = () => {
    return (
        <Link href="/">
            <a sx={{ justifySelf: 'start', cursor: 'pointer' }}>
                <Image
                    src="/images/placeholder-logo.svg"
                    alt="Rank Fuse Digital Marketing Logo"
                    width={208}
                    height={54}
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
            <div
                className="desktopNavDropdownContainer"
                sx={{
                    variant: 'navigation.desktopNavDropdownContainer',
                }}
            >
                {navLinks.seoNavLinks.map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}
                        >
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
            <div
                className="desktopNavDropdownContainer"
                sx={{
                    variant: 'navigation.desktopNavDropdownContainer',
                }}
            >
                {navLinks.contentNavLinks.map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}
                        >
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
            <div
                className="desktopNavDropdownContainer"
                sx={{
                    variant: 'navigation.desktopNavDropdownContainer',
                }}
            >
                {navLinks.webDevNavLinks.map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}
                        >
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
            <div
                className="desktopNavDropdownContainer"
                sx={{
                    variant: 'navigation.desktopNavDropdownContainer',
                }}
            >
                {navLinks.advertisingNavLinks.map((navLink) => {
                    return (
                        <NavItem
                            link={navLink.link}
                            icon={navLink.icon}
                            heading={navLink.heading}
                            key={navLink.link}
                        >
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
        </div>
    );
};

export default DesktopNav;
