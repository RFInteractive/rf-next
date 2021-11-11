/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';

import Link from 'next/link';
import Image from 'next/image';

const DesktopNav = () => {
    return (
        <nav
            sx={{
                variant: 'navigation.desktopNavWrapper',
                display: ['none', 'none', 'block', 'block'],
                paddingY: '8px 30px',
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
                        <SEONavLinks />
                        <ContentNavLinks />
                        <WebDevNavLinks />
                        <AdvertisingLinks />
                        <ResourcesLinks />
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

const SEONavLinks = () => {
    return (
        <div className="desktopNavLinkContainer" sx={{ position: 'relative' }}>
            <Link href="/seo-services">
                <a className="desktopNavLink">SEO</a>
            </Link>
            <div
                className="desktopNavDropdownContainer"
                sx={{
                    variant: 'navigation.desktopNavDropdownWrapper',
                }}
            >
                <p>SEO Services</p>
                <p>Off-Page SEO</p>
                <p>On-Page SEO</p>
                <p>Analytics & Reporting</p>
            </div>
        </div>
    );
};

const ContentNavLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/seo-content">
                <a className="desktopNavLink">Content</a>
            </Link>
        </div>
    );
};

const WebDevNavLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/web-design-and-development">
                <a className="desktopNavLink">Design & Dev</a>
            </Link>
        </div>
    );
};

const AdvertisingLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/web-design-and-development">
                <a className="desktopNavLink">Advertising</a>
            </Link>
        </div>
    );
};

const ResourcesLinks = () => {
    return (
        <div className="desktopNavLinkContainer">
            <Link href="/web-design-and-development">
                <a className="desktopNavLink">Resources</a>
            </Link>
        </div>
    );
};

export default DesktopNav;
