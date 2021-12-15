/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import Link from 'next/link';
import Image from 'next/image';

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
                <NavItem link="/seo-services" icon="seo" heading="SEO Services">
                    Our SEO services can help get you where you need to be
                </NavItem>
                <NavItem
                    link="/seo-services/#onPageSEO"
                    icon="onPageSEO"
                    heading="On-Page SEO"
                >
                    Optimize HTML elements like title tags, meta descriptions,
                    and more
                </NavItem>
                <NavItem
                    link="/seo-services/#offPageSEO"
                    icon="offPageSEO"
                    heading="Off-Page SEO"
                >
                    Going beyond your website to enhance the perception of your
                    brand
                </NavItem>
                <NavItem
                    link="/seo-services/#localSEO"
                    icon="localSEO"
                    heading="Local SEO"
                >
                    Increase your business&apos;s visibility when it comes to
                    local search results
                </NavItem>
                <NavItem
                    link="/seo-services/#analyticsReporting"
                    icon="analytics"
                    heading="Analytics & Reporting"
                >
                    Get valuable insights into how your website & SEO efforts
                    are performing
                </NavItem>
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
            <div
                className="desktopNavDropdownContainer"
                sx={{
                    variant: 'navigation.desktopNavDropdownContainer',
                }}
            >
                <NavItem
                    link="/seo-content"
                    icon="notepad"
                    heading="Content Services"
                >
                    Organically improve your rankings in search engines using
                    proven research
                </NavItem>
                <NavItem
                    link="/seo-content/#contentStrategy"
                    icon="checklist"
                    heading="Content Stategy"
                >
                    Our strategists provide you with a detailed analysis of your
                    site content
                </NavItem>
                <NavItem
                    link="/seo-content/#contentDevelopment"
                    icon="desktopWriting"
                    heading="Content Development"
                >
                    Going beyond your website to enhance the perception of your
                    brand
                </NavItem>
                <NavItem
                    link="/seo-content/#keywordResearch"
                    icon="scatterChart"
                    heading="Keyword Research"
                >
                    Lean on our keyword research to outrank your competitors
                </NavItem>
            </div>
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
