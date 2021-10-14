/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';

import Link from 'next/link';
import Image from 'next/image';

const DesktopNav = () => {
    return (
        <nav
            sx={{
                display: ['none', 'none', 'block', 'block'],
                paddingTop: '8px',
                paddingBottom: '12px',
                px: '30px',
                mt: '10px',
                mb: '-95px',
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
                    <Grid columns={'repeat(5, max-content)'} gap={'25px'}>
                        <Link href="/seo-services">
                            <a sx={{ variant: 'links.navLink' }}>SEO</a>
                        </Link>
                        <Link href="/seo-content">
                            <a sx={{ variant: 'links.navLink' }}>Content</a>
                        </Link>
                        <Link href="/web-design-and-development">
                            <a sx={{ variant: 'links.navLink' }}>
                                Design & Dev
                            </a>
                        </Link>
                        <Link href="/web-design-and-development">
                            <a sx={{ variant: 'links.navLink' }}>Advertising</a>
                        </Link>
                        <Link href="/web-design-and-development">
                            <a sx={{ variant: 'links.navLink' }}>Resources</a>
                        </Link>
                    </Grid>
                    <Link href="/">
                        <a
                            sx={{
                                variant: 'buttons.primary',
                                justifySelf: 'end',
                                px: '26px',
                                py: '8px',
                                fontSize: '18px',
                                fontWeight: '500',
                            }}
                        >
                            Get Started
                        </a>
                    </Link>
                </Grid>
            </Container>
        </nav>
    );
};

export default DesktopNav;
