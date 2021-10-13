/** @jsxImportSource theme-ui */
import { Container, Grid, Flex } from 'theme-ui';

import Link from 'next/link';

const DesktopNav = () => {
    return (
        <nav
            sx={{
                display: ['none', 'none', 'block', 'block'],
                py: '12px',
                px: '30px',
                mb: '-77px',
                zIndex: '100',
                position: 'relative',
            }}
        >
            <Container sx={{ maxWidth: '1440px' }}>
                <Grid
                    gap={0}
                    columns={[
                        null,
                        null,
                        '.75fr 2.5fr 1fr',
                        '.75fr 2.5fr 1.75fr',
                    ]}
                    sx={{ alignItems: 'center', justifyItems: 'center' }}
                >
                    <h1 sx={{ color: '#fff', justifySelf: 'start' }}>Logo</h1>
                    <Grid columns={'repeat(5, max-content)'} gap={'50px'}>
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
